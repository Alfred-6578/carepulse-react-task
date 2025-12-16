import { useState } from 'react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'

const CancelModal = ({ isOpen, onClose, onConfirm, appointmentId })=> {
  const [reason, setReason] = useState('')
  
  const handleCancel = () => {
    onConfirm(appointmentId)
    setReason('')
    onClose()
  }
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Cancel Appointment">
      <p className="text-gray-400 text-sm mb-6">
        Are you sure you want to cancel your appointment
      </p>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Reason for cancellation
        </label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="ex: Urgent meeting came up"
          rows={4}
          className="w-full bg-[#1A1D21F5] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
        />
      </div>
      
      <Button 
        variant="danger" 
        size="lg" 
        className="w-full "
        onClick={handleCancel}
      >
        Cancel appointment
      </Button>
    </Modal>
  )
}

export default CancelModal