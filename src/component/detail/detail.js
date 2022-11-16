import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getTime, getTheaterName } from "../../feauture/account/bill.slice";
const Detail = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const dispatch = useDispatch()

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

      {/* Form mua vé */}
      {movieDetail[0] &&
        movieDetail[0].cinema.map((item) => (
          <div className="container mx-auto px-1 ml-48 ">
            <form className="w-full max-w-lg..." onClick={()=>{
              dispatch(getTheaterName(item.name));
            }}>
              <p className="bg-orange-600 w-40 text-lg">{item.name}</p>
              <hr></hr>
              <br />
              <div class="flex-auto bg-gray-200 w-9/12 ">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 ">
                  <div class="bg text-stone-800 text-lg font-bold text-center  p-5 rounded-lg">
                    2D - Phụ đề
                  </div>
                </div>
                <div className="flex-auto grid grid-cols-8 gap-2 place-items-center h-40 ...">
                  {/* <Link to='/mua-ve/chon-ghe' >
                                <button  className="bg-green-300 text-green-800 text-lg font-bold text-center p-2 rounded-lg">
                                    10:30
                                </button>
                            </Link> */}
                  {item.time.map((time) => (
                    <Link onClick={()=>{
                      dispatch(getTime(time))
                    }} to="/mua-ve/chon-ghe" className="bg-indigo-600 text-black-800 text-lg font-bold text-center p-2 rounded-lg">
                      
                        {time}
                     
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
