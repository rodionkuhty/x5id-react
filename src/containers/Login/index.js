import { Form, Input, Button } from 'antd'
import { useAuth } from 'hooks/useAuth'
import MaskedInput from 'antd-mask-input'
import 'antd/dist/antd.css'
import './styles.css'

const AuthContainer = () => {
  const { signIn } = useAuth()
  const onFinish = values => {
    // signIn(values)
    console.log(values, 'this is values')
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="auth__container">
      <div className="auth__form">
        <div className="auth__title">
          Для входа в сервис, введите:
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label=""
            name="phone"
            rules={[{ required: true, message: 'Введены некорректные данные' }]}
            style={{ width: '100%' }}
          >
            <MaskedInput
              placeholder="+7 (xxx)-xxx-xx-xx"
              mask="+7 (111)-111-11-11"
              allowClear={true}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="default" htmlType="submit" disabled={false}>
            Продолжить
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}


export default AuthContainer
