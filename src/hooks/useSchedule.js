import { useState } from 'react'
import { initialAppointments } from '../data/mockData'

const useSchedule =() => {
  const [appointments, setAppointments] = useState(initialAppointments)
  
  const addAppointment = (appointmentData) => {
    const newAppointment = {
      id: Date.now(),
      patient: appointmentData.patient || 'New Patient',
      date: appointmentData.date,
      status: 'pending',
      doctor: appointmentData.doctor,
      reason: appointmentData.reason
    }
    
    setAppointments(prev => [newAppointment, ...prev])
  }
  
  const removeAppointment = (id) => {
    setAppointments(prev => prev.filter(appointment => appointment.id !== id))
  }
  
  const updateAppointmentStatus = (id, newStatus) => {
    setAppointments(prev =>
      prev.map(appointment =>
        appointment.id === id
          ? { ...appointment, status: newStatus }
          : appointment
      )
    )
  }
  
  const getStats = () => {
    const scheduled = appointments.filter(a => a.status === 'scheduled').length
    const pending = appointments.filter(a => a.status === 'pending').length
    const cancelled = appointments.filter(a => a.status === 'cancelled').length
    
    return { scheduled, pending, cancelled }
  }
  
  return {
    appointments,
    addAppointment,
    removeAppointment,
    updateAppointmentStatus,
    getStats
  }
}

export default useSchedule