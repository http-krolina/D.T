import React, { useState, useEffect } from 'react';
import styles from './TabelaPonto.module.css';

const TabelaPontoDetalhada: React.FC = () => {
  const [dataHoraAtual, setDataHoraAtual] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDataHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatarData = (date: Date): string => {
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const formatarHora = (date: Date): string => {
    const horas = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');
    const segundos = String(date.getSeconds()).padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
  };

  return (
    <div className={styles.blocoCartaoPonto}>
      <div className={styles.cardPontoDetalhes}>
        <div className={styles.cardPontoHeader}>
          <p>EMISSÃO: {formatarData(dataHoraAtual)}</p>
          <p>{formatarHora(dataHoraAtual)}</p>
        </div>
        <p className={styles.cardPontoTitle}>CARTÃO DE PONTO</p>
        <p className={styles.cardPontoInfo}>
          Empresa: XXXX Ltda (XXXX-XX-XX), Endereço: Rua teste, 101, Recife - PE
        </p>
        <p className={styles.cardPontoInfo}>
          Registro: XXXX (XXXX-XX-XX), NOME: XXXXX, CPF: XXX.XXX.XXX-XX, RG: XXXXXXX
        </p>
        <p className={styles.cardPontoInfo}>
          Entrada: 08:00 Saída: 18:00 (Intervalo: 12:00 às 13:00)
        </p>
        <p className={styles.cardPontoInfo}>Funcionário: ITALO FERREIRA COSTA</p>
        <p className={styles.cardPontoInfo}>Matrícula: XXXXXX</p>
        <div className={styles.cardPontoObservacoes}>
          <p>Observações complementares: NOME: XXXX</p>
          <p>CNPJ: XX.XXX.XXX/0001-XX</p>
        </div>
      </div>

      <div className={styles.tabelaPontoContainer}>
        <table>
          <thead>
            <tr>
              <th>Dia</th>
              <th>Data</th>
              <th>Entrada</th>
              <th>Pausa Início</th>
              <th>Pausa Fim</th>
              <th>Saída</th>
              <th>Horas Extras</th>
              <th>Irregularidade</th>
              <th>QTDE</th>
              <th>Justificativa</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 30 }).map((_, index) => (
              <tr key={index}>
                <td>{`Dia ${index + 1}`}</td>
                <td>DD/MM</td>
                <td>08:00</td>
                <td>12:00</td>
                <td>13:00</td>
                <td>17:00</td>
                <td>01:00</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaPontoDetalhada;