import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { NavigationBar } from './components/NavigationBar';
import { Login } from './components/Login';
import { Footer } from './components/Footer';
import { RegistrationUser } from './components/RegistrationUser';
import { RegistrationOwner } from './components/RegistrationOwner';
import { OwnerData } from './components/OwnerData';
import { OwnderAdmin, OwnerAdmin } from './components/OwnerAdmin';
import { Dashboard } from './components/DashBoard';
import { ContactUs } from './components/ContactUs';
import { Host } from './components/Host';
import { UserView } from './components/UserView';



function App() {
  return (
    
 <BrowserRouter>
 <NavigationBar></NavigationBar>
 <Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path="/login" element={<Login></Login>}></Route>
  <Route path="/registrationuser" element={<RegistrationUser></RegistrationUser>}></Route>
  <Route path="/registrationowner" element={<RegistrationOwner></RegistrationOwner>}></Route>
  <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
  <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
  <Route path="/host" element={<Host></Host>}></Route>
  <Route path="/userview" element={<UserView></UserView>}></Route>
 </Routes>
 <Footer></Footer>
 </BrowserRouter>
  );
}

export default App;
