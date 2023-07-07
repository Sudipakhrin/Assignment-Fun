import React from "react";


const Newsletter = () => {
    return (
        <div className="w-full py-16 text-white px-4 bg-slate-800">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2" >An update on the 2023 live streamings?
</h1>
                    <p>Subscribe to our newsletter to keep informed.
</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                        <input className="p-3 flex w-full rounded-md text-black" type='email' placeholder='Enter Email' />
                        <button className="text-black bg-blue-600 w-[200px] rounded-md font-medium ml-6 my-6 mx-6 py-3 ">Notify me</button>
                    </div>
                    <p>We are concerned about the security of your data. Read our.
 {' '}
                    <span className='text-blue-600'>Privacy Policy.</span>
                    </p>

                </div>
                
            </div>
        </div>
    );
    }

export default Newsletter;