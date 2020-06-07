import React from 'react';
import Logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={Logo} alt="ecoleta"/>
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

          <Link to="/cadastro">
            <span>
              <FiLogIn/>
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home;