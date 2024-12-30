'use client'

import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Monitoring } from '@/components/monitoring'
import { Review } from '@/components/review'
import { Section } from '@/components/section'
import { Text } from '@/components/text'
import { Video } from '@/components/video'
import { combine } from '@/utils/combine'
import { filterValues } from '@/utils/filterValues'
import { getRandomIndex } from '@/utils/getRandomIndex'
import { Saira_Stencil_One } from 'next/font/google'
import Image from 'next/image'
import { type ComponentPropsWithoutRef, useState } from 'react'

const saira = Saira_Stencil_One({
	subsets: ['latin'],
	weight: '400',
})

const CAMPAIGNS = [
	'Dead Center',
	'The Passing',
	'Dark Carnival',
	'Swamp Fever',
	'Hard Rain',
	'The Parish',
	'Cold Stream',
	'No Mercy',
	'Crash Course',
	'Death Toll',
	'Dead Air',
	'Blood Harvest',
	'The Sacrifice',
	'The Last Stand',
] as const

const ROTATES = [
	'rotate-0',
	'rotate-45',
	'rotate-90',
	'rotate-180',
	'-rotate-90',
	'-rotate-45',
] as const

const SERVERS = '/#Servers'

export const Main = (props: ComponentPropsWithoutRef<'main'>) => {
	const [campaign, setCampaign] = useState<(typeof CAMPAIGNS)[number]>()
	const [rotate, setRotate] = useState<(typeof ROTATES)[number]>()
	const [isRandomizing, setIsRandomizing] = useState(false)

	const randomCampaignText = isRandomizing
		? 'Randomizing campaign'
		: 'Random official campaign'

	const randomCampaign = () => {
		setIsRandomizing(true)

		if (campaign) {
			setCampaign(undefined)
		}

		setTimeout(() => {
			const campaigns = filterValues(CAMPAIGNS, campaign)
			const randomIndex = getRandomIndex(campaigns)

			setCampaign(campaigns[randomIndex])
			setIsRandomizing(false)
		}, 2_000)
	}

	const randomRotate = () => {
		const rotates = filterValues(ROTATES, rotate)
		const randomIndex = getRandomIndex(rotates)

		setRotate(rotates[randomIndex])
	}

	return (
		<main id='Servers' {...props}>
			<div className='justify-center min-h-svh px-8 py-20 gap-10 bg-background shadow-inner shadow-black flex flex-col items-center'>
				<div className='flex flex-wrap items-center justify-center gap-x-10'>
					<Heading
						as='h1'
						isLarge={false}
						isAccent={false}
						isBold={false}
						className={`${saira.className} text-center text-6xl antialiased sm:text-8xl glow hover:text-accent transition hover:drop-shadow-[0_0_10px_rgba(0,0,0,1)]`}
					>
						Left 4 Legend
					</Heading>
					<Image
						src='/logo.svg'
						alt='Logo'
						width={400}
						height={525}
						className={combine(
							'transition duration-1000 glow hover:animate-pulse w-28 cursor-pointer',
							rotate,
						)}
						onClick={randomRotate}
						onMouseEnter={randomRotate}
						priority
					/>
				</div>
				<Monitoring />
				<div className='flex flex-col items-center gap-5'>
					<Heading as='h4'>Can't choose a campaign to play?</Heading>
					<Button
						variant='lead'
						onClick={randomCampaign}
						isLoading={isRandomizing}
					>
						{randomCampaignText}
					</Button>
					{campaign && <span className='animate-pulse'>{campaign}</span>}
				</div>
			</div>
			<Video />
			<div className='bg-black'>
				<Section isOdd>
					<Heading>
						Take Your Left 4 Dead 2 Experience to the Next Level
					</Heading>
					<Text>
						Looking for a true challenge beyond the “Expert Realism” difficulty?
						Welcome to Left 4 Legend, where survival demands teamwork, strategy,
						and skill. These enhanced servers deliver a hardcore, immersive
						experience that pushes the boundaries of the vanilla game while
						staying true to its spirit.
					</Text>
					<Review source='Metacritic'>10/10 GOTY</Review>
				</Section>
				<Section>
					<Heading>Unique Mechanics, Authentic Gameplay</Heading>
					<Text>
						Explore new, carefully balanced mechanics that enrich the original
						gameplay. No overpowered nonsense, no invincible Tanks — just a pure
						survival experience designed to test your limits.
					</Text>
					<Review source='IGN'>Hidden Gem</Review>
				</Section>
				<Section isOdd>
					<Heading>Harder, Smarter, Fairer</Heading>
					<Text>
						Every challenge is balanced with well-thought-out enhancements,
						ensuring intense but rewarding gameplay. Forget gimmicks — this is
						Left 4 Dead 2 at its finest, refined for players who crave true
						difficulty without compromising fun.
					</Text>
					<Review source="Denis DeCrow's mom">
						Finally, snow-free servers!
					</Review>
				</Section>
				<Section>
					<Heading>Seamless Immersion</Heading>
					<Text>
						No distracting chat spam. No intrusive screen prompts. Just you,
						your team, and the undead, in an atmosphere built for total
						immersion.
					</Text>
					<Review source='Gabe Newell'>It's Left 4 Dead 3 we deserve</Review>
				</Section>
				<Section isOdd>
					<Heading>Community-Driven Servers</Heading>
					<Text>
						Our loyal administration listens to the players. No absurd rules or
						unnecessary restrictions. We focus on what matters: giving you the
						best cooperative experience possible.
					</Text>
					<Review source='The Times'>Most based game experience ever</Review>
				</Section>
				<Section>
					<Heading>Endless Adventures</Heading>
					<Text>
						With an ever-growing library of curated custom campaigns, there's
						always a fresh challenge waiting for you and your friends.
					</Text>
					<Review source='Soldier (49-th unit)'>
						I'm suffering. But I like it!
					</Review>
				</Section>
				<Section isOdd>
					<Heading>Are You Ready to Become a Legend?</Heading>
					<Text>
						Left 4 Legend isn’t just a server — it’s a test of skill, teamwork,
						and survival instincts. Can you and your squad rise to the occasion?
						Join us today and prove you’ve got what it takes to survive the
						ultimate Left 4 Dead 2 experience!
					</Text>
					<Review>That's our official instructions</Review>
				</Section>
				<aside className='sticky bottom-0 flex justify-end p-8'>
					<Button as='a' href={SERVERS} variant='lead'>
						Play now
					</Button>
				</aside>
			</div>
			<section className='bg-background px-8 pt-20 gap-10 overflow-hidden flex flex-wrap justify-center'>
				<aside className='flex flex-col items-center justify-center gap-10'>
					<a
						href={SERVERS}
						className='text-4xl sm:text-8xl font-black underline-offset-8'
					>
						Now playing!
					</a>
					<Image
						src='/code.svg'
						width={400}
						height={400}
						alt='QR code'
						title="Don't scan!"
					/>
				</aside>
				<Image
					src='/levi.png'
					alt='Levi Ackerman'
					width={393}
					height={1144}
					className='translate-y-10'
					title='Not anime fan, but they say projects work better with it :D'
				/>
			</section>
		</main>
	)
}
