import { cn, useHover } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa6";

type ContactType = {
	name: string;
	icon: JSX.Element;
	href: string;
	value: string;
};

const contacts: ContactType[] = [
	{
		name: "Email",
		icon: <Mail />,
		href: "mailto:collaborate@example.com",
		value: "esempio@gmail.com",
	},
	{
		name: "Cellulare",
		icon: <Phone />,
		href: "tel:+393713982343",
		value: "+39 371 398 2343",
	},
	{
		name: "Indirizzo",
		icon: <MapPin />,
		href: "https://www.google.com/maps/search/?q=Corso+Emanuele+Vittori+81",
		value: "Corso Emanuele Vittori 81",
	},
	{
		name: "Whatsapp",
		icon: <FaWhatsapp className="size-6" />,
		href: "https://wa.me/393713982343",
		value: "+39 371 398 2343",
	},
];

export default function Contacts() {
	return (
		<div className="bg-white py-8 sm:py-16 max-w-6xl mx-auto">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
					<div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
						<div>
							<h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
								Contattaci
							</h2>
							<p className="mt-4 text-base/7 text-gray-600">
								Quam nunc nunc eu sed. Sed rhoncus quis
								ultricies ac pellentesque.
							</p>
						</div>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
							{contacts.map((x, i) => (
								<ContactItem contact={x} i={i} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function ContactItem({ contact, i }: { contact: ContactType; i: number }) {
	const { hover, hoverUtils } = useHover();
	return (
		<div
			className="rounded-2xl bg-gray-50 p-10 cursor-pointer shadow-md "
			onClick={() => document.getElementById("contact_" + i)?.click()}
			{...hoverUtils}
		>
			<div className="flex gap-2">
				<div
					className={cn(
						"transition-all",
						hover ? "scale-110" : "scale-100 rotate-0"
					)}
				>
					{contact.icon}
				</div>
				<h3
					className={cn(
						"text-base/7 font-semibold text-gray-900 transition-all",
						hover ? "scale-110 " : "scale-100 rotate-0"
					)}
				>
					{contact.name}
				</h3>
			</div>
			<dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
				<div>
					<dt className="sr-only">{contact.name}</dt>
					<dd>
						<a
							id={"contact_" + i}
							href={contact.href}
							className="font-semibold text-indigo-600"
							target="_blank"
						>
							{contact.value}
						</a>
					</dd>
				</div>
			</dl>
		</div>
	);
}
