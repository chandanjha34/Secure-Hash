import React from "react";
import { useRef,useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Timeline1a from '../assets/Timeline/Timeline1a.png'
import Timeline1b from '../assets/Timeline/Timeline1b.png'
import Timeline1c from '../assets/Timeline/Timeline1c.png'
import Timeline2a from '../assets/Timeline/Timeline2a.png'
import Timeline2b from '../assets/Timeline/Timeline2b.png'
import Timeline3a from '../assets/Timeline/Timeline3a.png'
import Timeline4a from '../assets/Timeline/Timeline4a.png'
import Timeline4b from '../assets/Timeline/Timeline4b.png'
import bullet from '../assets/Timeline/bullet.png'
gsap.registerPlugin(ScrollTrigger);


function Timeline(){

    const TimelineRef=useRef(null);
    const PageRef=useRef(null);



    useEffect(()=>{
        const TimelineWidth=TimelineRef.current.scrollWidth;
        const windowWidth=window.innerWidth;
        const scrollEnd = TimelineWidth - windowWidth;

        gsap.to(TimelineRef.current, {
            x: `-${scrollEnd}px`,
            scrollTrigger: {
                trigger:TimelineRef.current,
                start: "top top", 
                end: `+=${scrollEnd}`,
                pin : PageRef.current,
                scrub:1,
                markers:true,
                }
        });
    }, []);



    return(
        <div ref={PageRef} className="h-screen text-white relative overflow-hidden" >
            <div  className="absolute top-0 left-0 w-[140px] h-[50px] text-[150%] translate-x-[45vw] translate-y-[30px] flex justify-center items-center rounded-full text-white font-bold translate-y-[20px] bg-[rgba(39,41,42,0.8)] shadow-lg">
                <p>TIMELINE</p>
            </div>
            
            {/*First Slide*/}

            <div ref={TimelineRef} className="flex w-full">
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
                    <div className=" flex flex-col items-center gap-[20px] translate-x-[125vw] translate-y-[18vh] rounded-lg    w-[50vw] w-max-[50vw] h-[64vh]  bg-[rgba(39,41,42,0.9)] ">
                        <p className="flex justify-center items-center font-bold text-[140%]">Bitcoin's White Paper Published</p>
                        <p className="flex justify-center font-bold text-[120%]">2008: Ignition of Decentralized Spirit</p>
                        <p className="translate-x-[20px]">
                            <ul className="list-none">
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /><p> <span className="font-bold">Financial Crisis:</span>  A failing global economy highlighted the need for decentralized alternatives. </p></li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /><p> <span className="font-bold">  Bitcoin White Paper:</span>  Bitcoin White Paper: Released by Satoshi Nakamoto on <br /> October 31, 2008.</p></li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /><p> <span className="font-bold">  Core Concepts: </span>  Introduced blockchain, Proof of Work, and decentralization for <br /> secure, trustless transactions.</p></li>
                            </ul>
                        </p>
                        <div className="flex scale-[22%] w-[50vw] translate-x-[-25vh] translate-y-[-47vh]">
                            <img src={Timeline1c} className="" alt="" />
                            <img src={Timeline2b} className="" alt="" />
                            <img src={Timeline2a} className="absolute scale-[190%] translate-y-[-40px] translate-x-[1500px]" alt="" />
                        </div>
                    </div>                            
                </div>

                {/*Third Slide*/}

                <div className="absolute flex justify-center gap-[10vw] ">
                    <div className=" flex flex-col items-center gap-[20px] translate-x-[225vw] translate-y-[18vh] rounded-lg   overflow-hidden w-[50vw] h-[64vh]  bg-[rgba(39,41,42,0.9)] ">
                        <p className="flex justify-center font-bold text-[140%]">2009: Bitcoin’s Historic Launch</p>
                        <p className="translate-x-[20px]">
                            <ul className="list-none">
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> <p> <span className="font-bold">Genesis Block Mined: </span>  Satoshi Nakamoto mined Bitcoin’s first block and received 50 BTC in reward. </p></li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> <p> <span className="font-bold">First Transaction:</span>  Nakamoto executed the first-ever Bitcoin transaction, sending 10 BTC to Hal Finney. </p></li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> <p> <span className="font-bold">Limited Adoption:</span> Despite its potential, Bitcoin remained under the radar, <br /> embraced primarily by cryptography enthusiasts and visionaries. </p></li>
                            </ul>
                        </p>
                        <div className="flex scale-[45%] translate-x-[30vh] translate-y-[-36vh]">
                            <img src={Timeline3a} className="" alt="" />
                        </div>
                    </div>                            
                </div>

                {/*Fourth Slide*/}

                <div className="absolute flex justify-center gap-[10vw] ">
                    <div className=" flex flex-col items-center gap-[20px] translate-x-[325vw] translate-y-[18vh] rounded-lg    w-[50vw] h-[64vh]  bg-[rgba(39,41,42,0.9)] ">
                        <p className="flex justify-center font-bold text-[140%]">2010: Bitcoin Pizza Day</p>
                        <p className="translate-x-[20px]">
                            <ul className="list-none">
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> <p> <span className="font-bold">First Bitcoin Purchase (May 22, 2010): </span> Laszlo Hanyecz bought two <br /> pizzas for 10,000 BTC.</p></li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> <p> <span className="font-bold">First Real-World Value: </span>  This marked Bitcoin's first use for purchasing goods. </p></li>
                                <li className="flex flex-center item-center"> <img src={bullet} className="w-4 h-4 mr-2 translate-y-[5px]" alt="" /> <p> <span className="font-bold">Bitcoin Pizza Day: </span> Celebrated annually to honor this milestone in Bitcoin <br /> history.</p></li>
                            </ul>
                        </p>
                        <div className="flex scale-[25%] gap-[600px] translate-x-[-25vh] translate-y-[-44vh]">
                            <img src={Timeline4a} className="" alt="" />
                            <img src={Timeline4b} className="rounded-full w-auto scale-x-[160%]" alt="" />
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