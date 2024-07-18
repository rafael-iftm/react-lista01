import Card from '../../common/Card/Card';
import data from './data.json';
import './ContentSection.css';

function ContentSection() {
  return (
    <section className="content-section">
      <h2>Centrais de Conteúdo</h2>
      <p>Acesse aplicativos, fotos, publicações e vídeos do IFTM</p>
      <div className="content-boxes">
        {data.map(item => (
            <Card key={item.id} text={item.text} />
          ))}
      </div>
    </section>
  );
}

export default ContentSection;
