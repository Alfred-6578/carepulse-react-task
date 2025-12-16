import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import Button from '../ui/Button'

const LoginFormSection = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  })
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }
  
  return (
    <div className="w-full max-w-md">

      <div className="flex items-center gap-2 mb-8">
        <img src="/assets/logo.png" alt="" />
        <span className="text-xl font-semibold text-white">CarePulse</span>
      </div>
      

      <h1 className="text-4xl font-bold text-white mb-2">
        Hi there, ....
      </h1>
      <p className="text-gray-400 mb-8">
        Get Started with Appointments.
      </p>


      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Full name"
          type="text"
          name="fullName"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
          required
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        />
        
        <Input
          label="Email address"
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />
        
        <Input
          label="Phone number"
          type="tel"
          name="phone"
          placeholder="+234 901 334 7728"
          value={formData.phone}
          onChange={handleChange}
          required
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          }
        />
        
        <Button type="submit" variant="primary" size="lg" className="w-full">
          Get Started
        </Button>
      </form>
      

      <p className="text-gray-500 text-sm mt-8">
        @carepulse copyright
      </p>
    </div>
  )
}

export default LoginFormSection