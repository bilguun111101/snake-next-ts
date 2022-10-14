import { Ref, useEffect } from "react";
import { useRef } from "react"

const useGameLoop = (runningFuction: () => void | null, speed: number | null) => {
  const saveRunningFuction = useRef<any | Function>();
  useEffect(() => {
    saveRunningFuction.current = runningFuction;
  }, [runningFuction])
  useEffect(() => {
    const current = () => saveRunningFuction.current();
 
    if (speed !== null) {
      let gameInterval = setInterval(current, speed);
      return () => clearInterval(gameInterval);
    }
  }, [speed])
}

export default useGameLoop