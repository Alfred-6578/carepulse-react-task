const TwoColumnLayout = ({ leftContent, rightContent }) => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-bg-primary flex items-center justify-center p-8">
        {leftContent}
      </div>
      
      <div className="hidden lg:block relative">
        {rightContent}
      </div>
    </div>
  )
}

export default TwoColumnLayout