import './App.css'
import Header from './components/Header'
import vision from './assets/vision.avif'
import mission from './assets/mission.avif'
import { Boxes, Building2, Check, UsersRound } from 'lucide-react'
import pic1 from './assets/pic1.jpg'
import pic2 from './assets/pic2.jpg'
import pic3 from './assets/pic3.jpg'
import pic4 from './assets/pic4.jpg'
import pic5 from './assets/pic5.jpg'
import pic6 from './assets/pic6.jpg'
import pic7 from './assets/pic7.jpg'
import Footer from './components/Footer'


function App() {

  return (
  <div className=''>
  <Header></Header>
  {/* hero */}
  <section>
    <div className='hero text-light '>
      <div className="row m-0  w-100 " style={{minHeight:"90vh"}}>
        <div className="col-md-6 m-0 bg-light text-dark d-flex align-items-center justify-content-center p-5">
          <div>
            <h1 className='main_head'>Your trusted <br /> partner in <br /> manpower , <br /> matereal supply & Scrap Purchase</h1>
            <h6>Deliveing workforce  and materials  <br /> to empower to your projects</h6>
            <a href='#contact' className='my-4 btn btn-blue-yellow'>
              Get in Touch
            </a>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  </section>
{/* mission vision */}
<div className='  py-5 mb-5 container    '>
    <section className=' ' id='about'>
      <div className="row bg-yellow   p-3">
      <div className="col-md-6  ">
        <img src={mission} className='w-100 rounded img-fluid' alt="" />
      </div>
      <div className="col-md-6 my-3 px-4 ">
        <h2 className='fw-bold text-blue'>Our Mission</h2>
        <p>
        At VTH Group, our mission is to provide industries with comprehensive and dependable solutions in manpower supply, project material procurement, and excess and scrap material management. We are committed to helping our clients complete their projects with efficiency, quality, and cost-effectiveness by offering skilled manpower, sourcing premium materials, and turning excess resources into valuable assets.
        <br />
We believe that success is built on trust, consistency, and continuous improvement. That’s why we invest in strengthening our workforce capabilities, building reliable supply chains, and promoting sustainable practices in scrap management. By maintaining high standards of safety, integrity, and professionalism, we aim to build long-term partnerships that empower businesses to grow while contributing to a cleaner, resource-efficient future.
        </p>
      </div>
        <div className="col-md-6 my-3  ">
          <h2 className='fw-bold text-blue'>Our Vision</h2>
          <p className=''>Our vision at VTH Group is to become a leading force in integrated supply solutions — recognized across industries for our commitment to excellence, innovation, and sustainability. We aspire to set new benchmarks in the manpower supply sector, streamline the material procurement process for projects of all scales, and lead the way in responsible and eco-friendly scrap management practices.
            <br />
Looking ahead, we envision expanding our footprint across national and global markets, evolving into a trusted partner for industries seeking complete resource solutions. By embracing technology, enhancing our service offerings, and upholding our core values, we aim to drive positive change in the industries we serve — making VTH Group synonymous with quality, reliability, and sustainable progress.</p>
        </div>
        <div className="col-md-6  ">
          <img src={vision} className='w-100 ' alt="" />
        </div>
       
      </div>
    </section>
</div>
{/* service */}
<section className='my-5 p-5 bg-blue' id='services'>
  <div className="container">
    <h2 className='text-light fw-bold'>Our Services</h2>
    <div className="row   ">
      <div className="col-md-4 mb-3 ">
        <div className='card p-3 d-flex justify-content-center align-items-center'>
        <UsersRound size={80} className='text-yellow'/>
      <h4 className='fw-bold text-blue'>Man Power Supply</h4>
      <p>We provide skilled and reliable manpower to meet your project needs — from technical experts to general labor, ensuring smooth and timely execution of your work.  </p>
        </div>
    
    
      </div>

      <div className="col-md-4 mb-3 ">
        <div className='card p-3 d-flex justify-content-center align-items-center'>
        <Building2  size={80} className='text-yellow'/>
      <h4 className='fw-bold text-blue'>Project Material Supply</h4>
      <p>We supply high-quality project materials sourced from trusted vendors, helping you complete your projects with efficiency and without delays.  </p>
        </div>
    
    
      </div>
    
      <div className="col-md-4 mb-3 ">
        <div className='card p-3 d-flex justify-content-center align-items-center'>
        <Boxes size={80} className='text-yellow'/>
      <h4 className='fw-bold text-blue'>Scrap Purchase </h4>
      <p>We manage and supply excess and scrap purchase, turning surplus resources into value while supporting your sustainability goals.  </p>
        </div>
     
      </div>
    </div>
  </div>

</section>
{/* why choose us */}
<section className='container'>
<h2 className='text-blue fw-bold'>Why choose us? </h2>
<div className="row">
  <div className="col-md-6">
  <p className='fs-5 mb-3'><Check className='text-yellow me-2' size={36} /> Comprehensive Solutions</p>
  <p className='ms-5'>From manpower supply to project materials and scrap management — we offer complete services under one roof.</p>
  <p className='fs-5 mb-3'><Check className='text-yellow me-2' size={36} /> Quality Materials Guaranteed</p> 
  <p className='ms-5'>We source and deliver only top-grade project materials from trusted suppliers to maintain your quality standards.

</p>

  </div>
  <div className="col-md-6">
  <p className='fs-5 mb-3'><Check className='text-yellow me-2' size={36} /> Efficient Scrap & Excess Handling</p>
  <p className='ms-5'>We turn your project surplus and scrap into valuable resources, supporting both profitability and sustainability.</p>
  <p className='fs-5 mb-3'><Check className='text-yellow me-2' size={36} /> Skilled & Reliable Workforce</p> 
  <p className='ms-5'>We provide trained manpower that meets industry standards and ensures your projects run smoothly.</p>

  </div>
</div>
</section>
{/* gallery */}
<section className='container my-5'>
<h2 className='text-blue fw-bold'>Our Products</h2>
  <div className="row">
    <div className="col-md-4 col-6 mb-3">

  <img src={pic1} className='w-100 rounded' alt="" />
    </div>
    <div className="col-md-4 col-6  mb-3">

  <img src={pic2} className='w-100 rounded' alt="" />
    </div>
    <div className="col-md-4 col-6  mb-3">

<img src={pic3} className='w-100 rounded' alt="" />
  </div>
    
  <div className="col-md-4 col-6  mb-3">

<img src={pic4} className='w-100 rounded' alt="" />
  </div>
        

  <div className="col-md-4 col-6  mb-3">

<img src={pic6} className='w-100 rounded' alt="" />
  </div>
  <div className="col-md-4 col-6  mb-3">

<img src={pic7} className='w-100 rounded' alt="" />
  </div>
  </div>
</section>
<Footer></Footer>
  </div>
  )
}

export default App
