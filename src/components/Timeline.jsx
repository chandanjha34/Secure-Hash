import React from "react";
import gsap from "gsap";
import Timeline1a from '../assets/Timeline1a.png'
 
function Timeline(){


    return(
        <div className="w-full h-screen text-white">
            <div className="w-[140px] h-[50px] text-[150%] translate-x-[45vw] flex justify-center item-center rounded-full text-white font-bold translate-y-[20px] bg-[rgba(39,41,42,0.8)] shadow-lg">
                <p>TIMELINE</p>
            </div>
            <div>
                <div className=" flex flex-col gap-[20px] translate-y-[20vh] rounded-lg translate-x-[25vw] w-[50vw] h-[60vh] bg-[rgba(39,41,42,0.9)]">
                    <p className="flex justify-center font-bold text-[140%]">Birth of Blockchain: A Cryptographic Breakthrough</p>
                    <p className="font-bold text-[120%]">1991: A Groundbreaking Discovery</p>
                    <p>In 1991, Stuart Haber and W. Scott Stornetta proposed a secure chain of blocks for time-stamping digital documents.
                        This innovation addressed concerns over digital document fraud.
                        It introduced the core principles of transparency, security, and immutability.</p>
                    <div>
                        <img src={Timeline1a} alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>              
            </div>
        </div>
    );
}
export default Timeline;