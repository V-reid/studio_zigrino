import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function NotFound() {
	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
			<Navbar />
			<main className="grid  place-items-center  px-6 py-24 sm:py-32 lg:px-8 bg-gray-900 min-h-[100vh]">
				<div className="text-center">
					<p className="text-base font-semibold text-accent ">404</p>
					<h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight  sm:text-7xl text-white">
						Pagina non trovata
					</h1>
					<p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 dark:text-gray-400">
						Siamo spiacenti, non siamo riusciti a trovare la pagina
						che stavi cercando
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="/"
							className="rounded-md  px-3.5 py-2.5 text-sm font-semibold  shadow-sm  bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  bg-primary-500 hover:bg-primary-400 focus-visible:outline-primary-500"
						>
							Torna alla pagina principale
						</a>
					</div>
				</div>
			</main>
		</>
	);
}
