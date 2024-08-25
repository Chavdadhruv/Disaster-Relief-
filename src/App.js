// src/App.js

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ChatbotWidget from './components/ChatbotWidget';
import Footer from './components/Navigation/Footer';
import NavbarComponent from './components/Navigation/Navbar';
import DisasterManagement from './pages/DisasterManagement';
import DisasterReporting from './pages/DisasterReporting';
import Donations from './pages/Donations';
import EmergencyContacts from './pages/EmergencyContacts';
import Home from './pages/Home';
import Messages from './pages/Messages';
import News from './pages/News';
import Resources from './pages/Resources';
import UserLogin from './pages/UserLogin';
import UserRegistration from './pages/UserRegistration';
import Volunteers from './pages/Volunteers';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/report-disaster" element={<DisasterReporting />} />
          <Route path="/manage-disasters" element={<DisasterManagement />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/news" element={<News />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        </Routes>
        <ChatbotWidget />

      </div>
      <Footer />
    </Router>
  );
}

export default App;
