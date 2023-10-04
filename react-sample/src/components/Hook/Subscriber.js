import { useContext } from 'react'
import { QosOption } from './index'


const Subscriber = ({ sub, unSub, showUnsub,userName }) => {
  // const [form] = Form.useForm()
  const qosOptions = useContext(QosOption)

  const userNamesUnique = userName;
  // create topic as many as the userNames
  const topicsArray = [];

  // add the public topic first
   // topic & QoS for MQTT subscribing
   const recordPublic = {
    topic: 'topic/chatserver101/public',
    qos: 1, // auto unsubscribe after the user disconnects
  }

  const recordPrivate = {
    topic: 'topic/chatserver101/priv/'+userName,
    qos: 1 // auto unsubscribe after the user disconnects
  }

  function handleSub(){
    topicsArray.push(recordPublic);

    userNamesUnique.forEach(user =>{
      if(user){
        topicsArray.push({
          topic: 'topic/chatserver101/priv/'+user,
          qos: 1, // auto unsubscribe after the user disconnects    
        })
      }
    })
    // if(!showUnsub){
      return (
        topicsArray.map(topic =>sub(topic))
      )
    // }
  }

  return (
    handleSub()
  )
}

export default Subscriber