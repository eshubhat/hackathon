import SideMenu from "../../components/Navbar/Sidemenu";
import Navbar from "../../components/Navbar";

const AdminDepartment = () => {
  return (
    <main className="min-h-screen w-full adminbody px-[28px] md:pl-[22vw] pr-[4vw]">
      <SideMenu />
      <div>
        <Navbar />
      </div>
    </main>
  );
};

export default AdminDepartment;
