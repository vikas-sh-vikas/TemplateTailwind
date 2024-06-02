import React from 'react'

function RegisterInfo(props:any) {
  return (
    <>
              <div className="min-h-dvh grid grid-cols-12 bg-black h-full relative">
          <img
            src={props.topRight}
            className="absolute right-0 h-full sm:block hidden"
          ></img>
          <div className="sm:col-span-3 sm:block hidden"></div>
          <div className="sm:col-span-6 col-span-12 bg-black">
          <div className="flex flex-col p-4">
            <img
              src={props.Authlogo}
              alt="probuy"
              className="h-20 w-50 m-auto"
            />
            <h1 className="font-bold text-4xl text-white m-auto py-4">
              اهلا بك فى بروباى
            </h1>
            <span className="text-lg	font-almarai text-base leading-relaxed font-normal text-center text-white text-weight-400">
              اذا كان لديك حساب{" "}
              <a href="url" className="text-orange-400 underline">
                تسجيل الدخول
              </a>{" "}
              قم بادخال البيانات المطلوبة لانشاء حساب جديد, بالفعل او{" "}
            </span>
          </div>
            <div className="bg-neutral-900 m-4 grid gap-4 grid-cols-2 p-4">
              <div className="col-span-2">
                {" "}
                <h1 className="font-bold text-lg text-center text-white pt-3">
                انشاء حساب                </h1>
              </div>
              <div className="col-span-2">
                <div className="flex pb-2 px-6">

                  <button className="rounded-full p-4 bg-gray-300 border-none"></button>

                  <div
                    className={`w-full h-px flex-1 bg-gray-300 m-auto mx-1`}
                  ></div>
                  <button className="rounded-full p-4 bg-neutral-900 border-2 border-orange-400"></button>
                  <div
                    className={`w-full h-1 flex-1 bg-orange-400 m-auto mx-1`}
                  ></div>
                  <button className="rounded-full p-4 bg-orange-400 border-2 border-orange-400"></button>
                </div>
                <div className="flex justify-between pb-4 px-4">
                <span className="text-gray-400 text-xs">المستندات</span>
                <span className="text-gray-400 text-xs">معلومات التسجيل</span>
                <span className="text-gray-400 text-xs">بيانات الشركة </span>
              </div>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-normal text-gray-400 text-weight-400 mb-2 text-end">
                البريد الالكترونى                
                </label>
                <input
                  className="w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-amber-700 text-weight-400 mb-2 text-end"
                  placeholder="مثل: hi@probuy.com"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-normal text-gray-400 text-weight-400 mb-2 text-end">
                كلمة المرور
                </label>
                <input
                  className="w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-amber-700 text-weight-400 mb-2 text-end"
                  placeholder="ادخل كلمة المرور..."
                />
                <div className="relative">
                  <div className="absolute left-3 bottom-5">
                    <div className="block h-5 w-9 text-gray-400">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="#666666"
                          d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                        />
                      </svg>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex justify-between">
                  <button
                  onClick={() => props.onPageChange("third")}
                  className="w-5/6 bg-gradient-to-r from-orange-500 to-orange-300 text-white p-2 rounded-3xl"
                  >
                    متابعة
                  </button>
                  <button className="px-4 bg-neutral-900 text-orange-400 p-2 rounded-3xl border-2 border-orange-400">
                    رجوع
                  </button> 
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-3 sm:block hidden"></div>
          <img
            src={props.leftBottom}
            className="absolute left-0 bottom-0 sm:block hidden"
          ></img>
        </div>
    </>
  )
}

export default RegisterInfo
