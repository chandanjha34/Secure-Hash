import React from "react";
import { useRef,useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Timeline1a from '../assets/Timeline/Timeline1a.png'
import Timeline1b from '../assets/Timeline/Timeline1b.png'
import Timeline1c from '../assets/Timeline/Timeline1c.png'
import bullet from '../assets/Timeline/bullet.png'
gsap.registerPlugin(ScrollTrigger);


function Timeline(){

    const TimelineRef=useRef(null);
    const PageRef=useRef(null);

    useEffect(()=>{
        gsap.to(TimelineRef.current, {
            transform:"translateX(-400%)",
            scrollTrigger: {
                trigger:PageRef.current,
                scroller:"body", 
                
                scrub: 2,
                pin:true
                }
        });
    }, []);



    return(
        <div className="h-screen text-white relative overflow-x-hidden " ref={PageRef}>
            <div className="absolute top-0 left-0 w-[140px] h-[50px] text-[150%] translate-x-[45vw] translate-y-[30px] flex justify-center items-center rounded-full text-white font-bold translate-y-[20px] bg-[rgba(39,41,42,0.8)] shadow-lg">
                <p>TIMELINE</p>
            </div>
            
            {/*First Slide*/}

            <div ref={TimelineRef}>
                <div className=" absolute flex justify-center gap-[10vw] ">
                    <div className=" flex flex-col items-center gap-[20px] translate-x-[25vw] translate-y-[18vh] rounded-lg    w-[50vw] h-[64vh]  bg-[rgba(39,41,42,0.9)] ">
                        <p className="flex justify-center font-bold text-[140%]">Birth of Blockchain: A Cryptographic Breakthrough</p>
                        <p className="flex justify-center font-bold text-[120%]">1991: A Groundbreaking Discovery</p>
                        <p className="translate-x-[20px]">
                            <ul className="list-none">
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> In 1991, Stuart Haber and W. Scott Stornetta proposed a secure chain of blocks for time-stamping digital documents.</li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> This innovation addressed concerns over digital document fraud. </li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> It introduced the core principles of transparency, security, and immutability.</li>
                            </ul>
                        </p>
                        <div className="flex scale-[25%] translate-x-[-25vh] translate-y-[-44vh]">
                            <img src={Timeline1a} className="" alt="" />
                            <img src={Timeline1b} className="" alt="" />
                            <img src={Timeline1c} className="" alt="" />
                        </div>
                    </div>                            
                </div>

                {/*Second Slide*/}

                <div className="absolute flex justify-center gap-[10vw] ">
                    <div className=" flex flex-col items-center gap-[20px] translate-x-[125vw] translate-y-[18vh] rounded-lg    w-[50vw] h-[64vh]  bg-[rgba(39,41,42,0.9)] ">
                        <p className="flex justify-center font-bold text-[140%]">Birth of Blockchain: A Cryptographic Breakthrough</p>
                        <p className="flex justify-center font-bold text-[120%]">1991: A Groundbreaking Discovery</p>
                        <p className="translate-x-[20px]">
                            <ul className="list-none">
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> In 1991, Stuart Haber and W. Scott Stornetta proposed a secure chain of blocks for time-stamping digital documents.</li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> This innovation addressed concerns over digital document fraud. </li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> It introduced the core principles of transparency, security, and immutability.</li>
                            </ul>
                        </p>
                        <div className="flex scale-[25%] translate-x-[-25vh] translate-y-[-44vh]">
                            <img src={Timeline1a} className="" alt="" />
                            <img src={Timeline1b} className="" alt="" />
                            <img src={Timeline1c} className="" alt="" />
                        </div>
                    </div>                            
                </div>

                {/*Third Slide*/}

                <div className="absolute flex justify-center gap-[10vw] ">
                    <div className=" flex flex-col items-center gap-[20px] translate-x-[225vw] translate-y-[18vh] rounded-lg    w-[50vw] h-[64vh]  bg-[rgba(39,41,42,0.9)] ">
                        <p className="flex justify-center font-bold text-[140%]">Birth of Blockchain: A Cryptographic Breakthrough</p>
                        <p className="flex justify-center font-bold text-[120%]">1991: A Groundbreaking Discovery</p>
                        <p className="translate-x-[20px]">
                            <ul className="list-none">
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> In 1991, Stuart Haber and W. Scott Stornetta proposed a secure chain of blocks for time-stamping digital documents.</li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> This innovation addressed concerns over digital document fraud. </li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> It introduced the core principles of transparency, security, and immutability.</li>
                            </ul>
                        </p>
                        <div className="flex scale-[25%] translate-x-[-25vh] translate-y-[-44vh]">
                            <img src={Timeline1a} className="" alt="" />
                            <img src={Timeline1b} className="" alt="" />
                            <img src={Timeline1c} className="" alt="" />
                        </div>
                    </div>                            
                </div>

                {/*Fourth Slide*/}

                <div className="absolute flex justify-center gap-[10vw] ">
                    <div className=" flex flex-col items-center gap-[20px] translate-x-[325vw] translate-y-[18vh] rounded-lg    w-[50vw] h-[64vh]  bg-[rgba(39,41,42,0.9)] ">
                        <p className="flex justify-center font-bold text-[140%]">Birth of Blockchain: A Cryptographic Breakthrough</p>
                        <p className="flex justify-center font-bold text-[120%]">1991: A Groundbreaking Discovery</p>
                        <p className="translate-x-[20px]">
                            <ul className="list-none">
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> In 1991, Stuart Haber and W. Scott Stornetta proposed a secure chain of blocks for time-stamping digital documents.</li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> This innovation addressed concerns over digital document fraud. </li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> It introduced the core principles of transparency, security, and immutability.</li>
                            </ul>
                        </p>
                        <div className="flex scale-[25%] translate-x-[-25vh] translate-y-[-44vh]">
                            <img src={Timeline1a} className="" alt="" />
                            <img src={Timeline1b} className="" alt="" />
                            <img src={Timeline1c} className="" alt="" />
                        </div>
                    </div>                            
                </div>

                {/*Fifth Slide*/}

                <div className="absolute flex justify-center gap-[10vw] ">
                    <div className=" flex flex-col items-center gap-[20px] translate-x-[425vw] translate-y-[18vh] rounded-lg    w-[50vw] h-[64vh]  bg-[rgba(39,41,42,0.9)] ">
                        <p className="flex justify-center font-bold text-[140%]">Birth of Blockchain: A Cryptographic Breakthrough</p>
                        <p className="flex justify-center font-bold text-[120%]">1991: A Groundbreaking Discovery</p>
                        <p className="translate-x-[20px]">
                            <ul className="list-none">
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> In 1991, Stuart Haber and W. Scott Stornetta proposed a secure chain of blocks for time-stamping digital documents.</li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> This innovation addressed concerns over digital document fraud. </li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> It introduced the core principles of transparency, security, and immutability.</li>
                            </ul>
                        </p>
                        <div className="flex scale-[25%] translate-x-[-25vh] translate-y-[-44vh]">
                            <img src={Timeline1a} className="" alt="" />
                            <img src={Timeline1b} className="" alt="" />
                            <img src={Timeline1c} className="" alt="" />
                        </div>
                    </div>                            
                </div>
            </div>
 
        </div>
    );
}
export default Timeline;