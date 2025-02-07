"use client";

import Header from "./Header";

export default function Hero() {
	return (
		<div>
			<Header />

			<div className="relative">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 h-[100vh] lg:w-full lg:max-w-2xl">
						<svg
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
							className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
						>
							<polygon points="0,0 90,0 50,100 0,100" />
						</svg>

						<div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-30 lg:pr-0 flex  h-full items-center">
							<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl flex flex-col  h-fit">
								{/* <div className="hidden sm:mb-10 sm:flex">
									<div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
										Anim aute id magna aliqua ad ad non
										deserunt sunt.{" "}
										<a
											href="#"
											className="whitespace-nowrap font-semibold text-indigo-600"
										>
											<span
												aria-hidden="true"
												className="absolute inset-0"
											/>
											Read more{" "}
											<span aria-hidden="true">
												&rarr;
											</span>
										</a>
									</div>
								</div> */}
								<h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
									Tutela i Tuoi Diritti con Professionalità e
									Dedizione
								</h1>
								<p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
									Lo Studio Legale Zigrino è al tuo fianco per
									offrirti consulenza e assistenza legale su
									misura. <br />
									<br /> Contattaci oggi stesso per una
									consulenza personalizzata e scopri come
									possiamo aiutarti a raggiungere il miglior
									risultato possibile.
								</p>
								<div className="mt-10 flex items-center gap-x-6">
									<a
										href="#contacts"
										className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Conosciamoci
									</a>
									<a
										href="#aboutus"
										className="text-sm/6 font-semibold text-gray-900"
									>
										Scopri di più
										<span aria-hidden="true">→</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 max-sm:hidden">
					<img
						alt=""
						src="./ekaterina.webp"
						className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
					/>
				</div>
			</div>
		</div>
	);
}
