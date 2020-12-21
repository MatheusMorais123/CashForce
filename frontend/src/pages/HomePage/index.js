import React, { useEffect, useState } from "react";
import Logo from "../../assets/img/Logo.png"
import icon from "../../assets/img/icon.png"
import api from '../../services/api';
import Mask from '../../helpers/mask';
//import axios from 'axios';

import './style.css'
export default function HomePage() {
    const [nfs, setNfs] = useState([])

    useEffect(() => {
        api.get('http://localhost:3333/orders')
            .then(res => {
                setNfs(res.data)
                console.log(res.data)
            });
    }, []);
    return (
        <div id="page-home">
            <aside>
                <header>
                    <img src={Logo} alt="Cashforce" />
                    <button>
                        <span><img src={icon} /></span>
                            Notas Fiscais
                    </button>
                </header>
            </aside>
            <div className="container">
                <div className="row"></div>
                <div className="top-title">
                    <i></i>
                    <h2>
                        Notas Fiscais
                    </h2>
                    <p>Visualize as notas fiscais que você tem.</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nota fiscal</th>
                            <th>Sacado</th>
                            <th>Cedentes</th>
                            <th>Emissão</th>
                            <th>Valor</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nfs && nfs.map(nf => (
                            <tr>
                                <td>{nf.orderNumber}</td>
                                <td>{nf.buyer.name}</td>
                                <td>Cedente 001</td>
                                <td>{nf.emissionDate}</td>
                                <td className="green">R${nf.value}</td>
                                <td className="green" >Status</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}