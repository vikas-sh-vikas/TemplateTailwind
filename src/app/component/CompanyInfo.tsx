import React from 'react'

function Registration(props:any) {
  return (
    <>
      <div className="min-h-dvh grid grid-cols-12 bg-black h-full relative">
          <img
            src={props.topRight}
            className="absolute right-0 h-full sm:block hidden z-auto"
          ></img>
          <div className="sm:col-span-3 sm:block hidden"></div>
          <div className="sm:col-span-6 col-span-12 bg-black">
            <div className="flex flex-col p-4">
              <img src={props.Authlogo} alt="probuy" className="h-20 w-50 m-auto" />
              <h1 className="text-4xl text-white m-auto py-4">
                Welcome to Propay
              </h1>
              <span className="text-lg	font-almarai text-base leading-relaxed font-normal text-center text-white text-weight-400">
                Enter the data required to create a new account, or{" "}
                <a href="url" className="text-orange-400 underline">
                  log in
                </a>{" "}
                if you already have an account
              </span>
            </div>
            <div className="bg-neutral-900 m-4 grid gap-4 grid-cols-2 p-4">
              <div className="col-span-2">
                {" "}
                <h1 className="text-lg text-center text-white pt-3">
                  Create an account
                </h1>
              </div>
              <div className="col-span-2">
                <div className="flex pb-2 px-6">
                  <button className="rounded-full p-4 bg-neutral-900 border-2 border-orange-400"></button>
                  <div
                    className={`w-full h-px flex-1 bg-gray-300 m-auto mx-1`}
                  ></div>
                  <button className="rounded-full p-4 bg-gray-300 border-none"></button>
                  <div
                    className={`w-full h-px flex-1 bg-gray-300 m-auto mx-1`}
                  ></div>
                  <button className="rounded-full p-4 bg-gray-300 border-none"></button>
                </div>
                <div className="flex justify-between pb-4">
                  <span className="text-gray-400 text-xs">Company Data</span>
                  <span className="text-gray-400 text-xs">
                    Registration information
                  </span>
                  <span className="text-gray-400 text-xs">Documents</span>
                </div>
              </div>
              <div className="sm:col-span-1 col-span-2">
                <label
                  className={`block text-sm font-normal text-gray-400 text-weight-400 mb-2 $`}
                >
                  Company Location
                </label>
                <input
                  type="text"
                  className={`w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-white text-weight-400 mb-2 `}
                  placeholder="Enter company"
                />
                <label
                  className={`block text-sm font-normal text-gray-400 text-weight-400 mb-2`}
                >
                  Start Date
                </label>
                <input
                  type="text"
                  className={`w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-white text-weight-400 mb-2`}
                  placeholder="Enter start date."
                />
                <label
                  className={`block text-sm font-normal text-gray-400 text-weight-400 mb-2`}
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  className={`w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-white text-weight-400 mb-2 `}
                  placeholder="Enter phone number..."
                />
              </div>
              <div className="sm:col-span-1 col-span-2">
                <label
                  className={`block text-sm font-normal text-gray-400 text-weight-400 mb-2`}
                >
                  Name{" "}
                </label>
                <input
                  type="text"
                  className={`w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-white text-weight-400 mb-2`}
                  placeholder="Enter company name..."
                />
                <label
                  className={`block text-sm font-normal text-gray-400 text-weight-400 mb-2`}
                >
                  Commercial Register Number
                </label>
                <input
                  type="text"
                  className={`w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-white text-weight-400 mb-2`}
                  placeholder="Enter commercial register number..."
                />
                <label
                  className={`block text-sm font-normal text-gray-400 text-weight-400 mb-2`}
                >
                  ield of Work
                </label>
                <select
                  className={`w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-white text-weight-400 mb-2`}
                >
                  <option className="color-gray-400">
                    Select field of work...
                  </option>
                </select>
              </div>
              <div className="col-span-2">
                <label
                  className={`block text-sm font-normal text-gray-400 text-weight-400 mb-2`}
                >
                  Do you have a POS system?
                </label>
                <input
                  className={`w-full py-2 px-3 bg-neutral-800 border-neutral-700 placeholder-gray-400 rounded-lg text-sm font-normal text-white text-weight-400 mb-2`}
                  placeholder="Yes"
                />
                <div className="relative">
                  <label className="flex cursor-pointer select-none items-center"></label>
                  <div className="absolute right-3 bottom-4">
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
                  Proceed
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
  )
}

export default Registration
