import React from 'react'
import { Card, Button, Form, Input, Row, Col, Select } from 'antd'

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
    <Card
      title="Establishing Connection"
      actions={[
        <Button type="primary" onClick={handleConnect}>
          {connectBtn} And Subscribe to topics
        </Button>,
        <Button danger onClick={handleDisconnect}>
          Disconnect
        </Button>,
      ]}
    >
    </Card>
  )
}

export default Connection
