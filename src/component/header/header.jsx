import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../../feauture/account/account.slice";

function HomeCss(...homeCss) {
  return homeCss.filter(Boolean).join(" ");
}
export default function Header() {
  const account = useSelector((state) => {
    console.log(state);
    return state.account;
  });
const dispatch = useDispatch()
  const [current, setCurrent] = useState(false);
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" >
            <div className="relative flex h-16 items-center justify-between w-full " >
              <div className="absolute inset-y-0 left-0 flex items-center  sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sky_Cinema_-_Logo_2020.svg/2560px-Sky_Cinema_-_Logo_2020.svg.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sky_Cinema_-_Logo_2020.svg/2560px-Sky_Cinema_-_Logo_2020.svg.png"
                    alt="Your Company"
                  />
                </div>
                {/* Text Header */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link
                      to="/"
                      className={HomeCss(
                        current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={current ? "page" : undefined}
                    >
                      {" "}
                      Trang chủ
                    </Link>
                  </div>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <button
                      className={HomeCss(
                        current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={current ? "page" : undefined}
                    >
                      Sản phẩm
                    </button>
                  </div>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <button
                      className={HomeCss(
                        current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={current ? "page" : undefined}
                    >
                      Về chúng tôi
                    </button>
                  </div>
                </div>
              </div>
              {/* End Header Right */}

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative m4-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href=""
                            className={HomeCss(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Đẹp trai
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href=""
                            className={HomeCss(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sát gái
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              {/* Register, login */}
              {account.isLogin ? (
                <div className="flex ml-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-1 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <div className="">{account.user.name}</div>
                  <button onClick={()=>{dispatch(isLogin(false))}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 ml-3 hover:bg-gray-1000"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="btn-header">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <Link
                        to="/dang-ky"
                        className={HomeCss(
                          current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={current ? "page" : undefined}
                      >
                        {" "}
                        Đăng ký
                      </Link>
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <Link
                        to="/dang-nhap"
                        className={HomeCss(
                          current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={current ? "page" : undefined}
                      >
                        {" "}
                        Đăng nhập
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              {/* End */}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
