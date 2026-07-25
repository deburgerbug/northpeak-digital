import '../style/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Web experiences built for growth
          </div>

          <h1 className="hero__title">
            Websites that turn
            <span> attention into growth.</span>
          </h1>

          <p className="hero__description">
            NorthPeak helps ambitious businesses design, build, and optimize
            fast digital experiences that look exceptional and convert.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="button button--primary">
              Start a project
              <span aria-hidden="true">→</span>
            </a>

            <a href="#results" className="button button--secondary">
              See our results
            </a>
          </div>

          <div className="hero__proof" aria-label="NorthPeak results">
            <div>
              <strong>40+</strong>
              <span>Projects shipped</span>
            </div>

            <div>
              <strong>98</strong>
              <span>Avg. performance score</span>
            </div>

            <div>
              <strong>4.9/5</strong>
              <span>Client satisfaction</span>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__glow" />

          <div className="dashboard-card">
            <div className="dashboard-card__top">
              <div>
                <span className="dashboard-card__label">Website growth</span>
                <strong>Performance overview</strong>
              </div>

              <span className="dashboard-card__status">
                Live
              </span>
            </div>

            <div className="dashboard-card__metric">
              <div>
                <span>Conversion rate</span>
                <strong>6.84%</strong>
              </div>

              <span className="dashboard-card__increase">
                +38.2%
              </span>
            </div>

            <div className="chart">
              <div className="chart__line">
                <span style={{ height: '28%' }} />
                <span style={{ height: '38%' }} />
                <span style={{ height: '34%' }} />
                <span style={{ height: '50%' }} />
                <span style={{ height: '46%' }} />
                <span style={{ height: '63%' }} />
                <span style={{ height: '58%' }} />
                <span style={{ height: '78%' }} />
                <span style={{ height: '72%' }} />
                <span style={{ height: '92%' }} />
              </div>
            </div>

            <div className="dashboard-card__footer">
              <div>
                <span>Page speed</span>
                <strong>98</strong>
              </div>

              <div>
                <span>Bounce rate</span>
                <strong>21%</strong>
              </div>

              <div>
                <span>Uptime</span>
                <strong>99.9%</strong>
              </div>
            </div>
          </div>

          <div className="floating-card floating-card--top">
            <span>Performance</span>
            <strong>98/100</strong>
          </div>

          <div className="floating-card floating-card--bottom">
            <span>Revenue impact</span>
            <strong>+42%</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;