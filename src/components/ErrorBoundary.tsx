import React from "react";

export function ErrorAlert() {
	return (
		<div className="w-screen h-screen grid place-items-center">
			<div className="bg-red-200 rounded-md p-10 text-lg font-semibold">
				Errore!
				<br />
				provare a aggiornare la pagina.
				<br />
				se il problema persiste contattare l'amministratore
			</div>
		</div>
	);
}

export class ErrorBoundary extends React.Component<any, any> {
	state = { hasError: false };

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	//   componentDidCatch(error: any, errorInfo: any) {
	//     if (isProduction() || isStaging()) {
	//       apm.captureError(error);
	//     }
	//   }
	render() {
		if (this.state.hasError) {
			return (
				<div className="w-screen h-screen place-items-center">
					<ErrorAlert />
				</div>
			);
		}

		return this.props.children;
	}
}
