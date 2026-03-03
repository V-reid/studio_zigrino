import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	ShieldCheck,
	Scale,
	Users,
	Phone,
	MapPin,
	Mail,
	ChevronDown,
	Goal,
	Handshake,
	BadgeEuro,
	Car,
	Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const experience = 25;

export default function Home() {
	return (
		<div className="min-h-screen bg-background font-body text-foreground overflow-x-hidden">
			<Navbar />
			<Hero />
			<TrustIndicators />
			<Services />
			<About />
			{/* <CTA /> */}
			<Contact />
			<Footer />
		</div>
	);
}

function Hero() {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
		>
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0">
				{/* Unsplash: Classic law office/library architecture */}
				<img
					src="hero.avif"
					alt="Law firm office background"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
				<div className="absolute inset-0 bg-black/40" />
			</div>

			<div className="container relative z-10 px-4 md:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="max-w-4xl mx-auto text-center"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
						<span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
						Servizio su Torino & Piemonte
					</div>

					<h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight text-shadow-lg">
						{/* finanziamento prestito e soluzioni legali  */}
						Esperti in
						<span className="text-accent">
							{" "}
							Analisi & supporto
						</span>{" "}
						gestionale
					</h1>

					<p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
						Il nostro ruolo è guidare le imprese e i privati nella
						analisi delle esigenze economiche e nell'individuazione
						di soluzioni in ambito creditizio volte al miglioramento
						della situazione finanziaria.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button
							size="lg"
							className="w-full sm:w-auto h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-white border-none shadow-xl shadow-accent/20"
							onClick={() =>
								document
									.getElementById("contact")
									?.scrollIntoView({ behavior: "smooth" })
							}
						>
							Richiedi un incontro gratuito
						</Button>
						{/* <a
							href="tel:+393926189800"
							// size="lg"
							// variant="outline"
							className="w-full flex gap-2 border-2 border-slate-400 items-center rounded-md justify-center sm:w-auto h-14 px-8 text-lg bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white backdrop-blur-sm"
						>
							<Phone className="mr-2 h-5 w-5" />
							<div>Parla con noi</div>
						</a> */}
					</div>
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer hover:text-white transition-colors"
				animate={{ y: [0, 10, 0] }}
				transition={{ repeat: Infinity, duration: 2 }}
				onClick={() =>
					document
						.getElementById("trust")
						?.scrollIntoView({ behavior: "smooth" })
				}
			>
				<ChevronDown className="w-10 h-10" />
			</motion.div>
		</section>
	);
}

