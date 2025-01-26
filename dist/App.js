"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// import logo from './logo.svg';
require("./App.css");
const Home_1 = __importDefault(require("./pages/Home/Home"));
function App() {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-white p-4 text-center" }, { children: (0, jsx_runtime_1.jsx)(Home_1.default, {}) })));
}
exports.default = App;
