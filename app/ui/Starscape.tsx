'use client'
import gsap from "gsap"
import { useEffect, useRef } from "react"

export default function Starscape({ densityRatio = 0.5, sizeLimit = 5, defaultAlpha = 0.5, scaleLimit = 2, proximityRatio = 0.1 }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const contextRef = useRef<CanvasRenderingContext2D | null>(null)
    const starsRef = useRef<{ x: number; y: number; size: number; scale: number; alpha: number }[]>([])
    const vminRef = useRef<number | null>(null)
    const scaleMapperRef = useRef<(value: number) => number>()
    const alphaMapperRef = useRef<(value: number) => number>()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
            contextRef.current = canvas.getContext('2d')
        const LOAD = () => {
            if (!vminRef.current || !scaleMapperRef.current || !alphaMapperRef.current) {
                vminRef.current = Math.min(window.innerHeight, window.innerWidth)
                const STAR_COUNT = Math.floor(vminRef.current * densityRatio)
                scaleMapperRef.current = gsap.utils.mapRange(
                    0,
                    vminRef.current * proximityRatio,
                    scaleLimit,
                    1
                );
                alphaMapperRef.current = gsap.utils.mapRange(
                    0,
                    vminRef.current * proximityRatio,
                    1,
                    defaultAlpha
                );
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
                starsRef.current = new Array(STAR_COUNT).fill(undefined).map(() => ({
                    x: gsap.utils.random(0, window.innerWidth, 1),
                    y: gsap.utils.random(0, window.innerHeight, 1),
                    size: gsap.utils.random(1, sizeLimit, 1),
                    scale: 1,
                    alpha: gsap.utils.random(0.1, defaultAlpha, 0.1),
                }))
            }
        }

        const RENDER = () => {
            const context = contextRef.current
            if (!context) return
                context.clearRect(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                )
                starsRef.current.forEach(star => {
                    context.fillStyle = `hsla(0, 100%, 100%, ${star.alpha})`
                    context.beginPath()
                    context.arc(
                        star.x,
                        star.y,
                        (star.size / 2) * star.scale,
                        0,
                        Math.PI * 2
                    )
                    context.fill()
                })
        }

        const UPDATE = ({ x, y }: { x: number, y:number }) => {
            const scaleMapper = scaleMapperRef.current
            const alphaMapper = alphaMapperRef.current
            const vmin = vminRef.current
            if (!scaleMapper || !alphaMapper || !vmin) return

                starsRef.current.forEach(STAR => {
                    const DISTANCE = Math.sqrt(Math.pow(STAR.x - x, 2) + Math.pow(STAR.y - y, 2));
                    gsap.to(STAR, {
                        scale: scaleMapper(
                            Math.min(DISTANCE, vmin * proximityRatio)
                        ),
                        alpha: alphaMapper(
                            Math.min(DISTANCE, vmin * proximityRatio)
                        )
                    });
                })
        };

        const EXIT = () => {
            gsap.to(starsRef.current, {
                scale: 1,
                alpha: defaultAlpha,
            })
        }

        LOAD()
        gsap.ticker.add(RENDER)
        gsap.ticker.fps(24)


        // Set up event handling
        window.addEventListener('resize', LOAD)
        document.addEventListener('pointermove', UPDATE)
        document.addEventListener('pointerleave', EXIT)
        return () => {
          window.removeEventListener('resize', LOAD)
          document.removeEventListener('pointermove', UPDATE)
          document.removeEventListener('pointerleave', EXIT)
          gsap.ticker.remove(RENDER)
        }
    }, [defaultAlpha, densityRatio, proximityRatio, sizeLimit, scaleLimit])
    return (
        <canvas ref={canvasRef} className="fixed bg-bg" style={{zIndex: -1}}/>
    )
}
