import { Card, Form, Button } from 'antd'
import MaskedInput from 'antd-mask-input'
import './styles.css'

const AltOtpAuthContainer = () => {

  const onFinish = values => {
    // signIn(values)
    console.log(values.target.value, 'this is values')
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="altotpauth__container">
      <Card>
        <p>Для входа в сервис, введите OTP:</p>
        <Form
          name="otp"
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
              placeholder="xxxxxx"
              mask="111111"
              allowClear={true}
              onChange={e => onFinish(e)}

            />
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default AltOtpAuthContainer
