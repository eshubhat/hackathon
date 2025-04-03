import { MailIcon, BellIcon } from "../../assets/icons/Icons";

const Navbar = () => {
  return (
    <nav className="border-b-2 border-b-[#dbe0e6] py-2 flex justify-end">
      <ul className="flex gap-2 font-semibold items-center">
        <li>
          <a href="/admin/teacher">
            <MailIcon />
          </a>
        </li>
        <div className="text-[#e0e5e9] font-medium">|</div>
        <li>
          <a href="/admin/student">
            <BellIcon />
          </a>
        </li>
        <div className="text-[#e0e5e9] font-medium">|</div>
      </ul>
    </nav>
  );
};

export default Navbar;
