import { type FormEvent, useState } from 'react';
import '../style/Contact.css';

type FormData = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range.';
    }

    if (formData.message.trim().length < 20) {
      newErrors.message =
        'Please tell us a little more about your project (20 characters minimum).';
    }

    return newErrors;
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((current) => ({
        ...current,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact__layout">
        <div className="contact__content">
          <p className="section-label">Start a project</p>

          <h2 className="section-title">
            Have an idea?
            <br />
            Let's make it work.
          </h2>

          <p className="section-description">
            Tell us where you are, where you want to go, and what's standing
            in the way. We'll take it from there.
          </p>

          <div className="contact__details">
            <div>
              <span>Response time</span>
              <strong>Within 1 business day</strong>
            </div>

            <div>
              <span>Based in</span>
              <strong>Remote · Worldwide</strong>
            </div>
          </div>
        </div>

        <div className="contact__form-wrapper">
          {submitted ? (
            <div
              className="contact__success"
              role="status"
              aria-live="polite"
            >
              <div className="contact__success-icon" aria-hidden="true">
                ✓
              </div>

              <h3>Thanks for reaching out.</h3>

              <p>
                Your project details passed validation. This demo form does not
                send data to a server.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">
                    Name <span aria-hidden="true">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? 'name-error' : undefined
                    }
                    placeholder="Your name"
                  />

                  {errors.name && (
                    <p className="form-error" id="name-error">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="email">
                    Email <span aria-hidden="true">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? 'email-error' : undefined
                    }
                    placeholder="you@company.com"
                  />

                  {errors.email && (
                    <p className="form-error" id="email-error">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="projectType">
                    Project type <span aria-hidden="true">*</span>
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={
                      errors.projectType
                        ? 'project-type-error'
                        : undefined
                    }
                  >
                    <option value="">Select project</option>
                    <option value="website">
                      Website design & development
                    </option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="redesign">Website redesign</option>
                    <option value="performance">
                      Performance optimization
                    </option>
                    <option value="other">Other</option>
                  </select>

                  {errors.projectType && (
                    <p
                      className="form-error"
                      id="project-type-error"
                    >
                      {errors.projectType}
                    </p>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="budget">
                    Budget <span aria-hidden="true">*</span>
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.budget)}
                    aria-describedby={
                      errors.budget ? 'budget-error' : undefined
                    }
                  >
                    <option value="">Select budget</option>
                    <option value="1500-3000">$1,500 – $3,000</option>
                    <option value="3000-5000">$3,000 – $5,000</option>
                    <option value="5000-10000">$5,000 – $10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>

                  {errors.budget && (
                    <p className="form-error" id="budget-error">
                      {errors.budget}
                    </p>
                  )}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">
                  Tell us about your project{' '}
                  <span aria-hidden="true">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                  placeholder="What are you looking to build or improve?"
                />

                <div className="form-field__bottom">
                  <div>
                    {errors.message && (
                      <p className="form-error" id="message-error">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <span
                    className="form-character-count"
                    aria-hidden="true"
                  >
                    {formData.message.length} characters
                  </span>
                </div>
              </div>

              <button className="contact-form__submit" type="submit">
                Send project enquiry
                <span aria-hidden="true">→</span>
              </button>

              <p className="contact-form__note">
                Demo form — no information is transmitted or stored.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;