// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Notification from './Components/Notification/Notification';
import LandingPage from './Components/Landing_Page/LandingPage';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';
import ReviewForm from './Components/ReviewForm/ReviewForm'
import ProfileForm from './Components/ProfileForm/ProfileForm';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Notification>

          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/Sign_Up" element={<Sign_Up/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/search/doctors/" element={<BookingConsultation/>}/>
            <Route path="/reviews" element={<ReviewForm/>}/>
            <Route path="/profile" element={<ProfileForm/>}/>
            <Route path="/reports" element={<ReportsLayout/>}/>
          </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;