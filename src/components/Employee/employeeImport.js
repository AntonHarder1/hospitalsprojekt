import { useFetchHospitalEmployeesQuery } from "../../store";
import EmployeeTable from "./employeeTable"

function FetchHospitalEmployees() {                                  
  const {data, error, isFetching } = useFetchHospitalEmployeesQuery();  

let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading employees.</div>;
  } else {
    content = data.map((employee) => {
      return (
        <EmployeeTable key={employee.employeeId} employee={employee}></EmployeeTable>
      )
    });
  } 
    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
       <div>
            <table  class="table table-striped">
                <thead>
                    <tr>
                        <th>EmployeeId</th>
                        <th>EmployeeName</th>
                        <th>EmployeeInitials</th>
                        <th>EmployeeOccupation</th>
                        <th>EmployeeGender</th>
                    </tr>
                </thead>
                <tbody>

                      {content}

                </tbody>

            </table>
        </div>
    </div>
  );
}
export default FetchHospitalEmployees;