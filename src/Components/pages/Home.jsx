import React from 'react';
import {Navbar} from "../Navbar";
import Tasks from "./Tasks.jsx";

export const Home = () => {
    return (
        <div>
            <h1>HomePage</h1>
            <Navbar/>
            <Tasks/>
        </div>
    );
};
