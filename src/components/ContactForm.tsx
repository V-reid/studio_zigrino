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
const requestSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Il nome deve essere almeno 2 caratteri." }),
	// email: z.string().email({ message: "Inserire una email valida." }),
	message: z.string().min(20, {
		message:
			"Perfavore inserisci più dettagli riguardo la tua richiesta (minimo 20 caratteri).",
	}),
});

export function ContactForm() {
	const [formData, setFormData] = useState<Schema | null>(null);
	const [provider, setProvider] = useState("default"); // Store data after validation
	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(requestSchema),
		defaultValues: {
			name: "",
			// email: "",
			message: "",
		},
	});

	const myPhoneNumber = "393926189800"; // Replace with your actual email

	const onSubmit = (data) => {
		// 2. Format the message
		// We use %0a for new lines in WhatsApp
		const text = `Richiesta di consulenza finanziaria
*${data.name}*:
${data.message}`;

		// 3. Create the WhatsApp URL
		const url = `https://wa.me/${myPhoneNumber}?text=${encodeURIComponent(
			text
		)}`;

		// 4. Open WhatsApp (New Tab)
		window.open(url, "_blank");
	};

	return (
		<div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-border/50">
			<div className="mb-8">
				<h3 className="text-2xl font-display font-bold text-primary mb-2">
					Richiedi una Consulenza
				</h3>
				<p className="text-muted-foreground">
					Compila il modulo qui sotto. Ti ricontatteremo al più
					presto.
				</p>
			</div>

			<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
						{...register("name")}
						className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
							errors.name ? "border-red-500" : "border-gray-300"
						}`}
						placeholder="Mario Rossi"
					/>
					{errors.name && (
						<p className="text-red-500 text-xs mt-1">
							{errors.name.message}
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
						{...register("message")}
						className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
							errors.message
								? "border-red-500"
								: "border-gray-300"
						}`}
						placeholder="Spiegaci la tua situazione..."
					/>
					{errors.message && (
						<p className="text-red-500 text-xs mt-1">
							{errors.message.message}
						</p>
					)}
				</div>

				<Button
					type="submit"
					// onClick={handleSubmit(
					// disabled={isSubmitting}
					className="w-full h-12 text-lg font-medium bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/20 transition-all duration-300"
				>
					<FaWhatsapp className=" h-4 w-4" />
					Manda la richiesta
				</Button>

				<p className="text-xs text-center text-muted-foreground mt-4">
					Verrà aperta una chat whatsapp con il messaggio inserito
					nell'apposito riquadro.
				</p>
			</form>
		</div>
	);
}
