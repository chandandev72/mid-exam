import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-xl font-semibold text-gray-600 mb-4">Page Not Found</p>
      <p className="text-gray-500">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="block mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Go Home
      </Link>
    </div>
  </div>
  )
}

export default Error