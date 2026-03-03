import { ArrowLeft, Scale } from "lucide-react";
import React from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
	return (
		<>
			<Navbar />
			<main className=" bg-slate-900 text-white">
				<div className=" pt-16 md:pt-24 max-w-3xl mx-auto">
					<div className="container-custom">
						<h1 className="font-heading text-4xl md:text-5xl font-semibold ">
							Privacy e Cookie Policy
						</h1>
						<p className=" mt-4 text-lg">
							Ultimo aggiornamento: Dicembre 2025
						</p>
					</div>
				</div>

				<article className="container-custom pb-16 md:pb-24">
					<div className="max-w-3xl mx-auto prose prose-lg">
						<section className="mb-12">
							<h2 className="font-heading text-2xl font-semibold text-white mb-4">
								1. Titolare del Trattamento
							</h2>
							<p className="text-white leading-relaxed mb-4">
								Il Titolare del trattamento dei dati personali è
								Studio Legale Torino, con sede in Via Roma 123,
								10121 Torino (TO), Italia.
							</p>
							<p className="text-white leading-relaxed">
								<strong className="text-white font-bold">
									Email:
								</strong>{" "}
								info@studiolegale.it
								<br />
								<strong className="text-white font-bold">
									Telefono:
								</strong>{" "}
								+39 011 123 4567
							</p>
						</section>

						<section className="mb-12">
							<h2 className="font-heading text-2xl font-semibold text-white mb-4">
								2. Tipologie di Dati Raccolti
							</h2>
							<p className="text-white leading-relaxed mb-4">
								Tra i dati personali raccolti da questo sito
								web, in modo autonomo o tramite terze parti, ci
								sono: nome, cognome, indirizzo email, dati di
								utilizzo, cookie e dati comunicati durante la
								richiesta di consulenza.
							</p>
							<p className="text-white leading-relaxed">
								I dati personali possono essere liberamente
								forniti dall'Utente o, nel caso dei dati di
								utilizzo, raccolti automaticamente durante l'uso
								di questo sito.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="font-heading text-2xl font-semibold text-white mb-4">
								3. Finalità del Trattamento
							</h2>
							<p className="text-white leading-relaxed mb-4">
								I dati dell'Utente sono raccolti per le seguenti
								finalità:
							</p>
							<ul className="list-disc list-inside text-white space-y-2 mb-4">
								<li>
									Rispondere alle richieste di consulenza
									legale
								</li>
								<li>
									Contattare l'Utente in merito ai servizi
									richiesti
								</li>
								<li>Adempiere ad obblighi di legge</li>
								<li>
									Analisi statistiche anonime per migliorare
									il servizio
								</li>
							</ul>
						</section>

						<section className="mb-12">
							<h2 className="font-heading text-2xl font-semibold text-white mb-4">
								4. Base Giuridica del Trattamento
							</h2>
							<p className="text-white leading-relaxed mb-4">
								Il trattamento dei dati personali si basa su:
							</p>
							<ul className="list-disc list-inside text-white space-y-2">
								<li>
									<strong className="text-white font-bold">
										Consenso:
									</strong>{" "}
									l'Utente ha prestato il consenso per una o
									più finalità specifiche
								</li>
								<li>
									<strong className="text-white font-bold">
										Esecuzione contrattuale:
									</strong>{" "}
									il trattamento è necessario per l'esecuzione
									di un contratto
								</li>
								<li>
									<strong className="text-white font-bold">
										Obbligo legale:
									</strong>{" "}
									il trattamento è necessario per adempiere un
									obbligo legale
								</li>
								<li>
									<strong className="text-white font-bold">
										Legittimo interesse:
									</strong>{" "}
									per l'analisi statistica anonima e il
									miglioramento del servizio
								</li>
							</ul>
						</section>

						<section className="mb-12">
							<h2 className="font-heading text-2xl font-semibold text-white mb-4">
								5. Conservazione dei Dati
							</h2>
							<p className="text-white leading-relaxed">
								I dati personali saranno conservati per il tempo
								strettamente necessario a conseguire le finalità
								per cui sono stati raccolti. In particolare, i
								dati relativi alle consulenze legali saranno
								conservati per 10 anni dalla conclusione del
								rapporto, in conformità agli obblighi
								deontologici forensi e alla normativa fiscale.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="font-heading text-2xl font-semibold text-white mb-4">
								6. Diritti dell'Interessato
							</h2>
							<p className="text-white leading-relaxed mb-4">
								Gli Utenti possono esercitare determinati
								diritti con riferimento ai dati trattati dal
								Titolare. In particolare, l'Utente ha il diritto
								di:
							</p>
							<ul className="list-disc list-inside text-white space-y-2">
								<li>Accedere ai propri dati personali</li>
								<li>
									Verificare e chiedere la rettifica dei dati
								</li>
								<li>Ottenere la limitazione del trattamento</li>
								<li>Ottenere la cancellazione dei dati</li>
								<li>
									Ricevere i dati in formato strutturato
									(portabilità)
								</li>
								<li>Proporre reclamo all'Autorità Garante</li>
							</ul>
						</section>

						<section className="mb-12">
							<h2 className="font-heading text-2xl font-semibold text-white mb-4">
								7. Cookie Policy
							</h2>
							<p className="text-white leading-relaxed mb-4">
								Questo sito utilizza cookie per garantire il
								corretto funzionamento delle procedure e
								migliorare l'esperienza di utilizzo.
							</p>

							<h3 className="font-heading text-xl font-semibold text-white mb-3 mt-6">
								7.1 Cookie Tecnici (Necessari)
							</h3>
							<p className="text-white leading-relaxed mb-4">
								Sono cookie indispensabili per il corretto
								funzionamento del sito. Includono cookie di
								sessione e cookie per memorizzare le preferenze
								dell'utente (come il consenso ai cookie). Non
								richiedono consenso.
							</p>

							<h3 className="font-heading text-xl font-semibold text-white mb-3">
								7.2 Cookie Analitici
							</h3>
							<p className="text-white leading-relaxed mb-4">
								Utilizziamo cookie analitici per comprendere
								come gli utenti interagiscono con il sito,
								raccogliendo informazioni in forma anonima.
								Questi cookie vengono installati solo previo
								consenso.
							</p>

							<h3 className="font-heading text-xl font-semibold text-white mb-3">
								7.3 Gestione delle Preferenze
							</h3>
							<p className="text-white leading-relaxed">
								È possibile modificare le proprie preferenze sui
								cookie in qualsiasi momento attraverso le
								impostazioni del browser o eliminando i cookie
								memorizzati. Si noti che la disabilitazione dei
								cookie tecnici potrebbe compromettere il
								funzionamento del sito.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="font-heading text-2xl font-semibold text-white mb-4">
								8. Sicurezza dei Dati
							</h2>
							<p className="text-white leading-relaxed">
								Il Titolare adotta le opportune misure di
								sicurezza volte ad impedire l'accesso, la
								divulgazione, la modifica o la distruzione non
								autorizzata dei dati personali. Il trattamento
								viene effettuato mediante strumenti informatici
								e/o telematici, con modalità organizzative e con
								logiche strettamente correlate alle finalità
								indicate.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="font-heading text-2xl font-semibold text-white mb-4">
								9. Modifiche alla Privacy Policy
							</h2>
							<p className="text-white leading-relaxed">
								Il Titolare si riserva il diritto di apportare
								modifiche alla presente privacy policy in
								qualunque momento, informando gli Utenti su
								questa pagina. Si prega di consultare
								regolarmente questa pagina, prendendo come
								riferimento la data di ultima modifica indicata
								in alto.
							</p>
						</section>
					</div>
				</article>

				<Footer />
			</main>
		</>
	);
}
