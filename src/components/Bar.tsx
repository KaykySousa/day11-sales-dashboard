interface BarProps {
	day: string
	percentage: number
}

export default function Bar({ day, percentage }: BarProps) {
	return (
		<div className="flex flex-col justify-end items-center gap-y-2">
			<div className="w-3 flex-1 flex flex-col-reverse">
				<div
					style={{
						height: percentage + "%",
					}}
					className="w-full from-teal-300 to-teal-500 bg-gradient-to-b rounded-full"
				></div>
			</div>
			<p className="text-sm opacity-80">{day}</p>
		</div>
	)
}
