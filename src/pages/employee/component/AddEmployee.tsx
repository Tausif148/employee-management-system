import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { supabase } from "src/services/supabaseClient";
import { useEmployeeActions } from "../../../apiActions/useEmployeeActions";
import type { IEmployee } from "src/interface/useEmployeeTypes";
import useEmployeeForm from "src/formic/useEmplyeeForm";

interface AddEmployeeProps {
  employee?: IEmployee | any;
  closeModal: () => void;
  refetch?: () => void;
}

const AddEmployee = ({
  employee,
  closeModal,
  refetch,
}: AddEmployeeProps) => {
  const { tryAdd, tryUpdate } = useEmployeeActions();

  const isEdit = Boolean(employee);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  const onSubmit = async (values: IEmployee) => {
    try {
      let imageUrl = values.image || "";

      if (imageFile) {
        const fileName = `${Date.now()}_${imageFile.name}`;

        const { error } = await supabase.storage
          .from("employee-images")
          .upload(fileName, imageFile);

        if (error) {
          toast.error("Image upload failed");
          return;
        }

        const { data } = supabase.storage
          .from("employee-images")
          .getPublicUrl(fileName);

        imageUrl = data.publicUrl;
      }

      const payload = {
        ...values,
        image: imageUrl,
      };

      if (isEdit && employee?.id) {
        await tryUpdate(employee.id, payload);
        toast.success("Employee updated successfully");
      } else {
        await tryAdd(payload);
        toast.success("Employee added successfully");
      }

      refetch?.();
      resetForm();
      closeModal();
    } catch (error) {
      console.error(error);
      toast.error(
        isEdit
          ? "Failed to update employee"
          : "Failed to add employee"
      );
    }
  };

  const formik = useEmployeeForm(onSubmit);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
    isSubmitting,
  } = formik;

  useEffect(() => {
    if (employee) {
      setFieldValue("name", employee.name || "");
      setFieldValue("position", employee.position || "");
      setFieldValue("email", employee.email || "");
      setFieldValue("phone", employee.phone || "");
      setFieldValue("status", employee.status || "Active");
      setFieldValue("image", employee.image || "");

      setImagePreview(employee.image || "");
    } else {
      resetForm();
      setImagePreview("");
    }

    setImageFile(null);
  }, [employee]);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">

        {/* Name */}
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">
            Full Name <span className="text-danger">*</span>
          </label>

          <input
            type="text"
            name="name"
            className={`form-control ${
              touched.name && errors.name ? "is-invalid" : ""
            }`}
            placeholder="Enter full name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.name && errors.name && (
            <div className="invalid-feedback">
              {errors.name}
            </div>
          )}
        </div>

        {/* Position */}
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">
            Position <span className="text-danger">*</span>
          </label>

          <input
            type="text"
            name="position"
            className={`form-control ${
              touched.position && errors.position ? "is-invalid" : ""
            }`}
            placeholder="Enter position"
            value={values.position}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.position && errors.position && (
            <div className="invalid-feedback">
              {errors.position}
            </div>
          )}
        </div>

        {/* Email */}
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">
            Email <span className="text-danger">*</span>
          </label>

          <input
            type="email"
            name="email"
            className={`form-control ${
              touched.email && errors.email ? "is-invalid" : ""
            }`}
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.email && errors.email && (
            <div className="invalid-feedback">
              {errors.email}
            </div>
          )}
        </div>

        {/* Phone */}
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">
            Phone <span className="text-danger">*</span>
          </label>

          <input
            type="text"
            name="phone"
            className={`form-control ${
              touched.phone && errors.phone ? "is-invalid" : ""
            }`}
            placeholder="Enter phone number"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.phone && errors.phone && (
            <div className="invalid-feedback">
              {errors.phone}
            </div>
          )}
        </div>

        {/* Image */}
        <div className="col-md-12 mb-3">
          <label className="form-label fw-semibold">
            Profile Image
          </label>

          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleImageChange}
          />

          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-2 rounded-circle border border-success"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
              }}
            />
          )}
        </div>

        {/* Status */}
        <div className="col-md-12 mb-4">
          <label className="form-label fw-semibold">
            Status <span className="text-danger">*</span>
          </label>

          <select
            name="status"
            className={`form-select ${
              touched.status && errors.status
                ? "is-invalid"
                : ""
            }`}
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          {touched.status && errors.status && (
            <div className="invalid-feedback">
              {errors.status}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="col-12 text-center">
          <button
            type="submit"
            className="btn btn-success px-4 me-2"
            disabled={isSubmitting}
          >
            <i className="fa fa-check me-2"></i>
            {isEdit ? "Update Employee" : "Add Employee"}
          </button>

          <button
            type="button"
            className="btn btn-danger px-4"
            onClick={closeModal}
          >
            <i className="fa fa-times me-2"></i>
            Close
          </button>
        </div>

        <ToastContainer />
      </div>
    </form>
  );
};

export default AddEmployee;