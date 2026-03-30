import { Link } from "react-router";

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        // your login logic
    };

    return (
        <section className="min-vh-100 d-flex align-items-center justify-content-center p-3 p-md-4 p-xl-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">

                        <div className="card border-0 shadow-lg rounded-4 bg-white">

                            <div className="card-body p-3 p-md-4 p-xl-5">

                                <h4 className="text-center mb-4 fw-bold">Login</h4>

                                <form>
                                    <div className="row gy-3">

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Password"
                                                />
                                                <label htmlFor="password">Password</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="btn btn-success w-100 py-3 fw-semibold">
                                                Log In Now
                                            </button>
                                        </div>

                                    </div>
                                </form>

                                <hr className="my-4" />

                                <div className="text-center">
                                    <Link to="/signup" className="text-decoration-none text-dark">
                                        Create new account
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

export default Login;