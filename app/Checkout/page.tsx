import Dhero from '@/components/Dhero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Delivery_Pay from '@/components/Payment_delivery'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import React from 'react'

const Checkout = () => {
  return (
    <div>
        <Navbar bgColor='bg-white'/>
        <Dhero title='Checkout' subtitle='Home' subtitle2='Checkout'/>

            {/* form */}
            <div className="flex flex-col md:flex-row mt-20 py-14 px-5">

{/* col1 */}
<div className=" md:ml-[200px]">

  <h1 className="text-4xl font-semibold">Belling details</h1>

  <div className="mt-5 flex">

    <label className="text-sm">First Name</label>
    <Input className="w-[120px] h-12 border border-[#9F9F9F] mt-5 -ml-16" />
    <label className="text-sm ml-10">Last Name</label>
    <Input className="w-[120px] h-12 border border-[#9F9F9F] mt-5 -ml-16 " />
  </div>


  <div className="mt-5">

    <label className="text-sm">Company Name (Optional)</label>
    <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
  </div>

  <div className="mt-5">

    <label className="text-sm">Country / Region</label>
    <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
  </div>

  <div className="mt-5">

    <label className="text-sm">Street address</label>
    <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
  </div>

  <div className="mt-5">

    <label className="text-sm">Town / City</label>
    <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
  </div>

  <div className="mt-5">

    <label className="text-sm">Province</label>
    <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
  </div>

  <div className="mt-5">

    <label className="text-sm">ZIP code</label>
    <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
  </div>

  <div className="mt-5">

    <label className="text-sm">Phone</label>
    <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
  </div>

  <div className="mt-5">

    <label className="text-sm">Email address</label>
    <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
  </div>

  <div className="mt-8">

    
    <Input
      placeholder="Additional information"
      className="w-[323px] h-12 border border-[#9F9F9F] mt-4"
    />
  </div>

</div>
{/* col2 */}

<div className="md:ml-[100px] mt-10 md:mt-0">
  {/* col11 */}
  <div className="grid grid-cols-2">
    
    <div>
      <h1 className="text-2xl font-semibold">Product</h1>
      <p className="text-[#9F9F9F] mt-5">
        Asgaard sofa <span className="text-[#000000]">X 1</span>
      </p>
      <p className="text-sm mt-5">Subtotal</p>
      <p className="text-sm mt-5">Total</p>
    </div>

    {/* col22 */}
    <div>

      <h1 className="text-2xl font-semibold">Subtotal</h1>
      <p className="text-sm mt-5">Rs. 250,000.00</p>
      <p className="text-sm mt-5">Rs. 250,000.00</p>
      <p className="text-2xl mt-5 font-semibold text-[#B88E2F]">
        Rs. 250,000.00
      </p>
    </div>

  </div>
  {/* border line */}
  <div className="w-full md:w-[80%] border border-[#9F9F9F] mt-8"></div>
    {/* Bank detail */}
  <div className="mt-5">
    <div className="flex gap-2">
      {/* black dot */}
      <p className="bg-black rounded-full w-3 h-3 mt-1.5"></p>

      <h1 className=""> Direct Bank Transfer</h1>
    </div>

    <div className="mt-5">
      <p className="text-balance text-[#9F9F9F]">
        Make your payment directly into our bank account. Please use
        your Order ID as the payment reference. Your order will not be
        shipped until the funds have cleared in our account.
      </p>
    </div>

    <div className="flex gap-2 mt-5 text-[#9F9F9F]">

        <Checkbox className="rounded-full mt-1"/>
      <h1 className=""> Direct Bank Transfer</h1>
    </div>

    <div className="flex gap-2 mt-3 text-[#9F9F9F]">

    <Checkbox className="rounded-full mt-1"/>
      <h1 className=""> Cash On Delivery</h1>
    </div>

    <div className="mt-5">
      <p className="text-balance">
        Your personal data will be used to support your experience
        throughout this website, to manage access to your account, and
        for other purposes described in our{" "}
        <span className="font-bold">privacy policy.</span>
      </p>
    </div>

    {/* Button */}
    <div className="flex justify-center mt-8 w-2/3">
      <Button
        variant={"outline"}
        size={"icon"}
        className="rounded-xl w-56  h-12 border border-[#000000]"
      >
        Place order
      </Button>
    </div>

  </div>
</div>
</div>

<Delivery_Pay/>
      <Footer/>
    </div>
  )
}

export default Checkout
