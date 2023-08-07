import React from "react";
import moment from "moment";
import { Ri24HoursFill } from "react-icons/ri";
const Offer = ({ discountStartTime, discountDuration }) => {
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [seconds, setSeconds] = React.useState("");

  React.useEffect(() => {
    let startTime = moment(discountStartTime);
    const durationSeconds = discountDuration * 3600;

    const updateRemainingTime = () => {
      const now = moment();
      const end = moment(startTime).add(durationSeconds, "seconds");
      const duration = moment.duration(end.diff(now));
      const totalSeconds = duration.asSeconds();

      if (totalSeconds <= 0) {
        startTime = moment();
      }

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      setHours(`${hours.toString().padStart(2, "0")}`);
      setMinutes(`${minutes.toString().padStart(2, "0")}`);
      setSeconds(`${seconds.toString().padStart(2, "0")}`);
    };

    updateRemainingTime();

    const intervalId = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, [discountStartTime, discountDuration]);

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center min-h-[70px] gap-x-[20px]">
      <div className="flex items-center gap-x-[10px]">
        <Ri24HoursFill size={30} />
        <h2 className="text-2xl">Кінець пропозиції через:</h2>
      </div>
      <div>
        <div className="flex gap-x-[5px]">
          <span className="inline-block">годин</span>
          <span className="inline-block">хвилин</span>
          <span className="inline-block">секунд</span>
        </div>
        <div className="text-3xl font-extrabold underline">
          <span>{hours} : </span>
          <span>{minutes} : </span>
          <span>{seconds}</span>
        </div>
      </div>
    </div>
  );
};
export default Offer;
