import React from "react";

export default function Footer() {
	return (
		<footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center gap-2 mb-6">
							<div className=" p-2 rounded-lg">
								<img
									src="studio_zigrino/logo.png"
									alt="logo dello studio"
									className="size-12"
								/>
							</div>
							<span className="text-xl font-display font-bold">
								Studio Zigrino S.r.l.
							</span>
						</div>
						<ul>
							<li className="flex gap-2">
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
							<li className="flex gap-2">
								<div className="text-slate-400">Numero REA</div>
								<div className="font-bold">TO - 1344638</div>
							</li>
							<li className="flex gap-2">
								<div className="text-slate-400">
									Sede legale
								</div>
								<div className="font-bold w-[40%] text-justify">
									Corso Francesco Ferrucci 101 10138 Torino
									(TO), Italia
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

					<div>
						<h4 className="text-lg font-bold mb-6 font-display">
							Navigazione
						</h4>
						<ul className="space-y-4 text-white/60">
							<li>
								<a
									href="#services"
									className="hover:text-white transition-colors"
								>
									Servizi
								</a>
							</li>
							<li>
								<a
									href="#about"
									className="hover:text-white transition-colors"
								>
									Chi Siamo
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="hover:text-white transition-colors"
								>
									Contatti
								</a>
							</li>
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
