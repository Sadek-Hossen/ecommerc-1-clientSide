"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

function Payment() {
  const searchParams = useSearchParams()
  const name = searchParams.get("name")
  const price = searchParams.get("price")
  const image = searchParams.get("image")

  const [phone, setPhone] = useState("")
  const router = useRouter()

  const handlesBtn = (e) => {
    e.preventDefault()

    if (!name || !price || !phone || !image) {
      alert("Please fill in all fields")
      return
    }

    const allValue = {
      name,
      price,
      phone,
      image
    }

    setTimeout(() => {
      console.log(allValue)
      alert("Your order is confirmed")
      router.push("/")
    }, 1000)
  }

  return (
    <div className='px-5 py-4'>
      <form onSubmit={handlesBtn} className='max-w-lg mx-auto border-2 border-green-400 rounded-2xl p-6 '>
        <p className='text-2xl'>Total Tk : {price}</p>
        <p className='text-2xl font-bold '>Product Name : {name}</p>
        <p className='text-2xl'> Product Price: {price}</p>
        <img className='w-32 h-32 rounded-lg' src={image} alt={name} />

        <div className='flex mx-auto justify-center py-4 gap-2'>
          <label className='bg-green-400 px-4 py-3 rounded-2xl font-semibold'>Add Bkash Number</label>
          <input
            name='phone'
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Add your bkash Number'
            className='px-4 py-3 rounded-2xl border'
          />
        </div>

        <div className='flex mx-auto justify-center py-4'>
          <button type='submit' className='bg-green-400 cursor-pointer px-4 py-3 rounded-2xl font-semibold'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Payment
