// css importado
import React, { ChangeEvent, useState } from 'react';
import './FormularioCadastrar.css';

// componentes do bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function FormCadastrar() {

    const [saveCadName, setCadName] = useState<string>('');
    const [saveCadEmail, setCadEmail] = useState<string>('');
    const [saveCadSenha, setCadSenha] = useState<string>('');

    const [saveVerifyEmail, setEmailVerify] = useState<string>('');

    let HandleSaveNome = (e:ChangeEvent<HTMLInputElement>):void => {
        setCadName(e.target.value);
    }

    let HandleSaveEmail = (e:ChangeEvent<HTMLInputElement>):void => {
        setCadEmail(e.target.value);
    }

    let HandleSaveSenha = (e:ChangeEvent<HTMLInputElement>):void => {
        setCadSenha(e.target.value);
    }

    let HandleSaveCadDados = async () => {
        try {
            const response = await axios.post('http://localhost:4000/add/user/cadastro', {
                UserNome: saveCadName,
                UserEmail: saveCadEmail,
                UserSenha: saveCadSenha
            });
            console.log(response)
        } catch(err) {
            if (axios.isAxiosError(err) && err.response) {
                // O servidor retornou uma resposta de erro
                setEmailVerify(err.response.data.error);
            }
        }
    }

    return (
        <div id="container-formulario-cadastrar">
            <Form>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" placeholder="Digite seu email" onChange={HandleSaveNome}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Digite seu email"  onChange={HandleSaveEmail}/>
                </Form.Group>

                <div>
                {saveVerifyEmail}
                </div>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha: </Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha"  onChange={HandleSaveSenha}/>
                </Form.Group>

                <div id="div-botao-cadastrar">
                    <Button variant="primary" onClick={HandleSaveCadDados}>
                        enviar
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default FormCadastrar;