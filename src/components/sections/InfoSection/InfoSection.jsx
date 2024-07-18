import Card from '../../common/Card/Card';
import data from './data.json';
import './InfoSection.css';

function InfoSection() {
  return (
    <section className="info-section">
      <h2>Acesso à Informação</h2>
      <p>Veja dados de transparência e governança</p>
      <div className="info-boxes">
        {data.map(item => (
          <Card key={item.id} text={item.text} />
        ))}
      </div>
    </section>
  );
}

export default InfoSection;
