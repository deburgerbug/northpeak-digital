import { services } from '../data/siteData';
import '../style/Services.css';

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services__header">
          <div>
            <p className="section-label">What we do</p>

            <h2 className="section-title">
              Everything your website needs to perform.
            </h2>
          </div>

          <p className="section-description">
            From strategy and design to development and optimization, we build
            digital experiences around measurable business outcomes.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card__top">
                <span className="service-card__number">
                  {service.number}
                </span>

                <span className="service-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;