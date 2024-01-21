import axios from 'axios';
import { DetailedHTMLProps, HTMLAttributes, RefObject, ReactNode, useState, ChangeEvent, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/esm/Form';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';
import { JSX } from 'react/jsx-runtime';

interface MyDataType {
    idProduto: number,
    Nome: string,
    Descricao: string,
    Categoria: string,
    Localização_Na_Pagina: string,
    preco: number,
    preco_Promocional: number,
    tag: string
}

function UpdateModalProduct(props: JSX.IntrinsicAttributes & Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode; }) {
    const [SaveNewNome, SetNewNome] = useState<string>('');
    const [SaveNewDesc, SetNewDesc] = useState<string>('');
    const [SaveNewCategoria, SetNewCat] = useState<string>('');
    const [SaveNewLocal, SetNewLocal] = useState<string>('');
    const [SaveNewPreco, SetNewPreco] = useState<number>(0);
    const [SaveNewPromo, SetNewPromo] = useState<number>(0);
    const [SaveNewTag, SetNewTag] = useState<string>('');

    const [data, setData] = useState<MyDataType[]>([])


    let HandleSaveName = (e: ChangeEvent<HTMLInputElement>): void => {
        SetNewNome(e.target.value)
    }

    let HandleSaveDesc = (e: ChangeEvent<HTMLInputElement>): void => {
        SetNewDesc(e.target.value)
    }

    let HandleSaveCat = (e: ChangeEvent<HTMLSelectElement>): void => {
        SetNewCat(e.target.value)
    }

    let HandleSaveLocal = (e: ChangeEvent<HTMLSelectElement>): void => {
        SetNewLocal(e.target.value)
    }

    let HandleSavePreco = (e: ChangeEvent<HTMLInputElement>): void => {
        SetNewPreco(Number(e.target.value));
    }

    let HandleSavePromo = (e: ChangeEvent<HTMLInputElement>): void => {
        SetNewPromo(Number(e.target.value));
    }

    let HandleSavetag = (e: ChangeEvent<HTMLInputElement>): void => {
        SetNewTag(e.target.value)
    }

    useEffect(() => {
        axios.get("http://localhost:4000/get")
            .then(response =>
                setData(response.data)
            );
    }, []);

    let HandleSaveData = async (id: number) => {
        try {
            const response = await axios.put(`http://localhost:4000/update/${id}`, {
                NewNome: SaveNewNome,
                NewDescricao: SaveNewDesc,
                NewCategoria: SaveNewCategoria,
                NewLocal: SaveNewLocal,
                NewPreco: SaveNewPreco,
                NewPromo: SaveNewPromo,
                NewTag: SaveNewTag
            });

            console.log('Resposta da requisição PUT:', response.data);

            setData(data.map(itens => (itens.idProduto === id ? { ...itens, Nome: SaveNewNome, Descricao: SaveNewDesc, Categoria: SaveNewCategoria, Localização_Na_Pagina: SaveNewLocal, preco: SaveNewPreco, preco_Promocional: SaveNewPromo, Tag: SaveNewTag } : itens)));
        } catch (error) {
            console.log(error);
        }
    }

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
                {data.map((itens) => (
                    <Button key={itens.idProduto} variant='dark' onClick={() => { HandleSaveData(itens.idProduto); if (props.onHide) props.onHide(); window.location.reload();}}>Enviar</Button>
                ))}
            </Modal.Footer>

        </Modal>
    );
}

export default UpdateModalProduct