const EmployeeDetails = ({ img, name, email, post }) => {
    return (
        <div className="col-md-4 col-lg-3 mb-4">
            {/* {item.name} */}
            <div className="card border-0 shadow-lg">
                <a href="detail.html"><img src={img} alt="" className="card-img-top" /></a>
                <div className="card-body">
                    <h3 className="h4 heading"><a href="#">{name}</a></h3>
                    <p style={{ margin: '0' }}>{post}</p>
                    <div className="star-rating d-inline-flex ml-2" title="">
                        <span className="rating-text theme-font theme-yellow">Email:</span>
                        <div className="star-rating d-inline-flex mx-2" title="">
                            {email}
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex gap-10">
                    <span className="theme-font text-success"><a href="#">Edit</a></span>
                    <span className="theme-font text-danger"><a href="#">Delete</a></span>
                </div>

            </div>
        </div >
    )
}

export default EmployeeDetails;