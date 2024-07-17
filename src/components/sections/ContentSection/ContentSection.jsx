import ContentBox from '../../common/ContentBox/ContentBox';
import './ContentSection.css';

function ContentSection() {
  return (
    <section className="content-section">
      <h3>Centrais de Conteúdo</h3>
      <div className="content-boxes">
        {["IMAGENS", "PUBLICAÇÕES", "VÍDEOS"].map(text => <ContentBox key={text} text={text} />)}
      </div>
    </section>
  );
}

export default ContentSection;
