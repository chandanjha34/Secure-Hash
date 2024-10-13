import React from "react";
import logo from "../assets/logo.png";
import menu from '../assets/menu.png';

function Home() {
    return (
        <>
            <div className="flex flex-row flex-1  border-2 rounded-[30px] translate-x-[20px] translate-y-[5px] w-[95vw] h-[14vh]"
                style={{
                    backgroundColor: "rgba(0, 31, 63, 0.7)",
                }}
            >
                <div className="flex flex-row flex-1 ">
                    <div className="w-[100px]">
                        <img className="scale-[60%] translate-x-[-15px] translate-y-[-15px]" src={logo} alt="Logo" />
                    </div>
                    <div className="translate-x-[-25px] translate-y-[10px]">
                        <p className="text-lg font-bold text-white">Secure <br />Hash</p>
                    </div>
                </div>
                <div className="flex flex-row items-center items-end flex-1 gap-[40px] translate-x-[150px] font-bold">
                    <a href="#" className="text-white hover:underline">Timeline</a>
                    <a href="#" className="text-white hover:underline">Applications</a>
                    <a href="#" className="text-white hover:underline">Features</a>
                    <a href="#" className="text-white hover:underline">Why</a>
                    <a href="#">
                        <img src={menu} alt="Menu Icon" className="w-[30px] h-[30px]" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Home;