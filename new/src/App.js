
import NavBar from "./component/Navbar/NavBar"

import { Route, Routes } from 'react-router-dom';

import Admin from "./component/AdminSidebar/Admin";
import SideBar from "./component/SideBar/Sidebar";
import { useAuth0 } from "@auth0/auth0-react";
// import Profile from "./component/profile/Profile";
import Employee from "./component/Table/Employee";
import Department from "./component/Table/Department";
// import Login from "./component/BtnComponent/Login";

import Login from "./component/login/Login";

import Profile from "./component/user/Profile";
import Body from "./component/body/Body";
import SalesNav from "./component/SalesOptions/SalesNav";
import Salesenq from "./component/SalesOptions/SalesDash";
import Dummy from "./component/SalesOptions/Dummy";
import ManagerDash from "./component/ManagerOptions/ManagerDash";
import Rfp from "./component/SalesOptions/rfp/Rfp";
import Rfpsales from "./component/SalesOptions/rfp/Rfpsales";
import SalesDash from "./component/SalesOptions/SalesDash";



function App() {

  return (

    <div  >
      {/* <Body /> */}
       <NavBar />
      {/* <Salesenq />  */}
    
{/* <Profile/> */}

        <>
          <div style={{ display: "flex", justifyContent: "space-around" }}>

            <Routes>

              <Route exact path="/" element={<Login />} />
              <Route exact path="/Rfp" element={<Rfp />} />
              
              <Route exact path="/Rfpsales" element={<Rfpsales />} />
              <Route path="/salesdash" element={<SalesDash/> }/>
              <Route path="/sidebar" element={<SideBar/> }/>
              <Route exact path="/managerDash" element={<ManagerDash />} />
              <Route exact path="/Dummy" element={<Dummy />} />
              


            </Routes>


          </div>


        </>

      {/* )} */}
    </div>
  )
}

export default App
