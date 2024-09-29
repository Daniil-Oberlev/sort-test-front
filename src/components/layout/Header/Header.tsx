import { IHeader } from '@/interfaces/interface'

export const Header: React.FC<IHeader> = ({ title }) => {
	return (
		<>
			<header>
				<h1>{title}</h1>
			</header>
		</>
	)
}
