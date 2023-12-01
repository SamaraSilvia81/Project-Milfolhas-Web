import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux'; 

// Screens
import Login from './pages/LoginPage';
import Hero from './pages/HeroPage';
import Home from './pages/HomePage';
import Breakfast from './pages/BreakfastPage';
import Food from './pages/FoodPage';
import Order from './pages/OrderPage';
import Confirm from './pages/ConfirmPage';
import Check from './pages/CheckPage';

const queryClient = new QueryClient();
const store = configureStore({ reducer: rootReducer });

function App() {
    
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<Login/>}></Route>
              <Route path="/hero" element={<Hero/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/breakfast" element={<Breakfast/>}></Route>
              <Route path="/food" element={<Food/>}></Route>
              <Route path="/order" element={<Order/>}></Route>
              <Route path="/confirm" element={<Confirm/>}></Route>
              <Route path="/check" element={<Check/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;