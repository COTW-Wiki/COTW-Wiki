import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // "POP" means the user clicked the back/forward button.
    // We want to preserve the scroll position in that case.
    // For "PUSH" (clicking a link) or "REPLACE", we scroll to top.
    if (navType !== 'POP') {
      if (!location.hash) {
        window.scrollTo(0, 0);
      }
    }
  }, [location, navType]);

  return null;
}

export default ScrollToTop;
