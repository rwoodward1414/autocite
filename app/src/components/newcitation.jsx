import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';

function NewCitation() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SelectType = () => {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Select Citation Type</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack gap={3} className='mx-auto'>
                    <Stack direction='horizontal'>
                        <Button variant='primary'>Book</Button>
                        <Button variant='primary' className='ms-auto'>Journal</Button>
                        <Button variant='primary' className='ms-auto'>Webpage</Button>
                    </Stack>
                    <Stack direction='horizontal'>
                        <Button variant='primary'>Image</Button>
                        <Button variant='primary' className='ms-auto'>Video</Button>
                        <Button variant='primary' className='ms-auto'>Social Media</Button>
                    </Stack>
                </Stack>
            </Modal.Body>
        </>
    )
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Citation
      </Button>

      <Modal show={show} onHide={handleClose}>
        <SelectType />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewCitation;