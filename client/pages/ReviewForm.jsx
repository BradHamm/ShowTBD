// webpage for leaving a review for a particular TV show
import React from 'react';
import { useLocation } from 'react-router-dom';


function ReviewForm() {
    let { state } = useLocation();
    const { name, id } = state; // just in case we also need id?
    console.log(state);
    return (
        <>
            <div className="bg-slate-200 w-1/2 rounded-md flex flex-col justify-center">
                <h2 className="text-3xl	mt-2 self-center text-black">{name}</h2>
                <form action="#" className="w-2/3 self-center">
                    <div className="flex items-center justify-between mt-6">
                        <div className=" inline-block w-5/12">
                            <input type="text" id="genre" name="genre" placeholder="Genre" className="w-full rounded-md	h-10 placeholder-shown:pl-1.5" />
                            <label htmlFor="genre"></label>
                        </div>
                        <div className=" inline-block w-5/12">
                            <input type="text" id="StreamingService" name="StreamingService" placeholder="Streaming Service" className="w-full rounded-md h-10 placeholder-shown:pl-1.5" />
                            <label htmlFor="StreamingService"></label>
                        </div>
                    </div>
                    <div className="mt-4">
                        <textarea id="textarea" name="textarea" placeholder="textarea" className="w-full h-28 rounded-md placeholder-shown:pl-1.5" rows="4" cols="50"></textarea>
                        <label htmlFor="textarea"></label>
                    </div>
                    <button className="bg-cyan-600 hover:bg-cyan-800 h-10 text-white rounded-md mt-8 mb-2 w-full
                    ">Submit</button>

                </form>
            </div>
        </>
    )
}

export default ReviewForm;