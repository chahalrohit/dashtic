import React, { useState, useRef, useEffect } from "react";
import TimeFormat from "hh-mm-ss";
import Countdown from 'react-countdown';

export function Middle() {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const [timer, setTimer] = useState<string>("00:00:00");
  
  useEffect(() => {
  function getTimeRemaining(endtime: Date) {
  let i = new Date();
  const total = Date.parse(endtime.toString()) - Date.parse(i.toString());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor(((total / 1000) * 60 * 60) % 60);

    return {
      total,
      hours,
      minutes,
      seconds,
    };
  }
  
  function startTimer(deadline: Date) {
    let { total, hours, minutes, seconds } = getTimeRemaining(deadline);
    if (total >= 0) {
      setTimer(
        (hours ? hours : "0" + hours) +
          ":" +
          (minutes ? minutes : "0" + minutes) +
          ":" +
          (seconds ? seconds : "0" + seconds)
      );
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }
  
  function clearTimer(endtime: Date) {
    setTimer("00:00:60");
    if (intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    intervalRef.current = id;
  }
  
  function getDeadlineTime(): Date {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  }
  
  clearTimer(getDeadlineTime());
  
  return () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  }, []);
  
  return <>{timer}</>;
  }

const formatTime = (time: number): string =>
  ` ${String(Math.floor(time / 60)).padStart(2, "0")} : ${String(time % 60).padStart(2, "0")}`;

interface TimerProps {
  time: number;
}

const Timer = ({ time }: TimerProps): JSX.Element => {
  return (
    <>
      <div> 00 Days 00 :{formatTime(time)}</div>
    </>
  );
};


//timeup
const IntervalTimerFunctional = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return <Timer time={time} />;
};

export function Uptimer() {
  return <IntervalTimerFunctional />;
}

//Time Counting From 60 to 20


interface Props {
  min: number;
  }
  
  export const Timers: React.FC<Props> = ({ min }) => {
  let mainTime: NodeJS.Timeout;
  
  const secondsLeft = (): number => {
  const left = Number(min) * 60;
  return left;
  };
  
  const [seconds, setSeconds] = useState<number>(secondsLeft());
  
  useEffect(() => {
  startTime();
  return () => {
  stopTimer();
  };
  });
  
  const startTime = () => {
  if (seconds && seconds > 20) {
  mainTime = setInterval(tick, 1000);
  }
  };
  
  const stopTimer = () => {
  clearInterval(mainTime);
  };
  
  const tick = () => {
  setSeconds((seconds) => {
  const updatedSeconds = seconds - 1;
  if (updatedSeconds < 1) {
  stopTimer();
  }
  return updatedSeconds;
  });
  };
  
  const display = TimeFormat.fromS(seconds, "hh:mm:ss");
  const [h, m, s] = display.split(":");
  return (
  <>
  {h} : {m} : {s}
  </>
  );
  };


const AfterComplete: React.FC = () => <span>You are good to go!</span>

type RendererProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const rendering = ({ days, hours, minutes, seconds, completed }: RendererProps) => {
  if (completed) {
    return <AfterComplete />;
  } else {
    return (
      <div className="under-countdown row">
        <div className="col-xl-3 col-sm-6 mt-3">
          <div className="countdown">
            <span className="days">{days}</span>
            <span className="">Days</span>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mt-3">
          <div className="countdown">
            <span className="hours">{hours}</span>
            <span className="">Hours</span>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mt-3">
          <div className="countdown">
            <span className="minutes">{minutes}</span>
            <span className="">Minutes</span>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mt-3">
          <div className="countdown">
            <span className="seconds">{seconds}</span>
            <span className="">Seconds</span>
          </div>
        </div>
      </div>
    );
  }
};

export const DayCounter: React.FC = () => {
  return <Countdown date={Date.now() + 3088800000} renderer={rendering} />
}


//TimeCountingdaysLimit start

const AfterCompletion = (): JSX.Element => <span>You are good to go!</span>;

type RendererProps1 = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

const renderer = ({ days, hours, minutes, seconds, completed }: RendererProps1): JSX.Element => {
  if (completed) {
    return <AfterCompletion />;
  } else {
    return (
      <span className="h3 text-white">
        <span>
          {days}Days {hours} Hours {minutes} Minutes {seconds} Seconds
        </span>
      </span>
    );
  }
};

export function TimeCountingdaysLimit(): JSX.Element {
  return <Countdown date={Date.now() + 259200000} renderer={renderer} />;
}

