const EmployeeDetails = ({ img, name, email, post, phone, status }) => {
    return (
        <div className="col-md-4 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm h-100 text-center position-relative">

                {/* Status Badge */}
                <span className="position-absolute top-0 end-0 m-3 small d-flex align-items-center gap-1">
                    <span
                        style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: status === 'Active' ? "green" : "red"
                        }}
                    ></span>
                    <span className={status === 'Active' ? 'text-success' : 'text-danger'}>
                        {status}
                    </span>
                </span>

                {/* Body */}
                <div className="card-body pt-4">

                    {/* Avatar (No Image) */}
                    <div className="mt-3 mb-3 d-flex justify-content-center">
                        <div
                            className="rounded-circle bg-light d-flex align-items-center justify-content-center"
                            style={{
                                width: "60px",
                                height: "60px",
                                fontSize: "22px",
                                fontWeight: "600"
                            }}
                        >
                            {name?.charAt(0).toUpperCase()}
                        </div>
                    </div>

                    <h6 className="fw-semibold mb-1">{name}</h6>
                    <p className="text-muted small mb-3">{post}</p>

                    <hr className="my-2" />

                    <p className="small mb-2 text-truncate">
                        <i className="fa-solid fa-envelope me-2 text-secondary"></i>
                        {email}
                    </p>
                    <p className="small mb-0">
                        <i className="fa-solid fa-phone me-2 text-secondary"></i>
                        {phone}
                    </p>
                </div>

                {/* Footer */}
                <div className="card-footer bg-white border-0 d-flex gap-2 p-3 pt-0">
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