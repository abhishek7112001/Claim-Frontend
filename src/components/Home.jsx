import React from 'react'
import Hero from './Hero'

const Home = () => {
  return (
    <div>
      {/* Image */}
      <div className='my-6'>
        <img 
          className="w-full h-150 rounded-3xl border-4 border-gray-300 "
          src='./insurance.jpg' 
          alt="Insurance" 
        />
      </div>

      {/* Description */}
      <div className="px-6 py-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Our Insurance Services</h2>
        <p className="text-lg text-gray-700">
          We offer a wide range of insurance policies to help you protect what matters most.
          From vehicle and health insurance to home coverage, we've got you covered!
        </p>
      </div>

      {/* Hero */}
      <Hero />

      {/* About Us */}
      <div className="px-6 py-12 bg-white">
        <h3 className="text-2xl font-semibold text-center mb-4">About Us</h3>
        <p className="text-lg text-gray-700 text-center">
          We are a leading insurance provider dedicated to offering reliable and affordable coverage to individuals and businesses alike. 
          Our team is committed to helping you secure your future with the right insurance plans.
        </p>
      </div>

      {/* Contact Us(Footer) */}
      <div className="px-6 py-6 bg-black text-white text-center">
        <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
        <p className="text-lg">Feel free to reach out to us for any inquiries or assistance.</p>
        <p className="text-md mt-2">Email: abhisheklenovo2001@gmail.com | Phone: 7541939563</p>
      </div>
    </div>
  )
}

export default Home;
