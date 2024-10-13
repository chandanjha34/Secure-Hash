import React, { useRef } from "react";
import logo from "../assets/logo.png";
import menu from '../assets/menu.png';
import image1 from '../assets/bitcoin.png'
import image2 from '../assets/ethereum.png'
import image3 from '../assets/Dogecoin.png'
import gsap from "gsap";

function Home() {
    

    return (
        <>
            <div className="max-w-full overflow-x-hidden h-screen w-full overflow-y-hidden">
                <div className="relative flex flex-row flex-1 rounded-[10px] translate-x-[20px] translate-y-[5px] w-[95vw] h-[12vh] bg-[rgba(39,41,42,0.8)] shadow-lg">
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
                <div className="translate-y-[60vh] absolute p-2">
                    <p className="text-white font-bold text-8xl drop-shadow-md">Web 3</p>
                    <p className="text-white text-3xl drop-shadow-md ">where decentralization comes into picture</p>
                </div>
                <div className="relative">
                    <img  className=" scale-[42%] translate-x-[35vw] translate-y-[1vh]  relative z-1" src={image2} alt="" />
                    <img  className="scale-[75%] translate-x-[33vw] translate-y-[-100vh] relative z-1" src={image3} alt="" />
                    <img  className="scale-[70%] translate-x-[42vw] translate-y-[-165vh]   relative z-100" src={image1} alt="" />
                </div>
            </div>
        </>
    );
}

export default Home;