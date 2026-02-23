import { useState, useEffect } from "react";

function Clock(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      {props.timeZone}:
      {<p>{date.toLocaleString("en-US", { timeZone: props.timeZone })}</p>}
    </>
  );
}

export default Clock;
