import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddProject() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
       <Button className='btn btn-success' onClick={handleShow}>
       ADD PROJECT
      </Button>

      <Modal show={show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                <div className='col-md-6'>
                    <label htmlFor="projectImg">
                        <input type="file" style={{display:'none'}}  id='projectImg'/>
                        <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_640.png" alt="" className='w-100' />
                    </label>
                </div>
                <div className='col-md-6'>
                    
                        <input type="text" placeholder='Project Title' className='form-control mb-3' />
                        <input type="text" placeholder='Languages used' className='form-control mb-3' />
                        <input type="text" placeholder='Github Link' className='form-control mb-3' />
                        <input type="text" placeholder='Website Link' className='form-control mb-3' />
                        <textarea placeholder='Project overview' rows={4} className='form-control mb-3' ></textarea>
                        
                    
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject
