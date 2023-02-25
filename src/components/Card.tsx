import { ReactNode } from "react"

interface CardProps {
	className?: string
	children: ReactNode
	title: string
}

export default function Card({ children, title, className }: CardProps) {
	return (
		<section
			className={`flex-grow flex flex-col gap-y-8 p-6 items-center justify-between text-white rounded bg-slate-700 shadow-lg md:px-12 md:py-7 ${className}`}
		>
			<p className="text-xl font-semibold">{title}</p>

			{children}
		</section>
	)
}
