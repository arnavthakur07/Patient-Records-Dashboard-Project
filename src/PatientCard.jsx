export default function PatientCard({ patient, onView }) {
return (
<div className="card">
<h3>{patient.name}</h3>
<p><strong>Age:</strong> {patient.age}</p>
<p><strong>Contact:</strong> {patient.phone}</p>
<button onClick={() => onView(patient)}>View Details</button>
</div>
)
}