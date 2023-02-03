import EditClients from "../components/EditClients";
import Table from 'react-bootstrap/Table';

function ShowClients(props) {
  return (
    <>
        <h1>Clientes</h1>
        <Table className="align-baseline" striped bordered hover>
        <thead>
            <tr>
            <th></th>
            <th>Nome Completo</th>
            <th>CPF</th>
            <th>Email</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>{props.nome}</td>
            <td>{props.cpf}</td>
            <td>{props.email}</td>
            <td><EditClients name={props.nome} cpf={props.cpf} email={props.email} /></td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jonatan Jacobs</td>
            <td>111111111-11</td>
            <td>jonatan@gmail.com</td>
            <td><EditClients /></td>                        
            </tr>
            <tr>
            <td>3</td>
            <td>Lucas Vinícius</td>
            <td>222222222-22</td>
            <td>lucas@gmail.com</td>
            <td><EditClients /></td>                        
            </tr>
        </tbody>
        </Table>
    </>
  );
}

export default ShowClients;