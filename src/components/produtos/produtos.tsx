// States
import { useState, useEffect } from 'react';

// Cores e elementos do bootstrap
import { Button } from 'react-bootstrap';
import AddProductModal from '../modal/addproductmodal/modal';
import UpdateModalProduct from '../modal/updateproductmodal/updatemodal';

// Redux

// axios
import axios from 'axios';

// CSS
import './produtos.css';
import { useSelector } from 'react-redux';

interface Data {
  idProduto: number;
  Nome: string;
  Descricao: string;
  Categoria: string;
  Localização_Na_Pagina: string;
  preco: number;
  preco_Promocional: number;
  Tag: string;
}

function Produtos() {
  const [modalShowAdd, setModalShowAdd] = useState<boolean>(false);

  const [modalShowUpdate, setModalShowUpdate] = useState<boolean>(false);

  const [data, setData] = useState<Data[]>([]);


  useEffect(() => {
    axios.get("http://localhost:4000/get")
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  let Delete = (id: number) => {
    axios.delete(`http://localhost:4000/delete/${id}`)
      .then(() => {
        setData(data.filter(dados => dados.idProduto !== id));
      }
      ).catch((erro) => {
        console.log(erro);
      })
  }

  const currentError = useSelector((state: any) => state.ErrorReducer);
  console.log(currentError);

  const errorMessage: string | undefined = currentError?.currentError?.error?.message;

  return (
    <div id="container-produtos">
      <div id='div-lupa-prod'>
        <div>
          <h1>Produtos</h1>
        </div>
        <div>
          <input type="text" name="" id="" placeholder='Search for...' />
          <button>lupa</button>
        </div>
      </div>

      <div id='cadastrar-produto'>
        <div>
          <h1>Produtos Cadastrados</h1>
        </div>
        <div>
          <Button variant="dark" onClick={() => setModalShowAdd(true)}>
            Adicionar Produtos
          </Button>
        </div>
      </div>

      {/* {errorMessage && <p>Error: {"Algo deu errado tente novamente"}</p>} */}




      <div id='div-list'>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Localização na página</th>
              <th>Preço</th>
              <th>Preço Promocional</th>
              <th>Tag</th>
              <th>Atributo</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {data.map((itens, key) => (
              <tr key={key}>
                <td>{itens.Nome}</td>
                <td>{itens.Descricao}</td>
                <td>{itens.Categoria}</td>
                <td>{itens.Localização_Na_Pagina}</td>
                <td>{itens.preco}</td>
                <td>{itens.preco_Promocional}</td>
                <td>{itens.Tag}</td>
                <td>
                  <Button variant='danger' onClick={() => Delete(itens.idProduto)}>
                    excluir
                  </Button>
                </td>
                <td>
                  <Button variant="primary" onClick={() => setModalShowUpdate(true)}>
                    Editar
                  </Button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddProductModal
        show={modalShowAdd}
        onHide={() => setModalShowAdd(false)}
      />

      <UpdateModalProduct
        show={modalShowUpdate}
        onHide={() => setModalShowUpdate(false)}
      />

    </div>
  );
}

export default Produtos;
