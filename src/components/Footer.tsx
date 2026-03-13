import React from "react";
import { navLinks } from "./Navbar";

export default function Footer() {
	const scrollToSection = (
		e: React.MouseEvent<HTMLAnchorElement>,
		id: string,
	) => {
		e.preventDefault();
		const element = document.querySelector(id);
		console.log(element);

		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 max-md:place-items-center">
					<div className="col-span-1 md:col-span-2">
						<div className="flex max-md:flex-col items-center gap-2 mb-6">
							<div className=" p-2 rounded-lg">
								<img
									src="/studio_zigrino/logo.png"
									alt="logo dello studio"
									className="size-12"
								/>
							</div>
							<span className="text-xl font-display font-bold">
								Studio Zigrino S.r.l.
							</span>
						</div>
						<ul className="max-md:flex max-md:flex-col max-md:items-center max-md:gap-2 max-md:my-5">
							<li className="flex max-md:flex-col gap-2">
								<div className="text-slate-400">
									Partita IVA
								</div>
								<div className="font-bold">13179140010</div>
							</li>
							{/* <li className="flex gap-2">
								<div className="text-slate-400">
									Ragione Sociale
								</div>
								<div className="font-bold">
									STUDIO ZIGRINO SRL
								</div>
							</li> */}
							<li className="flex gap-2 max-md:flex-col">
								<div className="text-slate-400">Numero REA</div>
								<div className="font-bold">TO - 1344638</div>
							</li>
							<li className="flex gap-2 max-md:flex-col">
								<div className="text-slate-400 max-md:mx-auto">
									Sede legale
								</div>
								<div className="font-bold text-justify max-md:mx-auto text-justify">
									Corso Francesco Ferrucci 101
									<br /> 10138 Torino (TO), Italia
								</div>
							</li>
						</ul>
					</div>

					{/* <div>
						<h4 className="text-lg font-bold mb-6 font-display">
							Services
						</h4>
						<ul className="space-y-4 text-white/60">
							<li>
								<a
									href="#"
									className="hover:text-white transition-colors"
								>
									Mortgage Analysis
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white transition-colors"
								>
									Debt Renegotiation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white transition-colors"
								>
									Civil Litigation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white transition-colors"
								>
									Family Asset Protection
								</a>
							</li>
						</ul>
					</div> */}

					<div className="max-md:mx-auto">
						<h4 className="text-lg font-bold mb-6 font-display">
							Navigazione
						</h4>
						<ul className="space-y-4 text-white/60">
							{navLinks.map((link) => (
								<li>
									<a
										href={link.href}
										className="hover:text-white transition-colors"
										onClick={(e) =>
											scrollToSection(e, link.href)
										}
									>
										{link.name}
									</a>
								</li>
							))}

							{/* <li>
								<Link
									to="/privacy"
									onClick={() => scrollTo(0, 0)}
									className="hover:text-white transition-colors"
								>
									Privacy Policy
								</Link>
							</li> */}
						</ul>
					</div>
				</div>

				<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-white/40">
					© {new Date().getFullYear()} Studio Zigrino S.r.l. con unico
					socio. Tutti i diritti riservati.
				</div>
			</div>
		</footer>
	);
}
