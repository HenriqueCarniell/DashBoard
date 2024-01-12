import Aside from '../aside/aside';
import Produtos from '../produtos/produtos';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { TfiAlignJustify } from "react-icons/tfi";

import { useState } from 'react';

function RightContainer() {
    const [onSide, seton] = useState<boolean>(false);

    let HandleOnAside = () => {
        seton(!onSide);
    }

    return (
        <div id="header-container">
                {
                    onSide && <Aside />
                }

            <div id='right-container'>
                <div id='header'>
                    <div>
                        <button onClick={HandleOnAside} id="traços">
                        <TfiAlignJustify size={32}/>
                        </button>
                    </div>
                </div>


                <div id="div-foto">
                    <img src="" alt="" />
                </div>

            <Produtos/>
            </div>
        </div>
    );
}

export default RightContainer;