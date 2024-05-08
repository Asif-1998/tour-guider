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

const useGuideHook = () => {
  const driverObj = driver({
    showProgress: true,  // for showing the numbers
    nextBtnText: '—›',
    prevBtnText: '‹—',
    doneBtnText: '✕',
    animate: false,
    steps: [
      {
        element: '#navbar-middle-menu',
        popover: {
          title: 'Explore Tomato',
          description: 'Click on the menu items to exlore our website .',
          side: "bottom",
          align: 'center',
          popoverClass: 'driverjs-theme'
        },

      },
      {
        element: '#view-all-menu',
        popover: {
          title: 'Food Menu',
          description: 'Click here to check our food categories .',
          side: "right",
          align: 'center',
          popoverClass: 'driverjs-theme'
        },

      },
      {
        element: '#explore-menu-list',
        popover: {
          title: 'Food Options',
          description: 'Click on your favourite food to check all the food items related to that category .',
          side: "top",
          align: 'center',
          popoverClass: 'driverjs-theme'
        }
      },
      {
        element: '#add-food-item',
        popover: {
          title: 'Add Your favourite food',
          description: 'Click here to add your favourite food on your cart list .',
          side: "bottom",
          align: 'start',
          popoverClass: 'driverjs-theme'
        }
      },
      {
        element: '#check-cart-items',
        popover: {
          title: 'Cart Items',
          description: 'Click here to check the food items you added in your cart list .',
          side: "bottom",
          align: 'end',
          popoverClass: 'driverjs-theme'
        }
      },
      {
        element: '#sig-in',
        popover: {
          title: 'Sign in',
          description: 'But to order any food you have to sign in .',
          side: "bottom",
          align: 'end',
          popoverClass: 'driverjs-theme'
        }
      },
    ]
  });

  return driverObj.drive();
};

export default useGuideHook;