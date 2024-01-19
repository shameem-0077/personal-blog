"use client"

import { useState } from 'react'
import React from 'react'
import EditorComponent from '@/components/EditorComponent'


const AddArticle = ({title}) => {
    const [saveData, setSaveData] = useState({})
    const [preview, setPreview] = useState(false)
    return !preview ? (
        <section className='h-screen'>
            <div className='text-center text-5xl p-3 font-bold'>
                <h1>{title}</h1>
            </div>
            <div className='flex p-5 bg-slate-500 h-[90vh]'>
                <div className=' w-3/4 h-full '>
                    <EditorComponent setSave={setSaveData} readOnly={false} data={saveData} />

                </div>
                <div className=' w-1/4 p-5 flex flex-col justify-between'>
                    <div>
                        <div className='font-bold text-lg'>
                            <p className='text-white'>Title</p>
                            <input type="text" placeholder="Type Title" className="input input-bordered w-full text-black" />
                        </div>
                        <div className='font-bold text-lg'>
                            <p className='text-white'>Description</p>
                            <textarea className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                        </div>
                        <div className='font-bold text-lg'>
                            <p className='text-white'>Select Category</p>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Technology</option>
                                <option>Front end</option>
                                <option>Backend</option>
                            </select>
                        </div>

                    </div>
                    <div className='flex gap-5 justify-end'>
                        <button onClick={() => setSave(true)} className="btn btn-success">save</button>
                        <button onClick={() => setPreview(true)} className="btn btn-neutral">Preview</button>
                    </div>
                </div>
            </div>
        </section>
    ) : (
        <div>
            <EditorComponent readOnly={true} data={saveData} />
            <div className='flex justify-center'>
                <button onClick={() => setPreview(false)} className="btn btn-neutral">back</button>
            </div>
        </div>
    )
}

export default AddArticle