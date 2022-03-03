import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return null;
}
export default ScrollToTopOnMount;
