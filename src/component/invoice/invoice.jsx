import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Invoice() {
  const account = useSelector((state) => {
    return state.account;
  });
  const detailBill = useSelector((state) => {
    console.log(state);
    return state.bill;
  });
  const navigate = useNavigate()
  return (
    <div>
      <div class="flex  w-screen h-screen bg-white">
        <div class="container mx-auto my-8 px-8 lg:px-40  ">
          <div class="ml-40 p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div class="flex">
              <h4 class="font-bold uppercase text-3xl text-amber-600">
                Vui lòng thanh toán
              </h4>
            </div>
            <div class="grid grid-cols-2 gap-x-28 md:grid-cols mt-5">
              <div>
                <p className="text-stone-900 ml-2 text-lg">Tên</p>
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  value={account.user.name}
                />
              </div>
              <div>
                <p className="text-stone-900 ml-2 text-lg">Tên rạp</p>
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div>
                <p className="text-stone-900 ml-2 text-lg">Email</p>
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  value={account.user.email}
                />
              </div>
              <div>
                <p className="text-stone-900 ml-2 text-lg">Giờ chiếu</p>
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  value={account.user.name}
                />
              </div>
              <div>
                <p className="text-stone-900 ml-2 text-lg">Phone</p>
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div>
                <p className="text-stone-900 ml-2 text-lg">Vị trí ghế</p>
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
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
              onClick={()=>{
                navigate('/mua-ve/chon-ghe')
              }}
                class="uppercase text-sm font-bold tracking-wide bg-blue-700 text-gray-100 p-3 rounded-lg w-full mx-5
                            hover:bg-blue-600 active:bg-blue-600  focus:ring-blue-300"
              >
                Quay lại
              </button>
              <button
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
