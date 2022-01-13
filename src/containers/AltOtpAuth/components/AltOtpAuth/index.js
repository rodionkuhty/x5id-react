import {Card, Form} from 'antd'
import MaskedInput from 'antd-mask-input'
import './styles.css'

const AltOtpAuthComponent = ({ onFinish }) => {
  return (
    <div className="altotpauth__container">
      <Card title="x5id">
        <p>Для входа в сервис, введите OTP:</p>
        <Form
          name="otp"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
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

export default AltOtpAuthComponent
