import './list.css';


function List() {
    return (
        <div>
            <ul id='list-prod'>
                <li><a href="/Produtos">Produtos</a></li>
                <li><a href="/Categorias">Categorias</a></li>
                <li><a href="/Usuarios">Usuarios</a></li>
            </ul>
        </div>
    );
}

export default List;