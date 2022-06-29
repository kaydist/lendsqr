import React, { useState } from "react";
import "./_login.scss";
import { Formik } from "formik";

//components
import FillButton from "../../components/common/button/button";
import Input from "../../components/common/input/input";

//icons
import { ReactComponent as Logo } from "../../assets/brand/logo.svg";
import SignInIllustration from "../../assets/brand/sign-in-illustration.png";

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="login-page">
      <div className="svg-section">
        <div className="logo">
          <Logo />
        </div>

        <div className="illustration-container">
          <img src={SignInIllustration} alt="Sign In To Lendsqr" />
        </div>
      </div>

      <div className="form-section-container">
        <div className="form-section">
          <div className="logo">
            <Logo />
          </div>

          <div>
            <h1>Welcome!</h1>

            <p className="page-subheading">Enter details to login.</p>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="input-field">
                  <div className="input-container">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                  <label className="input-error">
                    {errors.email && touched.email && errors.email}
                  </label>
                </div>

                <div className="input-field">
                  <div className="input-container password">
                    <Input
                      type={passwordVisible ? `text` : "password"}
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />

                    <span
                      onClick={() => {
                        setPasswordVisible(!passwordVisible);
                      }}
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </span>
                  </div>

                  <label className="input-error">
                    {errors.password && touched.password && errors.password}
                  </label>
                </div>

                <p className="forgot-password">FORGOT PASSWORD?</p>

                <FillButton type="submit" disabled={isSubmitting}>
                  LOG IN
                </FillButton>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
