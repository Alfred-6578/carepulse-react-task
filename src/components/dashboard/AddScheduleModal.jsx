import { useState } from 'react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'
import { doctors } from '../../data/mockData'

function AddScheduleModal({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    doctor: null,
    reason: '',
    date: '',
    patient: ''
  })
  
  const [showDoctorDropdown, setShowDoctorDropdown] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.doctor || !formData.reason || !formData.date) {
      alert('Please fill in all fields')
      return
    }
    
    onAdd(formData)

    setFormData({
      doctor: '',
      reason: '',
      date: '',
      patient: ''
    })
    
    onClose()
  }
  
  const selectDoctor = (doctorName) => {
    setFormData({ ...formData, doctor: doctorName })
    setShowDoctorDropdown(false)
  }
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Schedule Appointment">
      <p className="text-gray-400 text-sm mb-6">
        Please fill in the following details to schedule
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Patient Name (Optional)
          </label>
          <input
            type="text"
            value={formData.patient}
            onChange={(e) => setFormData({ ...formData, patient: e.target.value })}
            placeholder="Enter patient name"
            className="w-full bg-[#1A1D21F5] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 placeholder:text-sm text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Doctor
          </label>
          <div className="relative ">
            <button
              type="button"
              onClick={() => setShowDoctorDropdown(!showDoctorDropdown)}
              className={`${formData.doctor ? "py-2": "py-3" } w-full px-4 bg-[#1A1D21F5] border border-gray-700 rounded-lg text-left text-sm text-white flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-green-500`}
            >
              <div className="flex gap-3 items-center">
               <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                </svg>
                {formData.doctor ? (
                    <div className="flex items-center gap-3 bg-[linear-gradient(117.58deg,rgba(215,237,237,0.16),rgba(204,235,235,0))] py-2 px-3 rounded-lg">
                    <img 
                        src={doctors.find(d => d.name === formData.doctor)?.image || `https://ui-avatars.com/api/?name=${formData.doctor}&background=random`}
                        alt={formData.doctor}
                        className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className='text-[12px]'>{formData.doctor}</span>
                    </div>
                ) : (
                    <span className="text-gray-500">Select a doctor</span>
                )}
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showDoctorDropdown && (
              <div className="absolute z-20 w-full mt-2 bg-[#1A1D21F5] border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
                <div className="px-4 py-3 text-sm text-gray-400 border-b border-gray-800">
                  Doctors
                </div>
        
                <div className="max-h-64 overflow-y-scroll no-scrollbar">
                  {doctors.map(doctor => (
                    <button
                      key={doctor.id}
                      type="button"
                      onClick={() => selectDoctor(doctor.name)}
                      className={`
                        w-full px-4 py-3 text-left hover:bg-bg-primary flex items-center justify-between transition-colors
                        ${formData.doctor === doctor.name ? 'bg-[linear-gradient(117.58deg,rgba(215,237,237,0.16),rgba(204,235,235,0))]' : ''}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={doctor.image || `https://ui-avatars.com/api/?name=${doctor.name}&background=random`}
                          alt={doctor.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="text-white font-medium">{doctor.name}</span>
                      </div>
                      {formData.doctor === doctor.name && (
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Reason for appointment
          </label>
          <textarea
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            placeholder="ex: Annual monthly check-up"
            rows={3}
            className="w-full bg-[#1A1D21F5] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 placeholder:text-sm text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Expected appointment date
          </label>
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className={`w-full bg-[#1A1D21F5] border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer
              [&::-webkit-calendar-picker-indicator]:opacity-0
              [&::-webkit-calendar-picker-indicator]:absolute
              [&::-webkit-calendar-picker-indicator]:w-full
              [&::-webkit-calendar-picker-indicator]:h-full
              [&::-webkit-calendar-picker-indicator]:cursor-pointer
              [&::-webkit-datetime-edit]:opacity-0
              [&::-webkit-datetime-edit-fields-wrapper]:opacity-0
              ${formData.date ? 'text-white [&::-webkit-datetime-edit]:opacity-100 [&::-webkit-datetime-edit-fields-wrapper]:opacity-100' : 'text-transparent'}`}
            />
            {!formData.date && (
              <span className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                Select your appointment date
              </span>
            )}
          </div>
        </div>
        
        <Button type="submit" variant="primary" size="lg" className="w-full mt-6">
          Schedule appointment
        </Button>
      </form>
    </Modal>
  )
}

export default AddScheduleModal