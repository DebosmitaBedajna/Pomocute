import { useEffect, useState, useRef } from "react";

function Counter() {
  const [mode, setMode] = useState("pomodoro");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(25);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const timerRef = useRef(null);

  const startTimer = (minutesLeft, secondsLeft) => {
    clearInterval(timerRef.current);
    setIsTimerRunning(true);
    setSecondsLeft(secondsLeft);
    setMinutesLeft(minutesLeft);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setIsTimerPaused(false);
    if (mode === "pomodoro") {
      setMinutesLeft(25);
      setSecondsLeft(0);
    } else if (mode === "shortBreak") {
      setMinutesLeft(5);
      setSecondsLeft(0);
    } else {
      setMinutesLeft(15);
      setSecondsLeft(0);
    }
  };

  const pauseTimer = () => {
    if (!isTimerPaused) {
      console.log("Paused");
      clearInterval(timerRef.current);
      setIsTimerPaused(true);
    } else if (isTimerPaused) {
      console.log("Resumed");
      startTimer(minutesLeft, secondsLeft);
      setIsTimerPaused(false);
    }
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
    resetTimer();
  };

  const handleModeChange = (newMode) => {
    setIsTimerPaused(false);
    if (newMode === "pomodoro") {
      setMode("pomodoro");
      setMinutesLeft(25);
      setSecondsLeft(0);
    } else if (newMode === "shortBreak") {
      setMode("shortBreak");
      setMinutesLeft(5);
      setSecondsLeft(0);
    } else {
      setMode("longBreak");
      setMinutesLeft(15);
      setSecondsLeft(0);
    }
    clearInterval(timerRef.current);
    setIsTimerRunning(false);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (isTimerRunning && !isTimerPaused) {
        if (secondsLeft === 0 && minutesLeft !== 0) {
          setSecondsLeft(59);
          setMinutesLeft(minutesLeft - 1);
        } else if (minutesLeft !== 0) {
          setSecondsLeft(secondsLeft - 1);
        } else if (minutesLeft === 0 && secondsLeft === 0) {
          stopTimer();
          alert("Time's up!");
        } else {
          setSecondsLeft(secondsLeft - 1);
        }
      }
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isTimerRunning, secondsLeft, minutesLeft, isTimerPaused]);

  return (
    <>
      <section>
        <div className="min-h-[80vh] flex items-center justify-center relative">
          <div
            className="w-full min-h-[80vh] bg-top bg-cover transition-all duration-[3000ms] ease-in-out hover:bg-bottom relative flex items-center justify-center"
            style={{
              backgroundImage:
                mode === "pomodoro"
                  ? "url('/icons/clouds.jpg')"
                  : mode === "shortBreak"
                  ? "url('/icons/bluecloud.jpg')"
                  : "url('/icons/darkcloud.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="relative z-10 flex items-center justify-center flex-col">
              <div className="flex items-center justify-center gap-2 bg-black/60 rounded-2xl px-4 py-3 text-white">
                <button
                  onClick={() => handleModeChange("pomodoro")}
                  className={`${
                    mode === "pomodoro"
                      ? "bg-[#FDFBD4] text-black px-4 rounded-xl"
                      : ""
                  }`}
                >
                  Pomodoro
                </button>
                <button
                  onClick={() => handleModeChange("shortBreak")}
                  className={`${
                    mode === "shortBreak"
                      ? "bg-[#FDFBD4] text-black px-4 rounded-xl"
                      : ""
                  }`}
                >
                  Short Break
                </button>
                <button
                  onClick={() => handleModeChange("longBreak")}
                  className={`${
                    mode === "longBreak"
                      ? "bg-[#FDFBD4] text-black px-4 rounded-xl"
                      : ""
                  }`}
                >
                  Long Break
                </button>
              </div>
              <h1 className="text-white text-[20vh] font-bold">
                {Math.floor(minutesLeft)}:
                {secondsLeft.toString().padStart(2, "0")}
              </h1>
              {isTimerRunning ? (
                <>
                  <div className="flex justify-center items-center gap-2">
                    <button
                      className="bg-[#FDFBD4] rounded-2xl px-6 py-2"
                      onClick={() => stopTimer()}
                    >
                      Reset
                    </button>
                    <button
                      className="bg-[#FDFBD4] rounded-2xl px-6 py-2"
                      onClick={pauseTimer}
                    >
                      {isTimerPaused ? "Resume" : "Pause"}
                    </button>
                  </div>
                </>
              ) : (
                <button
                  className="bg-[#FDFBD4] rounded-2xl px-6 py-2"
                  onClick={() => startTimer(minutesLeft, secondsLeft)}
                >
                  Start
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Counter;
