function PatientTable({patient}){

    return (
            <tr>
                <td>{patient.patientId}</td>
                <td>{patient.patientName}</td>
                <td>{patient.patientGender}</td>
                <td>{patient.patientAge}</td>
                <td>{patient.patientRequirements}</td>
                <td>{patient.patientAllergies}</td>
                <td>{patient.patientNotes}</td>
            </tr>       
      );
}
export default PatientTable;
