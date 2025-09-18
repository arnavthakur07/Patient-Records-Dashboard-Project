import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PatientCard from "./PatientCard";
import PatientModal from "./PatientModal";
import AddPatientForm from "./AddPatientForm";

const randomAge = () => Math.floor(Math.random() * 60) + 20;

export default function ResultApp() {
  const [patients, setPatients] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPatients() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        const mapped = data.map((u) => ({ ...u, age: randomAge() }));
        setPatients(mapped);
      } catch (err) {
        console.error(err);
        setError("Failed to load patients. Try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchPatients();
  }, []);

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const addPatient = (p) => setPatients((prev) => [p, ...prev]);

  return (
    <div>
      <Navbar />
      <main className="container">
        <section id="home" className="hero">
          <h2>Welcome to Jarurat Care</h2>
          <p>Simple patient records dashboard built with React.</p>
        </section>

        <section id="patients" className="patients-section">
          <div className="patients-header">
            <h2>Patients</h2>
            <div className="controls">
              <input
                placeholder="Search by name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="patients-grid">
            {loading && <div className="status">Loading patients...</div>}
            {error && <div className="status error">{error}</div>}
            {!loading && !error && filtered.length === 0 && (
              <div className="status">No patients found.</div>
            )}

            {filtered.map((patient) => (
              <PatientCard key={patient.id} patient={patient} onView={setSelected} />
            ))}
          </div>

          <AddPatientForm onAdd={addPatient} />
        </section>

        <section id="about" className="about">
          <h2>About</h2>
          <p>This demo demonstrates React state management, API integration, search and modal UI.</p>
        </section>
      </main>

      <PatientModal patient={selected} onClose={() => setSelected(null)} />

      <footer className="footer">
        <div className="container">© Jarurat Care — Demo App</div>
      </footer>
    </div>
  );
}
