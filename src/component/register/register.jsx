import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import axios from "axios";
// import 'flowbite';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Tối thiểu 4 ký tự!")
    .max(50, "Tối đa 50 ký tự!")
    .required("Bắt buộc!"),

  email: Yup.string()
    .email("Email không hợp lệ!")
    .required("Bắt buộc!")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Email không đúng định dạng.(vd: abc@gmail.com)"
    ),
  password: Yup.string().required("Bắt buộc")
  .matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    "Mật khẩu phải ít nhất 8 ký tự ít nhất một viết hoa, một viết thường và một số."),
    confirmPassword: Yup.string()
      .required('Bắt buộc!')
      .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp!"),
});

export default function Registration() {
  const [existedEmail, setExistedEmail] = useState("");
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    // confirmPassword: "",
  });
  const handleRegister = async (data) => {
    return await axios.post("http://localhost:2212/api/auth/signup", data);
  };
  return (
    <Formik
      initialValues={form}
      validationSchema={RegisterSchema}
      onSubmit={(value) => {
        handleRegister(value)
          .then((res) => {
            console.log(res);
            if (res.data.success == true) {
              // navigate("/login");
            }
          })
          .catch((e) => console.log(e)
          // setExistedEmail("Tài khoản đã tồn tại")
          );
      }}
    >
      <Form>
        <section className="text-gray-600 body-font">
          <div
            className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center"
            style={{
              background:
                'url("https://cdn.pixabay.com/photo/2017/08/19/19/43/nature-2659682_1280.jpg")',
            }}
          >
            <div className="lg:w-3/5 lg:pr-0 pr-0">
              <h1 className="title-font font-medium font-bold text-5xl text-white">
                Slow-carb next level shoindcgoitch ethical authentic, poko
                scenester
              </h1>
              <p className="leading-relaxed mt-4 text-white">
                Poke slow-carb mixtape knausgaard, typewriter street art
                gentrify hammock starladder roathse. Craies vegan tousled etsy
                austin.
              </p>
            </div>
            <div className="lg:w-2/6 xl:w-2/5 md:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                Đăng ký
              </h2>
              
              {existedEmail ? (
                <div class="ml-3 text-sm font-normal">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {existedEmail}
                </div>
              ) : null}
              <div className="relative mb-4">
                <label
                  //   htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Tên 
                </label>
                <Field
                  type="text"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <a className="errors">
                  <ErrorMessage name="name" />
                </a>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <a className="errors">
                  <ErrorMessage name="email" />
                </a>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Mật khẩu
                </label>
                <Field
                  type="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <a className="errors">
                  <ErrorMessage name="password" />
                </a>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Xác nhận mật khẩu
                </label>
                <Field
                  type="password"
                  id="email"
                  name="confirmPassword"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <a className="errors">
                  <ErrorMessage name="confirmPassword" />
                </a>
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Button
              </button>
              <div>
                <p className="text-xs text-gray-500 mt-3">
                  Are you have a account ?
                </p>
                <Link style={{ color: "blue" }} to="/login">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Form>
    </Formik>
  );
}
