import { results } from '../data/siteData';
import '../style/Results.css';

function Results() {
  return (
    <section className="section results" id="results">
      <div className="container">
        <div className="results__header">
          <p className="section-label">Selected results</p>

          <h2 className="section-title">
            Design is only valuable when it moves the numbers.
          </h2>

          <p className="section-description">
            We combine strategy, design, and engineering around outcomes that
            matter: faster experiences, stronger conversions, and sustainable
            growth.
          </p>
        </div>

        <div className="results__grid">
          {results.map((result) => (
            <article className="result-card" key={result.project}>
              <div className="result-card__metric">
                <strong>{result.metric}</strong>
                <span>{result.label}</span>
              </div>

              <div className="result-card__content">
                <p className="result-card__project">
                  {result.project}
                </p>

                <p>{result.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="results__disclaimer">
          Illustrative project outcomes created for this training concept.
        </p>
      </div>
    </section>
  );
}

export default Results;