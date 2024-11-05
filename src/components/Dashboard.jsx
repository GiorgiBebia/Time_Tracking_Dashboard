import data from "../data.json";

import { useState } from "react";

import { InfoCard } from "./InfoCard";
import { Person } from "./Person";

function Dashboard() {
  const [
    workData,
    playData,
    studyData,
    exerciseData,
    socialData,
    selfCareData,
  ] = data;

  const [time, setTime] = useState("weekly");

  const imageTopZero = true;

  return (
    <div className="w-[1110px] mobile:w-[327px] h-[518px] mobile:h-[1307px] mt-[253px] mobile:mt-[81px] mx-auto flex justify-between mobile:flex-col mobile:justify-normal">
      <div>
        <Person time={time} setTime={setTime} />
      </div>
      <div className="flex flex-col gap-[30px] mobile:mt-[24px]">
        <div className="flex gap-[30px] mobile:gap-[24px] mobile:flex-col mobile:mx-auto">
          <InfoCard
            data={workData}
            time={time}
            icon="icon-work.svg"
            bgColor="bg-[#FF8B64]"
          />
          <InfoCard
            data={playData}
            time={time}
            icon="icon-play.svg"
            bgColor="bg-[#55C2E6]"
            imageTopZero={imageTopZero}
          />
          <InfoCard
            data={studyData}
            time={time}
            icon="icon-study.svg"
            bgColor="bg-[#FF5E7D]"
          />
        </div>
        <div className="flex gap-[30px] mobile:gap-[24px] mobile:flex-col mobile:mx-auto">
          <InfoCard
            data={exerciseData}
            time={time}
            icon="icon-exercise.svg"
            bgColor="bg-[#4BCF82]"
            imageTopZero={imageTopZero}
          />
          <InfoCard
            data={socialData}
            time={time}
            icon="icon-social.svg"
            bgColor="bg-[#7335D2]"
          />
          <InfoCard
            data={selfCareData}
            time={time}
            icon="icon-self-care.svg"
            bgColor="bg-[#F1C75B]"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
