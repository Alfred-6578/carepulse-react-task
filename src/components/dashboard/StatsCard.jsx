const StatsCard = ({ icon, count, label, color }) => {
  const colorClasses = {
    yellow: 'bg-yellow-500/10 text-yellow-500',
    blue: 'bg-blue-500/10 text-blue-500',
    red: 'bg-red-500/10 text-red-500'
  }
  
  return (
    <div className="flex flex-col gap-4 stats-gradient rounded-lg p-6 py-8 h-[152px]">
        <div className="flex gap-3 items-center">
            <img src={icon} alt="icon" className="w-auto h-[27px]"/>
             <h3 className="text-3xl font-bold text-white mb-1">{count}</h3>
        </div>
      
        <p className="text-gray-400 text-sm">{label}</p>
    </div>
  )
}

export default StatsCard