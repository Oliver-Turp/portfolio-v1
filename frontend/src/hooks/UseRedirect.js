import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useRedirectAfterSomeSeconds(redirectTo, seconds = 5) {
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);
  const router = useRouter();

  useEffect(() => {
    if (secondsRemaining === 0 && redirectTo !== router.pathname) router.back();

    const timer = setTimeout(() => {
      setSecondsRemaining((prevSecondsRemaining) => prevSecondsRemaining - 1);
      if (secondsRemaining === 1 && redirectTo !== router.pathname)
        router.push({
          pathname: redirectTo,
        });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [router, secondsRemaining, redirectTo]);

  return { secondsRemaining };
}
