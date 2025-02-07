import { cn, useDisclosure, useHover } from "../../lib/utils";
import { ServiceType } from "./BentoGrid";
import { MoveRight } from "lucide-react";

export default function BentoItem({
	service,
	setService,
}: {
	service: ServiceType;
	setService: (service: ServiceType | undefined) => void;
}) {
	const { hover, hoverUtils } = useHover();
	return (
		<div
			className={cn("relative cursor-pointer shadow-lg", service.class)}
			{...hoverUtils}
			onClick={() => setService(service)}
		>
			<div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
			<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
				<img
					alt=""
					src={service.img}
					className={cn(
						"h-80 object-cover object-left transition-all",
						hover ? "scale-110" : "scale-100"
					)}
				/>
				<div className="p-6  absolute w-full  h-full items-end bg-black/40 text-white flex-col">
					<div className="flex justify-between w-full  items-center bg-white rounded-full px-2">
						<h3
							className={cn(
								"text-lg/4 font-bold text-indigo-600 transition-all"
							)}
						>
							{service.name}
						</h3>
						<p
							className={cn(
								" max-w-lg text-sm/6  flex items-center text-black font-bold  transition-all ",
								hover
									? "translate-x-0 opacity-100"
									: "translate-x-5 opacity-0"
							)}
						>
							<span>Scopri di piu`</span>{" "}
							<MoveRight className="size-4 mt-1" />
						</p>
					</div>

					<p
						className={cn(
							"mt-2 max-w-lg text-sm/6  transition-all"
						)}
					>
						{service.catchPhrase}
					</p>
				</div>
			</div>
			<div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
		</div>
	);
}
