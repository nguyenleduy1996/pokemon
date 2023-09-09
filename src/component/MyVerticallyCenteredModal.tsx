import React from 'react'
import { Modal} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



interface Props {
    show: boolean;
    onHide: () => void; // Sử dụng kiểu dữ liệu hàm () => void
    id: number,
    name: string,
    image: string
  }
  
const MyVerticallyCenteredModal:React.FC<Props> = (props) => {
    console.log("vao đây")
    const {id , name, image} = props;
    return (
        <Modal
          {...props}
          size="lg"
          
        >
         
         <Modal.Body style={{
            boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
          }}>
        
       
            <Row>
            <Col >
              <section className='pokemon-list-container' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className='pokemon-name'>#{id}</p>
                <img src={image} alt='pokemon' />
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className='pokemon-name'>{name}</p>
              </section>
            </Col>

            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>

       
       
            
          
          </Modal.Body>
        </Modal>
      );
}

export default MyVerticallyCenteredModal