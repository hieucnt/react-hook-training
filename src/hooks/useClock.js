import { useEffect, useState } from "react";

useClock.propTypes = {};
function formatDate() {
  const date = new Date();

  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}
function useClock() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const intervalClock = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);
    return () => {
      console.log("cleanup");
      clearInterval(intervalClock);
    };
  }, []);
  return { timeString };
}

export default useClock;
