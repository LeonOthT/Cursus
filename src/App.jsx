// src/App.js
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage/Homepage';
import HomepageSidebar from './components/HomepageSidebar'; // Use the specific sidebar for homepage
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TopNav from './components/TopNav';
import LiveStreams from './pages/Homepage/LiveStreams';

function MainLayout({ children, sidebar }) {
  return (
    <div className="flex min-h-screen">
      {sidebar}
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

      {/* Homepage with its own sidebar */}
      <Route
        path="/homepage"
        element={
          <MainLayout sidebar={<HomepageSidebar />}>
            <Homepage />
          </MainLayout>
        }
      />

       {/* Homepage with its own sidebar */}
       <Route
        path="/live-streams"
        element={
          <MainLayout sidebar={<HomepageSidebar />}>
            <LiveStreams />
          </MainLayout>
        }
      />

      {/* Unified Dashboard for All Roles */}
      <Route
        path="/dashboard"
        element={
          <MainLayout sidebar={<Sidebar />}>
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
