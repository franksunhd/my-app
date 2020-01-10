// Home
import Home from "../pages/Home/home";
// Basic
import Basic from "../pages/Basic/basic"
// Advance
import Advance from "../pages/Advance/advance";
// Senior
import Senior from "../pages/Senior/Senior"

const routesList = [
    {path: '/index/home', component: Home},
    {path: '/index/basic', component: Basic},
    {path: '/index/advance', component: Advance},
    {path: '/index/Senior.jsx', component: Senior}
];

export default routesList;