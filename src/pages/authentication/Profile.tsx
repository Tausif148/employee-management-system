import { useContext, useState } from "react";
import { AuthContext } from "src/context/AuthProvider";
import Sidebare from "src/layouts/Sidebar";

const Profile = () => {
  const [showAlert, setShowAlert] = useState(true);
  const authProfile = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: authProfile?.user?.name || "",
    email: authProfile?.user?.email || "",
    phone: authProfile?.user?.phone || "",
    address: authProfile?.user?.address || "",
    bio: authProfile?.user?.bio || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowAlert(true);
    authProfile?.profile(formData);
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-3">
          <Sidebare />
        </div>

        <div className="col-md-9">
          <div className="card border-0 shadow">
            <div className="card-header bg-success text-white">Profile</div>

            <div className="card-body">
              {authProfile?.success && showAlert && (
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  {authProfile.success}

                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setShowAlert(false)}
                  />
                </div>
              )}

              {authProfile?.error && showAlert && (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  {authProfile.error}

                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setShowAlert(false)}
                  />
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row mt-1">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Role</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Admin"
                      disabled
                    />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label className="form-label">Address</label>
                    <textarea
                      name="address"
                      className="form-control"
                      rows={2}
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label className="form-label">Bio</label>
                    <textarea
                      name="bio"
                      className="form-control"
                      rows={3}
                      value={formData.bio}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="text-start">
                  <button type="submit" className="btn btn-success px-4">
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
