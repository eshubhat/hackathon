// import "./Navbar.css";
import { useLocation } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  return (
    <div>
      <nav className="sidemenu">
        <ul className="nav-list font-semibold">
          <li
            className={`${
              currentPath == "/admin/teacher"
                ? "active text-[var(--nav-bg)]"
                : "text-white"
            }`}
          >
            <a href="/admin/teacher">Teacher</a>
          </li>
          <li
            className={`${
              currentPath == "/admin/student"
                ? "active text-[var(--nav-bg)]"
                : "text-white"
            }`}
          >
            <a href="/admin/student">Student</a>
          </li>
          <li
            className={`${
              currentPath == "/admin/department"
                ? "active text-[var(--nav-bg)]"
                : "text-white"
            }`}
          >
            <a href="/admin/department">Department</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
