import React from 'react'
import { Form, Input, Button } from 'antd';

function LoginForm({ handleInputs, handleSubmit }) {
  return (
    <Form layout="inline">
      <Form.Item>
      <Input type="email" name="email" onChange={handleInputs} />
      </Form.Item>
      <Form.Item>
      <Input type="password" name="password" onChange={handleInputs} />
      </Form.Item>
      <Form.Item>
      <Button onClick={handleSubmit}>Iniciar</Button>
      </Form.Item>
      </Form>
  )
}

export default LoginForm
