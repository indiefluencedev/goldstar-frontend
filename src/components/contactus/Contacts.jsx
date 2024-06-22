import React from 'react';
import mailIcon from '../../assets/svg/mail.svg';
import phoneIcon from '../../assets/svg/phone2.svg';
import locationIcon from '../../assets/svg/location.svg';

const Contacts = () => {
    return (
        <div className='flex justify-center items-center h-[90vh] bg-gray-100 p-4 mb-[-130px]'>
            <div className='w-full lg:w-[900px] md:w-[700px] mx-auto bg-white p-6 lg:p-10 flex flex-col lg:flex-row shadow-2xl rounded-xl gap-7'>
                <div className="flex justify-center items-center w-full lg:w-1/2">
                    <div className="w-full max-w-[400px] sm:h-[300px] md:h-[450px] bg-prime text-white p-8 rounded-xl shadow-2xl lg:relative lg:left-[-70px] xl:left-[-70px]">
                        <h2 className="text-3xl font-bold mb-6 lg:mb-14 pt-10">Contact Us</h2>
                        <div className="flex items-start text-left mb-6 lg:mb-10">
                            <img src={locationIcon} alt="Location" className="w-6 h-6 mr-3" />
                            <p className="flex-1 break-words">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                        <div className="flex items-start text-left mb-6 lg:mb-10">
                            <img src={mailIcon} alt="Email" className="w-6 h-6 mr-3" />
                            <p className="hidden md:flex flex-1 break-words">goldstarsewingmachines@gmail.com</p>
                            <p className="flex md:hidden flex-1 break-words">goldstarsewingmachines@ gmail.com</p>
                        </div>
                        <div className="flex items-start text-left">
                            <img src={phoneIcon} alt="Phone" className="w-6 h-6 mr-3" />
                            <p className="flex-1 break-words">+91 99999-99999</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full lg:w-1/2'>
                    <div className='w-full max-w-[400px]'>
                        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                        <p className="mb-6">Feel free to drop us a message below!</p>
                        <form className='w-full'>
                            <div className="mb-4">
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea 
                                    placeholder="Type your message here..." 
                                    className="w-full p-2 border border-gray-300 rounded h-32 resize-none"
                                ></textarea>
                            </div>
                            <div>
                                <button 
                                    type="submit" 
                                    className="w-full p-2 bg-prime text-white rounded shadow hover:bg-purple-900 transition duration-200"
                                >
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
