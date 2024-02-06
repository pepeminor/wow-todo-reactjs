import React from "react";

function useEffectOnce(cb: any, condition = true) {
  const isCalledRef = React.useRef(false);

  React.useEffect(() => {
    if (condition && !isCalledRef.current) {
      isCalledRef.current = true;
      cb();
    }
  }, [cb, condition]);
}

export default useEffectOnce;
