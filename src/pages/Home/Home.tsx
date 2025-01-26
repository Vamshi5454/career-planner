import React, { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

// import heroImage from "../../images/";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleMain = () => {
    navigate("/register");
    console.log("take this to register page");
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${require("../../images/homee.jpg")})`,
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Empower Your Career Journey with AI.
          </h1>
          <p className="text-lg mb-6">
            Get personalized career advice, track your progress, and land your
            dream job faster. Upload your resume, set your goals, and let AI
            guide you every step of the way.
          </p>
          <div className="space-x-4">
            <button
              className="bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600"
              onClick={handleMain}
            >
              Get Started
            </button>
            <button className="bg-gray-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-gray-600">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="py-12 bg-gray-100">
        <h2 className="text-blue-950 text-center text-3xl font-bold mb-8">
          Discover the Features
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-red-950 text-xl font-semibold mb-2">
              Smart Resume Analysis
            </h3>
            <p className="text-gray-600">
              Get actionable insights to improve your resume and stand out.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-red-950 text-xl font-semibold mb-2">
              Skill Recommendations
            </h3>
            <p className="text-gray-600">
              Identify and learn the skills you need to achieve your career
              goals.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-red p-6 rounded-lg shadow-md text-center">
            <h3 className="text-red-950 text-xl font-semibold mb-2">
              Job Tracking Made Simple
            </h3>
            <p className="text-gray-600">
              Organize and track all your job applications in one place.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="bg-red p-6 rounded-lg shadow-md text-center">
            <h3 className=" text-red-950 text-xl font-semibold mb-2">
              Never Miss an Interview
            </h3>
            <p className="text-gray-600">
              Schedule and receive reminders for interviews, ensuring you're
              always prepared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
