/* eslint-disable react/prop-types */
export function Person({ time, setTime }) {
  function handleClick(date) {
    setTime(date);
  }

  return (
    <div className="w-[255px] mobile:w-[327px] h-[518px] mobile:h-[203px] rounded-[15px] bg-[#1C204B] flex flex-col">
      <div className="w-[255px] mobile:w-[327px] h-[354px] mobile:h-[133px] rounded-[15px] bg-[#5747EA] mobile:flex">
        <div className="w-[85px] mobile:w-[70px] h-[85px] mobile:h-[70px] bg-white rounded-full flex justify-center items-center mt-[37px] mobile:mt-[35px] ml-[32px]">
          <img
            className="w-[78px] mobile:w-[64px] h-[78px] mobile:h-[64px]"
            src="image-jeremy.png"
            alt=""
          />
        </div>
        <div>
          <h5 className="font-rubik text-[15px] text-[#BBC0FF] mt-[43px] mobile:mt-[42px] ml-[32px] mobile:ml-[20px]">
            Report for
          </h5>
          <h2 className="font-rubik font-light text-[40px] mobile:text-[24px] text-white mt-[3px] mobile:mt-[4px] ml-[32px] mobile:ml-[20px]">
            Jeremy Robson
          </h2>
        </div>
      </div>
      <div className="mobile:flex mobile:w-[327px] justify-evenly">
        <h3
          className={`w-[41px] font-rubik text-[18px] ${
            time === "daily" ? `text-white` : `text-[#7078C9]`
          }  mt-[21px] mobile:mt-[24px] ml-[32px] mobile:ml-0 cursor-pointer hover:text-white`}
          onClick={() => handleClick("daily")}
        >
          Daily
        </h3>
        <h3
          className={`w-[58px] font-rubik text-[18px] ${
            time === "weekly" ? `text-white` : `text-[#7078C9]`
          }  mt-[21px] mobile:mt-[24px] ml-[32px] cursor-pointer hover:text-white`}
          onClick={() => handleClick("weekly")}
        >
          Weekly
        </h3>
        <h3
          className={`w-[68px] font-rubik text-[18px] ${
            time === "monthly" ? `text-white` : `text-[#7078C9]`
          }  mt-[21px] mobile:mt-[24px] ml-[32px] mb-[33px] mobile:mb-0 cursor-pointer hover:text-white`}
          onClick={() => handleClick("monthly")}
        >
          Monthly
        </h3>
      </div>
    </div>
  );
}
