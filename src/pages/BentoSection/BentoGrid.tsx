import { useState } from "react";
import { useDisclosure } from "../../lib/utils";
import BentoItem from "./BentoItem";
import BentoDialog from "./BentoDialog";
import { motion } from "framer-motion";

export type ServiceType = {
	name: string;
	img: string;
	class: string;
	description: string;
	catchPhrase: string;
};
export default function BentoGrid() {
	const { open, onOpen, onClose } = useDisclosure();
	const [service, setService] = useState<ServiceType | undefined>(undefined);

	function setServiceup(s?: ServiceType) {
		setService(s);
		onOpen();
	}
	const services: ServiceType[] = [
		{
			name: "Mutui e finanze",
			img: "./house.webp",
			class: "lg:col-span-1",
			catchPhrase: "Tutela e trasparenza per le tue scelte finanziarie.",
			description:
				"Offriamo consulenza legale specializzata in materia di mutui e finanza, aiutando i clienti a navigare tra contratti, clausole, rinegoziazioni e controversie con istituti bancari. Il nostro obiettivo è garantire trasparenza e tutela dei diritti dei clienti in ogni fase del processo.",
		},
		{
			name: "Debito",
			img: "./debito.webp",
			class: "lg:col-span-1",
			catchPhrase:
				"Soluzioni legali per ritrovare la serenità finanziaria.",
			description:
				"Supportiamo i clienti nella gestione del debito, offrendo soluzioni legali per piani di rientro, rinegoziazioni con creditori e procedure di insolvenza. Il nostro team è pronto ad aiutarti a ritrovare stabilità finanziaria e serenità.",
		},
		{
			name: "Assistenza Legale",
			img: "./tribunal.webp",
			class: "lg:col-span-1",
			catchPhrase: "Al tuo fianco per proteggere i tuoi diritti, sempre.",
			description:
				"Forniamo assistenza legale completa in diverse aree del diritto, dalla consulenza preventiva alla rappresentanza in tribunale. Il nostro team di esperti è al tuo fianco per proteggere i tuoi interessi e risolvere qualsiasi questione legale in modo efficiente.",
		},
	];
	return (
		<div className="bg-white py-24 sm:py-32 max-w-6xl mx-auto">
			<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
				<h2 className="text-base/7 font-semibold text-indigo-600">
					Esperienza professionale
				</h2>
				<p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
					Servizi impeccabili
				</p>
				{service ? (
					<BentoDialog
						open={open}
						service={service}
						onClose={() => {
							onClose();
							setService(undefined);
						}}
					/>
				) : null}

				<div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-1">
					{services.map((x, i) => (
						<motion.div
							whileInView={{ y: 0, opacity: 1 }}
							initial={{ y: 5, opacity: 0 }}
							transition={{ delay: 0.5 + 0.2 * i, duration: 0.8 }}
							viewport={{ once: true }}
						>
							<BentoItem
								service={x}
								setService={(s) => setServiceup(s)}
							/>
						</motion.div>
					))}

					{/* <div className="relative lg:col-span-3">
						<div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
							<img
								alt=""
								src="https://tailwindui.com/plus/img/component-images/bento-01-releases.png"
								className="h-80 object-cover object-left lg:object-right"
							/>
							<div className="p-10 pt-4">
								<h3 className="text-sm/4 font-semibold text-indigo-600">
									Releases
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
									Push to deploy
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600">
									Curabitur auctor, ex quis auctor venenatis,
									eros arcu rhoncus massa, laoreet dapibus ex
									elit vitae odio.
								</p>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
					</div>
					<div className="relative lg:col-span-2">
						<div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
							<img
								alt=""
								src="https://tailwindui.com/plus/img/component-images/bento-01-speed.png"
								className="h-80 object-cover object-left"
							/>
							<div className="p-10 pt-4">
								<h3 className="text-sm/4 font-semibold text-indigo-600">
									Speed
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
									Built for power users
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600">
									Sed congue eros non finibus molestie.
									Vestibulum euismod augue.
								</p>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
					</div>
					<div className="relative lg:col-span-2">
						<div className="absolute inset-px rounded-lg bg-white" />
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
							<img
								alt=""
								src="https://tailwindui.com/plus/img/component-images/bento-01-integrations.png"
								className="h-80 object-cover"
							/>
							<div className="p-10 pt-4">
								<h3 className="text-sm/4 font-semibold text-indigo-600">
									Integrations
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
									Connect your favorite tools
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600">
									Maecenas at augue sed elit dictum vulputate,
									in nisi aliquam maximus arcu.
								</p>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
					</div>
					<div className="relative lg:col-span-2">
						<div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
							<img
								alt=""
								src="https://tailwindui.com/plus/img/component-images/bento-01-network.png"
								className="h-80 object-cover"
							/>
							<div className="p-10 pt-4">
								<h3 className="text-sm/4 font-semibold text-indigo-600">
									Network
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
									Globally distributed CDN
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600">
									Aenean vulputate justo commodo auctor
									vehicula in malesuada semper.
								</p>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
					</div> */}
				</div>
			</div>
		</div>
	);
}
