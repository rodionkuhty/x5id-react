import { Card } from 'antd'
import './styles.css'

const AccessSuccessfulContainer = () => {
  return (
    <div className="access-success__container">
      <Card>
        <p>Выполнен успешный вход</p>
        <p>Содержимое защищенного контента:</p>
        <p>Coming soon</p>
      </Card>
    </div>
  )
}

export default AccessSuccessfulContainer
