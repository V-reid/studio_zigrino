import { PropsWithChildren } from "react";
import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	Dialog as ShDialog,
} from "./ui/dialog";

function Dialog({
	open,
	title,
	children,
	onClose,
}: {
	open: boolean;
	title: string;
	onClose: () => void;
} & PropsWithChildren) {
	return (
		<ShDialog open={open} onOpenChange={(v) => (!v ? onClose() : {})}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{children}</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</ShDialog>
	);
}

export default Dialog;
