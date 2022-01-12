import { Link } from 'react-router-dom'
import { Card } from 'antd'
import './styles.css'

const PushAuthContainer = () => {
  return (
    <div className="pushauth__container">
      <Card title="x5id" style={{ width: 500 }} hoverable>
        <div className="pushauth__title">
          Откройте приложение X5.Auth и нажмите «Принять»
        </div>
        <div className="pushauth__link">
          <Link to="/altotpauth">
            Не получили Push-уведомление?
          </Link>
        </div>
      </Card>

    </div>
  )
}

export default PushAuthContainer
