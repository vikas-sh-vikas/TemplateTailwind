import React from "react";

function DocumentInfo(props: any) {
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
            <h1 className="text-4xl text-white m-auto py-4">
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
              <h1 className="text-lg text-center text-white pt-3">
                انشاء حساب{" "}
              </h1>
            </div>
            <div className="col-span-2">
              <div className="flex pb-2 px-6">
   
                <button className="rounded-full p-4 bg-neutral-900 border-2 border-orange-400"></button>
                <div
                  className={`w-full h-1 flex-1 bg-orange-400 m-auto mx-1`}
                ></div>
                <button className="rounded-full p-4 bg-orange-400 border-2 border-orange-400"></button>
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
              <div className="flex md:flex-wrap justify-between bg-neutral-700 min:h-20 rounded-lg p-4">
              <div className="flex items-center gap-6">
              <svg
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                    />
                  </svg>

                  <button className="rounded-full bg-neutral-600 p-4">
                    <svg
                      className="h-7 w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="#f0984a"
                        d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                      />
                    </svg>
                  </button>
                  <button className="rounded-full bg-neutral-600 p-4">
                    <svg
                      className="h-7 w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="#f0984a"
                        d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-6">
                <div>
                    <p className="text-white">رخصة العمل 2024/3/2</p>
                    <p className="text-end text-gray-400 text-xs">
                      14/10/2023 • 1.3 ميجا
                    </p>
                  </div>
                  <button className="rounded-full bg-gradient-to-r from-neutral-900 to-orange-300 p-4">
                    <svg
                      className="h-7 w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="#f0984a"
                        d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
                      />
                    </svg>
                  </button>

                </div>

              </div>
            </div>
            <div className="col-span-2">
              <div className="border-dashed border-2 border-orange-500 bg-gradient-to-r from-neutral-900 to-orange-300 h-20 rounded-lg flex items-center justify-center">
                <p className="text-center text-white pr-3">
                  اضغط هنا لاضافة ملف الرخصة
                </p>
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="#f0984a"
                    d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-span-2 pb-4">
              <div className="border-dashed border-spacing-4 border-2 border-orange-500 bg-gradient-to-r from-neutral-900 to-orange-300 h-20 rounded-lg flex items-center justify-center">
                <p className="text-center text-white pr-3">
                  اضغط هنا لاضافة ملف الرخصة
                </p>{" "}
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="#f0984a"
                    d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex justify-between">
                <button
                  onClick={() => props.onPageChange("first")}
                  className="w-5/6 bg-gradient-to-r from-orange-500 to-orange-300 text-white p-2 rounded-3xl"
                >
                  متابعة
                </button>
                <button className="px-4 bg-neutral-900 text-orange-400 p-2 rounded-3xl border-2 border-orange-400 ml-4">
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
  );
}

export default DocumentInfo;
