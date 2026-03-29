const EmployeeDetails = ({ img, name, email, post, phone, status }) => {
    return (
        <div className="col-md-4 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm h-100 text-center">

                {/* Image */}
                <div className="position-relative">
                    <img src={img} alt={name} className="card-img-top" />

                    {/* Status Badge on Image */}
                    <span className={`position-absolute top-0 end-0 m-2 badge text-lg ${status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                        {status}
                    </span>
                </div>

                {/* Body */}
                <div className="card-body">

                    <h5 className="fw-semibold mb-1">{name}</h5>

                    <p className="text-black small mb-2">{post}</p>

                    <hr className="my-2" />

                    <p className="small mb-1 text-truncate">
                        <i className="fa-solid fa-envelope me-1 text-black"></i>
                        {email}
                    </p>

                    <p className="small mb-0">
                        <i className="fa-solid fa-phone me-1 text-black"></i>
                        {phone}
                    </p>

                </div>

                {/* Footer */}
                <div className="card-footer bg-white border-0 d-flex gap-2">
                    <button className="btn btn-sm btn-outline-primary w-50">
                        Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger w-50">
                        Delete
                    </button>
                </div>

            </div>
        </div>
    );
};

export default EmployeeDetails;