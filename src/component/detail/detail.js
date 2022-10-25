import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const Detail = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const movieDetail = useSelector((item) => item.movie.productDetail);
  // const [product1, setProduct1] = useSelector(item => item.movie.product.id)
  // console.log(product1)
  // const [products, setProducts]= useState({})
  // const productFilter = useSelector(item => {
  // const filter = item.movie.product.filter((item)=> {
  //     console.log(item.movie.product)
  //     return item.id.includes(productID)
  // })
  // return filter
  // })
  // console.log(productFilter)
  return (
    <>
      {/* hr */}
      <div className="inline-flex justify-center items-center w-full">
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
      {/* Detail */}
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <img
            className="w-full"
            alt="img of a girl posing"
            src={movieDetail[0] && movieDetail[0].imageSrc}
          />
        </div>
        <div className="md:hidden">
          <img
            className="w-full"
            alt="img of a girl posing"
            src={movieDetail[0] && movieDetail[0].imageSrc}
          />
          <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
            />
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
            />
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
            />
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
            />
          </div>
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">
              {movieDetail[0] && movieDetail[0].engname}
            </p>
            <h1
              className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
            >
              {movieDetail[0] && movieDetail[0].name}
            </h1>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">
              Thể loại : {movieDetail[0] && movieDetail[0].category}
            </p>
          </div>
          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              {" "}
              Hãng phim : {movieDetail[0] && movieDetail[0].author}
            </p>
          </div>

          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              {" "}
              Diễn viên : {movieDetail[0] && movieDetail[0].cast}
            </p>
          </div>

          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              {" "}
              Lịch khởi chiếu : {movieDetail[0] && movieDetail[0].date}
            </p>
          </div>

          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              {" "}
              Giá : {movieDetail[0] && movieDetail[0].price}
            </p>
          </div>

          <div>
            <div className="border-b py-4 border-gray-200">
              <div
                onClick={() => setShow2(!show2)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">Description</p>
                <button
                  className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                  aria-label="show or hide"
                >
                  <svg
                    className={
                      "transform " + (show2 ? "rotate-180" : "rotate-0")
                    }
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                  (show2 ? "block" : "hidden")
                }
                id="sect"
              >
                {movieDetail[0] && movieDetail[0].description}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hr */}
      <div className="inline-flex justify-center items-center w-full">
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
      {/* Form mua vé */}
      {movieDetail[0] &&
        movieDetail[0].cinema.map((item) => (
          <div className="container mx-auto px-1 ">
            <form className="w-full max-w-lg...">
              <p>{item.name}</p>
              <hr></hr>
              <br />
              <div class="flex-auto">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 ">
                  <div class="bg text-green-800 text-lg font-bold text-center  p-5 rounded-lg">
                    2D - Phụ đề
                  </div>
                </div>
                <div className="flex-auto grid grid-cols-8 gap-2 place-items-center h-56 ...">
                  {/* <Link to='/mua-ve/chon-ghe' >
                                <button  className="bg-green-300 text-green-800 text-lg font-bold text-center p-2 rounded-lg">
                                    10:30
                                </button>
                            </Link> */}
                  {item.time.map((time) => (
                    <Link to="/mua-ve/chon-ghe">
                      <button className="bg-green-300 text-green-800 text-lg font-bold text-center p-2 rounded-lg">
                        {time}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </form>
          </div>
        ))}
    </>
  );
};

export default Detail;
