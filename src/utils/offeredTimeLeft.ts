import { useEffect, useState, useCallback } from "react";

export const useOfferedTimeLeft = (targetDate: string): string => {
  const calculateTimeLeft = useCallback((): string => {
    const now = new Date().getTime();
    const timeLeft = new Date(targetDate).getTime() - now;

    if (timeLeft <= 0) {
      return "Offer Expired!";
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<string>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return timeLeft;
};
