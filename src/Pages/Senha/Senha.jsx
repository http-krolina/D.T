// src/components/PasswordRecovery/Step1.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Senha.module.css";

function Step1() {
  const [cpf, setCpf] = useState('');
  const [matricula, setMatricula] = useState('');
  const navigate = useNavigate();

  const togglePassword = (id) => {
    const input = document.getElementById(id);
    if (input) {
      input.type = input.type === "password" ? "text" : "password";
    }
  };

  const handleCancel = () => {
    navigate('/'); // Volta para a página de login
  };

  const handleRecover = () => {
    // Adicione aqui qualquer lógica de validação necessária
    // antes de navegar para a próxima tela
    
    navigate(''); // Ou para a próxima etapa de recuperação
  };

  return (
    <section className={styles.section2}>
      <div className={styles.div1sec2}>
        <h2>Recupere a sua senha:</h2>
      </div>

      <div className={styles.divscentrais}>
        <label htmlFor="cpf">CPF:</label><br />
        <div className={styles.inputContainer}>
          <input
            placeholder="Digite Seu CPF"
            className={styles.inputstyle}
            type="password"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <img
            className={styles.olho}
            src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
            onClick={() => togglePassword('cpf')}
            alt="Mostrar senha"
          />
        </div>
      </div>

      <div className={styles.divscentrais}>
        <label htmlFor="matricula">Matricula:</label><br />
        <div className={styles.inputContainer}>
          <input
            placeholder="Digite Sua Matricula"
            className={styles.inputstyle}
            type="password"
            id="matricula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
          />
          <img
            className={styles.olho}
            src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
            onClick={() => togglePassword('matricula')}
            alt="Mostrar senha"
          />
        </div>
      </div>

      <div className={styles.botoesContainer}>
        <button 
          className={`${styles.botoes} ${styles.botaocan}`}
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button 
          className={`${styles.botoes} ${styles.botaorec}`}
          onClick={handleRecover}
        >
          RECUPERAR SENHA
        </button>
      </div>
    </section>
  );
}

export default Step1;