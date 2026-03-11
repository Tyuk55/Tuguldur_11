export default function ContactPage() {
    return (
        <div className="h-screen w-screen bg-black flex  justify-around items-center">
            <div className="w-1/10 h-full">
                <a href="" className="w-36 h-16 bg-blue-300"> Back</a>
            </div>
            
            <div className="w-7/10 h-4/5 bg-white flex ">
                <div className="w-16 h-full bg-white">
                    <img src="https://media.licdn.com/dms/image/v2/D560BAQEEMW9WWllJQQ/company-logo_200_200/company-logo_200_200/0/1715012998326/logodotcom_logo?e=2147483647&v=beta&t=_NWc6aYWSqq5hIKCc9gX66KLMr59x1sYFIm0-FJaIP4" alt="contact-icon" className="w-12 h-12 mt-4 ml-2"/>
                </div>
                <div className="w-[45%] h-full flex flex-col border-2 border-gray-300">
                    <div className="w-full h-1/2 flex flex-col justify-center items-center text-8xl font-bold text-black ml-2">
                        Let's get in touch
                    </div>
                    <div className="w-full h-[40%] ">
                        <div className="w-full h-2/5 text-5xl  text-black flex items-center justify-center ml-2">
                            Don't be afraid to say hello to us!
                        </div>
                        <div className="w-full h-1/5 flex flex-col justify-center ml-4">
                            <p className="text-lg text-gray-400 ">Phone:</p>
                            <p className="text-xl text-black ">(+2)-88993420</p>
                        </div>
                        <div className="w-full h-1/5 flex flex-col justify-center ml-4">
                            <p className="text-lg text-gray-400 ">Email:</p>
                            <p className="text-xl text-black ">(+2)-88993420</p>
                        </div>
                        <div className="w-full h-1/5 flex flex-col justify-center ml-4">
                            <p className="text-lg text-gray-400 ">Office</p>
                            <p className="text-xl text-black ">Ulaanbaatar BZD district </p>
                        </div>
                    </div>
                </div>
                <div className="w-[45%] h-full bg-white border-2 border-gray-300">
                    <div className="w-full h-1/2 flex flex-col">
                        <div className="w-full h-1/2 flex justify-around m-2">
                            <div className="text-gray-400 text-lg" > Home</div>
                            <div className="text-gray-400 text-lg" > Service</div>
                            <div className="text-gray-400 text-lg" > Technology</div>
                            <div className="text-gray-400 text-lg" > Get in touch</div>
                            <div className="w-16 h-8 bg-yellow-300 text-gray-400 text-lg flex items-center justify-center">Login</div>
                        </div>
                        <div className="w-full h-1/2 flex justify-center mt-16">
                            <img src="https://www.mydoorsign.com/img/lg/L/right-arrow-door-label-lb-2117-r.png " className=" ml-4w-1/2 h-16"></img>
                            <div className="text-2xl text-gray-400  ml-4">Great we are excited to hear from you and let's start something</div>
                        </div>
                    </div>
                    <div className="w-full h-1/2 flex bg-sky-300 flex-col">
                        <div className="w-full h-1/5 text-white text-3xl ml-4 flex items-center">Contact Us</div>
                        <div className="w-full h-1/5 flex  flex-col justify-center">
                            <div className=" text-white text-xl ml-8"> Name:</div>
                            <input className=" w-48 rounded-md mb-4 ml-8 bg-white text-black"/>
                        </div>
                        <div className="w-full h-1/5">
                            <div className=" text-white text-xl ml-8"> Email:</div>
                            <input className=" rounded-md mb-4 ml-8 bg-white text-black"/>
                        </div>
                        <div className="w-full h-1/5">
                            <div className=" text-white text-xl ml-8"> Phone:</div>
                            <input className=" rounded-md mb-4 ml-8 bg-white text-black"/>
                        </div>
                        <button className="w-24 h-10 bg-blue-400 text-white text-m rounded-2xl ml-8 mt-2">Submit</button>
                    </div>
                </div>
                <div className="w-[8%] h-full"></div>
            </div>
        </div>
    )

}
