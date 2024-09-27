import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const MainLaout = () => {
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className="mx-10">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLaout;
