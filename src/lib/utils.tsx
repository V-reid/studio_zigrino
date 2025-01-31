import { useState } from "react";

export function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
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
