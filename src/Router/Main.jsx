import { Outlet } from "react-router-dom";
import Navbar from "../Home/Home/Navbar";
import Foooter from "../Home/Home/Foooter";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Foooter></Foooter>
        </div>
    );
};

export default Main;