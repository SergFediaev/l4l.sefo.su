import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

type Props = {
	isDarkened?: boolean
} & ComponentPropsWithoutRef<'video'>

export const Video = ({ isDarkened, className, ...restProps }: Props) => {
	return (
		<div className='min-h-svh'>
			<video
				src='/background.mp4'
				muted
				loop
				autoPlay
				className={combine(
					'fixed inset-0 w-full h-full object-cover -z-20',
					className,
				)}
				{...restProps}
			/>
			{isDarkened && (
				<div className='fixed inset-0 bg-black bg-opacity-50 -z-10' />
			)}
		</div>
	)
}