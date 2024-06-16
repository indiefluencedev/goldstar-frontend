import React from 'react';

const InquiryForm = () => {
    return (
        <div className="flex justify-center items-center mt-12">
            <form className=" w-[350px] md:w-[900px] md:h-[520px] bg-white p-8 rounded-md border border-gray-200 shadow-md">
                <h2 className="text-2xl font-assistant font-bold mb-4">INQUIRY FORM</h2>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase font-assistant tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                            *First Name
                        </label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text" placeholder="First Name" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase font-assistant tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">
                            *Last Name
                        </label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="last-name" type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase font-assistant tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            *Email
                        </label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase font-assistant tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="phone" type="text" placeholder="Phone Number" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase font-assistant tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="inquiry">
                            *Inquiry
                        </label>
                        <textarea className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="inquiry" rows="4" placeholder="Inquiry"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-start">
                    <button className="bg-prime text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default InquiryForm;
