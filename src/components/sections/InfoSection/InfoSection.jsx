import InfoBox from '../../common/InfoBox/InfoBox';
import './InfoSection.css';

function InfoSection() {
  return (
    <section className="info-section">
      <h2>Acesso à Informação</h2>
      <p>Veja dados de transparência e governança</p>
      <div className="info-boxes">
        {[
          "PLANO DE DESENVOLVIMENTO INSTITUCIONAL",
          "PESQUISA PÚBLICA PROCESSOS IFTM",
          "LICITAÇÕES E CONTRATOS",
          "RECEITAS E DESPESAS",
          "DADOS ABERTOS",
          "TRANSPARÊNCIA E PRESTAÇÃO DE CONTAS",
          "SERVIDORES",
          "PERGUNTAS FREQUENTES",
        ].map(text => <InfoBox key={text} text={text} />)}
      </div>
    </section>
  );
}

export default InfoSection;
