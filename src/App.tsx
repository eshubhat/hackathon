import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes";
import NotFound from "./page/notFound/NotFound";

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
        <RoleSwitcher />
        <nav>
          <Link to="/dashboard">Dashboard</Link> | 
          <Link to="/settings">Settings</Link> | 
          <Link to="/grade-submission">Grade Submission</Link> | 
          <Link to="/view-results">View Results</Link>
        </nav>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/view-results" element={<ProtectedRoute requiredRole="student"><ViewResults /></ProtectedRoute>} />
          <Route path="/grade-submission" element={<ProtectedRoute requiredRole="teacher"><GradeSubmission /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute requiredRole="admin"><Settings /></ProtectedRoute>} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
