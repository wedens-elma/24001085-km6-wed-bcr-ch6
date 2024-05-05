import Container from "react-bootstrap/Container";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/NavbarComponent";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import "react-toastify/dist/ReactToastify.css";
import NonProtected from "./components/NonProtected";
import Protected from "./components/Protected";
import Profile from "./pages/profile";
import store from "./redux/store";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<NonProtected>
				<Navbar />
				<Container className="mt-5">
					<Home />
				</Container>
			</NonProtected>
		),
	},
	{
		path: "/login",
		element: (
			<NonProtected>
				<Navbar />
				<Container className="mt-5">
					<Login />
				</Container>
			</NonProtected>
		),
	},
	{
		path: "/register",
		element: (
			<NonProtected>
				<Navbar />
				<Container className="mt-5">
					<Register />
				</Container>
			</NonProtected>
		),
	},
	{
		path: "/profile",
		element: (
			<Protected>
				<Navbar />
				<Container className="mt-5">
					<Profile />
				</Container>
			</Protected>
		),
	},
	{
		path: "/students/:id",
		element: (
			<Protected>
				<Navbar />
				<Container className="mt-5">
					<StudentDetail />
				</Container>
			</Protected>
		),
	},
]);

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />

			<ToastContainer theme="colored" />
		</Provider>
	);
}

export default App;
