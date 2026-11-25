// One place that registers GSAP and its plugins, so every component imports from here.
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

// Shared motion vocabulary.
export const EASE_OUT = 'power3.out' // UI responses
export const EASE_REVEAL = 'expo.out' // text reveals: fast start, long soft landing
export const EASE_SPRING = 'elastic.out(1, 0.45)' // release after a press or pull
export const FULL = '(prefers-reduced-motion: no-preference)'
export const FINE = '(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)'

export { gsap, ScrollTrigger, SplitText, useGSAP }
