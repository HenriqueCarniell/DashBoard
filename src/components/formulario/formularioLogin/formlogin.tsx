import './formulariologin.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormLogin() {
    return (
        <div id="container-formulario-login">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha" />
                </Form.Group>

                <Form.Text className="text-muted">
                    <label htmlFor="">Não possui uma conta ?</label>
                    <a href="/criar/conta"> crie uma</a>
                </Form.Text>

                <div id="div-botao-login">
                    <Button variant="primary" type="submit">
                        enviar
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default FormLogin;