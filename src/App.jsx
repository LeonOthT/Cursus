// src/App.js
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import InstructorDashboard from './pages/Instructor/Dashboard';
import StudentDashboard from './pages/Student/Dashboard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TopNav from './components/TopNav';

// Layout component for pages with Sidebar, TopNav, and Footer
function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        {/* Top Navigation Bar */}
        <TopNav />
        
        {/* Main content area */}
        <div className="flex-grow p-4">{children}</div>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Login page without Sidebar, TopNav, and Footer */}
      <Route path="/login" element={<Login />} />

      {/* Instructor Dashboard with MainLayout */}
      <Route
        path="/instructor/dashboard"
        element={
          <MainLayout>
            <InstructorDashboard />
          </MainLayout>
        }
      />
      
      {/* Student Dashboard with MainLayout */}
      <Route
        path="/student/dashboard"
        element={
          <MainLayout>
            <StudentDashboard />
          </MainLayout>
        }
      />

      {/* Default redirect to login page */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
