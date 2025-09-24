"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function LoginForm() {
   
	const [formData, setFormData] = useState({
		email:"",
		password:"",
	})

	const handleChange = (e)=>{
       const {name,value} = e.target;
	   setFormData( (prev) =>({
		...prev,
		[name]:value,
	   }))
	}

	const router = useRouter();

	const handleSubmit =async (e)=>{
     e.preventDefault();
	 
		try {
	    const respose = await axios.post(
			 " https://68d41937c0bcff12629088dc--econnerce1-backend.netlify.app//api/user/login",formData
		)	
		
		console.log(respose.data)
      
		if(respose.status ===201){
			alert("😍 login successfully")
			setTimeout(()=>{
				router.push("/")
			},1000)
		}



		} catch (error) {
			 console.error(error);
            alert("Something went wrong!");
		}

	}

  return (
 <div>
        <div className="w-full mx-auto my-10 max-w-md bg-gray-200  p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form noValidate="" action="" className="space-y-6" onSubmit={handleSubmit}>
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block dark:text-gray-600">Username</label>
			<input type="email"
			onChange={handleChange}
			value={formData.email}
			aria-label='email'
			 name="email"
			id="email"
			 placeholder="email"
			 className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block dark:text-gray-600">Password</label>
			<input
			onChange={handleChange}
			value={formData.password}
			aria-label='password'
			 type="password"
			 name="password" 
			  id="password"
			  placeholder="Password" 
			   className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			<div className="flex justify-end text-xs dark:text-gray-600">
				<a rel="noopener noreferrer" href="#" className=''> </a>
			</div>
		</div>
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-500 bg-emerald-500 dark:bg-violet-600 text-white cursor-pointer ">Login in</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		
	</div>
	
	<p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
		<a rel="noopener noreferrer" href="/signIn" className="underline dark:text-gray-800">Sign up</a>
	</p>
</div>
    </div>
  )
}

export default LoginForm