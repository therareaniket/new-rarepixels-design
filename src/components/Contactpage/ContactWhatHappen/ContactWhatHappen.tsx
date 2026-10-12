'use client';

import { useEffect, useRef, useState } from 'react'
import './contactwhathappen.css'

const cards = [
    {
        number: '01',
        title: 'We Read The Room',
        description: "Your message doesn't disappear into an inbox. We actually read it, understand the context, and look at what you're trying to achieve before we come back to you.",
    },
    {
        number: '02',
        title: 'You Hear From a Human',
        description: "Within 24 hours, you'll hear back from a real member of the RarePixels team. No bots. No copy-paste replies. Just a thoughtful response to what you actually told us.",
    },
    {
        number: '03',
        title: "Let's Talk it Through",
        description: "If there's a potential fit, we get on a 30-minute discovery call. You bring the challenge. We bring questions, ideas, and an honest perspective. No pressure. No hard sell.",
    },
    {
        number: '04',
        title: 'Your Project, Your Proposal',
        description: "If we're the right fit, we build a proposal around your project, not a recycled template. Scope, timelines, investment, and approach, all shaped around what you actually need.",
    },
]

const CARD_DURATION = 5000
const CLICK_AUTOPLAY_DELAY = 5000

const ContactWhatHappen = () => {

    const sectionRef = useRef<HTMLElement | null>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    const autoplayTimeoutRef = useRef<number | null>(null)
    const autoplayStartedAtRef = useRef(0)
    const remainingTimeRef = useRef(CARD_DURATION)

    const mobileAnimationLockedRef = useRef(false)
    const mobileCheckFrameRef = useRef<number | null>(null)
    const mobileAnimationTimeoutRef = useRef<number | null>(null)
    const highestOpenedCardRef = useRef(-1)

    const [activeCard, setActiveCard] = useState<number | null>(null)
    const [highestOpenedCard, setHighestOpenedCard] = useState(-1)
    const [animationStarted, setAnimationStarted] = useState(false)
    const [manualInteraction, setManualInteraction] = useState(false)
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 991px)').matches)

    useEffect(() => { highestOpenedCardRef.current = highestOpenedCard }, [highestOpenedCard])

    const isActiveCardHovered = hoveredCard !== null && hoveredCard === activeCard

    useEffect(() => { remainingTimeRef.current = manualInteraction ? CLICK_AUTOPLAY_DELAY : CARD_DURATION }, [activeCard, manualInteraction])

    useEffect(() => {
        const section = sectionRef.current

        if (!section) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return

                setAnimationStarted(true)
                if (!isMobile) {
                    setActiveCard(0)
                }

                observer.unobserve(entry.target)
            },
            {
                threshold: 0.5,
            }
        )

        observer.observe(section)

        return () => observer.disconnect()
    }, [isMobile])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 991px)')

        const handleBreakpointChange = (
            event: MediaQueryListEvent
        ) => {
            setIsMobile(event.matches)

            setActiveCard(
                event.matches ? null : 0
            )

            setHighestOpenedCard(-1)
            highestOpenedCardRef.current = -1

            setManualInteraction(false)

            mobileAnimationLockedRef.current = false

            if (
                mobileAnimationTimeoutRef.current !== null
            ) {
                window.clearTimeout(
                    mobileAnimationTimeoutRef.current
                )

                mobileAnimationTimeoutRef.current = null
            }
        }

        mediaQuery.addEventListener(
            'change',
            handleBreakpointChange
        )

        return () => {
            mediaQuery.removeEventListener(
                'change',
                handleBreakpointChange
            )
        }
    }, [])

    useEffect(() => {
        if (!isMobile) return
        if (!animationStarted) return
        if (manualInteraction) return

        const checkNextCard = () => {
            if (mobileAnimationLockedRef.current) return

            if (mobileCheckFrameRef.current !== null) {
                cancelAnimationFrame(
                    mobileCheckFrameRef.current
                )
            }

            mobileCheckFrameRef.current =
                requestAnimationFrame(() => {
                    mobileCheckFrameRef.current = null

                    const nextCardIndex =
                        highestOpenedCardRef.current + 1

                    if (nextCardIndex >= cards.length) { return }

                    const nextCard = cardRefs.current[nextCardIndex]
                    if (!nextCard) return

                    const cardRect = nextCard.getBoundingClientRect()
                    const cardNumber = nextCard.querySelector<HTMLElement>('.cnct-happens-card-number')
                    const cardText = nextCard.querySelector<HTMLElement>('.cnct-happens-text')

                    if (!cardNumber || !cardText) return

                    const cardStyles = window.getComputedStyle(nextCard)

                    const gap =
                        parseFloat(cardStyles.rowGap) ||
                        parseFloat(cardStyles.gap) ||
                        0

                    const paddingTop = parseFloat(cardStyles.paddingTop) || 0

                    const paddingBottom = parseFloat(cardStyles.paddingBottom) || 0

                    const expandedCardHeight = paddingTop + cardNumber.offsetHeight + gap + cardText.scrollHeight + paddingBottom
                    const expandedCardBottom = cardRect.top + expandedCardHeight
                    const isFullyInsideViewport = cardRect.top >= 0 && expandedCardBottom <= window.innerHeight

                    if (!isFullyInsideViewport) return

                    mobileAnimationLockedRef.current = true

                    highestOpenedCardRef.current = nextCardIndex

                    setHighestOpenedCard(nextCardIndex)
                    setActiveCard(nextCardIndex)

                    mobileAnimationTimeoutRef.current =
                        window.setTimeout(() => {
                            mobileAnimationLockedRef.current = false
                            mobileAnimationTimeoutRef.current = null

                            checkNextCard()
                        }, 850)
                })
        }
        checkNextCard()

        window.addEventListener('scroll', checkNextCard, { passive: true })
        window.addEventListener('resize', checkNextCard)
        return () => {
            window.removeEventListener('scroll', checkNextCard)
            window.removeEventListener('resize', checkNextCard)
            if (mobileCheckFrameRef.current !== null) {
                cancelAnimationFrame(mobileCheckFrameRef.current)
                mobileCheckFrameRef.current = null
            }

            if (
                mobileAnimationTimeoutRef.current !== null
            ) {
                window.clearTimeout(
                    mobileAnimationTimeoutRef.current
                )

                mobileAnimationTimeoutRef.current = null
            }

            mobileAnimationLockedRef.current = false
        }
    }, [isMobile, animationStarted, manualInteraction,])

    useEffect(() => {
        if (!animationStarted) return
        if (isMobile) return

        const clearAutoplayTimeout = () => {
            if (autoplayTimeoutRef.current !== null) {
                window.clearTimeout(autoplayTimeoutRef.current)
                autoplayTimeoutRef.current = null
            }
        }

        if (isActiveCardHovered) {
            const elapsedTime = performance.now() - autoplayStartedAtRef.current

            remainingTimeRef.current = Math.max(remainingTimeRef.current - elapsedTime, 0)
            clearAutoplayTimeout()
            return
        }

        autoplayStartedAtRef.current = performance.now()

        autoplayTimeoutRef.current = window.setTimeout(() => {
            setActiveCard((currentCard) => {
                return currentCard === null ||
                    currentCard >= cards.length - 1
                    ? 0
                    : currentCard + 1
            })

            setManualInteraction(false)
        }, remainingTimeRef.current)

        return clearAutoplayTimeout
    }, [activeCard, animationStarted, manualInteraction, isMobile, isActiveCardHovered,])

    const handleCardClick = (index: number) => {
        if (isMobile) return

        setAnimationStarted(true)
        setActiveCard(index)
        setManualInteraction(true)
    }

    return (
        <section ref={sectionRef} className='section bg-[#01030D]'>
            <div className="container">
                <div className="cnct-what-happen-title w-[478px]">
                    <h2 className='font-semibold text-[white]'>You Hit Send. We Get To Work.</h2>

                    <p className='text-18 font-normal website-subtitle-mt text-[white]'>No waiting in the void. No automated replies. Just real people, real conversations, and a clear path from your first idea to the first pixel.</p>
                </div>

                <div className="cnct-what-happen-card-wrapper mt-[60px] flex items-start justify-between">
                    {cards.map((card, index) => {
                        const isActive = activeCard === index

                        const showActiveCard = isMobile ? isActive && animationStarted : isActive
                        const isCompleted = isMobile ? animationStarted && index <= highestOpenedCard && index !== activeCard : activeCard !== null && index < activeCard
                        return (
                            <div ref={(element) => { cardRefs.current[index] = element }}
                                key={card.number}
                                role="button"
                                tabIndex={0}
                                aria-expanded={showActiveCard || isCompleted}
                                onMouseEnter={() => { if (!isMobile && activeCard === index) { setHoveredCard(index) } }}
                                onMouseLeave={() => {
                                    setHoveredCard((currentHoveredCard) =>
                                        currentHoveredCard === index
                                            ? null
                                            : currentHoveredCard
                                    )
                                }}
                                onClick={() => handleCardClick(index)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault()
                                        handleCardClick(index)
                                    }
                                }}
                                className={`cnct-happens-card flex gap-[30px] pt-[20px] ${showActiveCard ? 'is-active' : ''} ${isCompleted ? 'is-completed' : ''} ${animationStarted ? 'animation-started' : ''} ${hoveredCard === index ? 'is-hovered' : ''} `}
                            >
                                <div className="cnct-card-line"> <span key={`${index}-${showActiveCard}`} className="cnct-card-line-progress" /> </div>

                                <span className="cnct-happens-card-number text-[#424242] font-semibold"> {card.number} </span>

                                <div className="cnct-happens-text w-[410px] ">
                                    <h3 className='text-[white]'>{card.title}</h3>

                                    <p className='font-normal text-18 text-[white] mt-[20px]'>{card.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}
export default ContactWhatHappen