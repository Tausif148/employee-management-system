import { Link } from "react-router";

const Header = () => {

    
    return (
        <header className="container-fluid shadow-lg header bg-success">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="text-center">
                        <Link to="/" className="h3 text-white text-decoration-none">Logo</Link>
                    </h1>

                    <div className="text-white">
                        Welcome,  John Doe
        
                        <div className="d-flex align-items-end justify-content-end">
            
                            <Link to="/signup" className="h3 text-white text-decoration-none fs-6">Register</Link>
                            <Link to="/login" className="h3 text-white text-decoration-none fs-6 ms-3 ">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;