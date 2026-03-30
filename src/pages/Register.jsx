import { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { signup, error, success } = useContext(AuthContext);

    const handleSignup = (e) => {
        e.preventDefault();
        // console.log("Signup form submitted with:", { name, email, password, confirmPassword });  // cgecking if form data is captured correctly
        signup({ error, success, name, email, password, confirmPassword });
    };

    return (
        <section className="min-vh-100 d-flex align-items-center justify-content-center p-3 p-md-4 p-xl-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                        <div className="card border-0 shadow-lg bg-white rounded-4">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <h4 className="text-center mb-4 fw-bold">Signup</h4>
                                <form onSubmit={handleSignup} >
                                    <div className="row gy-3">
                                        {success && (
                                            <div className="col-12">
                                                <div class="alert alert-success text-center" role="alert">
                                                    {success}
                                                </div>
                                            </div>
                                        )}

                                        {error && (
                                            <div className="col-12">
                                                <div className="alert alert-danger text-center" role="alert">
                                                    {error}
                                                </div>
                                            </div>
                                        )}
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                                <label htmlFor="name">Name</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="name@example.com" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                <label htmlFor="password">Password</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="password" className="form-control" id="confirm_password" placeholder="Confirm Password" autoComplete="new-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                                <label htmlFor="confirm_password">Confirm Password</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="btn btn-success w-100 py-3 fw-semibold">
                                                Register Now
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                <hr className="my-4" />

                                <div className="text-center">
                                    <Link to="/login" className="text-decoration-none text-dark">
                                        Already have an account?
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;

