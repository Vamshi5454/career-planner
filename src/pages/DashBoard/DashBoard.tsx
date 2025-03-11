import { useState, useEffect } from "react";
import axios from "axios";

const DashBoard: React.FC = () => {
  const [resumes, setResumes] = useState<string[]>([]);

  useEffect(() => {
    const getResumes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/resume/getAll"); // ✅ Keeping your original API
        setResumes(response.data);
      } catch (err) {
        console.error("Error fetching resumes:", err);
      }
    };
    getResumes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
        Hi User 👋
      </h2>
      <h3 className="text-lg text-gray-700 text-center mb-8">
        These are the resumes you have uploaded:
      </h3>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumes.length > 0 ? (
          resumes.map((item, index) => {
            // const resumeUrl = getS3Url(item.s3key); // ✅ Generate the correct URL
            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 text-center"
              >
                <h4 className="text-gray-900 font-semibold mb-2">
                  Resume Preview
                </h4>
                <iframe
                  src={item}
                  title="Resume Preview"
                  className="w-full h-40 border border-gray-300 rounded-md"
                />
                <a
                  href={item}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-500 font-medium hover:underline"
                >
                  Open Full Resume
                </a>
              </div>
            );
          })
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            No resumes uploaded yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
