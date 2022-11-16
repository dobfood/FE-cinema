import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Invoice() {
  const account = useSelector((state) => {
    return state.account;
  });
  const detailBill = useSelector((state) => {
    return state.bill;
  });
  const movieDetail = useSelector((item) => {
    return item.movie.productDetail;
  });
  const [ticket, setTicket] = useState([]);
  const [CCCD, setCCCD] = useState("");

  const handleSubmit = (data) => {
    console.log(data);
    setTicket([
      ...ticket,
      {
        name: account.user.name,
        nameMovie: movieDetail[0].name,
        email: account.user.email,
        quantity: detailBill.quantity,
        seat: detailBill.position,
        date: movieDetail[0].date,
        time: detailBill.time,
        totalMoney: detailBill.totalMoney,
        CCCD: CCCD,
        type: movieDetail[0].category,
        age: movieDetail[0].Age,
        cinema: detailBill.theaterName,
      },
    ]);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div class="flex  w-screen h-screen bg-white">
        <div class="container mx-auto my-8 px-8 lg:px-40  ">
          <div class="ml-40 p-8 my-3 md:px-12 lg:w-9/12 lg:pl-32 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div class=" font-bold uppercase text-3xl text-amber-600 mb-2">
              <h4>Vui lòng thanh toán</h4>
            </div>
            <h2 class=" font-bold uppercase text-3xl text-stone-600">
              Tên Phim: {movieDetail[0] && movieDetail[0].name}{" "}
            </h2>
            <div class="grid grid-cols-2 gap-x-28 md:grid-cols mt-5">
              <p className="text-stone-900 ml-2 text-lg w-full  text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                Tên: {account.user.name}
              </p>
              <p className="text-stone-900 ml-2 text-lg w-full  text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                Rạp: {detailBill.theaterName}
              </p>
              <p className="text-stone-900 ml-2 text-lg w-full  text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                Email: {account.user.email}
              </p>
              <p className="text-stone-900 ml-2 text-lg w-full b text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                Ngày công chiếu: {movieDetail[0] && movieDetail[0].date}
              </p>
              <p className=" flex text-stone-900 ml-2 text-lg w-full  text-gray-900 mt-2 p-3 ">
                CMND/CCCD:
                <input
                  onChange={(e) => {
                    setCCCD(e.target.value);
                  }}
                  className="ml-2 w-full bg-gray-100 text-gray-900 rounded-lg "
                  type="number"
                ></input>
              </p>
              <p className="text-stone-900 ml-2 text-lg w-full  text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                Giờ chiếu: {detailBill.time}
              </p>
              <p className="text-stone-900 ml-2 text-lg w-full  text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                Thể loại/Độ tuổi: {movieDetail[0] && movieDetail[0].category}/
                {movieDetail[0] && movieDetail[0].Age}
              </p>
              <p className="text-stone-900 ml-2 text-lg w-full  text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                Vị trí ghế:
                {detailBill.position.map((seat) => (
                  <a className="text-lg">{seat},</a>
                ))}
              </p>
            </div>
            <div class="my-4">
              <select class="text-lg w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                <option>Thanh toán bằng momo</option>
                <option>Thanh toán bằng zaloPay</option>
                <option>Thanh toán bằng thẻ tín dụng</option>
              </select>
            </div>
            <div className="text-stone-900 text-lg ml-2">
              <h2>Số lượng vé: {detailBill.quantity}</h2>
              <h2>Tổng: {detailBill.totalMoney}.000 VND </h2>
            </div>

            <div class="my-2 w-1/2 lg:w-2/4 flex ml-80">
              <button
                onClick={() => {
                  navigate("/mua-ve/chon-ghe");
                }}
                class="uppercase text-sm font-bold tracking-wide bg-blue-700 text-gray-100 p-3 rounded-lg w-full mx-5
                            hover:bg-blue-600 active:bg-blue-600  focus:ring-blue-300"
              >
                Quay lại
              </button>

              <button
                onClick={async (data) => handleSubmit(data)}
                class="uppercase text-sm font-bold tracking-wide bg-orange-700 text-gray-100 p-3 rounded-lg w-full
                          focus:outline-none focus:shadow-outline  hover:bg-orange-600 active:bg-orange-600  focus:ring-orange-300"
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

