"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
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
const react_1 = require("react");
const Register = () => {
    const [name, setName] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassowrd] = (0, react_1.useState)("");
    const handleRegister = (event) => {
        event.preventDefault();
        console.log("clicked handleRegister");
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "flex justify-center items-center min-h-screen bg-gray-100" }, { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleRegister, className: "w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4" }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "text-2xl font-bold text-gray-700 text-center" }, { children: "Register" })), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "name", className: "block text-gray-600 mb-1" }, { children: "Name" })), (0, jsx_runtime_1.jsx)("input", { id: "name", type: "text", placeholder: "Enter your Name", value: name, onChange: (e) => setName(e.target.value), className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "email", className: "block text-gray-600 mb-1" }, { children: "Email" })), (0, jsx_runtime_1.jsx)("input", { id: "email", type: "email", placeholder: "Enter Your Email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "password", className: "block text-gray-600 mb-1" }, { children: "Password" })), (0, jsx_runtime_1.jsx)("input", { id: "password", type: "password", placeholder: "Enter your Password", value: password, onChange: (e) => setPassowrd(e.target.value), className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "submit", className: "w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition" }, { children: "Register" }))] })) })));
};
exports.default = Register;
