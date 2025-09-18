export default function PatientModal({ patient, onClose }) {
  if (!patient) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose}>×</button>
        <h2>{patient.name}</h2>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Email:</strong> {patient.email}</p>
        <p><strong>Contact:</strong> {patient.phone}</p>
        <p><strong>Address:</strong> {patient.address?.street}, {patient.address?.city}</p>
        <p><strong>Company:</strong> {patient.company?.name}</p>
      </div>
    </div>
  );
}
