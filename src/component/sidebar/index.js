import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { getMovieDetail, searchFillterChange } from "../../app/reducer";
import { isLogin } from "../../feauture/account/account.slice";

export default function Sidebar() {
  const navigate = useNavigate();
  const productListSearch = useSelector((item) => item.movie.fillter.search);
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const productSearch = useSelector((item) => {
    const search1 = item.movie.product.filter((item) => {
      return item.name.includes(productListSearch);
    });
    return search1;
  });
  const checkLogin = useSelector((state) => {
    console.log(state.account);
    return state.account.isLogin;
  });

  const handleChangeSearch = (e) => {
    dispatch(searchFillterChange(e.target.value));
  };

  return (
    <div className="mx-2">
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden ">
          <div className="carousel-item active relative float-left w-full">
            <img
              onClick='/chi-tiet/1'
              src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448__4.jpg"
              className="block w-full"
              alt="..."
            />
            
            <div className="carousel-caption hidden md:block absolute text-center">
            

            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980_x_448__1__2.jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              
     
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/a/w/aw-980x448.jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
         
  
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="relative flex py-5 items-center bg-white my-2">
        <div className="flex-grow border-t border-gray-600"></div>
        <span className="flex-shrink mx-4 text-gray-600">Danh s??ch phim </span>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>
      {/* Search */}
      <form className="mx-6">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            onChange={handleChangeSearch}
            type="search"
            id="default-search"
            class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search movies ....."
            required
          />
        </div>
      </form>
      {/* Product */}
      
      <div className="mx-6">
        <div>
          <div className="mt-6 grid grid-cols-1 gap-y-20 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productSearch.map((product) => (
              <div key={product.id} className=" group relative ">
                <div className="min-h-80 aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 ">
                  <span className="items-center justify-center absolute my-36  ml-28 z-50 ">
                    <p className="bg-orange-600 opacity-0 group-hover:opacity-100 ml-5 text-center mb-5 mr-2">
                      {product.Age}
                    </p>
                    <button
                      onClick={() => {
                        dispatch(getMovieDetail(product.id)) 
                        checkLogin? navigate(`/chi-tiet/${product.id}`): navigate('/dang-nhap')
                      }}
                      // to={}
                      // type="submit"
                      class=" opacity-0 group-hover:opacity-100 text-white font-bold py-2 px-4 border border-black-700 rounded"
                    >
                      Mua v??
                    </button>
                  </span>
                  <img
                    src={product.imageSrc}
                    alt={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:opacity-75"
                  />
                </div>
               
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      
                      <button
                        onClick={() => {
                          dispatch(getMovieDetail(product.id)) 
                          checkLogin? navigate(`/chi-tiet/${product.id}`): navigate('/dang-nhap')
                        }}
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </button>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.engname}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* hr */}
      <div className="relative flex py-5 items-center bg-white">
        <div className="flex-grow border-t border-gray-600 bg-white"></div>
        <span className="flex-shrink mx-4 text-gray-600 bg-white">New Feeds</span>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>
      {/* New Feed  */}
      <div className="max-w-screen-xl mx-auto p-4 bg-white">
        <h1 className="text-5xl font-extrabold mb-4 text-center text-indigo-700">
          BLOG ??I???N ???NH
        </h1>
        <div className="flex flex-col md:flex-row -mx-1.5 p-4">
          <a
            href="#"
            className="h-72 md:h-auto w-full md:w-7/12 mx-1.5 mb-6 md:mb-0 group"
          >
            <div className="h-72 md:h-full relative">
              <img
                src="https://www.galaxycine.vn/media/2022/10/5/black-panther-wakanda-forever-boc-tach-trailer-moi-nhat-1_1664954237359.jpeg"
                className="absolute z-0 object-cover w-full h-72 md:h-full rounded-md"
              />
              <div className="absolute gradient w-full h-72 md:h-full rounded-md z-10"></div>
              <div className="absolute left-0 right-0 bottom-0 p-4 z-30">
                <h1 className="font-bold text-white leading-tight sm:mb-1.5 group-hover:underline text-2xl md:text-3xl text-stone-900">
                  Black Panther Wakanda Forever: B??c T??ch Trailer M???i Nh???t!
                </h1>
                <div className="text-xs text-white hidden sm:block">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="clock"
                      className="h-3 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                      ></path>
                    </svg>
                    <span className="text-xs text-white">21/10/2022</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-full md:w-5/12 mx-1.5">
            <a href="#" className="flex items-center group mb-3 pb-3 border-b">
              <img
                src="https://www.galaxycine.vn/media/2022/8/29/may-ngung-quay--ho-van-dien--nhung-ngoi-sao-tan-tam-nhat-7_1661791947923.jpg"
                className="rounded-md object-cover mr-3 h-24 w-24"
              />
              <div className="flex-1">
                <h2 className="font-bold text-lg leading-tight group-hover:underline mb-2 text-stone-900">
                  Ma??y Ng????ng Quay, Ho?? V????n Di????n ??? Nh????ng Ng??i Sao T????n T??m Nh????t!
                </h2>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="clock"
                    className="h-3 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                    ></path>
                  </svg>
                  <span className="text-xs">1h | Stephen Ainsworth</span>
                </div>
              </div>
            </a>
            <a href="#" className="flex items-center group mb-3 pb-3 border-b">
              <img
                src="https://www.galaxycine.vn/media/2022/8/29/vi-cuu-the-flash--ezra-miller-hua-se-ngoan-6_1661790089141.jpg"
                className="rounded-md object-cover mr-3 h-24 w-24"
              />
              <div className="flex-1">
                <h2 className="font-bold text-lg leading-tight group-hover:underline mb-2 text-stone-900">
                  Vi?? C????u The Flash, Ezra Miller H????a Se?? Ngoan!
                </h2>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="clock"
                    className="h-3 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                    ></path>
                  </svg>
                  <span className="text-xs">18h | Stephen Ainsworth</span>
                </div>
              </div>
            </a>
            <a href="#" className="flex items-center group mb-3 pb-3 border-b">
              <img
                src="https://www.galaxycine.vn/media/2022/8/29/nope-khong-phai-mot-phim-kinh-di-de-hieu--3_1661781885960.jpg"
                className="rounded-md object-cover mr-3 h-24 w-24"
              />
              <div className="flex-1">
                <h2 className="font-bold text-lg leading-tight group-hover:underline mb-2 text-stone-900">
                  Nope: Kh??ng Pha??i M????t Phim Kinh Di?? D???? Hi????u!
                </h2>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="clock"
                    className="h-3 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                    ></path>
                  </svg>
                  <span className="text-xs">1d | Stephen Ainsworth</span>
                </div>
              </div>
            </a>
            <a href="#" className="flex items-center group">
              <img
                src="https://www.galaxycine.vn/media/2022/8/25/avatar-da-thay-doi-nen-cong-nghiep-dien-anh-nhu-the-nao-5_1661393762674.jpg"
                className="rounded-md object-cover mr-3 h-24 w-24"
              />
              <div className="flex-1">
                <h2 className="font-bold text-lg leading-tight group-hover:underline mb-2 text-stone-900">
                  Avatar ???? Thay ?????i N???n C??ng Nghi???p ??i???n ???nh Nh?? Th??? N??o?
                </h2>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="clock"
                    className="h-3 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                    ></path>
                  </svg>
                  <span className="text-xs">12d | Stephen Ainsworth</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* hr */}
      <div className="inline-flex justify-center items-center w-full bg-w">
        <hr className="my-8 w-64 h-1 bg-gray-600 rounded border-0 dark:bg-gray-700" />
        <div className="absolute left-1/2 px-4 bg-white -translate-x-1/2 dark:bg-gray-900">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-700 dark:text-gray-300"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
