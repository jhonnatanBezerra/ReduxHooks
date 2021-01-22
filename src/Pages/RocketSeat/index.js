import React from 'react';

import './styles.css';

function Pagina() {
  return (
      <>
        <header>
            <h1>DEV Finances$</h1>
        </header>
        <main className="containers">
            <section className="balance">
                <h2>Balanço</h2>
                
                <div className="cards">
                    <h3>Entradas</h3>
                    <p>R$ 5.000,00</p>
                </div>
                
                <div className="cards">
                    <h3>Saídas</h3>
                    <p>R$ 2.000,00</p>
                </div>

                <div className="cards total">
                    <h3>Total</h3>
                    <p>R$ 3.000,00</p>
                </div>

            </section>

            <section className="transaction">
                <h2>Transações</h2>

                <table className="data-table">

                    <thead>
                        
                        <tr>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Data</th>
                        </tr>

                    </thead>

                    <tbody>
                        <tr>
                            <td className="description">Luz</td>
                            <td className="expanse">- R$ 500,00</td>
                            <td className="date"> 23/12/2021</td>
                        </tr>

                        <tr>
                            <td className="description">Criação Website</td>
                            <td className="income">R$ 5.000,00</td>
                            <td className="date"> 23/12/2021</td>
                        </tr>

                        <tr>
                            <td className="description">Internet</td>
                            <td className="expanse">- R$ 200,00</td>
                            <td className="date"> 23/12/2021</td>
                        </tr>
                    </tbody>

                </table>

            </section>

        </main>
        <footer className="container">
            <p>dev.finance$</p>
        </footer>
      </>
  );
}

export default Pagina;