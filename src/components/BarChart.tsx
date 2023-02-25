import Bar from "./Bar"

export default function BarChart() {
	return (
		<div className="flex h-48 w-full justify-between max-w-sm relative z-10 before:absolute before:h-px before:w-full before:bg-slate-600 before:top-1/2 before:-translate-y-3.5 before:-z-10">
			<Bar percentage={20} day="dom" />
			<Bar percentage={70} day="seg" />
			<Bar percentage={40} day="ter" />
			<Bar percentage={100} day="qua" />
			<Bar percentage={80} day="qui" />
			<Bar percentage={70} day="sex" />
			<Bar percentage={50} day="sab" />
		</div>
	)
}
