import Avatar from '../ui/Avatar'

const Navbar = () => {
  return (
    <nav className="bg-bg-secondary  px-6 py-4 rounded-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="">
            <img src="/assets/logo.png" alt="" className="" />
          </div>
          <span className="text-xl font-semibold text-white">CarePulse</span>
        </div>
        
        <div className="flex items-center gap-3">
          <img src="/assets/admin.png" alt="" className='w-8 h-8' />
          <span className="text-white font-medium">Admin</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar