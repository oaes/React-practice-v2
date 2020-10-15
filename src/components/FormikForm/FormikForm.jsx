import React from "react";
import { useFormik } from "formik";

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "oaes kuruni",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          id="name"
          type="text"
          name="name"
          placeholder="your name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          id="email"
          type="email"
          name="email"
          placeholder="your email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="channel">Channel</label>
        <input
          className="form-control"
          id="channel"
          type="text"
          name="channel"
          placeholder="your channel name"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormikForm;
