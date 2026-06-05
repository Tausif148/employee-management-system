import { Link } from "react-router";

import pagenotfound from "src/assets/images/pagenotfound.webp";


export default function PageNotFound() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2 >Page Not Found</h2>
            <p>Click below to go to the home page</p>
            <div>
                <Link className="text-black" to="/">Go to Home Page</Link>
            </div>
            <img style={{ width: "60%" }} src={pagenotfound} alt="" />
        </div>
    )
}