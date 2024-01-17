// Bibliotecas do React
import { DetailedHTMLProps, HTMLAttributes, RefObject, ReactNode, ChangeEvent } from 'react';

// React Icons
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';

//colnfig typescript
import { JSX } from 'react/jsx-runtime';

// Usestats
import { useState } from 'react';

// Axios
import axios from 'axios';

// Redux
import { useDispatch } from 'react-redux';

function AddProductModal(props: JSX.IntrinsicAttributes & Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode; }) {
    const [SaveNome, SetNome] = useState<string>('');
    const [SaveDesc, SetDesc] = useState<string>('');
    const [SaveCategoria, SetCat] = useState<string>('');
    const [SaveLocal, SetLocal] = useState<string>('');
    const [SavePreco, SetPreco] = useState<number>(0);
    const [SavePromo, SetPromo] = useState<number>(0);
    const [SaveTag, SetTag] = useState<string>('');


    let HandleSaveName = (e: ChangeEvent<HTMLInputElement>):void => {
        SetNome(e.target.value)
    }

    let HandleSaveDesc = (e: ChangeEvent<HTMLInputElement>):void => {
        SetDesc(e.target.value)
    }

    let HandleSaveCat = (e: ChangeEvent<HTMLSelectElement>):void => {
        SetCat(e.target.value)
    }

    let HandleSaveLocal = (e: ChangeEvent<HTMLSelectElement>):void => {
        SetLocal(e.target.value)
    }

    let HandleSavePreco = (e: ChangeEvent<HTMLInputElement>):void => {
        SetPreco(Number(e.target.value));
    }

    let HandleSavePromo = (e: ChangeEvent<HTMLInputElement>):void => {
        SetPromo(Number(e.target.value));
    }


    let HandleSavetag = (e: ChangeEvent<HTMLInputElement>):void => {
        SetTag(e.target.value)
    }

    let HandleSaveData = async () => {
        try {
            const response = await axios.post("http://localhost:4000/add", {
                Nome: SaveNome,
                Descricao: SaveDesc,
                Categoria: SaveCategoria,
                Local: SaveLocal,
                Preco: SavePreco,
                Promo: SavePromo,
                Tag: SaveTag
            })

            console.log(response.data);
        } catch (error) {
            dispatch({
                type: "error/user",
                payload: { error }
            })
        }
    }  
    const dispatch = useDispatch();

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Adicionar
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form.Label htmlFor="inputPassword5">Nome</Form.Label>

                <Form.Control
                    onChange={HandleSaveName}
                    type="text"
                    aria-describedby="passwordHelpBlock"
                />


                <Form.Label htmlFor="inputPassword5">Descrição</Form.Label>

                <Form.Control
                    onChange={HandleSaveDesc}
                    type="text"
                    aria-describedby="passwordHelpBlock"
                />


                <Form.Label htmlFor="inputPassword5">Categoria</Form.Label>

                <Form.Select onChange={HandleSaveCat} aria-label="Default select example">
                    <option></option>
                    <option value="1">Eletrônicos</option>
                    <option value="2">Moda</option>
                    <option value="3">Casa e Jardim</option>
                    <option value="4">Saúde e Beleza</option>
                    <option value="5">Esportes e Fitness</option>
                    <option value="6">Brinquedos e Jogos</option>
                    <option value="7">Alimentos e Bebidas</option>
                    <option value="8">Livros e Música</option>
                    <option value="9">Automotivo</option>
                    <option value="10">Pet Shop</option>
                </Form.Select>

                <Form.Label htmlFor="inputPassword5">Locaqlização da pagina</Form.Label>

                <Form.Select onChange={HandleSaveLocal} aria-label="Default select example">
                    <option value=""></option>
                    <option value="1">Carrossel de Destaques</option>
                    <option value="2">Barra Lateral de Navegação</option>
                    <option value="3">Seção de Ofertas Especiais</option>
                    <option value="4">Seção Mais Vendidos</option>
                    <option value="5">Seção de Novos Lançamentos</option>
                    <option value="6">Rodapé</option>
                    <option value="7">Pop-up de Notícias</option>
                    <option value="8">Seção Escolha do Editor</option>
                    <option value="9">Barra de Pesquisa</option>
                    <option value="10">Seção Recomendado Para Você</option>
                </Form.Select>

                <Form.Label htmlFor="inputPassword5">Preço</Form.Label>

                <Form.Control
                    onChange={HandleSavePreco}
                    type="number"
                    aria-describedby="passwordHelpBlock"
                />

                <Form.Label htmlFor="inputPassword5">Preço Promocional</Form.Label>

                <Form.Control
                    onChange={HandleSavePromo}
                    type="number"
                    aria-describedby="passwordHelpBlock"
                />

                <Form.Label htmlFor="inputPassword5">Tag</Form.Label>

                <Form.Control
                    onChange={HandleSavetag}
                    type="text"
                    aria-describedby="passwordHelpBlock"
                />

            </Modal.Body>
            <Modal.Footer>
                <Button variant='dark' onClick={() => { HandleSaveData(); if (props.onHide) props.onHide(); window.location.reload()}}>Enviar</Button>
            </Modal.Footer>
        </Modal>

    );
}

export default AddProductModal;