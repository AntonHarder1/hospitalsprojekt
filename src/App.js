import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import HospitalImg from './Assets/hospi.jpg'
import AlarmsImport from './components/Alarm/alarmsImport';
import EmployeeImport from './components/Employee/employeeImport';
import PatientImport from './components/Patient/patientsImport';

function App() {
    return (
      <div>
        <div className="jumbotron pb-3 pt-3">
          <div className="navbar navbar-expand-lg">
            <nav className="nav navbar-nav">    
              <Link to='/' className="nav-item nav-link">Home</Link>
              <Link to='/alarm' className="nav-item nav-link">Alarms</Link>
              <Link to='/patient' className="nav-item nav-link">Patient</Link>
              <Link to='/employee' className="nav-item nav-link">Employees</Link>
            </nav>
          </div>
            <span className='h1'>Hospital Alarm System <img classname="rounded" src={HospitalImg}></img> </span>
        <span className="d-flex justify-content-between p-0">This small App demonstrates React, Redux-Toolkit, RTK Query and React-Router</span>
          </div>
          <Routes>
              <Route path='/' element={<Home/>} />  
              <Route path='/alarm' element={<AlarmsImport/>} />  
              <Route path='/patient' element={<EmployeeImport/>} />  
              <Route path='/employee' element={<PatientImport/>} />  
          </Routes>
      </div>
    );
  }
  export default App;
