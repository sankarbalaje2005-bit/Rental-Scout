import { Link, useParams } from "react-router-dom";
import { listings } from "../data/listings";
import { useState } from "react";
import StatusPanel from "../components/StatusPanel";
import { findListingById } from "../utils/listingHelpers";

function InquiryPage() {
  const { listingId } = useParams();

  const listing = findListingById(listings, listingId);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));
  }
  function validateForm() {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (!formData.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (phoneDigits.length !== 10) {
      nextErrors.phone = "Phone number must contain 10 digits.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please enter a message.";
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = "Message must contain at least 10 characters.";
    }

    return nextErrors;
  }
  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    setIsSubmitted(true);

    // The form is valid. Confirmation comes next.
  }

  if (!listing) {
    return (
      <StatusPanel variant="error" title="Rental not found" headingLevel="h1">
        <p>We cannot create an inquiry for this rental.</p>

        <Link className="primary-link" to="/listings">
          Return to browse
        </Link>
      </StatusPanel>
    );
  }
  if (isSubmitted) {
    return (
      <StatusPanel
        variant="success"
        title={`Thank you, ${formData.fullName}!`}
        headingLevel="h1"
      >
        <p className="confirmation-label">Inquiry sent successfully</p>

        <p>
          Your inquiry about <strong>{listing.title}</strong> has been recorded.
        </p>

        <p>
          We will use <strong>{formData.email}</strong> to contact you.
        </p>

        <Link className="primary-link" to="/listings">
          Return to browse
        </Link>
      </StatusPanel>
    );
  }

  return (
    <section className="inquiry-page">
      <h1>Inquire about this rental</h1>
      <p>
        You are applying for <strong>{listing.title}</strong>.
      </p>

      <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
        <label>
          Full name
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            // Full name
            required
            autoComplete="name"
          />
          {errors.fullName && (
            <span id="fullName-error" className="form-error" role="alert">
              {errors.fullName}
            </span>
          )}
        </label>

        <label>
          Email address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            // Email
            required
            autoComplete="email"
          />
          {errors.email && (
            <span id="email-error" className="form-error" role="alert">
              {errors.email}
            </span>
          )}
        </label>

        <label>
          Phone number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            // Phone
            required
            autoComplete="tel"
          />
          {errors.phone && (
            <span id="phone-error" className="form-error" role="alert">
              {errors.phone}
            </span>
          )}
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            required           
          />
          {errors.message && (
            <span id="message-error" className="form-error" role="alert">
              {errors.message}
            </span>
          )}
        </label>

        <button type="submit">Send inquiry</button>
      </form>
    </section>
  );
}

export default InquiryPage;
