// import './App.css';
import Signup from './Components/Signup/signup';
import Login from './Components/Login/login';
import Main from './Components/MainPage/mainpage';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Admin from './Components/AdminHome/admin';
import User from './Components/UserHome/user';
import Upload from './Components/UploadNotes/upload';
import ViewAllnotes from './Components/ViewAllnotes/viewallnotes';
import Mynotes from './Components/MyNotes/mynotes';
import AcceptNotes from './Components/AcceptNotes/acceptnotes';
import RejectNotes from './Components/RejectNotes/rejectnotes';
import PendingNotes from './Components/PendingNotes/pendingnotes';
import AllNotes from './Components/AllNotes/allnotes';
import ViewUsers from './Components/ViewUsers/viewusers';
import Status from './Components/AssignStatus/status';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/upload" element={<Upload />} />
          <Route exact path="/viewallnotes" element={<ViewAllnotes />} />
          <Route exact path="/mynotes" element={<Mynotes />} />
          <Route exact path="/acceptnotes" element={<AcceptNotes />} />
          <Route exact path="/rejectnotes" element={<RejectNotes />} />
          <Route exact path="/pendingnotes" element={<PendingNotes />} />
          <Route exact path="/allnotes" element={<AllNotes />} />
          <Route exact path="/viewusers" element={<ViewUsers />} />
          <Route exact path="/status/:noteId" element={<Status />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
