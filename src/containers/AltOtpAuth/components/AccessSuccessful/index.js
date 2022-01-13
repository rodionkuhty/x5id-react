import { Card } from 'antd'
import './styles.css'

const AccessSuccessfulComponent = () => {
  return (
    <div className="access-success__container">
      <Card title="x5id">
        <p>Выполнен успешный вход</p>
        <p>Содержимое защищенного контента:</p>
        <p>Coming soon</p>
      </Card>
    </div>
  )
}

export default AccessSuccessfulComponent
