import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import LoginScreen from './screens/LoginScreen';
import HeroScreen from './screens/HeroScreen';
import HomeScreen from './screens/HomeScreen';
import BreakfastScreen from './screens/BreakfastScreen';
import FoodScreen from './screens/FoodScreen';
import OrderScreen from './screens/OrderScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import CheckScreen from './screens/CheckScreen';
import FakeScreen from './screens/FakeScreen';

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
					path="/Breakfast/:listId/:mealName"
					element={<BreakfastScreen />}
				/>
				<Route
					path="/Food/:breakfastName/:breakfastId"
					element={<FoodScreen />}
				/>
				<Route
					path="/Order/:food"
					element={<OrderScreen />}
				/>
				<Route
					path="/Confirm/:selectedFood"
					element={<ConfirmScreen />}
				/>
				<Route
					path="/Check"
					element={<CheckScreen />}
				/>
				<Route
					path="/Fake"
					element={<FakeScreen />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
