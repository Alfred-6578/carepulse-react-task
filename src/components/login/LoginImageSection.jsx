const LoginImageSection = () => {
  return (
    <div className="w-full h-[100vh] fixed overflow-hidden">

      <img
        src="/assets/LoginImage.png"
        alt="Medical professional"
        className="w-[50%] h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20" />
    </div>
  )
}

export default LoginImageSection