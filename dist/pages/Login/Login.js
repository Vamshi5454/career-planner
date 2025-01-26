"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Login = () => {
    const [username, setUsername] = (0, react_1.useState)("");
    const [password, setPassowrd] = (0, react_1.useState)("");
    const handleLogin = (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log("This is Login Event");
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "flex justify-center items-center min-h-screen bg-gray-100" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "w-full max-w-sm bg-white p-6 rounded-lg shadow-md" }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "text-2xl font-bold text-center text-gray-700 mb-4" }, { children: "Login Page" })), (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleLogin, className: "space-y-4" }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "username", className: "block text-gray-600 text-sm mb-2" }, { children: "Username" })), (0, jsx_runtime_1.jsx)("input", { id: "username", placeholder: "Enter Your Username", type: "text", value: username, onChange: (e) => setUsername(e.target.value), className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "password", className: "block text-gray-600 text-sm mb-2" }, { children: "Password" })), (0, jsx_runtime_1.jsx)("input", { id: "password", placeholder: "Enter Your Password", type: "password", value: password, onChange: (e) => setPassowrd(e.target.value), className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "submit", className: "w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition" }, { children: "Login" }))] }))] })) })));
};
exports.default = Login;
