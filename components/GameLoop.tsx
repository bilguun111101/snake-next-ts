import { useEffect } from "react";
import { useRef } from "react"

const useGameLoop = (runningFuction: Function, speed: number | null) => {
    const saveRunningFuction = useRef<Function | null>(null);
    useEffect(() => {
        saveRunningFuction.current = runningFuction;
    }, [runningFuction])

    useEffect(() => {
        const current = () => saveRunningFuction.current();

        if(speed !== null) {
            let gameInterval = setInterval(current, speed);
            return () => clearInterval(gameInterval);
        }
    }, [speed])
  return (
    <div>GameLoop</div>
  )
}

export default useGameLoop