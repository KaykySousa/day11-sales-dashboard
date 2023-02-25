import NpsSmile from "./assets/nps-smile.svg"
import BarChart from "./components/BarChart"
import CaptionChart from "./components/CaptionChart"
import Card from "./components/Card"
import PieChart from "./components/PieChart"

export default function App() {
	return (
		<div className="min-h-screen w-full bg-slate-800 flex justify-center items-center p-4">
			<div className="flex flex-col gap-y-4 items-stretch">
				<div className="flex flex-wrap justify-start items-stretch gap-4">
					<Card title="NPS geral" className="!px-20">
						<div className="flex flex-col items-center">
							<img
								src={NpsSmile}
								alt="NPS"
								className="w-14 h-14"
							/>
							<p className="text-green-400 font-semibold text-xl mt-2">
								Excelente!
							</p>
						</div>

						<CaptionChart
							description="NPS score"
							value="75"
							showColor={false}
						/>
					</Card>
					<Card title="Vendas fechadas">
						<PieChart
							percentage={70}
							className="from-violet-300 to-violet-700"
						/>

						<div className="flex gap-x-3 gap-y-1 flex-wrap justify-center">
							<CaptionChart
								className="bg-neutral-500"
								description="Esperado"
								value="100%"
							/>
							<CaptionChart
								className="from-violet-300 to-violet-700"
								description="Alcançado"
								value="70%"
							/>
						</div>
					</Card>
					<Card title="Meta mensal">
						<PieChart
							percentage={90}
							className="from-orange-300 to-violet-600"
						></PieChart>

						<div className="flex gap-x-3 gap-y-1 flex-wrap justify-center">
							<CaptionChart
								className="bg-neutral-500"
								description="Esperado"
								value="R$ 70K"
							/>
							<CaptionChart
								className="from-orange-300 to-violet-600"
								description="Alcançado"
								value="R$ 63K"
							/>
						</div>
					</Card>
				</div>

				<Card title="Vendas por dia da semana" className="!items-start">
					<div className="w-full flex flex-wrap justify-between items-stretch gap-6">
						<div className="flex flex-col justify-around gap-y-6">
							<div>
								<div className="flex items-center">
									<div className="inline-block border-r-8 border-r-transparent border-l-8 border-l-transparent border-b-8 border-b-green-400 mr-2"></div>
									<p className="text-sm opacity-80">
										Dia com mais vendas
									</p>
								</div>
								<p className="font-semibold text-xl mt-2">
									quarta-feira
								</p>
							</div>
							<div>
								<div className="flex items-center">
									<div className="inline-block border-r-8 border-r-transparent border-l-8 border-l-transparent border-t-8 border-t-red-400 mr-2"></div>
									<p className="text-sm opacity-80">
										Dia com menos vendas
									</p>
								</div>
								<p className="font-semibold text-xl mt-2">
									domingo
								</p>
							</div>
						</div>
						<BarChart />
					</div>
				</Card>
			</div>
		</div>
	)
}
