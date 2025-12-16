const Badge = ({ status }) => {
  const statusConfig = {
    scheduled: {
      icon: '✓',
      text: 'Scheduled',
      bgColor: 'bg-green-500/20',
      textColor: 'text-green-400',
      borderColor: 'border-green-500/30'
    },
    pending: {
      icon: '⧗',
      text: 'Pending',
      bgColor: 'bg-blue-500/20',
      textColor: 'text-blue-400',
      borderColor: 'border-blue-500/30'
    },
    cancelled: {
      icon: '✕',
      text: 'Cancelled',
      bgColor: 'bg-red-500/20',
      textColor: 'text-red-400',
      borderColor: 'border-red-500/30'
    }
  }
  
  const config = statusConfig[status] || statusConfig.pending
  
  return (
    <span className={`
      inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium border
      ${config.bgColor} ${config.textColor} ${config.borderColor}
    `}>
      <span>{config.icon}</span>
      {config.text}
    </span>
  )
}

export default Badge