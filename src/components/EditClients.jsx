import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function EditClients(props) {
  const [nome, setNome] = useState(props.nome);
  const [cpf, setCpf] = useState(props.cpf);
  const [email, setEmail] = useState(props.email);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" className="button" onClick={handleShow}>
        Editar
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edição de Cliente</Modal.Title>
        </Modal.Header>
        <Form>
        <Modal.Body>
          <Form.Group className="mb-3">
              <Form.Control type="text" name="Name" value={nome} placeholder="Nome Completo"
              onChange={(e)=>{setNome(e.target.value)}}
              />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Control type="number" name="CPF" value={cpf} placeholder="CPF"
              onChange={(e)=>{setCpf(e.target.value)}}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" name="Email" value={email} placeholder="Email"
              onChange={(e)=>{setEmail(e.target.value)}}
              />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className='button' type="submit">
            Salvar
          </Button>
        </Modal.Footer>
        </Form>

      </Modal>
    </>
  );
}

export default EditClients;