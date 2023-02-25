interface CaptionChartProps {
	className?: string
	showColor?: boolean
	description: string
	value: string
}

export default function CaptionChart({
	className,
	showColor = true,
	description,
	value,
}: CaptionChartProps) {
	return (
		<div className="flex items-center gap-x-1 text-sm">
			{showColor && (
				<div
					className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${className}`}
				></div>
			)}
			<p>{description}:</p>
			<p className="opacity-80">{value}</p>
		</div>
	)
}