function TrustIndicators() {
	return (
		<section id="trust" className="py-20 bg-white">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
					{[
						{
							icon: MapPin,
							title: "Esperienza sul territorio",
							desc: `Con solide radici a Torino e oltre ${experience} anni di esperienza nel settore finanziario`,
						},
						{
							icon: Goal,
							title: "Esperienza Guidata",
							desc: (
								<p>
									Niente gergo complesso.
									<br />
									Spieghiamo ogni passaggio per permetterti di
									prendere decisioni consapevoli.
								</p>
							),
						},
						{
							icon: Users,
							title: "Approccio Personalizzato",
							desc: "Comprendiamo che ogni situazione finanziaria è unica e richiede una strategia su misura.",
						},
					].map((item, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.2, duration: 0.6 }}
							className="flex flex-col items-center"
						>
							<div className="w-16 h-16 rounded-full bg-primary/5 flex items-center  border-2 border-black justify-center mb-6 text-primary">
								<item.icon className="w-8 h-8 text-[#C8B576]" />
							</div>
							<h3 className="text-xl font-display font-bold text-foreground mb-3">
								{item.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
								{item.desc}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

function Services() {
	return (
		<section id="services" className="py-24 bg-muted/30 relative">
			<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-accent font-semibold tracking-widest uppercase text-sm">
						Le Nostre Competenze
					</span>
					<h2 className="text-3xl md:text-5xl font-display font-bold text-primary mt-3 mb-6">
						Soluzioni Finanziare Personalizzate
					</h2>
					<p className="text-muted-foreground text-lg">
						Attività specializzata per la gestione amministrativa e
						la tutela della tua attività, delle tue finanze e dei
						tuoi interessi nei confronti di debiti e creditori.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<ServiceCard
						title="Analisi finanziaria personalizzata"
						description="Valutiamo in modo approfondito la tua situazione economica per individuare soluzioni realmente sostenibili."
						icon={Handshake}
						details={[
							"Reddito e capacità di rimborso",
							"Mutui e finanziamenti attivi",
							"Situazione creditizia complessiva",
						]}
						delay={0}
					/>
					<ServiceCard
						title="Mutui e finanziamenti su misura"
						description="Ti guidiamo nella scelta del mutuo o finanziamento più adatto alle tue esigenze."
						icon={BadgeEuro}
						details={[
							"Mutui prima casa e acquisto immobili",
							"Prestiti personali e aziendali",
							"Gestione pratiche e rapporto con la banca",
						]}
						delay={0.1}
					/>
					<ServiceCard
						title="Consulenza per protesti e pignoramenti"
						description="Supporto dedicato per privati e aziende in situazioni creditizie complesse."
						icon={ShieldCheck}
						details={[
							"Cancellazione protesti",
							"Gestione pignoramenti",
							"Assistenza per segnalazioni",
						]}
						delay={0.2}
					/>
				</div>
			</div>
		</section>
	);
}

function About() {
	return (
		<section
			id="about"
			className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
		>
			{/* Decorative pattern */}
			<div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none" />

			<div className="container mx-auto px-4 md:px-6 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
							Uno studio con sede a Torino, dedicato alla tua
							<span className="text-accent">
								{" "}
								tutela finanziaria
							</span>
							.
						</h2>
						<p className="text-white/80 text-lg leading-relaxed mb-6">
							Fondato sui principi di integrità ed eccellenza, il
							nostro studio si occupa di consulenza e
							pianificazione finanziaria da oltre un quarto di
							secolo, perché crediamo che tutti meritino
							chiarezza, tutela e correttezza di fronte a sistemi
							bancari e di indebitamento complessi.
						</p>
						<p className="text-white/80 text-lg leading-relaxed mb-8">
							La nostra missione è aiutare i nostri clienti a
							gestire il proprio patrimonio con chairezza, fiducia
							e sicurezza.
						</p>

						<div className="flex gap-8 border-t border-white/10 pt-8">
							<div>
								<div className="text-4xl font-display font-bold text-accent mb-1">
									{experience}+
								</div>
								<div className="text-sm text-white/60 uppercase tracking-wider">
									Anni di Esperienza
								</div>
							</div>
							<div>
								<div className="text-4xl font-display font-bold text-accent mb-1">
									500+
								</div>
								<div className="text-sm text-white/60 uppercase tracking-wider">
									Persone aiutate
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative"
					>
						<div className=" relative aspect-[4/3] rounded-2xl overflow-hidden ">
							{/* Unsplash: Professional lawyer meeting */}
							<img
								src="./me.jpeg"
								alt="Lawyer consulting with client"
								className="w-[50%]  h-[100%] max-sm:w-[80%] max-sm:h-full  object-cover hover:scale-105 transition-transform duration-700 rounded-3xl  overflow-hidden  sm:absolute sm:top-0 sm:left-[40%] max-sm:mx-auto shadow-xl"
							/>
						</div>

						{/* Floating Quote Card */}
						<div className="absolute max-sm:relative sm:-bottom-6 max-sm:mt-10 sm:-left-6 md:bottom-10 max-sm:mx-auto md:-left-10 bg-white text-foreground p-6 rounded-xl shadow-xl max-w-xs border border-border">
							<p className="text-sm font-medium italic mb-4">
								"Lo Studio Zigrino mi ha alleggerito le giornate
								guidandomi in una situazione in cui la mia banca
								non è stata in grado di aiutarmi."
								{/* 								
								 aiutato a risolvere le mi il
								mutuo anche quando sembrava impossibile,
								seguendomi con grande professionalità passo dopo
								passo" */}
							</p>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
									FR
								</div>
								<div className="text-xs">
									<div className="font-bold text-primary">
										Francesca R.
									</div>
									<div className="text-muted-foreground">
										Cliente di Torino
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

function CTA() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4 md:px-6">
				<div className="bg-muted/50 rounded-3xl p-8 md:p-16 text-center border border-border">
					<h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
						Facing issues with mortgages or debt?
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
						Don't wait until it's too late. The earlier we
						intervene, the more options you have available. Book a
						consultation to understand your rights.
					</p>
					<Button
						size="lg"
						className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20"
						onClick={() =>
							document
								.getElementById("contact")
								?.scrollIntoView({ behavior: "smooth" })
						}
					>
						Book Your Consultation Now
						<ArrowRight className="ml-2 w-5 h-5" />
					</Button>
				</div>
			</div>
		</section>
	);
}

function Contact() {
	return (
		<section id="contact" className="py-24 bg-secondary/30 relative">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
					{/* Contact Info */}
					<div>
						<span className="text-accent font-semibold tracking-widest uppercase text-sm">
							Contattaci
						</span>
						<h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-3 mb-8">
							Parliamo del tuo caso.
						</h2>
						<p className="text-lg text-muted-foreground mb-12">
							Inviaci un messaggio. <br />
							Il primo passo verso una soluzione è il dialogo.
						</p>

						<div className="space-y-8">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-border flex items-center justify-center shrink-0 text-primary">
									<MapPin className="w-6 h-6" />
								</div>
								<div>
									<h4 className="text-lg font-bold text-foreground mb-1">
										Il Nostro Ufficio
									</h4>
									<a
										className="text-muted-foreground underline"
										href="https://www.google.com/maps/place/C.so+Francesco+Ferrucci,+101,+10138+Torino+TO/@45.0660522,7.6529434,702m/data=!3m1!1e3!4m6!3m5!1s0x47886d1e875a3079:0x44ad6e8932f8de7f!8m2!3d45.0660484!4d7.6555183!16s%2Fg%2F11bw42qpfc?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
									>
										Corso Francesco Ferrucci 101
										<br />
										10138 Torino (TO), Italia
									</a>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-border flex items-center justify-center shrink-0 text-primary">
									<Mail className="w-6 h-6" />
								</div>
								<div>
									<h4 className="text-lg font-bold text-foreground mb-1">
										Contattaci
									</h4>
									<div className="flex flex-col gap-0 ">
										<a
											className="text-muted-foreground underline"
											href="mailto:info@studiozigrino.it"
										>
											info@studiozigrino.it
										</a>
										<a
											className="text-muted-foreground underline"
											href="mailto:studiozigrino@pec.it"
										>
											studiozigrino@pec.it
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Form */}
					<div className="relative">
						<div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform -translate-y-10" />
						<div className="relative">
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
