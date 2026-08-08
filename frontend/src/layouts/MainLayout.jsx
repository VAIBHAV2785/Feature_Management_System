import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "./MainLayout.css";

export default function MainLayout() {

    return (

        <>

            <Navbar />

            <Sidebar />

            <div className="layout">

                <main className="layout-content">

                    <Outlet />

                </main>

            </div>

        </>

    );

}