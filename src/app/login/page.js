"use client"
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const page = () => {
    const searchParams = useSearchParams();
    const router = useRouter()

    const addAccount = (code) => {
        fetch('https://futurbro.in.net/api/v1/users/dj-rest-auth/google/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
            })
            .then(res => res.json())
            .then(data => {
            // enter you logic when the fetch is successful
                window.localStorage.setItem("UserData", JSON.stringify(data))
                window.localStorage.setItem("is_superuser", JSON.stringify(data.user.is_superuser))

                // window.location.replace("")
                router.push('/', { scroll: false })
                
            })
            .catch(error => {
            // enter your logic for when there is an error (ex. error toast)
            console.log(error)
        }) 
    }
    useEffect(() => {
        
        const code = searchParams.get('code')
        if (code) {
            addAccount(code)
        }
    }, [])
    const reachGoogle = () => {
        const clientID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
        const callBackURI = process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URI
        
        window.location.replace(`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${callBackURI}&prompt=consent&response_type=code&client_id=${clientID}&scope=openid%20email%20profile&access_type=offline`)
    }
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                <div className="form-control">
                    <button onClick={reachGoogle} className="btn btn-primary">Login with google</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page