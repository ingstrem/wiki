import { useState, useEffect } from "react";

function useDelayedLoader(isLoading: boolean, delay = 300) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isLoading) {
      timeout = setTimeout(() => setShowLoader(true), delay);
    } else {
      setShowLoader(false);
    }

    return () => clearTimeout(timeout);
  }, [isLoading, delay]);

  return showLoader;
}

Использование:

const isLoading = ...; // например, из useQuery или useState
const showLoader = useDelayedLoader(isLoading);

return (
  <>
    {showLoader && <Spinner />}
    {!isLoading && <Content />}
  </>
);