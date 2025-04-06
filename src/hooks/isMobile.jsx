
import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobileRegex = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
    setIsMobile(mobileRegex.test(userAgent));
  }, []);

  return isMobile;
};

export default useIsMobile;
