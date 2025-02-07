import {
	animate,
	motion,
	useInView,
	useMotionValue,
	useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type StatType = { name: string; value: number; add?: string };

export default function AboutUs() {
	const stats: StatType[] = [
		{ name: "Anni di esperienza", value: 20 },
		{ name: "Casi gestiti", value: 1000 },
		{ name: "Clienti soddisfatti", value: 500 },
		{ name: "Successo nelle controversie legali", value: 90, add: "%" },
	];
	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32 max-w-6xl mx-auto">
			<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
				<div className="max-w-4xl">
					<p className="text-base/7 font-semibold text-indigo-600">
						About us
					</p>
					<h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						Il Tuo Futuro, La Nostra Missione
					</h1>
					<p className="mt-6 text-balance text-xl/8 text-gray-700">
						Da 20 anni, ci impegniamo a offrire consulenza legale
						chiara e soluzioni su misura per proteggere i tuoi
						diritti. Con professionalità e dedizione, siamo al tuo
						fianco in ogni passo.
					</p>
				</div>
				<section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
					<div className="lg:pr-8">
						<h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">
							Chi Siamo
						</h2>
						<p className="mt-6 text-base/7 text-gray-600">
							Lo Studio Legale Zigrino nasce con l’obiettivo di
							essere un punto di riferimento per chi cerca
							risposte concrete a questioni legali complesse. Ci
							distinguiamo per il nostro approccio umano e
							professionale: ascoltiamo le tue esigenze,
							analizziamo la situazione e lavoriamo per trovare la
							soluzione migliore, sia attraverso accordi
							stragiudiziali che in sede giudiziale.
						</p>
						<p className="mt-8 text-base/7 text-gray-600">
							Il nostro obiettivo è alleggerire il tuo carico e
							guidarti verso una risoluzione efficace,
							garantendoti trasparenza e supporto in ogni fase.
							Scegliere Zigrino significa affidarsi a
							professionisti che mettono al primo posto i tuoi
							interessi e la tua serenità.
						</p>
					</div>
					<div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
						<div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
							<div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
								<img
									alt=""
									src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
									className="block size-full object-cover"
								/>
							</div>
							<div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
								<img
									alt=""
									src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
									className="block size-full object-cover"
								/>
							</div>
							<div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
								<img
									alt=""
									src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
									className="block size-full object-cover"
								/>
							</div>
							<div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
								<img
									alt=""
									src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
									className="block size-full object-cover"
								/>
							</div>
						</div>
					</div>
					<div className="max-lg:mt-16 lg:col-span-1">
						<p className="text-base/7 font-semibold text-gray-500">
							I numeri, oltre
						</p>
						<hr className="mt-6 border-t border-gray-200" />
						<dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
							{stats.map((x) => (
								<Stat stat={x} />
							))}
						</dl>
					</div>
				</section>
			</div>
		</div>
	);
}

function Stat({ stat }: { stat: StatType }) {
	const count = useMotionValue(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const rounded = useTransform(() => Math.round(count.get()));

	useEffect(() => {
		if (isInView) {
			const controls = animate(count, stat.value, { duration: 5 });
			return () => controls.stop();
		}
	}, [isInView]);

	return (
		<div
			ref={ref}
			className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4"
		>
			<dt className="text-sm/6 text-gray-600">{stat.name}</dt>
			<dd className="order-first text-6xl font-semibold tracking-tight flex">
				<motion.pre>{rounded}</motion.pre>
				{stat.add ?? null}
			</dd>
		</div>
	);
}
