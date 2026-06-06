import { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "src/context/AuthProvider";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const auth = useContext(AuthContext);

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth?.signup({ name, email, password, confirmPassword }); // ← removed error/success
  };
  


  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center p-3 p-md-4 p-xl-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
            <div className="card border-0 shadow-lg bg-white rounded-4">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <h4 className="text-center mb-4 fw-bold">Signup</h4>
                <form onSubmit={handleSignup}>
                  <div className="row gy-3">
                    {auth?.success && (
                      <div className="col-12">
                        <div className="alert alert-success text-center">
                          {auth.success}
                        </div>
                      </div>
                    )}
                    {auth?.error && (
                      <div className="col-12">
                        <div className="alert alert-danger text-center">
                          {auth.error}
                        </div>
                      </div>
                    )}
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name">Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="name@example.com"
                          autoComplete="username"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating position-relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          autoComplete="new-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />

                        <label htmlFor="password">Password</label>

                        <button
                          type="button"
                          className="btn position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <i
                            className={`fa-solid ${
                              showPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                          ></i>
                        </button>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating position-relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          className={`form-control ${
                            confirmPassword && confirmPassword !== password
                              ? "border-danger"
                              : ""
                          }`}
                          id="confirm_password"
                          placeholder="Confirm Password"
                          autoComplete="new-password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <label htmlFor="confirm_password">
                          Confirm Password
                        </label>

                        <button
                          type="button"
                          className="btn position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          <i
                            className={`fa-solid ${
                              showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                          />
                        </button>
                      </div>
                      <div
                        style={{
                          display:
                            confirmPassword && confirmPassword !== password
                              ? "block"
                              : "none",
                        }}
                      >
                        <small className="text-danger">
                          Passwords do not match
                        </small>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-success w-100 py-3 fw-semibold"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </form>
                <hr className="my-4" />
                <div className="text-center">
                  <Link
                    to="/admin/login"
                    className="text-decoration-none text-dark"
                     onClick={() => auth?.clearMessages()}
                  >
                    Already have an account?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
