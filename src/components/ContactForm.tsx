import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";
import { z } from "zod";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

type Schema = {
	name: string;
	message: string;
};

export function ContactForm() {
	const [data, setData] = useState<Schema>({ message: "", name: "" });
	const [errors, setErrors] = useState<Partial<Schema>>({});
	const [touched, setTouched] = useState(false);
	const onSubmit = () => {
		let pass = true;
		if (data.message.trim().length < 20) {
			setErrors((prev) => ({
				...prev,
				message:
					"Perfavore inserisci più dettagli riguardo la tua richiesta (minimo 20 caratteri).",
			}));
			pass = false;
		} else {
			const { message, ...rest } = errors;
			setErrors(rest);
		}

		if (data.name.trim().length == 0) {
			setErrors((prev) => ({
				...prev,
				name: "Questo campo è obbligatorio",
			}));
			pass = false;
		} else {
			const { name, ...rest } = errors;
			setErrors(rest);
		}
		setTouched(true);
		if (pass && touched) {
			const url = `mailto:fulminetor@gmail.com?subject=${encodeURIComponent(`Richiesta di analisi finanziaria ${data.name}`)}&body=${encodeURIComponent(data.message)}`;
			window.open(url, "_blank");
		}
	};

	return (
		<div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-border/50">
			<div className="mb-8">
				<h3 className="text-2xl font-display font-bold text-primary mb-2">
					Richiedi un'analisi
				</h3>
				<p className="text-muted-foreground">
					Compila il modulo qui sotto. Ti ricontatteremo al più
					presto.
				</p>
			</div>

			<div className="space-y-4">
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Nome{" "}
					</label>
					<input
						id="name"
						type="text"
						value={data.name}
						onChange={(v) =>
							setData((prev) => ({
								...data,
								name: v.target.value,
							}))
						}
						className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300`}
						placeholder="Mario Rossi"
					/>
					{errors.name && (
						<p className="text-red-500 text-xs mt-1">
							{errors.name}
						</p>
					)}
				</div>

				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Richiesta
					</label>
					<textarea
						id="message"
						rows={4}
						value={data.message}
						onChange={(v) =>
							setData((prev) => ({
								...prev,
								message: v.target.value,
							}))
						}
						className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300`}
						placeholder="Spiegaci la tua situazione..."
					/>
					{errors.message && (
						<p className="text-red-500 text-xs mt-1">
							{errors.message}
						</p>
					)}
				</div>

				<Button
					type="submit"
					onClick={onSubmit}
					// onClick={handleSubmit(
					// disabled={isSubmitting}
					className="w-full h-12 text-lg font-medium bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/20 transition-all duration-300"
				>
					{/* <a
						href={`mailto:fulminetor@gmail.com?subject=${encodeURIComponent(`Richiesta di analisi finanziaria ${data.name}`)}&body=${encodeURIComponent(data.message)}`}
						className="w-full h-full py-2"
					> */}
					Manda la richiesta
					{/* </a> */}
				</Button>
			</div>
		</div>
	);
}
