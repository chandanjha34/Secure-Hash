import React from "react";
import logo from "../assets/logo.png"

function Home(){
    return(
        <>
            <div className="border-1 border-solid border-black w-[99vw] h-auto">
                <span className="flex flex row">
                    <span  className="w-[100px]" >
                        <img className="scale-[60%] translate-x-[-15px] translate-y-[-15px]" src={logo} alt="" />
                    </span>
                    <span>
                       <p className="">Secure <br />Hash</p>
                    </span>
                </span>
                <span>

                </span>
            </div>
        </>
    );

}
export default Home;