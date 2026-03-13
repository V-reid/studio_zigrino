import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	ShieldCheck,
	Users,
	MapPin,
	Mail,
	ChevronDown,
	Goal,
	Handshake,
	BadgeEuro,
} from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const experience = 25;

export default function Home() {
	return (
		<div className="min-h-screen bg-background font-body text-foreground overflow-x-hidden">
			<Navbar />
			<Hero2 />
			<TrustIndicators />
			<Services />
			<About />
			{/* <CTA /> */}
			<Contact />
			<Footer />
		</div>
	);
}

function Hero2() {
	return (
		<div className="bg-white dark:bg-gray-900">
			<main>
				<div className="relative isolate">
					{/* <svg
						aria-hidden="true"
						className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)] dark:stroke-white/10"
					>
						<defs>
							<pattern
								x="50%"
								y={-1}
								id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
								width={200}
								height={200}
								patternUnits="userSpaceOnUse"
							>
								<path d="M.5 200V.5H200" fill="none" />
							</pattern>
						</defs>
						<svg
							x="50%"
							y={-1}
							className="overflow-visible fill-gray-50 dark:fill-gray-800"
						>
							<path
								d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
								strokeWidth={0}
							/>
						</svg>
						<rect
							fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
							width="100%"
							height="100%"
							strokeWidth={0}
						/>
					</svg> */}
					<div
						aria-hidden="true"
						className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
					>
						<div
							style={{
								clipPath:
									"polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
							}}
							className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
						/>
					</div>
					<div className="overflow-hidden">
						<div className="mx-auto max-w-7xl px-6 pb-32  lg:px-8 ">
							<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
								<div className="relative w-full flex gap-10 flex-col lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
									<div className=" w-fit flex items-center max-md:flex-col max-md:mx-auto justify-center gap-2   p-2 rounded-lg">
										<img
											src="/studio_zigrino/logo.png"
											alt="logo dello studio"
											className="size-36  "
										/>
										<span
											className={cn(
												"text-3xl font-display font-bold leading-none tracking-wide",
											)}
										>
											Studio Zigrino
										</span>
									</div>
									<div>
										<h1 className="text-pretty text-5xl  font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
											Esperti in analisi e supporto
											strategico
										</h1>
										<p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none dark:text-gray-400">
											Il nostro ruolo è guidare le imprese
											e i privati nella analisi delle
											esigenze economiche e
											nell'individuazione di soluzioni in
											ambito creditizio volte al
											miglioramento della situazione
											finanziaria.
										</p>
										<div className="mt-10 flex items-center max-md:justify-center  gap-x-6">
											<Button
												size="lg"
												className="  font-bold bg-accent hover:bg-accent/90 text-white border-none shadow-xl shadow-accent/20"
												onClick={() =>
													document
														.getElementById(
															"contact",
														)
														?.scrollIntoView({
															behavior: "smooth",
														})
												}
											>
												Richiedi un incontro gratuito
											</Button>
										</div>
									</div>
								</div>
								<div className="mt-14 flex justify-end gap-8 max-lg:gap-0  sm:-mt-44 sm:justify-start  lg:mt-24  lg:pl-0 max-lg:justify-center px-[10rem]  w-full">
									<div className="ml-auto w-44 max-lg:hidden flex-none space-y-8 pt-32  sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80 ">
										<div className="relative">
											<img
												loading="lazy"
												alt="incontro con il cliente "
												src="/studio_zigrino/h1.webp"
												className="aspect-[2/3] w-full max-lg:w-[90%]  rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
										</div>
									</div>
									<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
										<div className="relative">
											<img
												loading="lazy"
												alt="lavoro in gruppo"
												src="/studio_zigrino/h2.webp"
												className="aspect-[2/3] w-full rounded-xl max-lg:w-[90%] bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl md:ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
										</div>
										<div className="relative">
											<img
												loading="lazy"
												alt="ragazzi discutono un progetto"
												src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
												className="aspect-[2/3] w-full rounded-xl max-lg:w-[90%] bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl md:ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
										</div>
									</div>
									<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
										<div className="relative">
											<img
												loading="lazy"
												alt="incontro con la famiglia"
												src="/studio_zigrino/h3.webp"
												className="aspect-[2/3] w-full rounded-xl max-lg:w-[90%] bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl md:ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
										</div>
										<div className="relative">
											<img
												loading="lazy"
												alt="ragazza guarda un parco"
												src="/studio_zigrino/h4.webp"
												className="aspect-[2/3] w-full rounded-xl max-lg:w-[90%] bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl md:ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
										</div>
									</div>
								</div>
								{/* <div className="mt-14 flex justify-end gap-8 max-lg:gap-0  sm:-mt-44 sm:justify-start  lg:mt-0  lg:pl-0 max-lg:justify-center px-[10rem]  w-full">
									<div className="ml-auto w-44 max-lg:hidden flex-none space-y-8 pt-32  sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80 ">
										<div className="relative">
											<img
												alt="incontro con il cliente "
												src="/studio_zigrino/h1.webp"
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
										</div>
									</div>
									<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
										<div className="relative">
											<img
												alt="lavoro in gruppo"
												src="/studio_zigrino/h2.webp"
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
										</div>
										<div className="relative">
											<img
												alt="ragazzi discutono un progetto"
												src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
										</div>
									</div>
									<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
										<div className="relative">
											<img
												alt="incontro con la famiglia"
												src="/studio_zigrino/h3.webp"
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
										</div>
										<div className="relative">
											<img
												alt="ragazza guarda un parco"
												src="/studio_zigrino/h4.webp"
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover  shadow-lg dark:bg-gray-700/5"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
										</div>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

function Hero() {
	return (
		<>
			{/* desktop */}
			<section
				id="hero"
				className="max-md:hidden relative min-h-screen flex flex-col items-center max-md:items-start  justify-center max-md:pt-[5rem] overflow-hidden"
			>
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					{/* Unsplash: Classic law office/library architecture */}
					<img
						src="/studio_zigrino/hero9.webp"
						alt="Law firm office background"
						className="max-md:hidden w-full h-full object-cover   "
					/>
					<img
						src="/studio_zigrino/heroMobile.webp"
						alt="Law firm office background"
						className="md:hidden w-full h-full object-cover translate-y-[50%] object-[55%_0%] "
					/>
					<div className="absolute w-[60%] translate-x-[100%] z-10 inset-0 bg-black/10 mix-blend-multiply" />
					{/* <div className="absolute inset-0 " /> */}
				</div>

				<div className="container relative z-10 ">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="max-w-4xl  "
					>
						{/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
						<span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
						Servizio su Torino & Piemonte
					</div> */}
						<div className=" w-fit flex items-center justify-center gap-2   p-2 rounded-lg">
							<img
								src="/studio_zigrino/logo.png"
								alt="logo dello studio"
								className="size-36  "
							/>
							<span
								className={cn(
									"text-3xl font-display font-bold leading-none tracking-wide",
								)}
							>
								Studio Zigrino
							</span>
						</div>
						<h1 className="text-4xl md:text-6xl lg:text-7xl max-w-3xl font-display font-bold text-gray-800 mb-6 leading-tight text-shadow-lg max-md:text-center">
							{/* finanziamento prestito e soluzioni legali  */}
							Esperti in
							<span className=""> analisi e supporto</span>{" "}
							strategico
						</h1>

						<p className="text-lg md:text-xl text-gray-800 mb-10 max-w-2xl max-md:text-center leading-relaxed">
							Il nostro ruolo è guidare privati e imprese
							nell’analisi delle esigenze economiche e
							nell’individuazione di soluzioni in ambito
							creditizio, volte al miglioramento della situazione
							finanziaria.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-start gap-4">
							<Button
								size="lg"
								className="w-full max-md:w-fit sm:w-auto h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-white border-none shadow-xl shadow-accent/20"
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
			{/* mobile */}
			<section
				id="hero"
				className="md:hidden relative min-h-screen flex flex-col items-center gap-10 justify-center overflow-hidden"
			>
				<div className="flex flex-col items-center justify-center gap-2 border-2 border-gray-200 shadow-xl p-2 rounded-lg">
					<img
						src="/studio_zigrino/logo.png"
						alt="logo dello studio"
						className="size-36  "
					/>
					<span
						className={cn(
							"text-lg font-display font-bold leading-none tracking-wide",
						)}
					>
						Studio Zigrino
					</span>
				</div>
				{/* Background Image with Overlay */}

				<div className="container relative z-10 ">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="max-w-4xl  "
					>
						{/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
						<span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
						Servizio su Torino & Piemonte
					</div> */}

						<h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-800 mb-6 leading-tight text-shadow-md max-md:text-center">
							{/* finanziamento prestito e soluzioni legali  */}
							Esperti in
							<span className=""> Analisi e Supporto</span>{" "}
							strategico
						</h1>

						<p className="text-lg md:text-xl text-gray-800 mb-10 max-w-2xl max-md:text-center leading-relaxed px-2">
							Il nostro ruolo è guidare le imprese e i privati
							nella analisi delle esigenze economiche e
							nell'individuazione di soluzioni in ambito
							creditizio volte al miglioramento della situazione
							finanziaria.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-start gap-4">
							<Button
								size="lg"
								className="w-full max-md:w-fit sm:w-auto h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-white border-none shadow-xl shadow-accent/20"
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
		</>
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
							desc: `Con solide radici a Torino e oltre venticinque anni di esperienza maturata nel settore finanziario, tra competenza, affidabilità e conoscenza del mercato.`,
						},
						{
							icon: Goal,
							title: "Esperienza Guidata",
							desc: (
								<p>
									Niente linguaggio complicato. Ogni passaggio
									viene spiegato con chiarezza e semplicità,
									perché tu possa comprendere davvero ogni
									scelta e prendere decisioni consapevoli e
									serene.
								</p>
							),
						},
						{
							icon: Users,
							title: "Approccio Personalizzato",
							desc: (
								<>
									Sappiamo che ogni situazione finanziaria è
									unica e per questo merita un ascolto attento
									e una strategia pensata su misura.
								</>
							),
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
							<p className="text-muted-foreground leading-relaxed max-w-xs mx-auto text-justify">
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
					{/* <p className="text-muted-foreground text-lg">
						Attività specializzata per la gestione amministrativa e
						la tutela della tua attività, delle tue finanze e dei
						tuoi interessi nei confronti di debiti e creditori.
					</p> */}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<ServiceCard
						title="Analisi finanziaria personalizzata"
						description="Analisi personalizzata e orientamento verso l'analisi delle tue esigenze."
						icon={Handshake}
						details={[
							"Ascolto approfondito",
							"Analisi delle esigenze",
							"Individuazione strategica delle soluzioni",
						]}
						delay={0}
					/>
					<ServiceCard
						title="Orientamento al credito"
						description="Ti guidiamo verso gli istituti di credito e le società più idonee, collegandoti con professionisti specializzati nei diversi settori."
						icon={BadgeEuro}
						details={[
							"Aiuto alla realizzazione del tuo obiettivo",
							"Ottimizzazione delle tempistiche",
							"Camminiamo al tuo fianco",
						]}
						delay={0.1}
					/>
					<ServiceCard
						title="Situazioni di debito"
						description="Supporto dedicato per privati e aziende in situazioni di debito, di rischio di procedure legali in arrivo o già in atto."
						icon={ShieldCheck}
						details={[
							"Gestione atti ingiuntivi e/o pignoramenti",
							"Cancellazione protesti",
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
						</h2>
						<p className="text-white/80 text-lg leading-relaxed mb-6 text-justify">
							Un giorno qualcuno mi disse: “Senza di te non ce
							l’avrei mai fatta.” <br />
							Da quelle parole è nata un’idea professionale che va
							oltre il semplice lavoro: un progetto costruito su
							competenze solide, ma sostenuto da un nucleo di
							persone che condividono valori, senso di
							responsabilità e attenzione autentica alla
							dimensione umana.
							{/* Fondato sui principi di integrità ed eccellenza, il
							nostro studio si occupa di consulenza e
							pianificazione finanziaria da oltre un quarto di
							secolo, perché crediamo che tutti meritino
							chiarezza, tutela e correttezza di fronte a sistemi
							bancari e di indebitamento complessi. */}
						</p>
						<p className="text-white/80 text-lg leading-relaxed mb-8 text-justify">
							La nostra missione è aiutare le persone, perché ogni
							percorso finanziario o professionale non è fatto
							solo di numeri e procedure, ma anche di storie,
							difficoltà e obiettivi da raggiungere insieme.
						</p>

						<div className="flex gap-8 border-t border-white/10 pt-8">
							{/* <div>
								<div className="text-4xl font-display font-bold text-accent mb-1">
									{experience}+
								</div>
								<div className="text-sm text-white/60 uppercase tracking-wider">
									Anni di Esperienza
								</div>
							</div> */}
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
								src="/studio_zigrino/hero8.webp"
								alt="Lawyer consulting with client"
								className="w-[60%] h-[100%] max-sm:w-[80%] max-sm:h-full  object-cover hover:scale-105 transition-transform duration-700 rounded-3xl  overflow-hidden  sm:absolute sm:top-0 sm:left-[40%] max-sm:mx-auto shadow-xl"
							/>
						</div>

						{/* Floating Quote Card */}
						<div className="absolute max-sm:relative sm:-bottom-6 max-sm:mt-10 sm:-left-6 md:bottom-10 max-sm:mx-auto md:-left-10 bg-white text-foreground p-6 rounded-xl shadow-xl max-w-xs border border-border">
							<p className="text-sm font-medium italic mb-4">
								"Lo Studio Zigrino ha alleggerito le mie
								giornate, aiutandomi passo dopo passo a
								districarmi tra diverse problematiche."
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
