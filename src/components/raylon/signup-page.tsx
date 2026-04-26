import { RaylonPageShell } from "@/components/raylon/page-shell";

const raylonAssetBase =
  "/site-assets/raylon/home/cdn.prod.website-files.com/695f541d5b057db3300c7a71";

export function RaylonSignupPage() {
  return (
    <RaylonPageShell pathname="/authentication-pages/sign-up">
      <SignupAuthenticationSection />
    </RaylonPageShell>
  );
}

function SignupAuthenticationSection() {
  return (
    <section className="section inner-banner">
      <div className="w-layout-blockcontainer container w-container">
        <div className="authentication-contant-wrap">
          <div className="authentication-card raylon-auth-card-enter">
            <div className="authentication-card-contant">
              <div className="log-in">
                <div className="sign-in-form-wrap w-form">
                  <div className="sign-in-top-wrap">
                    <div className="authentication-logo-wrap">
                      <img
                        width="106"
                        height="44"
                        alt="Project Logo"
                        src={`${raylonAssetBase}/6986ec2ef9ed26fbca731c5c_navbar-logo.svg`}
                        loading="lazy"
                        className="authentication-logo"
                      />
                    </div>
                    <h3 className="authentication-title">Create an account</h3>
                    <p className="authentication-details">
                      Financial freedom starts here: Empower yourself with smart
                      money management
                    </p>
                  </div>
                  <form
                    id="wf-form-Sing-In-Email-Form"
                    name="wf-form-Sing-In-Email-Form"
                    data-name="Sing In Email Form"
                    method="get"
                    className="sign-in-form"
                  >
                    <div className="sign-in-single-fields">
                      <div className="booking-field-wrap">
                        <label htmlFor="Your-Name" className="booking-field-label">
                          Name <span className="sign-in-text-link">*</span>
                        </label>
                        <input
                          className="booking-field w-input"
                          maxLength={256}
                          name="Your-Name"
                          data-name="Your Name"
                          placeholder="Enter your name"
                          type="text"
                          id="Your-Name"
                          required
                        />
                      </div>
                      <div className="booking-field-wrap">
                        <label htmlFor="Your-Email" className="booking-field-label">
                          Email <span className="sign-in-text-link">*</span>
                        </label>
                        <input
                          className="booking-field w-input"
                          maxLength={256}
                          name="Your-Email"
                          data-name="Your Email"
                          placeholder="name@example.com"
                          type="email"
                          id="Your-Email"
                          required
                        />
                      </div>
                      <div className="booking-field-wrap">
                        <label
                          htmlFor="your-password"
                          className="booking-field-label"
                        >
                          Password <span className="sign-in-text-link">*</span>
                        </label>
                        <input
                          className="booking-field w-input"
                          maxLength={256}
                          name="your-password"
                          data-name="Your Password"
                          placeholder="Enter your password"
                          type="password"
                          id="your-password"
                          required
                        />
                      </div>
                    </div>
                    <div className="sign-in-single-field-wrap flex">
                      <label className="w-checkbox sign-in-checkbox-wrap">
                        <div className="w-checkbox-input w-checkbox-input--inputType-custom sign-in-checkbox" />
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                          data-name="Checkbox"
                          required
                          className="raylon-hidden-checkbox"
                        />
                        <span
                          className="sign-in-checkbox-label w-form-label"
                        >
                          I agree to the all{" "}
                          <a href="#" className="sign-in-text-link">
                            Terms &amp; Conditions.
                          </a>
                        </span>
                      </label>
                    </div>
                    <div className="sign-in-btn-wrap">
                      <div className="submit-button-wrap">
                        <input
                          type="submit"
                          data-wait=""
                          className="submit-button width-100 w-button"
                          value="Create account"
                        />
                        <div className="button-stroke-wrapper">
                          <div className="stroke-block" />
                        </div>
                      </div>
                    </div>
                    <div className="sign-in-alternative">
                      <div className="alternative-details">
                        Already have an account?{" "}
                        <a href="#" className="sign-in-text-link">
                          Sign In
                        </a>
                      </div>
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-light-wrap">
        <img
          src={`${raylonAssetBase}/6965e6019fae9d2e8f8aab6d_banner-light-shape.avif`}
          loading="lazy"
          sizes="(max-width: 867px) 100vw, 867px"
          srcSet={`${raylonAssetBase}/6965e6019fae9d2e8f8aab6d_banner-light-shape-p-500.png 500w, ${raylonAssetBase}/6965e6019fae9d2e8f8aab6d_banner-light-shape.avif 867w`}
          alt="Light Shape"
          className="banner-light"
        />
      </div>
    </section>
  );
}
