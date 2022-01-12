import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const OtpAccessDeniedContainer = () => {
  const navigate = useNavigate()

  const redirectToInputNumberPage = () => {
    navigate('/inputphonenumber')
  }

  return (
    <div className="otpdenied__container">
      <Card>
        <p>Вход невозможен!</p>
        <p>Некорректно введен OTP</p>
        <Button onClick={redirectToInputNumberPage}>
          Повторить
        </Button>
      </Card>
    </div>
  )
}

export default OtpAccessDeniedContainer
