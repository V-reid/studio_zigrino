import React from "react";
import { ServiceType } from "./BentoGrid";
import Dialog from "@/components/Dialog";

function BentoDialog({
	service,
	open,
	onClose,
}: {
	service: ServiceType;
	open: boolean;
	onClose: () => void;
}) {
	return (
		<Dialog title={service.name} open={open} onClose={onClose}>
			{service.description}
		</Dialog>
	);
}

export default BentoDialog;
