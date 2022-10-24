export default function Invoice() {
  return (
    <div>
      <div class="flex justify-center items-center w-screen h-screen bg-white">
        <div class="container mx-auto my-4 px-4 lg:px-20">
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
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div class="my-4">
              <textarea
                placeholder="Message*"
                class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/4 flex ml-72">
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

      {/* <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a pizza"
            href="https://www.buymeacoffee.com/Dekartmc"
            target="_blank"
            class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              class="object-cover object-center w-full h-full rounded-full"
              src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"
            />
          </a>
        </div>
      </div> */}
    </div>
  );
}
