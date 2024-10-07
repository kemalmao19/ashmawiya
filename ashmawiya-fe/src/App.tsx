import "./App.css";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

function App() {
	gsap.registerPlugin(ScrollTrigger);
	const preloaderBackground = useRef<HTMLDivElement>(null);
	const preloaderText = useRef<HTMLDivElement>(null);
	const heroTitle1 = useRef<HTMLDivElement>(null);
	const heroTitle2 = useRef<HTMLDivElement>(null);
	const heroImageStart = useRef<HTMLDivElement>(null);
	const heroCaption = useRef<HTMLDivElement>(null);
	const heroButton = useRef<HTMLButtonElement>(null);
	const heroImageWrapper = useRef<HTMLDivElement>(null);
	const heroImage = useRef<HTMLImageElement>(null);
	const headerItems = useRef<HTMLDivElement>(null);
	const wordRef = useRef<HTMLParagraphElement>(null);
	const aboutTrigger = useRef<HTMLDivElement>(null);

	const master = gsap.timeline();

	const setInitialState = () => {
		const words = wordRef.current?.querySelectorAll("span"); // Select all child spans
		if (!words) return; // Exit if no words
		gsap.set(
			[
				preloaderText.current,
				heroTitle1.current,
				heroTitle2.current,
				heroCaption.current,
			],
			{
				yPercent: 100,
			},
		);
		gsap.set(headerItems.current, {
			y: -24,
			autoAlpha: 0,
		});
		gsap.set(heroButton.current, {
			y: -64,
			autoAlpha: 0,
		});
		gsap.set(words, {
			y: 24,
		});
	};

	const preloaderAnimation = () => {
		const tl = gsap.timeline({
			defaults: {
				ease: "power2.out",
			},
		});

		tl.to(preloaderText.current, {
			yPercent: 0,
			delay: 0.5,
		})
			.to(preloaderText.current, {
				yPercent: -105,
				delay: 1,
			})
			.to(preloaderBackground.current, {
				yPercent: -100,
				duration: 1.5,
				ease: "power4.inOut",
			});

		return tl;
	};

	const heroImageAnimation = () => {
		const tl = gsap
			.timeline({
				defaults: { ease: "power3.inOut", duration: 2 },
			})
			.from(heroImage.current, {
				scale: 1.5,
			})
			.to(
				heroImageWrapper.current,
				{
					borderRadius: "16px",
				},
				"<",
			)
			.to(
				[heroTitle1.current, heroTitle2.current, heroCaption.current],
				{
					yPercent: 0,
				},
				"<",
			)
			.to(
				[headerItems.current, heroButton.current],
				{
					y: 0,
					autoAlpha: 1,
				},
				"<",
			);

		return tl;
	};

	const aboutAnimation = () => {
		const words = wordRef.current?.querySelectorAll("span");
		if (!words) return;
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: aboutTrigger.current,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
			},
			defaults: { ease: "power3.inOut", duration: 2 },
		});
		// Animate each word with an upward movement
		words.forEach((word) => {
			tl.from(word, {
				y: 50,
				autoAlpha: 0,
				duration: 0.5,
				ease: "power3.out",
				stagger: {
					amount: 0.5,
					from: "start",
				},
			});
		});

		return tl;
	};

	useEffect(() => {
		document.body.classList.add("no-scroll"); // Add no-scroll class on mount
		return () => {
			document.body.classList.remove("no-scroll"); // Remove class on unmount
		};
	}, []);

	useGSAP(
		() => {
			if (preloaderText.current && preloaderBackground.current) {
				setInitialState();
				master
					.add(preloaderAnimation())
					.eventCallback("onComplete", () => {
						document.body.classList.remove("no-scroll");
					})
					.add(heroImageAnimation())
					.add(aboutAnimation()!);
			}
		},
		{ scope: preloaderText },
	);

	const about =
		"This platform provides a streamlined and accessible way to learn the Maliki school of Islamic jurisprudence.By leveraging the comprehensive video resources from Faqihnafsak.com, you can gain a deeper understanding of Fiqh Maliki concepts at your own pace.We help you track your progress and stay motivated as you embark on this enriching learning experience.";

	return (
		<>
			<div id="hero-image-start" ref={heroImageStart}></div>
			<div id="preloader">
				<p id="preloader__text">
					<span ref={preloaderText}>The Ashmawiya</span>
				</p>
				<div id="preloader__background" ref={preloaderBackground}></div>
			</div>
			<header id="header" ref={headerItems}>
				<p id="header__logo">Ashmawiya</p>
				<Link to="/login" id="button">
					Sign in
				</Link>
			</header>
			<div id="hero__wrapper">
				<section id="hero">
					<div id="hero__image" ref={heroImageWrapper}>
						<img src="./landing-bg.jpg" alt="N3 Bike" ref={heroImage} />
					</div>
					<div id="hero__content">
						<p id="hero__caption">
							<span ref={heroCaption}>More details. More fun.</span>
						</p>
						<h1 id="hero__title">
							<span>
								<span ref={heroTitle1}>Online Platform</span>
							</span>
							<span>
								<span ref={heroTitle2}>to Learn Fiqh.</span>
							</span>
						</h1>
						<button id="button" ref={heroButton}>
							Explore
						</button>
					</div>
				</section>
			</div>
			<div id="about" ref={aboutTrigger}>
				<p ref={wordRef}>
					{about.split(" ").map((word, i) => (
						<span key={i.toString()} id="word">
							{word}
						</span>
					))}
				</p>{" "}
			</div>
		</>
	);
}

export default App;
