import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import AuthService from '../../services/auth'
import toastr from 'toastr'

const service = new AuthService()

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        service
          .signup(values)
          .then(response => {
            console.log(response)
            toastr.success('Se creo tu cuenta')
          })
          .catch(err => {
            console.log(err)
            toastr.error('Algo salió mal :( ')
          })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Por favor pon tu correo' }]
          })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Correo" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Ingresa una contraseña' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Entrar
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedNormalSignupForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

export default WrappedNormalSignupForm