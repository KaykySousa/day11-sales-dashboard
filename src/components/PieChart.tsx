interface PieChartProps {
	percentage: number
	className?: string
}

export default function PieChart({ percentage, className }: PieChartProps) {
	return (
		<div
			className={`w-40 h-40 flex justify-center items-center relative bg-gradient-to-br rounded-full bg-clip-content p-px ${className}`}
		>
			<div
				style={{
					background: `conic-gradient(#0000 ${
						percentage + "%"
					}, #334155 0)`,
				}}
				className="flex justify-center items-center absolute rounded-full w-full h-full p-6"
			>
				<div className="w-full h-full bg-slate-700 rounded-full flex flex-col justify-center items-center">
					<p className="text-3xl font-semibold leading-none">
						{percentage}%
					</p>
					<p className="opacity-70 text-sm leading-none mt-1">
						alcançada
					</p>
				</div>
			</div>
		</div>
	)
}
