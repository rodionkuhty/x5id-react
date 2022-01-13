import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import { routes } from 'constants/routes'
import './styles.css'

const OtpAccessDeniedComponent = () => {
  const navigate = useNavigate()

  const redirectToInputNumberPage = () => {
    navigate(routes.inputPhoneNumber)
  }

  return (
    <div className="otpdenied__container">
      <Card title="x5id">
        <p>Вход невозможен!</p>
        <p>Некорректно введен OTP</p>
        <Button onClick={redirectToInputNumberPage}>
          Повторить
        </Button>
      </Card>
    </div>
  )
}

export default OtpAccessDeniedComponent
