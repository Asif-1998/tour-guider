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

const useGuideHook = (steps: any) => {
  const driverObj = driver({
    showProgress: true,
    animate: false,
    steps: steps
  });

  return driverObj.drive();
};

export default useGuideHook;