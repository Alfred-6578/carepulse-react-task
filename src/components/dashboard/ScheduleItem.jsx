import { useState } from 'react'
import Avatar from '../ui/Avatar'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import CancelModal from './CancelModal'

function ScheduleItem({ appointment, onRemove, onSchedule }) {
  const [showCancelModal, setShowCancelModal] = useState(false)
  
  const handleCancelClick = () => {
    setShowCancelModal(true)
  }
  
  const handleConfirmCancel = (id, reason) => {
    onRemove(id)
  }
  
  return (
    <>
      <div className="grid grid-cols-5 gap-4 items-center py-4 px-6 border-b border-gray-800 last:border-b-0 hover:bg-gray-800/50 transition-colors">
        <div className="flex items-center gap-3">
          <Avatar name={appointment.patient} size="sm" />
          <span className="text-white font-medium text-sm">{appointment.patient}</span>
        </div>
        
        <div className="text-gray-300 text-sm">
          {appointment.date}
        </div>
        
        <div>
          <Badge status={appointment.status} />
        </div>
        
        <div className="flex items-center gap-3">
            {appointment.doctor.image ?
                <img src={appointment.doctor.image} alt="" className='w-8 h-8 rounded-full object-cover'/> 
                : <Avatar name={appointment.doctor} size='sm'/>
            }
            <span className="text-gray-300 text-sm">{appointment.doctor.name}</span>
        </div>
        
        <div className="flex items-center gap-2 justify-end">
          {appointment.status !== 'scheduled' && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onSchedule(appointment.id)}
              className="text-green-500 hover:text-green-400"
            >
              Schedule
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCancelClick}
            className="text-gray-400 hover:text-red-500"
          >
            Cancel
          </Button>
        </div>
      </div>
      
      <CancelModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleConfirmCancel}
        appointmentId={appointment.id}
      />
    </>
  )
}

export default ScheduleItem