import Sidebare from "../layouts/Sidebar";
import ProfileImage from '../assets/images/profileImg.jpg'


const AddEmployee = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <Sidebare ProfileImage={ProfileImage} />
                <div className="col-md-9">
                    <div className="card border-0 shadow">
                        <div className="card-header  text-white">
                            Add Book
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Title"
                                    name="title"
                                    id="title"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="author" className="form-label">Author</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Author"
                                    name="author"
                                    id="author"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    name="description"
                                    id="description"
                                    className="form-control"
                                    placeholder="Description"
                                    cols="30"
                                    rows="5"
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="image"
                                    id="image"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="status" className="form-label">Status</label>
                                <select
                                    name="status"
                                    id="status"
                                    className="form-control"
                                >
                                    <option value="active">Active</option>
                                    <option value="block">Block</option>
                                </select>
                            </div>

                            <button className="btn btn-primary mt-2">
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AddEmployee;