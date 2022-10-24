import { useSelector } from "react-redux";

export default function Invoice() {
  const account = useSelector((state) => {
    return state.account;
  });
  const totalMoney = useSelector((state) => {
    return state.bill;
  });
  return (
    <div class="justify-center items-center ">
      <div class="flex justify-center items-center w-screen h-screen bg-white">
        <div class="container mx-auto my-8 px-8 lg:px-40 ">
          <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div class="flex">
              <h4 class="font-bold uppercase text-3xl text-amber-600">
                Vui lòng thanh toán
              </h4>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols mt-5">
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
                value={account.user.name}
              />

              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                value={account.user.email}
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="string"
                placeholder="Phone*"
              />
            </div>
            <div class="my-4">
              <select
                placeholder="Message*"
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              >
                <option>Thanh toán bằng momo</option>
                <option>Thanh toán bằng zaloPay</option>
                <option>Thanh toán bằng thẻ tín dụng</option>
              </select>
            </div>
            <div class="my-2 w-1/2 lg:w-2/4 flex ml-80">
            <h2 style={{color:"black" }}>Tổng:{totalMoney.totalMoney} </h2>

              <button
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
