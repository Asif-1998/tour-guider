// import { useState } from 'react';

// const useGuideHook = (initialState: string) => {
//   const [state, setState] = useState(initialState);

//   const handleChange = (newValue: string) => {
//     setState(newValue);
//   };

//   return { state, handleChange };
// };

// export default useGuideHook;

import { driver } from "driver.js";
import 'driver.js/dist/driver.css';
import '../styles/styles.css';

const useGuideHook = (theme: String, steps: any) => {

  if (theme === "yellow") {

    steps.forEach((step : any) => {
      step.popover.popoverClass = 'driverjs-theme';
    });

    const yellowDriverObj = driver({
      showProgress: true,
      animate: false,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: '✕',
      steps: steps
    });

    return yellowDriverObj.drive();

  } else {

    const defaultDriverObj = driver({
      showProgress: true,
      animate: false,
      steps: steps
    });

    return defaultDriverObj.drive();

  }

  //return driverObj.drive();
};

export default useGuideHook;