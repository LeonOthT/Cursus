// src/App.js
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // Unified Dashboard
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TopNav from './components/TopNav';

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <TopNav />
        <div className="flex-grow p-4">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/login" element={<Login />} />

      {/* Unified Dashboard for All Roles */}
      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

      {/* Default Redirect */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
