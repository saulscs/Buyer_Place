import React from 'react'
import { Form, Input, Button} from 'antd';

function LoginForm({ handleInputs, handleSubmit }) {
  return (
    <Form layout="inline">
    <h1>Iniciar Sesion</h1>
      <Form.Item>
      <Input type="email" name="email"  placeholder="correo" onChange={handleInputs} />
      </Form.Item>
      <Form.Item>
      <Input type="password" name="password" placeholder="contraseña" onChange={handleInputs} />
      </Form.Item>
      <Form.Item>
      <Button onClick={handleSubmit}>Iniciar</Button>
      </Form.Item>
      </Form>
  )
}

export default LoginForm
