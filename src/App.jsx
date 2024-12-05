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
import InstructorAnalytics from './pages/Instructor/Analytics';
import Earnings from './pages/Instructor/Earning';
import CreateCourse from './pages/Instructor/CreatCourse';
import Messages from './pages/Instructor/Messages';
import Notifications from './pages/Instructor/Notifications';
import MyCertificates from './pages/Instructor/MyCertificates';
import Reviews from './pages/Instructor/Reviews';
import Payout from './pages/Instructor/Payout';
import Statements from './pages/Instructor/Statements';
import Verification from './pages/Instructor/Verification';
import Settings from './pages/Instructor/Settings';
import SendFeedback from './pages/Instructor/SendFeedback';
import Credit from './pages/Student/Credit';
import Categories from './pages/Homepage/Categories';
import Tests from './pages/Homepage/Tests';
import SavedCourses from './pages/Homepage/SavedCourses';
import Pages from './pages/Homepage/Pages';
import BrowseInstructors from './pages/Homepage/BrowseInstructors';
import Help from './pages/Homepage/Help';
import ReportHistory from './pages/Homepage/ReportHistory';

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

      <Route
        path="/categories"
        element={
          <MainLayout sidebar={<HomepageSidebar />}>
            <Categories />
          </MainLayout>
        }
      />

      <Route
        path="/tests"
        element={
          <MainLayout sidebar={<HomepageSidebar />}>
            <Tests />
          </MainLayout>
        }
      />
      <Route
        path="/saved-courses"
        element={
          <MainLayout sidebar={<HomepageSidebar />}>
            <SavedCourses />
          </MainLayout>
        }
      />
       <Route
        path="/pages"
        element={
          <MainLayout sidebar={<HomepageSidebar />}>
            <Pages />
          </MainLayout>
        }
      />
         <Route
        path="/instructors"
        element={
          <MainLayout sidebar={<HomepageSidebar />}>
            <BrowseInstructors />
          </MainLayout>
        }
      />
 <Route
        path="/settings"
        element={
          <MainLayout sidebar={<HomepageSidebar />}>
            <Settings />
          </MainLayout>
        }
      />
 <Route
        path="/help"
        element={
          <MainLayout sidebar={<HomepageSidebar />}>
            <Help />
          </MainLayout>
        }
      />
 <Route
        path="/report-history"
        element={
          <MainLayout sidebar={<HomepageSidebar />}>
            <ReportHistory />
          </MainLayout>
        }
      />
 <Route
        path="/feedback"
        element={
          <MainLayout sidebar={<HomepageSidebar />}>
            <SendFeedback />
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
        path="/instructor/earnings"
        element={
          <MainLayout sidebar={<Sidebar role="instructor" />}>
            <Earnings />
          </MainLayout>
        }
      />

      <Route
        path="/instructor/create-course"
        element={
          <MainLayout sidebar={<Sidebar role="instructor" />}>
            <CreateCourse />
          </MainLayout>
        }
      />

      {/* Messages Page */}
      <Route
        path="/instructor/messages"
        element={
          <MainLayout sidebar={<Sidebar role="instructor" />}>
            <Messages />
          </MainLayout>
        }
      />
      {/* Notifications Page */}
      <Route
        path="/instructor/notifications"
        element={
          <MainLayout sidebar={<Sidebar role="instructor" />}>
            <Notifications />
          </MainLayout>
        }
      />
      {/* My Certificates Page */}
      <Route
        path="/instructor/certificates"
        element={
          <MainLayout sidebar={<Sidebar role="instructor" />}>
            <MyCertificates />
          </MainLayout>
        }
      />
      {/* Reviews Page */}
      <Route
        path="/instructor/reviews"
        element={
          <MainLayout sidebar={<Sidebar role="instructor" />}>
            <Reviews />
          </MainLayout>
        }
      />
      {/* Payout Page */}
      <Route
        path="/instructor/payout"
        element={
          <MainLayout sidebar={<Sidebar role="instructor" />}>
            <Payout />
          </MainLayout>
        }
      />
      {/* Statements Page */}
      <Route
        path="/instructor/statements"
        element={
          <MainLayout sidebar={<Sidebar role="instructor" />}>
            <Statements />
          </MainLayout>
        }
      />
      {/* Verification Page */}
      <Route
        path="/instructor/verification"
        element={
          <MainLayout sidebar={<Sidebar role="instructor" />}>
            <Verification />
          </MainLayout>
        }
      />
      {/* Settings Page */}
      <Route
        path="/instructor/settings"
        element={
          <MainLayout sidebar={<Sidebar role="instructor" />}>
            <Settings />
          </MainLayout>
        }
      />
      {/* Feedback Page */}
      <Route
        path="/instructor/feedback"
        element={
          <MainLayout sidebar={<Sidebar role="instructor" />}>
            <SendFeedback />
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

      <Route
        path="/student/certificates"
        element={
          <MainLayout sidebar={<Sidebar role="student" />}>
            <MyCertificates />
          </MainLayout>
        }
      />

      <Route
        path="/student/notifications"
        element={
          <MainLayout sidebar={<Sidebar role="student" />}>
            <Notifications />
          </MainLayout>
        }
      />

      <Route
        path="/student/feedback"
        element={
          <MainLayout sidebar={<Sidebar role="student" />}>
            <SendFeedback />
          </MainLayout>
        }
      />

      <Route
        path="/student/reviews"
        element={
          <MainLayout sidebar={<Sidebar role="student" />}>
            <Reviews />
          </MainLayout>
        }
      />
      <Route
        path="/student/settings"
        element={
          <MainLayout sidebar={<Sidebar role="student" />}>
            <Settings />
          </MainLayout>
        }
      />

      <Route
        path="/student/credits"
        element={
          <MainLayout sidebar={<Sidebar role="student" />}>
            <Credit />
          </MainLayout>
        }
      />
      <Route
        path="/student/statements"
        element={
          <MainLayout sidebar={<Sidebar role="student" />}>
            <Statements />
          </MainLayout>
        }
      />

      {/* Default Redirect */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
