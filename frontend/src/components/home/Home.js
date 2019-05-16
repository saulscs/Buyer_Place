import React from 'react'
// import { Link } from 'react-router-dom'
import { Layout, Link } from 'antd';
import { Card, Col, Row } from 'antd';
const { Content } = Layout;
const { Meta } = Card;

class Home extends React.Component {
  render() {
    return (
      <>
      <Layout>
        {/* cover */}
        <header className="cover">
        <h1>Home</h1>
        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        </header>
        {/* cards */}

        <Content style={{ padding: '30px',     margin: '50px' }}>
        
        <Row gutter={16}>
      
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Mac" src="/Mac.jpg" />}
  >
    <Meta title="MAC"/>
  </Card>
      </Col>
      
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Iphone" src="/Iphone.png" />}
  >
    <Meta title="IPHONE"  />
  </Card>
      </Col>
      
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="IPad" src="/Ipad.png" />}
  >
    <Meta title="IPAD"  />
  </Card>
      </Col>
      </Row>
      <br/>
      <br/>
      <Row gutter={16}> 
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Apple Watch" src="/AppleWatch.png" />}
  >
    <Meta title="Apple Watch"  />
  </Card>
      </Col>
      
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Accesorios" src="/Accesorios.jpg" />}
  >
    <Meta title="Accesorios"  />
  </Card>
      </Col>
      
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Otros" src="/Otros.jpg" />}
  >
    <Meta title="Otros"  />
  </Card>
      </Col>
    </Row>
        </Content>
        </Layout>
      </>
    )
  }
}

export default Home


