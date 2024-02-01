import { useState } from "react";
import "./asdie.css";
import List from "../list/list";

import { IoHome } from "react-icons/io5";

function Aside() {
    const [onCad, setOnCad] = useState<boolean>(false);

    let HandleOnCad = () => {
        setOnCad(!onCad)
    }
    return (
        <div id="aside">
            <div>
                <h1>Painel Administrador</h1>
            </div>
            <div id="bemvindo">
                <p>Bem-Vindo</p>
                <p>Admin</p>
            </div>
            <div>
                <div id="div-general-home">
                    <div>
                        <p id="general">General</p>
                    </div>
                </div>
                <div>
                    <button id="btn-cadastrados" onClick={HandleOnCad}>
                        <p>Cadastrados</p>
                    </button>
                    {
                        onCad && <List />
                    }
                </div>
            </div>
        </div>
    );
}

export default Aside;