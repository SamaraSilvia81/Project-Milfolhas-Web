import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import LoginScreen from './screens/LoginScreen';
import HeroScreen from './screens/HeroScreen';
import HomeScreen from './screens/HomeScreen';
import FoodScreen from './screens/FoodScreen';
import OrderScreen from './screens/OrderScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import CartScreen from './screens/CartScreen';
import CheckScreen from './screens/CheckScreen';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<LoginScreen />}
				/>
				<Route
					path="/Hero"
					element={<HeroScreen />}
				/>
				<Route
					path="/Home"
					element={<HomeScreen />}
				/>
				<Route
					path="/Food/:listId/:mealName"
					element={<FoodScreen />}
				/>
				<Route
					path="/Order/:orderName/:orderId"
					element={<OrderScreen />}
				/>
				<Route
					path="/Confirm/:selectedFood"
					element={<ConfirmScreen />}
				/>
				<Route
					path="/Cart"
					element={<CartScreen/>}
				/>
				<Route
					path="/Check"
					element={<CheckScreen />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
