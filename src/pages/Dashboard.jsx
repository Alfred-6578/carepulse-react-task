import Navbar from '../components/layout/Navbar'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import StatsCard from '../components/dashboard/StatsCard'
import ScheduleList from '../components/dashboard/ScheduleList'
import AddScheduleModal from '../components/dashboard/AddScheduleModal'
import Button from '../components/ui/Button'
import useSchedule from '../hooks/useSchedule'
import useModal from '../hooks/useModal'

function Dashboard() {
  const { 
    appointments, 
    addAppointment, 
    removeAppointment, 
    updateAppointmentStatus,
    getStats 
  } = useSchedule()
  
  const { isOpen, openModal, closeModal } = useModal()
  
  const stats = getStats()
  
  const handleAddAppointment = (appointmentData) => {
    const date = new Date(appointmentData.date)
    const formattedDate = date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
    
    addAppointment({
      ...appointmentData,
      date: formattedDate
    })
  }
  
  const handleSchedule = (id) => {
    updateAppointmentStatus(id, 'scheduled')
  }

  const handleRemove = (id) => {
    updateAppointmentStatus(id, 'cancelled')
  }
  
  return (
    <div className="min-h-screen bg-bg-primary">
        <div className="p-4">
            <Navbar />
        </div>
      
      <main className="max-w-7xl mx-auto px-16 py-8">
        <DashboardHeader />
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            icon={'/assets/Icon1.png'}
            count={stats.scheduled}
            label="Total number of scheduled appointments"
            color="yellow"
          />
          <StatsCard
            icon={'/assets/Icon2.png'}
            count={stats.pending}
            label="Total number of pending appointments"
            color="blue"
          />
          <StatsCard
            icon={'/assets/Icon3.png'}
            count={stats.cancelled}
            label="Total number of cancelled appointments"
            color="red"
          />
        </div>
        
        
        <div className="flex justify-end mb-4">
          <Button
            variant="primary"
            size="md"
            onClick={openModal}
          >
            + Add to schedule
          </Button>
        </div>
        
        
        <ScheduleList
          appointments={appointments}
          onRemove={handleRemove}
          onSchedule={handleSchedule}
        />
      </main>
      
      
      <AddScheduleModal
        isOpen={isOpen}
        onClose={closeModal}
        onAdd={handleAddAppointment}
      />
    </div>
  )
}

export default Dashboard