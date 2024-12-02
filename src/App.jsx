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
import InstructorCourses from './pages/Instructor/Courses';
import StudentPurchasedCourses from './pages/Student/PurchasedCourses';
import ExplorePage from './pages/Homepage/Explore';
import Analytics from './pages/Instructor/Analytics';
import InstructorAnalytics from './pages/Instructor/Analytics';

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
      <Route
        path="/explore"
        element={
          <MainLayout sidebar={<HomepageSidebar />}>
            <ExplorePage />
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

      <Route
        path="/instructor/courses"
        element={
          <MainLayout sidebar={<Sidebar role="instructor" />}>
            <InstructorCourses />
          </MainLayout>
        }
      />

<Route
        path="/instructor/analytics"
        element={
          <MainLayout sidebar={<Sidebar role="instructor" />}>
            <InstructorAnalytics />
          </MainLayout>
        }
      />
      <Route
        path="/student/purchased-courses"
        element={
          <MainLayout sidebar={<Sidebar role="student" />}>
            <StudentPurchasedCourses />
          </MainLayout>
        }
      />


      {/* Default Redirect */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
