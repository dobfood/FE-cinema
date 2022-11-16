import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail, getProDuct } from "../../app/reducer";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default function MenuBar() {
    const product = useSelector(item => item.movie.product)
    
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(false)
    return (
        <Disclosure as="nav" className="bg-blue-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-10 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
                            <div className="flex flex-1" style={{ justifyContent: 'center' }}>

                                {/* Text Header */}

                                {/* Menu */}
                                <Menu as="div" className="relative m4-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full  text-sm focus:outline-none  ">
                                            <span className="sr-only">Open user menu</span>
                                            <button>
                                                <div className="hidden sm:ml-6 sm:block">
                                                    <div className="flex space-x-4">
                                                        <button
                                                            className={classNames(
                                                                current
                                                                    ? "bg-gray-900 text-white"
                                                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                                "px-3 py-2 rounded-md text-sm font-medium"

                                                            )}
                                                            aria-current={current ? "page" : undefined}
                                                        >
                                                            PHIM
                                                        </button>
                                                    </div>
                                                </div>

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
                                        <Menu.Items className="absolute left-12 w-full z-40 mt-2 w-auto origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-non  flex">
                                            {product.map(item => (
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                        to={`/chi-tiet/${item.id}`}
                                                            className={classNames(
                                                                active ? "bg-gray-100" : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                            onClick={() => {
                                                                dispatch(getMovieDetail(item.id));
                                                              }} 
                                                        >
                                                          
                                                            <img className="w-50  h-2/6" src={item.imageSrc}
                                                                alt={item.imageSrc} />
                                                                  <div className="text-3xl">
                                                            {item.name}
                                                            </div>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            ))}

                                        </Menu.Items>

                                    </Transition>
                                </Menu>

                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        <button
                                            className={classNames(
                                                current
                                                    ? "bg-gray-900 text-white"
                                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                "px-3 py-2 rounded-md text-sm font-medium"
                                            )}
                                            aria-current={current ? "page" : undefined}
                                        >
                                            GÓC ĐIỆN ẢNH
                                        </button>
                                    </div>
                                </div>
                                {/* End Header Right */}
                            </div>
                            {/* End */}
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
}
