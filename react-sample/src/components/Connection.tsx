import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ChangeEvent, useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Connection = ({sentConnectionData}:any)  => {
    
    const [disabledDetails,setDisabledDetails] = useState(false);// used for hide/show the connection details
    const [connectDisabled,setConnectDisabled] = useState(true); // used to enable/disable the connect button
    
    // get the data from inputs
    const getUsername = (e: ChangeEvent<HTMLInputElement>) => {
        sentConnectionData.userName = e != null && e.target != null && e.target.value ? e.target.value : null;
        // on username change validate if connect should be active
        setConnectDisabled(validateIfConenctShouldBeDisabled(sentConnectionData.userName));
    };
 
    const getPort = (e: ChangeEvent<HTMLInputElement>) => {
        sentConnectionData.port = e.target.value;
    };
    const getHost = (e: ChangeEvent<HTMLInputElement>) => {        
        sentConnectionData.host = e.target.value;
    };
    // change the value of modify button
    function modifyPressed():void {
        setDisabledDetails(!disabledDetails)
    }

    // if username is empty connect is disabled
    function validateIfConenctShouldBeDisabled(username:string | null):boolean{
        return !(username && username.length > 0);
    }

    // display the inner box if modify button is pressed
    function getInnerCard(shouldShow:boolean){
        if(shouldShow){
            return (
                <Card  >
                <div >
                    <Card.Title>
                        Connection Details
                    </Card.Title>
                    <Card.Body>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <InputGroup  >
                                    <InputGroup.Text id="host-id">Host</InputGroup.Text>
                                    <Form.Control type="text" onChange={getHost} aria-label="default" />
                                </InputGroup>
                            </div>
                            <div className='col-sm-4'>
                                <InputGroup  >
                                    <InputGroup.Text id="clientid-id">ClientId</InputGroup.Text>
                                    <Form.Control type="text" disabled={true} placeholder='Auto generated' aria-label="default"  />
                                </InputGroup>
                            </div>
                        </div>
                        <div className='row' >
                            <div className='col-sm-4'>
                                <InputGroup  >
                                    <InputGroup.Text id="port-id">Port</InputGroup.Text>
                                    <Form.Control type="text" onChange={getPort} aria-label="default" />
                                </InputGroup>
                            </div>
                        </div>
                    </Card.Body> 
                </div>
            </Card>
            )
        }
    }

    return (
        <div >
            <br/>
            <Card style={{width:'50%'}} >
                <Card.Body  >
                    <div className='row'>
                        <div className='col-sm-4'>
                            <InputGroup  >
                                <InputGroup.Text id="username-id">Username</InputGroup.Text>
                                <Form.Control type="text" onChange={getUsername} aria-label="default" />
                            </InputGroup>
                        </div>
                        <div className='col-sm-4'>
                            <Button variant="secondary" disabled={connectDisabled} onClick={() => sentConnectionData(sentConnectionData) }> Connect </Button >{' '}
                        </div>
                        <div className='col-sm-4'>
                            <Button variant="secondary" onClick={modifyPressed}> modify </Button >{''}
                        </div>
                    </div>
                    <br/><br/>
                    <div className='row'>
                        {getInnerCard(disabledDetails)}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}