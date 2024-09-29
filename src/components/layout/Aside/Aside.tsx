import { IAside } from '@/interfaces/interface'

export const Aside: React.FC<IAside> = ({ description }) => {
	return (
		<>
			<aside>
				<p>{description}</p>
			</aside>
		</>
	)
}
