import { useFetchHospitalAlarmsQuery } from "../../store";
import AlarmTable from "./alarmTable"

function FetchHospitalAlarms() {                                  
  const {data, error, isFetching } = useFetchHospitalAlarmsQuery();  

let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading alarms.</div>;
  } else {
    console.log("content")
    content = data.map((alarm) => {
      return (
        <AlarmTable key={alarm.deviceId} alarm={alarm}></AlarmTable>
      )
    });
  } 
    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
       <div>
            <table  class="table table-striped">
                <thead>
                    <tr>
                        <th>DeviceId</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>PatientId</th>
                        <th>RoomNumber</th>
                        <th>ServiceMessage</th>
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
export default FetchHospitalAlarms;