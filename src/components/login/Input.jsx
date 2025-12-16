const Input = ({ 
  label, 
  name,
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  icon,
  required = false, 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`
            w-full bg-[#1A1D21] border border-gray-700 rounded-lg
            px-4 py-3 text-white placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
            transition-all duration-200
            ${icon ? 'pl-10' : ''}
          `}
        />
      </div>
    </div>
  )
}

export default Input