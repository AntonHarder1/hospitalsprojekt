import { useFetchHospitalPatientsQuery } from "../../store/";
import PatientTable from "./patientTable"

function FetchHospitalPatients() {                                  
  const {data, error, isFetching } = useFetchHospitalPatientsQuery();  

let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading employees.</div>;
  } else {
    content = data.map((patient) => {
      return (
        <PatientTable key={patient.patientId} patient={patient}></PatientTable>
      )
    });
  } 
    return (
   
       <div>
            <table  class="table table-striped">
                <thead>
                    <tr>
                        <th>PatientId</th>
                        <th>PatientName</th>
                        <th>PatientGender</th>
                        <th>PatientAge</th>
                        <th>PatientRequirements</th>
                        <th>PatientAllergies</th>
                        <th>PatientNotes</th>
                    </tr>
                </thead>
                <tbody>

                      {content}

                </tbody>

            </table>
        </div>
    
  );
}
export default FetchHospitalPatients;