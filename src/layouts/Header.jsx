const Header = () => {
    return (
        <header className="container-fluid shadow-lg header bg-success">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="text-center"><a href="index.html" className="h3 text-white text-decoration-none">Logo</a></h1>

                    <div className="text-white">
                        Welcome,  John Doe

                        {/* <div className="d-flex align-items-center">
                            <a href="#" className="text-white">User login</a>
                            <a href="#" className="text-white ps-2">Admin login</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;