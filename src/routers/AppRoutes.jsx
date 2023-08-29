import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Skills from "../pages/Skills/Skills";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contatc";

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/contacts" element={<Contact />}></Route>
            </Routes>
        </div>
    );
}

export default AppRoutes;
