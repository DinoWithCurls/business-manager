import React from 'react';
import data from '../mock';
function Home() {
    return (
        <div> {/*Container Div*/}
            <div>Profile</div> {/*Profile div, with image, Name, Email ID and Logout */}
            <div> {/*Div for the main act */}
                <div>Business Manager</div> {/*Header Div */}
                <div>Add New Data</div> {/* The div with Add button */}
                <div> {/*The main block for rendering data */}
                    Items
                    <div>item</div> {/*Child div storing data, with Edit and Delete Button */}
                </div>
            </div>
        </div>
    );
};

export default Home;