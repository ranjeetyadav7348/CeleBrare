import { configureStore } from '@reduxjs/toolkit';
import textSlice from './Redux/reducer'; // Replace with the path to your reducer file

const store = configureStore({
    
  reducer:textSlice ,
  // Add any middleware or enhancers if needed
});

export default store;
