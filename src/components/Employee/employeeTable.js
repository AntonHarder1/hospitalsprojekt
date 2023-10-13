function EmployeeTable({employee}){

    return (
            <tr>
                <td>{employee.employeeId}</td>
                <td>{employee.employeeName}</td>
                <td>{employee.employeeInitials}</td>
                <td>{employee.employeeOccupation}</td>
                <td>{employee.employeeGender}</td>
            </tr>       
      );
}
export default EmployeeTable;
