// import React, { useState } from "react";
// import "./Register.css";

// const Register: React.FC = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassowrd] = useState("");

//   const handleRegister = (event: React.FormEvent<HTMLElement>) => {
//     console.log("clicked handleRegister");
//   };
//   return (
//     <div className="register-container">
//       <form onSubmit={handleRegister} className="register-form">
//         <label htmlFor="name" className="register-label">
//           Name
//         </label>
//         <input
//           id="name"
//           className="register-input"
//           type="text"
//           placeholder="Enter your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <label htmlFor="email" className="register-label">
//           Email
//         </label>
//         <input
//           id="email"
//           className="register-input"
//           type="text"
//           placeholder="Enter Your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label htmlFor="password" className="regsiter-label">
//           Password
//         </label>
//         <input
//           id="password"
//           className="register-input"
//           type="text"
//           placeholder="Enter the Password"
//           value={password}
//           onChange={(e) => setPassowrd(e.target.value)}
//         />
//         <button type="submit" className="register-button">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const handleRegister = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    console.log("clicked handleRegister");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center">
          Register
        </h2>

        <div>
          <label htmlFor="name" className="block text-gray-600 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-600 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-600 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
