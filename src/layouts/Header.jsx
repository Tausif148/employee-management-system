const Header = () => {
    return (
        <div className="container-fluid shadow-lg header">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <h1 className="text-center"><a href="index.html" className="h3 text-white text-decoration-none">Logo</a></h1>
                    <div className="d-flex align-items-center navigation">
                        <a href="#" className="text-white">Login</a>
                        <a href="#" className="text-white ps-2">Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;