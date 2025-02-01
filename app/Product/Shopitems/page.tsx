import Dhero from '@/components/Dhero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Delivery_Pay from '@/components/Payment_delivery'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Iproduct{
  title: string,
  price: string,
  id: number,
  imag_url: string
}

const products:Iproduct[] = [
  {
      title: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      id: 1,
      imag_url: "/p1.png"
  },
  {
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      id: 2,
      imag_url: "/p2.png"
  },
  {
      title: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      id: 3,
      imag_url: "/p3.png"
  },
  {
      title: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      id: 4,
      imag_url: "/p4.png"
  },
  {
    title: "Grain coffee table",
    price: "Rs. 15,000.00",
    id: 5,
    imag_url: "/p5.png"
},
{
    title: "Kent coffee table",
    price: "Rs. 225,000.00",
    id: 6,
    imag_url: "/p6.png"
},
{
    title: "Round coffee table_color 2",
    price: "Rs. 251,000.00",
    id: 7,
    imag_url: "/p7.png"
},
{
    title: "Reclaimed teak coffee table",
    price: "Rs. 25,200.00",
    id: 8,
    imag_url: "/p8.png"
},
{
  title: "Plain console_",
  price: "Rs. 258,200.00",
  id: 9,
  imag_url: "/p9.png"
},
{
  title: "Reclaimed teak Sideboard",
  price: "Rs. 20,000.00",
  id: 10,
  imag_url: "/p10.png"
},
{
  title: "SJP_0825",
  price: "Rs. 200,000.00",
  id: 11,
  imag_url: "/p11.png"
},
{
  title: "Bella chair and table",
  price: "Rs. 100,000.00",
  id: 12,
  imag_url: "/p12.png"
},
{
  title: "Granite square side table",
  price: "Rs. 258,800.00",
  id: 13,
  imag_url: "/p13.png"
},
{
  title: "Asgaard sofa",
  price: "Rs. 250,000.00",
  id: 14,
  imag_url: "/p14.png"
},
{
  title: "Maya sofa three seater",
  price: "Rs. 115,000.00",
  id: 15,
  imag_url: "/p15.png"
},
{
  title: "Outdoor sofa set",
  price: "Rs. 244,000.00",
  id: 16,
  imag_url: "/p16.png"
},

]


const Shoph = () => {
  return (
    <div>
      <Navbar bgColor=" bg-white"/>

      <Dhero title='Shop' subtitle='Home' subtitle2='Shop'/>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4 '>
        {products.map((data) => {
          return(
            <div key={data.id}>
            <Link href={`/Product/${data.id}`} >
              <div  className='flex flex-col items-center'>
              <Image src={data.imag_url} width={200} height={200} alt={data.title} className='w-[200px] h-[200px]' />
              <h5 className='text-lg'>{data.title}</h5>
              <p className='text-lg'>{data.price}</p>
            </div>
            </Link>
            </div>
          )
        }
        )}
      </div>
      <Delivery_Pay/>
            <Footer/>
    </div>
  )
}

export default Shoph
