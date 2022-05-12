import React, { useEffect, useState } from "react";
import Logo from "../../assets/img/Logo.png"
import icon from "../../assets/img/icon.png"
import service from '../../services/index';
import * as moment from 'moment'
import './style.css'
export default function Home() {
    const [nfs, setNfs] = useState([])
    const statusNames = ['Pendente de confirmação', 'Pedido confirmado', 'Não reconhece o pedido', 'Mercadoria não recebida', 'Recebida com avaria', 'Devolvida', 'Recebida com devolução parcial', 'Recebida e confirmada', 'Pagamento Autorizado'];
    useEffect(() => {
        service.get('http://localhost:3333/orders')
            .then(res => {
                setNfs(res.data)
            });
    }, []);
    function formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    }
    return (
        <div id="page-home">
            <aside>
                <header>
                    <img src={Logo} alt="Cashforce" />
                    <button>
                        <span><img src={icon}/></span>
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
                            <th>Cedente</th>
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
                                <td>{nf.provider.name}</td>
                                <td>{moment(nf.emissionDate).format('DD-MM-YYYY')}</td>
                                <td className="green">{formatCurrency(nf.value)}</td>
                                <td>{statusNames[nf.orderStatusBuyer]}</td>
                                <td><button className="modal">Dados do cedente</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
