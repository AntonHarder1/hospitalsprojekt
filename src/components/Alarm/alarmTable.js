function AlarmTable({alarm}){

    return (
            <tr>
                <td>{alarm.deviceId}</td>
                <td>{alarm.name}</td>
                <td>{alarm.status}</td>
                <td>{alarm.patientId}</td>
                <td>{alarm.roomNumber}</td>
                <td>{alarm.serviceMessage}</td>
            </tr>       
      );
}
export default AlarmTable;
