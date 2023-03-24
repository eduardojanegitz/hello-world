import Banner from "components/Banner";
import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./DefaultPage.module.css";

export default function DefaultPage() {
    return (
        <main>

            <Banner />

            <Outlet />
        </main>
    )

}