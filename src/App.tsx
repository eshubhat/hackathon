import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes";
import Login from "./page/auth/Login";
import ParentLogin from "./page/auth/ParentLogin";
import NotFound from "./page/Notfound";
import Landing from "./page/Landing";
import AdminLanding from "./page/Admin/AdminLanding";
import AdminStudent from "./page/Admin/AdminStudent";
import AdminDepartment from "./page/Admin/AdminDepartment";
import AdminTeacher from "./page/Admin/AdminTeacher";

const Dashboard = () => <h1>Dashboard (All Users)</h1>;
const Settings = () => <h1>Settings (Admin Only)</h1>;
const GradeSubmission = () => <h1>Grade Submission (Teacher Only)</h1>;
const ViewResults = () => <h1>View Results (Student Only)</h1>;
const Unauthorized = () => <h1>Unauthorized Access</h1>;

const RoleSwitcher = () => {
  const { role, setRole, logout } = useAuth();

  return (
    <div>
      <p>Current Role: {role}</p>
      <button onClick={() => setRole("guest")}>Guest</button>
      <button onClick={() => setRole("student")}>Student</button>
      <button onClick={() => setRole("teacher")}>Teacher</button>
      <button onClick={() => setRole("admin")}>Admin</button>
      <button onClick={() => setRole("parent")}>Parent</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="admin/department" element={<AdminDepartment />} />
          <Route path="admin/teacher/" element={<AdminTeacher />} />
          <Route path="admin/student/" element={<AdminStudent />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/parentsignin" element={<ParentLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/view-results"
            element={
              <ProtectedRoute requiredRole="student">
                <ViewResults />
              </ProtectedRoute>
            }
          />
          <Route
            path="/grade-submission"
            element={
              <ProtectedRoute requiredRole="teacher">
                <GradeSubmission />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute requiredRole="admin">
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
