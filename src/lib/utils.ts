import { clsx, type ClassValue } from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function useHover() {
	const [hover, setHover] = useState(false);
	const onEnterHover = () => setHover(true);
	const onExitHover = () => setHover(false);
	const hoverUtils = {
		onMouseEnter: onEnterHover,
		onMouseLeave: onExitHover,
	};

	return { hover: hover, onEnterHover, onExitHover, hoverUtils };
}

export function useDisclosure() {
	const [open, setOpen] = useState(false);

	return { open, onOpen: () => setOpen(true), onClose: () => setOpen(false) };
}
