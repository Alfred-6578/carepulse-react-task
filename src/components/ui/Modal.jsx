import { useEffect } from 'react'

const Modal = ({ isOpen, onClose, title, children })=> {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-80"
        onClick={onClose}
      />
      
      <div className="relative bg-[#1A1D21F5] rounded-2xl shadow-2xl max-w-lg max-h-[95vh] overflow-y-auto overflow-x-hidden custom-scrollbar w-full mx-4 p-8 z-10">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal