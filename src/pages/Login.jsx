import TwoColumnLayout from '../components/layout/TwoColumnLayout'
import LoginFormSection from '../components/login/LoginFormSection'
import LoginImageSection from '../components/login/LoginImageSection'

function Login() {
  return (
    <TwoColumnLayout
      leftContent={<LoginFormSection />}
      rightContent={<LoginImageSection />}
    />
  )
}

export default Login