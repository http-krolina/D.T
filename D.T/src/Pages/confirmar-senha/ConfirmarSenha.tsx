import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConfirmarSenha.module.css";

const ConfirmarSenha: React.FC = () => {
  // Tipando o estado para strings
  const [senha, setSenha] = useState<string>("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState<string>("");

  const navigate = useNavigate();

  // Tipando o parâmetro 'id' como string
  const togglePassword = (id: string) => {
    // Usamos 'as HTMLInputElement' para informar ao TypeScript que 'input' será um elemento HTMLInputElement
    const input = document.getElementById(id) as HTMLInputElement | null;
    if (input) {
      input.type = input.type === "password" ? "text" : "password";
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleRecover = () => {
    // Aqui você adicionaria a lógica para de fato recuperar/redefinir a senha.
    // Por exemplo, validar se as senhas são iguais e chamar uma API.
    if (senha === senhaConfirmacao) {
      console.log("Senhas correspondem. Processando recuperação...");
      navigate("/pagina-inicial"); // Redireciona após a "recuperação"
    } else {
      console.error("As senhas não correspondem!");
      alert("As senhas digitadas não correspondem. Por favor, tente novamente.");
    }
  };

  return (
    <section className={styles.section2}>
      <div className={styles.div1sec2}>
        <h2>Recupere a sua senha</h2>
      </div>

      <div className={styles.divscentrais}>
        <label htmlFor="senha">Nova Senha:</label>
        <br />
        <div className={styles.inputContainer}>
          <input
            placeholder="Digite sua senha"
            className={styles.inputstyle}
            type="password"
            id="senha" // ID para o togglePassword
            value={senha}
            // Tipando o evento de mudança para input HTML
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
          />
          <img
            className={styles.olho}
            src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
            onClick={() => togglePassword("senha")}
            alt="Mostrar senha"
          />
        </div>
      </div>

      <div className={styles.divscentrais}>
        <label htmlFor="senhaConfirmacao">Confirme sua senha:</label>
        <br />
        <div className={styles.inputContainer}>
          <input
            placeholder="Digite novamente sua senha"
            className={styles.inputstyle}
            type="password"
            id="senhaConfirmacao" // ID para o togglePassword
            value={senhaConfirmacao}
            // Tipando o evento de mudança para input HTML
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSenhaConfirmacao(e.target.value)}
          />
          <img
            className={styles.olho}
            src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
            onClick={() => togglePassword("senhaConfirmacao")}
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
          Confirmar
        </button>
      </div>
    </section>
  );
}

export default ConfirmarSenha;