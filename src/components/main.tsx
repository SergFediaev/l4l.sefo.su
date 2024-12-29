import { Accent } from '@/components/accent'
import { Monitoring } from '@/components/monitoring'
import { Review } from '@/components/review'
import { Text } from '@/components/text'
import { combine } from '@/utils/combine'
import { Saira_Stencil_One } from 'next/font/google'
import Image from 'next/image'
import type { ComponentPropsWithoutRef } from 'react'

const saira = Saira_Stencil_One({
	subsets: ['latin'],
	weight: '400',
})

export const Main = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'main'>) => {
	return (
		<main
			id='Servers'
			className={combine(
				'flex px-8 pt-8 flex-col items-center gap-10',
				className,
			)}
			{...restProps}
		>
			<div className='flex flex-wrap items-center justify-center gap-x-10'>
				<h1
					className={`${saira.className} text-center text-6xl antialiased sm:text-8xl glow hover:text-accent transition hover:drop-shadow-[0_0_10px_rgba(0,0,0,1)]`}
				>
					Left 4 Legend
				</h1>
				<Image
					src='/logo.png'
					alt='Logo'
					width={200}
					height={200}
					className='glow hover:animate-pulse'
				/>
			</div>
			<Monitoring />
			<Accent>Take Your Left 4 Dead 2 Experience to the Next Level</Accent>
			<Text>
				Looking for a true challenge beyond the “Expert Realism” difficulty?
				Welcome to Left 4 Legend, where survival demands teamwork, strategy, and
				skill. These enhanced servers deliver a hardcore, immersive experience
				that pushes the boundaries of the vanilla game while staying true to its
				spirit.
			</Text>
			<Review source='Metacritic'>10/10 GOTY</Review>
			<Accent>Unique Mechanics, Authentic Gameplay</Accent>
			<Text>
				Explore new, carefully balanced mechanics that enrich the original
				gameplay. No overpowered nonsense, no invincible Tanks — just a pure
				survival experience designed to test your limits.
			</Text>
			<Review source='IGN'>Hidden Gem</Review>
			<Accent>Harder, Smarter, Fairer</Accent>
			<Text>
				Every challenge is balanced with well-thought-out enhancements, ensuring
				intense but rewarding gameplay. Forget gimmicks — this is Left 4 Dead 2
				at its finest, refined for players who crave true difficulty without
				compromising fun.
			</Text>
			<Review source="Denis DeCrow's mom">Finally, snow-free servers!</Review>
			<Accent>Seamless Immersion</Accent>
			<Text>
				No distracting chat spam. No intrusive screen prompts. Just you, your
				team, and the undead, in an atmosphere built for total immersion.
			</Text>
			<Review source='Gabe Newell'>It's Left 4 Dead 3 we deserve</Review>
			<Accent>Community-Driven Servers</Accent>
			<Text>
				Our loyal administration listens to the players. No absurd rules or
				unnecessary restrictions. We focus on what matters: giving you the best
				cooperative experience possible.
			</Text>
			<Review source='The Times'>Most based game experience ever</Review>
			<Accent>Endless Adventures</Accent>
			<Text>
				With an ever-growing library of curated custom campaigns, there's always
				a fresh challenge waiting for you and your friends.
			</Text>
			<Review source='Soldier (49-th unit)'>
				I'm suffering. But I like it!
			</Review>
			<Accent>Are You Ready to Become a Legend?</Accent>
			<Text>
				Left 4 Legend isn’t just a server — it’s a test of skill, teamwork, and
				survival instincts. Can you and your squad rise to the occasion? Join us
				today and prove you’ve got what it takes to survive the ultimate Left 4
				Dead 2 experience!
			</Text>
			<Review>That's our official instructions</Review>
			<a
				href='/#Servers'
				className='text-4xl sm:text-8xl font-black underline-offset-8 mb-28'
			>
				Now playing!
			</a>
			<button
				type='button'
				className='self-end shadow-lg shadow-black transition text-black hover:bg-variant hover:glow sticky bottom-8 px-4 py-2 bg-accent rounded-2xl hover:shadow-none'
				title='Play on random server'
			>
				<a
					href='steam://connect/95.143.216.252:27021'
					className='no-underline hover:text-black'
				>
					Play now
				</a>
			</button>
			<aside className='overflow-hidden flex w-full flex-wrap justify-center'>
				<div className='flex-grow flex justify-center'>
					<Image
						src='/code.svg'
						width={400}
						height={400}
						alt='QR code'
						title="Don't scan!"
					/>
				</div>
				<Image
					src='/levi.png'
					alt='Levi Ackerman'
					width={393}
					height={1144}
					className='translate-y-10'
					title='Not anime fan, but they say projects work better with it :D'
				/>
			</aside>
		</main>
	)
}
