"use client";
import CircularProgressBar from "@/components/CircularProgressBar";
import useAuth from "@/hooks/useAuth";
import {  useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const TextField = ({
  label,
  type,
  name=null,
  placeholder,
  value,
  onChangeHandler,
  formikErrorObj,
  pattern=null,
  onBlur
}) => (
  <div className="mt-2 w-full">
    <label htmlFor={label} className="flex flex-col gap-1">
      {label}
      <input
        type={type}
        name={name ?? type}
        placeholder={placeholder}
        className="p-2 border-[0.5px] rounded-sm border-gray-300 valid:border-green-600 invalid:border-red-700 focus-visible:border-gray-300"
        value={value}
        onChange={onChangeHandler}
        pattern={pattern}
        title={formikErrorObj ?? type.toUpperCase()}
        onBlur={onBlur}
        required
      />
      {formikErrorObj ? (
        <div className="text-red-700 text-sm">{formikErrorObj}</div>
      ) : null}
    </label>
  </div>
);

const page = () => {
  const {register , loading} = useAuth();
  const formik = useFormik({
    initialValues: {
      username:"",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required").min(5 , "Username should be atleast 5 Characters"),
      email: Yup.string().email("Invalid Email Address").required("Email is Required"),
      password: Yup.string()
        .required("No Password Provided")
        .min(8, "Password Should be atleast of 8 characters")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          "Password can contain only alphabets and numbers"
        ),
    }),
    onSubmit: async(values) => {
      await register(values)
    },
    validateOnBlur:true,
  });
  return (
    <div className="flex justify-center items-center m-8">
      {/* Login box */}
      <div className="w-[450px] p-7 border-[1px] border-gray-300 flex justify-center relative shadow-2xl rounded-lg">
        {/* Web logo */}
        <div className="flex justify-center items-center text-white text-sm font-bold absolute top-[-22px] w-20 h-20  p-[9px] rounded-full bg-[#ec4899] border-[2px] border-green-300">
          SHOPINY
        </div>
        <div className="flex flex-col w-full">
          {/* Login header */}
          <p className="pt-12 text-2xl font-semibold uppercase text-center">
            SignUp
          </p>
          {/* Login body */}
          <form className="pt-4 w-full" onSubmit={formik.handleSubmit}>
            <TextField
              label={"Username"}
              name={"username"}
              type={"text"}
              placeholder={"Enter your username"}
              value={formik.values.username}
              onChangeHandler={formik.handleChange}
              formikErrorObj={formik.touched.username && formik.errors.username}
              onBlur={()=>formik.setFieldTouched("username")}
            />
            <TextField
              label={"Email"}
              type={"email"}
              placeholder={"Enter your email"}
              value={formik.values.email}
              onChangeHandler={formik.handleChange}
              formikErrorObj={formik.touched.email && formik.errors.email}
              onBlur={()=>formik.setFieldTouched("email")}
            />
            <TextField
              label={"Password"}
              type={"password"}
              placeholder={"Enter your password"}
              value={formik.values.password}
              onChangeHandler={formik.handleChange}
              formikErrorObj={formik.touched.password && formik.errors.password}
              onBlur={()=>formik.setFieldTouched("password")}
              pattern={`^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$`}
            />
            <button
              type="submit"
              className="bg-[#ec4899] text-white w-full mt-4 cursor-pointer p-2 rounded-lg hover:bg-[#ec489ab4]"
            >
              {
                loading ?
                  <CircularProgressBar className="w-8 h-7 "/>:
                  "SIGNUP"
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
