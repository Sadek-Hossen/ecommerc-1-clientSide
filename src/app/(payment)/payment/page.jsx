import React, { Suspense } from 'react'
import Payment from '../../compunents/layouts/payment/payment'

function PaymentPage() {
  return (
    <div>
   <div className='max-w-4xl mx-auto py-10 shadow-blue-600 rounded-2xl mt-3 bg-blue-200'>
         <h1 className='text-2xl font-bold font-mono text-center'>Your Payment </h1>
      <Suspense fallback={<div>Loading...</div>}>
      <Payment />
    </Suspense>
        
   </div>
    </div>
  )
}

export default PaymentPage