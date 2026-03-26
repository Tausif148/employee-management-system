

import ProfileImage from '../assets/images/profileImg.jpg';
const employeeDetails = [
    {
        id: '1',
        img: ProfileImage,
        name: 'Tausif Ahmad',
        post: 'Sofware developer',
        email: 'sheikhtousif148@gmail.com'
    },
    {
        id: '2',
        img: ProfileImage,
        name: 'Divyani Kokate',
        post: 'Web developer',
        email: 'divyanikokate1999@gmail.com'
    },
]

import EmployeeDetails from './EmployeeDetails'

const EmployeeList = () => {


    return (
        <div className="container mt-3 pb-5">
            <div className="row justify-content-center d-flex mt-5">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                        <h2 className="mb-3">Employee list</h2>
                        <div className="mt-2">
                            <a href="#" className="text-dark">Clear</a>
                        </div>
                    </div>
                    <div className="card shadow-lg border-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-11 col-md-11">
                                    <input type="text" className="form-control form-control-lg" placeholder="Search by title" />
                                </div>
                                <div className="col-lg-1 col-md-1">
                                    <button className="btn btn-primary btn-lg w-100"><i className="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        {
                            employeeDetails.map(item => {
                                return <EmployeeDetails key={item.id} img={item.img} name={item.name} post={item.post} email={item.post} />
                            })
                        }

                        {/*      
                        
                        <div className="col-md-4 col-lg-3 mb-4">
                            <div className="card border-0 shadow-lg">

                                <a href="detail.html"><img src={ProfileImage} alt="" className="card-img-top" /></a>
                                <div className="card-body">
                                    <h3 className="h4 heading"><a href="#">Atomic Habits</a></h3>
                                    <p>by James Clear</p>
                                    <div className="star-rating d-inline-flex ml-2" title="">
                                        <span className="rating-text theme-font theme-yellow">5.0</span>
                                        <div className="star-rating d-inline-flex mx-2" title="">
                                            <div className="back-stars ">
                                                <i className="fa fa-star " aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>

                                                <div className="front-stars">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="theme-font text-muted">(2 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                        <div className="col-md-4 col-lg-3 mb-4">
                            <div className="card border-0 shadow-lg">
                                <a href="detail.html"><img src="images/book02.jpg" alt="" className="card-img-top" /></a>
                                <div className="card-body">
                                    <h3 className="h4 heading">Think & Grow Rich</h3>
                                    <p>by Napoleon Hill</p>
                                    <div className="star-rating d-inline-flex ml-2" title="">
                                        <span className="rating-text theme-font theme-yellow">0.0</span>
                                        <div className="star-rating d-inline-flex mx-2" title="">
                                            <div className="back-stars ">
                                                <i className="fa fa-star " aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>

                                                <div className="front-stars" >
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="theme-font text-muted">(0 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 mb-4">
                            <div className="card border-0 shadow-lg">
                                <a href="detail.html"><img src="images/book08.jpg" alt="" className="card-img-top" /></a>
                                <div className="card-body">
                                    <h3 className="h4 heading">Autobiography of a Yogi
                                    </h3>
                                    <p>by Paramahansa Yogananda</p>
                                    <div className="star-rating d-inline-flex ml-2" title="">
                                        <span className="rating-text theme-font theme-yellow">0.0</span>
                                        <div className="star-rating d-inline-flex mx-2" title="">
                                            <div className="back-stars ">
                                                <i className="fa fa-star " aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>

                                                <div className="front-stars">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="theme-font text-muted">(0 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 mb-4">
                            <div className="card border-0 shadow-lg">
                                <img src="images/book14.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h3 className="h4 heading">The Psychology of Money</h3>
                                    <p>by Morgan Housel </p>
                                    <div className="star-rating d-inline-flex ml-2" title="">
                                        <span className="rating-text theme-font theme-yellow">0.0</span>
                                        <div className="star-rating d-inline-flex mx-2" title="">
                                            <div className="back-stars ">
                                                <i className="fa fa-star " aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>

                                                <div className="front-stars" >
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="theme-font text-muted">(0 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 mb-4">
                            <div className="card border-0 shadow-lg">
                                <a href="detail.html"><img src="images/book06.jpg" alt="" className="card-img-top" /></a>
                                <div className="card-body">
                                    <h3 className="h4 heading"><a href="#">Atomic Habits</a></h3>
                                    <p>by James Clear</p>
                                    <div className="star-rating d-inline-flex ml-2" title="">
                                        <span className="rating-text theme-font theme-yellow">0.0</span>
                                        <div className="star-rating d-inline-flex mx-2" title="">
                                            <div className="back-stars ">
                                                <i className="fa fa-star " aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>

                                                <div className="front-stars">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="theme-font text-muted">(0 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 mb-4">
                            <div className="card border-0 shadow-lg">
                                <a href="detail.html"><img src="images/book02.jpg" alt="" className="card-img-top" /></a>
                                <div className="card-body">
                                    <h3 className="h4 heading">Think & Grow Rich</h3>
                                    <p>by Napoleon Hill</p>
                                    <div className="star-rating d-inline-flex ml-2" title="">
                                        <span className="rating-text theme-font theme-yellow">0.0</span>
                                        <div className="star-rating d-inline-flex mx-2" title="">
                                            <div className="back-stars ">
                                                <i className="fa fa-star " aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>

                                                <div className="front-stars" >
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="theme-font text-muted">(0 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 mb-4">
                            <div className="card border-0 shadow-lg">
                                <a href="detail.html"><img src="images/book08.jpg" alt="" className="card-img-top" /></a>
                                <div className="card-body">
                                    <h3 className="h4 heading">Autobiography of a Yogi
                                    </h3>
                                    <p>by Paramahansa Yogananda</p>
                                    <div className="star-rating d-inline-flex ml-2" title="">
                                        <span className="rating-text theme-font theme-yellow">0.0</span>
                                        <div className="star-rating d-inline-flex mx-2" title="">
                                            <div className="back-stars ">
                                                <i className="fa fa-star " aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>

                                                <div className="front-stars" >
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="theme-font text-muted">(0 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 mb-4">
                            <div className="card border-0 shadow-lg">
                                <img src="images/book14.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h3 className="h4 heading">The Psychology of Money</h3>
                                    <p>by Morgan Housel </p>
                                    <div className="star-rating d-inline-flex ml-2" title="">
                                        <span className="rating-text theme-font theme-yellow">0.0</span>
                                        <div className="star-rating d-inline-flex mx-2" title="">
                                            <div className="back-stars ">
                                                <i className="fa fa-star " aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>

                                                <div className="front-stars">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="theme-font text-muted">(0 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <nav aria-label="Page navigation " >
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList;