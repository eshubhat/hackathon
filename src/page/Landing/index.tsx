import React from "react";
import { useNavigate } from "react-router-dom";
import LogoImage from "../../assets/sksvmacet_trans_logo.png"
import College from "../../assets/college.jpg"

const FeatureItem: React.FC<{ text: string }> = ({ text }) => {
  return <li className="bg-white-100 p-2 rounded-md shadow-sm mb-2">{text}</li>;
};


const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
    {/* Navbar */}
      <nav className="bg-blue-600 text-white p-2 flex justify-between items-center">
        <div className="flex">

        <img className="ml-5 h-8 w-12 mr-5" src={LogoImage} alt="Logo"></img>
        <div className="text-xl font-inter font-semibold">Student Management System</div>
        </div>
        <div>
        <button onClick={() => navigate("/signin")} className="bg-white text-blue-600 px-4 py-1 rounded-sm mr-8 font-inter font-semibold">Login</button>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-grow p-8 text-center">
        <div className="flex items-center justify-center">

        <h1 className="font-inter font-bold text-6xl text-gray-900">Codefiesta 5.0<span className="font-inter font-medium text-6xl text-gray-600">@SKSVMACET</span></h1>
        </div>
        <h2 className="ml-150   font-light  text-3xl italic">-Team Websters</h2>
        <img src={College} alt="Placeholder" className="mx-auto mb-6 w-[800px] my-10" />
          <h2 className="mb-2 text-3xl font-inter font-light text-gray-700">Key Features</h2>
          <div className="h-1 w-[20%] bg-blue-950 mx-auto mb-10"></div>
        <div className="flex justify-between px-30">
        <div className="bg-gradient-to-b from-white-200 to-gray-100 shadow-lg rounded-lg p-6 w-[325px] hover:bg-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Students</h2>
          <ul className="list-disc list-inside text-left">
          <FeatureItem text="Profile Management."/>
          <FeatureItem text="Attendance Tracking."/>
          </ul>
        </div>
        <div className="bg-gradient-to-b from-white-200 to-gray-100 shadow-lg rounded-lg p-6  w-[325px] hover:bg-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Faculty</h2>
          <ul className="list-disc list-inside text-left">
          <FeatureItem text="Attendance Management."/>
          <FeatureItem text="Marks Grading."/>
          </ul>
        </div>
        <div className="bg-gradient-to-b from-white-200 to-gray-100 shadow-lg rounded-lg p-6 w-[325px] hover:bg-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Admin</h2>
          <ul className="list-disc list-inside text-left">
          <FeatureItem text="Teacher Management"/>
          <FeatureItem text="Student Management"/>
          <FeatureItem text="Fee Management"/>           
          </ul>
        </div>

        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; 2025 Student Management System.
      </footer>
    </div>
  );
};

export default LandingPage;
