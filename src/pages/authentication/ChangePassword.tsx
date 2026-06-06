import { useContext, useState } from "react";
import { AuthContext } from "src/context/AuthProvider";
import Sidebare from "src/layouts/Sidebar";

const ChangePassword = () => {
  const auth = useContext(AuthContext);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showAlert, setShowAlert] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShowAlert(true);

    auth?.changePassword({
      oldPassword,
      newPassword,
      confirmPassword,
    });
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-3">
          <Sidebare />
        </div>

        <div className="col-md-9">
          <form onSubmit={handleSubmit}>
            <div className="card border-0 shadow">
              <div className="card-header bg-success text-white">
                Change Password
              </div>

              <div className="card-body">
                {auth?.success && showAlert && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    {auth.success}

                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={() => setShowAlert(false)}
                    />
                  </div>
                )}

                {auth?.error && showAlert && (
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    {auth.error}

                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={() => setShowAlert(false)}
                    />
                  </div>
                )}

                {/* Old Password */}
                <div className="mb-3">
                  <label htmlFor="old_password" className="form-label">
                    Old Password
                  </label>

                  <div className="input-group">
                    <input
                      type={showOldPassword ? "text" : "password"}
                      className="form-control"
                      id="old_password"
                      placeholder="Old Password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => setShowOldPassword(!showOldPassword)}
                    >
                      <i
                        className={`fa-solid ${
                          showOldPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* New Password */}
                <div className="mb-3">
                  <label htmlFor="new_password" className="form-label">
                    New Password
                  </label>

                  <div className="input-group">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      className="form-control"
                      id="new_password"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      <i
                        className={`fa-solid ${
                          showNewPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label htmlFor="confirm_password" className="form-label">
                    Confirm Password
                  </label>

                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className={`form-control ${
                        confirmPassword && confirmPassword !== newPassword
                          ? "border-danger"
                          : ""
                      }`}
                      id="confirm_password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      <i
                        className={`fa-solid ${
                          showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                      />
                    </button>
                  </div>

                  {confirmPassword && confirmPassword !== newPassword && (
                    <small className="text-danger">
                      Passwords do not match
                    </small>
                  )}
                </div>

                <button type="submit" className="btn btn-success">
                  Change Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
