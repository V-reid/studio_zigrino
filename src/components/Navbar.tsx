import { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const [lastPath, setLastPath] = useState("");

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		setIsScrolled(window.scrollY > 20);
	// 	};
	// 	window.addEventListener("scroll", handleScroll);
	// 	if (location.pathname != lastPath) {
	// 		if (location.hash) {
	// 			const element = document.querySelector(location.hash);
	// 			if (element)
	// 				element.scrollIntoView({
	// 					behavior: "smooth", // 'auto' for instant jump, 'smooth' for animation
	// 					block: "start", // Align element to top of view
	// 				});
	// 			else window.scrollTo(0, 0);
	// 		}
	// 		setLastPath(location.pathname);
	// 	}
	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, []);

	const navLinks = [
		{ name: "Servizi", href: "/#services" },
		{ name: "Chi siamo", href: "/#about" },
		{ name: "Contatti", href: "/#contact" },
	];

	const scrollToSection = (
		e: React.MouseEvent<HTMLAnchorElement>,
		id: string,
	) => {
		e.preventDefault();
		const element = document.querySelector(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMobileMenuOpen(false);
		}
	};

	return (
		<nav
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
				isScrolled
					? "bg-white/95 backdrop-blur-md shadow-sm border-border/50 py-3"
					: "bg-transparent border-transparent py-5",
			)}
		>
			<div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
				{/* Logo */}
				<div
					onClick={() => window.scrollTo(0, 0)}
					// onClick={(e) => scrollToSection(e, "#hero")}
					className="flex items-center gap-2 group cursor-pointer"
				>
					<div className="text-primary-foreground p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
						{/* <Scale className="w-6 h-6" /> */}
						<img
							src="logo.png"
							alt="logo dello studio"
							className="size-12"
						/>
					</div>
					<div className="flex flex-col">
						<span
							className={cn(
								"text-lg font-display font-bold leading-none tracking-wide",
								isScrolled ? "text-foreground" : "text-white",
							)}
						>
							Studio Zigrino
						</span>
						<span
							className={cn(
								"text-xs font-medium tracking-[0.2em] uppercase",
								isScrolled
									? "text-muted-foreground"
									: "text-white/80",
							)}
						>
							Torino, Italia
						</span>
					</div>
				</div>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							// onClick={(e) => scrollToSection(e, link.href)}
							className={cn(
								"text-sm font-medium transition-colors hover:text-accent relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full",
								isScrolled
									? "text-foreground"
									: "text-white/90",
							)}
						>
							{link.name}
						</a>
					))}
					{/* <Button
						className="bg-accent hover:bg-accent/90 text-white font-medium px-6"
						onClick={() => {
							const element = document.querySelector("#contact");
							element?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Consulenza Gratuita
					</Button> */}
				</div>

				{/* Mobile Toggle */}
				<button
					className={cn(
						"md:hidden p-2 rounded-md",
						isScrolled ? "text-foreground" : "text-white",
					)}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					{isMobileMenuOpen ? <X /> : <Menu />}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							// onClick={(e) => scrollToSection(e, link.href)}
							className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-muted/50 transition-colors"
						>
							{link.name}
						</a>
					))}
				</div>
			)}
		</nav>
	);
}
