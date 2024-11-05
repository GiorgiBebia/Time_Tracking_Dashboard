/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";

export function InfoCard({ data, time, icon, bgColor, imageTopZero }) {
  const [infoData, setInfoData] = useState(null);
  const [previousData, setPreviousData] = useState(null);

  useEffect(() => {
    setInfoData(data.timeframes[time].current);
    setPreviousData(data.timeframes[time].previous);
  }, [time, data]);

  return (
    <div
      className={`w-[255px] mobile:w-[327px] h-[244px] mobile:h-[160px] rounded-[15px] ${bgColor} flex relative overflow-hidden`}
    >
      <img
        className={`absolute ${
          imageTopZero ? `top-0` : `top-[-11px]`
        }  left-[160px] mobile:left-[231px]`}
        src={icon}
        alt={`${data.title} Icon`}
      />
      <div className="w-[255px] mobile:w-[327px] h-[199px] mobile:h-[122px] bg-[#1C204B] hover:bg-[#33397A] rounded-[15px] mt-[45px] mobile:mt-[38px] z-10">
        <div className="w-[190px] mobile:w-[279px] h-[22px] mt-[29px] mobile:mt-[28px] ml-[30px] mobile:ml-[24px] flex justify-between items-center">
          <h3 className="font-rubik text-[18px] text-white">{data.title}</h3>
          <BsThreeDots className="text-[#979797] hover:text-white cursor-pointer" />
        </div>
        <div className="mobile:flex mobile:w-[279px] mobile:h-[38px] mobile:justify-between mobile:mx-auto mobile:items-center">
          <h3 className="font-rubik font-light text-[56px] mobile:text-[32px] text-white mt-[24px] mobile:mt-[6px] ml-[30px] mobile:ml-0">
            {infoData}hrs
          </h3>
          <h3 className="font-rubik text-[15px] text-[#BBC0FF] mt-[8px] mobile:mt-0 ml-[30px] mobile:ml-0">
            {`Last Week - ${previousData}hrs`}
          </h3>
        </div>
      </div>
    </div>
  );
}
