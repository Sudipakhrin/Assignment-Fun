import React from 'react'

export const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">About Us</h1>
      <h2 className="text-2xl font-semibold mb-8">Who We Are</h2>

      <div className="w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 text-center md:text-left bg-white p-8 rounded shadow-md">
        <p className="mb-4">
          We are a dynamic team passionate about what we do. Our team is made up of individuals with diverse backgrounds and skills, united by our love for technology and innovation.
        </p>

        <p className="mb-4">
          Our aim is to provide the highest quality service to our customers, and we constantly strive to improve and innovate. We believe in the transformative power of technology and its ability to simplify and enhance our lives.
        </p>

        <p>
          Whether you're an individual, a start-up, or an established company, we're committed to helping you achieve your goals. We look forward to working with you!
        </p>
      </div>
    </div>
  )
}



