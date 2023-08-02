import React from "react";
import moment from "moment";
const Offer = ({ discountStartTime, discountDuration }) => {
  const [remainingTime, setRemainingTime] = React.useState("");

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

      setRemainingTime(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };

    updateRemainingTime();

    const intervalId = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, [discountStartTime, discountDuration]);

  return (
    <div className="px-2 w-full flex justify-center items-center gap-2 md:gap-8  bg-red-600 text-white min-h-[60px]">
      <h2 className="text-2xl">Ця пропозиція закінчиться через:</h2>
      <p className="text-xl">{remainingTime}</p>
    </div>
  );
};
export default Offer;
