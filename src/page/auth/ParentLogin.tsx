import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ClgBg from "../../assets/Auth/CollegePhoto.jpg";

const ParentLogin = () => {
  const nav = useNavigate();

  const [date, setDate] = useState("");
  const [usn, setUsn] = useState("");

  const backURL = `${import.meta.env.VITE_DEV_BACKEND_URL}/api/user/signin`;

  const handleSignIn = async () => {
    try {
      const response = await axios.post(backURL, {
        usn,
        date,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
      }
    } catch {
      console.error("Sign in failed");
    }

    setUsn("");
    setDate("");
  };

  useEffect(() => {
    console.log(typeof date);
  }, [date]);

  return (
    <main className="relative w-full h-screen overflow-hidden font-inter bg-[#17224d]">
      {/* Background Image */}
      <img
        src={ClgBg}
        alt="Vector Image"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#17224d] via-[rgba(23,34,77,0.9)] to-transparent pointer-events-none z-10"></div>

      <div className="h-full w-full flex flex-row-reverse">
        <div className="flex h-full w-[70%] justify-end px-[10%]">
          <div className="text-blue-950 flex flex-col justify-center relative z-10">
            <div className="flex flex-col items-center h-min w-min bg-[#b5d5fe] border-2 border-blue-950 p-[10%] rounded-4xl relative z-10">
              <div className="text-[64px] font-semibold">Sign In</div>
              <div className="flex flex-col gap-3.5">
                {/* USN Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="USN"
                    value={usn}
                    onChange={(e) => setUsn(e.target.value)}
                    className="w-72 text-blue-950 rounded-lg p-2.5 border-[1px] focus:outline-none pl-8 bg-white relative z-[100]"
                  />
                </div>

                {/* Date Input */}
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-72 text-blue-950 rounded-lg p-2.5 border-[1px] focus:outline-none pl-8 bg-white relative z-10"
                  />
                </div>

                {/* Sign In Button */}
                <button
                  onClick={handleSignIn}
                  className="w-72 rounded-lg p-2.5 text-white bg-[#323954] hover:bg-[#3D02BC] cursor-pointer relative z-10"
                >
                  Sign in
                </button>
              </div>

              {/* Signup Redirect */}
              <div className="my-3 relative z-10">
                Sign In as a Teacher/Student?{" "}
                <span
                  className="text-[#5E6EFF] hover:underline-offset-2 hover:underline hover:cursor-pointer"
                  onClick={() => nav("/signup")}
                >
                  Teacher/Student Signup
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ParentLogin;
