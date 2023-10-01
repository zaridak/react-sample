import React, { useContext } from 'react'
import { QosOption } from './index'

const Subscriber = ({ sub, unSub, showUnsub,userName }) => {
  // const [form] = Form.useForm()
  const qosOptions = useContext(QosOption)

  // topic & QoS for MQTT subscribing
  const recordPublic = {
    topic: 'topic/chatserver101/public',
    qos: 0,
  }
  const recordPrivate = {
    topic: 'topic/chatserver101/priv/'+userName,
    qos: 1
  }

  function handleSub(){
    if(!showUnsub){
      return (
        sub(recordPublic),
        sub(recordPrivate)
      )
    }
  }

  return (
    handleSub()
  )
}

export default Subscriber