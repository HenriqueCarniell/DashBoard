import './formulariologin.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

function FormLogin() {
    const [SaveLoginEmail, SetLoginEmail] = useState<string>("");
    const [SaveLoginPassword, SetLoginPassword] = useState<string>("");

    const [SaveError, SetError] = useState<string>("");
    const [SaveUserOk, SetUserOK] = useState<string>("");

    let HandleSaveLoginEmail = (e: ChangeEvent<HTMLInputElement>):void => {
        SetLoginEmail(e.target.value)
    }

    let HandleSaveLoginPassword = (e: ChangeEvent<HTMLInputElement>):void => {
        SetLoginPassword(e.target.value)
    }

    let HandleSaveUserLogin = ():void => {
        axios.post("http://localhost:4000/send/login/user", {
            CurrentEmailUser: SaveLoginEmail,
            CurrentPasswordUser: SaveLoginPassword
        })
        .then(response => {
            console.log(response.data.userOk);
            SetUserOK(response.data.userOk);
        })
        .catch(err => {
            console.log(err);
            if (err.response) {
                if (err.response.data.userOk) {
                    SetUserOK(err.response.data.userOk);
                    window.location.href = "/Produtos";
                } else if (err.response.data.msg) {
                    // A propriedade msg existe na resposta
                    SetError(err.response.data.msg);
                }
            }
        });
    }

    return (
        <div id="container-formulario-login">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu email" onChange={HandleSaveLoginEmail}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha" onChange={HandleSaveLoginPassword}/>
                </Form.Group>
                <div>
                {SaveError}
                {SaveUserOk}
                </div>

                <Form.Text className="text-muted">
                    <label htmlFor="">Não possui uma conta ?</label>
                    <a href="/criar/conta"> crie uma</a>
                </Form.Text>
                <div id="div-botao-login">
                    <Button variant="primary" onClick={HandleSaveUserLogin}>
                        enviar
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default FormLogin;

function err(reason: any): PromiseLike<never> {
    throw new Error('Function not implemented.');
}
