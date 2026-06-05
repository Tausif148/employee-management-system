import { type FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import type { IEmployee } from "src/interface/useEmployeeTypes";

const defaultValues: IEmployee = {
    name: "",
    position: "",
    email: "",
    phone: "",
    status: "Active",
    image: "",
};

const schema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .required("Full Name is required"),

    position: Yup.string()
        .trim()
        .required("Position is required"),

    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

    phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),

});

const useEmployeeForm = (
    onSubmit: (
        values: IEmployee,
        formikHelpers: FormikHelpers<IEmployee>
    ) => void | Promise<unknown>,
    initialValues: IEmployee = defaultValues
) => {
    return useFormik<IEmployee>({
        initialValues,
        enableReinitialize: true,
        validationSchema: schema,
        validateOnChange: true,
        validateOnBlur: true,
        validateOnMount: true,
        onSubmit,
    });
};

export default useEmployeeForm;