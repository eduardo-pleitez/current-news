import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NewsList({ data }) {
  console.log(data);
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="justify-content-center">
      {data.map((newsItem, index) => {
        return (<Col key={index} >
          <div className="mt-4 px-2">
            <img className='rounded' src={newsItem.media} alt={newsItem.title} />
            <p className='p-2 bg-primary text-white rounded'>{newsItem.title}</p>
          </div>
        </Col>)
      })}
      </Row>
    </Container>
  )
}
