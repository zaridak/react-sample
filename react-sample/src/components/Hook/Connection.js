import { Form, Input, Row, Col, Select } from 'antd'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
/**
 * this demo uses EMQX Public MQTT Broker (https://www.emqx.com/en/mqtt/public-mqtt5-broker), here are the details:
 *
 * Broker host: broker.emqx.io
 * WebSocket port: 8083
 * WebSocket over TLS/SSL port: 8084
 */

const Connection = ({ connect, disconnect, connectBtn,connectionValues }) => {

  const handleConnect = () => {
    connect()
  }

  const handleDisconnect = () => {
    disconnect()
  }

  return (
    <>
    <br></br>
    <Card>
      <Card.Header>
        Establishing Connection
      </Card.Header>
        <Card.Body>
          <div className='row'>
            <div className='col-sm-6'>
              <Button variant="secondary" onClick={handleConnect}> {connectBtn} And Subscribe to topics </Button>
            </div>
            <div className='col-sm-5'>
              <Button variant="secondary" onClick={handleDisconnect}> Disconnect </Button>
            </div>
          </div>
        </Card.Body>

    </Card>
    </>    
  )
}

export default Connection
