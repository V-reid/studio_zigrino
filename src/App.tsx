import {
	Routes,
	Route,
	createBrowserRouter,
	RouterProvider,
	createHashRouter,
} from "react-router";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

let router = createHashRouter(
	[
		{
			path: "/",
			Component: Home,
			// loader: loadRootData,
		},
		// {
		// 	path: "/privacy",
		// 	Component: Privacy,
		// 	// loader: loadRootData,
		// },
		{
			path: "/*",
			Component: NotFound,
			// loader: loadRootData,
		},
	],
	{ basename: "/studio_zigrino" },
);

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<Toaster />
				<RouterProvider router={router} />
			</TooltipProvider>
		</QueryClientProvider>
	);
}

export default App;
