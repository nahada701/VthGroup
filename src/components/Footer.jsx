import React from 'react'
import logo from '../assets/logo.png'
import { Mail, MapPin, Phone } from 'lucide-react'
const Footer = () => {
  return (
    <div id='contact'>
        <div className='bg-blue text-light py-1' >
    <div className='container px-2 w-100 mt-5 ' >
        <div className="d-flex justify-content-between flex-wrap ">
            <div className='d-flex flex-column pb-2' >
               <img src={logo} width={'100px'} alt="" />
                <h2>مجموعة في تي اتش</h2>
                
            </div>
            <div>
            <h3>Address </h3>
            <div className='d-flex'>
            <MapPin size={26} className='me-2' />
            <p>Talisa ind. Area <br />Dammam.KSA</p>
            </div>
            <div className='d-flex'>
            <MapPin size={26} className='me-2' />
            <p>Industrial Area, <br />Sharjah.U.A.E</p>
            </div>
           
            

           </div>
           <div>
            <h3>Contact Us</h3>
            <p> <Phone size={26} className='me-2' />+966 56 741 92 45 </p>
            <p> <Phone size={26} className='me-2 ' />+966 57 218 40 37 </p>
            <p> <Phone size={26} className='me-2' />+971 56 907 09 50 </p>
            <p><Mail size={26} className='me-2' />vthgroup1@gmail.com</p>


           </div>
           
          
        </div>
        <p className='text-center mt-5  pb-4'>Copyright &copy; VthGroup @2025. all rights resrved.</p>
    </div>
</div>
    </div>
  )
}

export default Footer