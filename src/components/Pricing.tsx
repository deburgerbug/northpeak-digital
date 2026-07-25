import { pricingPlans } from '../data/siteData';
import '../style/Pricings.css';

function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="pricing__header">
          <div>
            <p className="section-label">Simple pricing</p>

            <h2 className="section-title">
              Start where you are. Build for where you're going.
            </h2>
          </div>

          <p className="section-description">
            Clear starting points without rigid packages. Every engagement is
            refined around your goals, scope, and technical requirements.
          </p>
        </div>

        <div className="pricing__grid">
          {pricingPlans.map((plan) => (
            <article
              className={`pricing-card ${
                plan.featured ? 'pricing-card--featured' : ''
              }`}
              key={plan.name}
            >
              {plan.featured && (
                <span className="pricing-card__badge">
                  Most popular
                </span>
              )}

              <div className="pricing-card__header">
                <p className="pricing-card__name">{plan.name}</p>

                <div className="pricing-card__price">
                  <strong>{plan.price}</strong>

                  {plan.price !== 'Custom' && (
                    <span>starting at</span>
                  )}
                </div>

                <p className="pricing-card__description">
                  {plan.description}
                </p>
              </div>

              <ul className="pricing-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={
                  plan.featured
                    ? 'pricing-card__button pricing-card__button--primary'
                    : 'pricing-card__button'
                }
              >
                {plan.name === 'Scale'
                  ? 'Talk to us'
                  : 'Start a project'}
              </a>
            </article>
          ))}
        </div>

        <p className="pricing__note">
          Prices are illustrative starting points. Final scope and pricing are
          confirmed after a project discovery call.
        </p>
      </div>
    </section>
  );
}

export default Pricing;