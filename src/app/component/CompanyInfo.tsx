import React from "react";
import { Inter } from "next/font/google";

function CompanyInfo(props: any) {
  return (
    <>
      <div className="min-h-dvh grid grid-cols-12 bg-black h-full relative">
        {/* <img
          src={props.topRight}
          className="absolute right-0 h-full sm:block hidden z-auto"
        ></img> */}
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
                <button className="rounded-full p-4 bg-gray-300 border-none"></button>
                <div
                  className={`w-full h-px flex-1 bg-gray-300 m-auto mx-1`}
                ></div>
                <button className="rounded-full p-4 bg-gray-300 border-none"></button>
                <div
                  className={`w-full h-px flex-1 bg-gray-300 m-auto mx-1`}
                ></div>
                <button className="rounded-full p-4 bg-neutral-900 border-2 border-orange-400"></button>
              </div>
              <div className="flex justify-between pb-4 px-4">
                <span className="text-gray-400 text-xs">المستندات</span>
                <span className="text-gray-400 text-xs">معلومات التسجيل</span>
                <span className="text-gray-400 text-xs">بيانات الشركة </span>
              </div>
            </div>
            <div className="sm:col-span-1 col-span-2">
              <label
                className={`block text-sm font-normal text-gray-400 text-weight-400 mb-2 text-end text-end`}
              >
                موقع الشركة{" "}
              </label>
              <input
                type="text"
                className={`w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-white text-weight-400 mb-2 text-end `}
                placeholder="ادخل موقع الشركة..."
              />
              <label
                className={`block text-sm font-normal text-gray-400 text-weight-400 mb-2 text-end`}
              >
                تاريخ بداية العمل{" "}
              </label>
              <input
                type="text"
                className={`w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-white text-weight-400 mb-2 text-end`}
                placeholder="ادخل تاريخ بداية العمل..."
              />
              <label
                className={`block text-sm font-normal text-gray-400 text-weight-400 mb-2 text-end`}
              >
                رقم الهاتف{" "}
              </label>
              <input
                type="text"
                className={`w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-white text-weight-400 mb-2 text-end `}
                placeholder="ادخل رقم الهاتف..."
              />
            </div>
            <div className="sm:col-span-1 col-span-2">
              <label
                className={`block text-sm font-normal text-gray-400 text-weight-400 mb-2 text-end`}
              >
                الاسم
              </label>
              <input
                type="text"
                className={`w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-white text-weight-400 mb-2 text-end`}
                placeholder="ادخل اسم الشركة..."
              />
              <label
                className={`block text-sm font-normal text-gray-400 text-weight-400 mb-2 text-end`}
              >
                رقم السجل التجارى{" "}
              </label>
              <input
                type="text"
                className={`w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-white text-weight-400 mb-2 text-end`}
                placeholder="ادخل رقم السجل التجارى..."
              />
              <label
                className={`block text-sm font-normal text-gray-400 text-weight-400 mb-2 text-end`}
              >
                مجال العمل{" "}
              </label>
              <select
                className={`w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-white text-weight-400 mb-2 text-end appearance-none`}
              >
                <option className="color-gray-400">اختر مجال العمل...</option>
              </select>
            </div>
            <div className="col-span-2">
              <label
                className={`block text-sm font-normal text-gray-400 text-weight-400 mb-2 text-end`}
              >
                هل لديك نظام نقاط البيع{" "}
              </label>
              <input
                className={`w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-white text-weight-400 mb-2 text-end`}
                placeholder="نعم"
              />
              <div className="relative">
                <div className="absolute left-3 bottom-4">
                  <input
                    type="checkbox"
                    // checked={isChecked}
                    // onChange={handleCheckboxChange}
                    className="sr-only"
                  />

                  <div className="block h-5 w-9 rounded-full bg-gradient-to-r from-orange-500 to-orange-300"></div>
                  <div className="dot absolute left-1 top-1 h-3 w-3 rounded-full bg-white transition"></div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <button
                onClick={() => props.onPageChange("second")}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-300 text-white p-2 rounded-3xl z-10"
              >
                متابعة
              </button>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3 sm:block hidden"></div>
        <img
          src={props.leftBottom}
          className="z-0 absolute left-0 bottom-0 sm:block hidden"
        ></img>
      </div>
    </>
  );
}

export default CompanyInfo;
