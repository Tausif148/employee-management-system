const Register = () => {

    const handleSignup = (e) => {
        e.preventDefault();
        // your login logic
    };

    return (
        <section className=" p-3 p-md-4 p-xl-5 h-100vh">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                        <div className="card border border-light-subtle rounded-4">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mt-2 mb-3">
                                            <h4 className="text-center">Signup</h4>
                                        </div>
                                    </div>
                                </div>
                                <form >
                                    <div className="row gy-3 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-1">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                                <label htmlFor="name" className="form-label">Name</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating mb-1">
                                                <input type="text" className="form-control" name="email" id="email" placeholder="name@example.com" />
                                                <label htmlFor="email" className="form-label">Email</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating mb-1">
                                                <input type="password" className="form-control" name="password" id="password" placeholder="Password" />
                                                <label htmlFor="password" className="form-label">Password</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating mb-1">
                                                <input type="password" className="form-control" name="confirm_password" id="confirm_password" placeholder="Confirm Password" />
                                                <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn bsb-btn-xl btn-primary py-3 bg-success" type="submit">
                                                    Register Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-12">
                                        <hr className="border-secondary-subtle" />
                                        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-center">
                                            <a href="#" className="link-secondary text-decoration-none text-center text-black" >Already have a account</a>
                                        </div>
                                    </div>
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

