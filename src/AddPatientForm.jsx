import { useState } from "react";

const randomAge = () => Math.floor(Math.random() * 60) + 20;

export default function AddPatientForm({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");


  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({
      id: Date.now(),
      name: name.trim(),
      age: age || randomAge(),
      phone: phone || "N/A",
      address: address || "N/A",
      company: company || "N/A",
    });
    setName("");
    setAge("");
    setPhone("");
    setAddress("");
    setCompany("");
  };

  return (
    <form className="add-form" onSubmit={submit}>
      <h3>Add New Patient</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" required/>
      <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age (number)" type="number" min="0" />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" type="tel"/>
       <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
        <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
      <button type="submit">Add Patient</button>
    </form>
  );
}
