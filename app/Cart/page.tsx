import Dhero from '@/components/Dhero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Delivery_Pay from '@/components/Payment_delivery'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Cart = () => {
  return (
    <div>
      
      <Navbar bgColor='bg-white'/>
      <Dhero title='Cart' subtitle='Home' subtitle2='Cart'/>

      <div className="flex flex-col md:flex-row  px-10 mt-5 md:mt-10 mb-6">

      <table className="w-full text-left text-sm md:text-base ">
        <thead className=''>
          <tr className="bg-yellow-100 ">
            <th className="p-3">Product</th>
            <th className="p-3">Price</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Subtotal</th>
            
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className="flex items-center mt-5 md:mt-0">
              <Image
                src={"/Asgaard sofa 4.png"}
                height={92}
                width={100}
                alt="logo"
                className="bg-[#FBEBB5] "
              />
              <p className=" text-[#9F9F9F]"> Asgaard sofa</p>
            </div>
            </td>
            <td>
            <p className="text-[#9F9F9F]">Rs.250,000</p>
            </td>
            <td className="px-4">
            <p className="border px-2 border-[#9F9F9F] rounded-md md:w-[30%] ">1</p>
            </td>
            <td className=''><p>Rs.250,000</p></td>
          </tr>
        </tbody>
        </table>

          {/* col2 */}
        <div className="w-full md:w-[650px] bg-[#FFF9E5]  md:ml-20 py-5 mt-10 md:mt-0">

          <h1 className="text-center font-semibold text-xl md:text-3xl">Cart Totals</h1>

          <div className="flex flex-row justify-center items-center text-center mt-10 space-x-10">
            <div className="">
              <h1 className="font-medium">Subtotal</h1>
              <h1 className="font-medium mt-5">Total</h1>
            </div>
            <div className="">
              <p className="text-[#9F9F9F]">Rs. 250,000.00</p>
              <p className="mt-5 text-[#B88E2F] text-xl">Rs. 250,000.00</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 ">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-xl w-[130px] md:w-48 h-[30px] md:h-16 border text-xl border-[#000000]"
                >
                  Check Out
                </Button>
              </div>
        </div>

      </div>

      <Delivery_Pay />
      <Footer/>
    </div>
  )
}

export default Cart
