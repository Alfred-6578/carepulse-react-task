"use client"
import ScheduleItem from './ScheduleItem'
import { useState } from 'react'

const ScheduleList = ({ appointments, onRemove, onSchedule }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  
  const totalPages = Math.ceil(appointments.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentAppointments = appointments.slice(startIndex, endIndex)
  
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(totalPages)
  }


  if (appointments.length === 0) {
    return (
      <div className="bg-bg-secondary rounded-lg border border-gray-800 p-12 text-center">
        <p className="text-gray-400 text-lg">No appointments scheduled yet</p>
        <p className="text-gray-500 text-sm mt-2">Click "Add to schedule" to create your first appointment</p>
      </div>
    )
  }
  
  return (
    <div className="bg-bg-primary rounded-lg border border-gray-800 overflow-hidden">
      <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-bg-secondary border-b border-gray-800">
        <div className="text-gray-400 font-medium text-sm">Patient</div>
        <div className="text-gray-400 font-medium text-sm">Date</div>
        <div className="text-gray-400 font-medium text-sm">Status</div>
        <div className="text-gray-400 font-medium text-sm">Doctor</div>
        <div className="text-gray-400 font-medium text-sm text-right">Actions</div>
      </div>
      
      <div>
        {currentAppointments.map(appointment => (
          <ScheduleItem
            key={appointment.id}
            appointment={appointment}
            onRemove={onRemove}
            onSchedule={onSchedule}
          />
        ))}
      </div>
      
      <div className="flex items-center justify-between px-6 py-4 bg-bg-secondary border-t border-gray-800">
        <button 
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className={`p-2 transition-colors bg-[#1C2023] rounded-lg  ${
            currentPage === 1 
              ? 'text-gray-600 cursor-not-allowed' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <svg className="w-5 h-5 text-[#24AE7C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="text-gray-400 text-sm">
          Page {currentPage} of {totalPages}
        </div>
        
        <button 
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`p-2 transition-colors bg-[#1C2023] rounded-lg ${
            currentPage === totalPages 
              ? 'text-gray-600 cursor-not-allowed' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <svg className="w-5 h-5 text-[#24AE7C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ScheduleList