import { navigation } from "./Header";

export default function Example() {
	return (
		<footer className="bg-white">
			<div className="mx-auto max-w-7xl overflow-hidden px-6 py-15 sm:py-12 lg:px-8">
				<nav
					aria-label="Footer"
					className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
				>
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-gray-900 hover:text-gray-600"
						>
							{item.name}
						</a>
					))}
				</nav>

				<p className="mt-12 text-center text-sm/6 text-gray-800 flex gap-16 items-center justify-center">
					<div className="flex gap-2">
						P.IVA <span className="font-bold">IT99999999999</span>
					</div>
					<div className="flex gap-2">
						REA <span className="font-bold">RM-123456</span>
					</div>
				</p>
				<p className=" text-center text-sm/6 text-gray-400">
					&copy; 2024 Zigrino, tutti i diritti riservati.
				</p>
			</div>
		</footer>
	);
}
