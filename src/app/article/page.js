"use client"
import React from 'react'
import { useRouter, redirect } from 'next/navigation'
import Header from '@/components/Header'


const page = () => {
  
    const router = useRouter()
  return (
    <section className='h-screen'>
      <Header isSearch={false} title='Your Articles' />

      <div className='flex justify-end p-4'>
        <div className='flex items-center'>
          <div className="form-control h-5">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>

        </div>
        <button onClick={() => router.push('/article/add-article', { scroll: false })} className="btn">Create new Blog</button>
      </div>
      <div className='flex gap-5 justify-center items-center mt-5'>
        <div className="overflow-x-auto w-screen p-3 h-[80vh] overflow-y-scroll">
          <table className="table table-xs">
            <thead className='sticky top-0 px-3 z-10 glass'>
              <tr>
                <th></th> 
                <th>Title</th> 
                <th>Category</th> 
                <th>Status</th> 
                <th>Actions</th> 
              </tr>
            </thead> 
            <tbody>
              <tr>
                <th>1</th> 
                <td>Cy Ganderton</td> 
                <td>Quality Control Specialist</td> 
                <td>Littel, Schaden and Vandervort</td> 
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td> 
              </tr>
              <tr>
                <th>2</th> 
                <td>Hart Hagerty</td> 
                <td>Desktop Support Technician</td> 
                <td>Zemlak, Daniel and Leannon</td> 
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td> 
                
              </tr>
              <tr>
                <th>3</th> 
                <td>Brice Swyre</td> 
                <td>Tax Accountant</td> 
                <td>Carroll Group</td> 
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                
              </tr>
              <tr>
                <th>4</th> 
                <td>Marjy Ferencz</td> 
                <td>Office Assistant I</td> 
                <td>Rowe-Schoen</td> 
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                
              </tr>
              <tr>
                <th>5</th> 
                <td>Yancy Tear</td> 
                <td>Community Outreach Specialist</td> 
                <td>Wyman-Ledner</td> 
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                
              </tr>
              <tr>
                <th>6</th> 
                <td>Irma Vasilik</td> 
                <td>Editor</td> 
                <td>Wiza, Bins and Emard</td> 
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td> 
                
              </tr>
              <tr>
                <th>7</th> 
                <td>Meghann Durtnal</td> 
                <td>Staff Accountant IV</td> 
                <td>Schuster-Schimmel</td> 
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td> 
                
              </tr>
              <tr>
                <th>8</th> 
                <td>Sammy Seston</td> 
                <td>Accountant I</td> 
                <td>O'Hara, Welch and Keebler</td> 
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td> 
                
              </tr>
              <tr>
                <th>9</th> 
                <td>Lesya Tinham</td> 
                <td>Safety Technician IV</td> 
                <td>Turner-Kuhlman</td> 
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
               
              </tr>
              <tr>
                <th>10</th> 
                <td>Zaneta Tewkesbury</td> 
                <td>VP Marketing</td> 
                <td>Sauer LLC</td> 
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
               
              </tr>
              <tr>
                <th>11</th> 
                <td>Andy Tipple</td> 
                <td>Librarian</td> 
                <td>Hilpert Group</td> 
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                
              </tr>
              <tr>
                <th>12</th> 
                <td>Sophi Biles</td> 
                <td>Recruiting Manager</td> 
                <td>Gutmann Inc</td> 
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>
            </tbody> 
          </table>
        </div>
      </div>
      
    </section>
  )
}

export default page