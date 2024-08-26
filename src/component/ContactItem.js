import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Row>
        <Col lg={3}>
        <img width={200} src="https://i.pinimg.com/originals/86/f8/6a/86f86ac042b3f2cf670a8d9a61b495a9.jpg"/>
        </Col>
        <Col lg={5}>
        <div>
            {item.name}
        </div>
        <div>
            {item.phoneNumber}
        </div>
        </Col>
      
    </Row>
  )
}

export default ContactItem
