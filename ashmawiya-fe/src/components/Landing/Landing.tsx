import "./Landing.css";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { ChartLine, NotebookPen, Zap } from "lucide-react";

function Landing() {
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
				end: "bottom 60%",
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

	const animateFeature = () => {
		const tl = gsap.timeline();
		const featureItems = document.querySelectorAll(".feature-item");

		featureItems.forEach((item) => {
			tl.from(item, {
				y: 50,
				autoAlpha: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: item,
					start: "top bottom",
					end: "bottom top",
					toggleActions: "play none none reverse",
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
					.add(aboutAnimation()!)
					.add(animateFeature());
			}
		},
		{ scope: preloaderText },
	);

	const about =
		"This platform provides a streamlined and accessible way to learn the Maliki school of Islamic jurisprudence. By leveraging the comprehensive video resources from Faqihnafsak.com, you can gain a deeper understanding of Fiqh Maliki concepts at your own pace. We help you track your progress and stay motivated as you embark on this enriching learning experience.";

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
							<span ref={heroCaption}>Just Focus Learning</span>
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
			<div id="features">
				<h2>Features</h2>
				<div className="feature-wrapper">
					<div className="feature-item" id="tracker">
						<ChartLine />
						<h3>Tracker</h3>
						<p>
							Track your progress as you learn and stay motivated with detailed
							analytics.
						</p>
					</div>
					<div className="feature-item" id="notes">
						<NotebookPen />
						<h3>Notes</h3>
						<p>
							Take notes directly within the platform to reinforce your
							learning.
						</p>
					</div>
					<div className="feature-item" id="speed">
						<Zap />
						<h3>Fast</h3>
						<p>
							Experience seamless and fast interactions with our optimized
							platform.
						</p>
					</div>
				</div>
			</div>{" "}
			<div id="credits">
				<h2>Special Thanks</h2>
				<img
					src="./faqih-nafsak.png"
					alt="Faqihnafsak Logo"
					id="credits-logo"
				/>
				<p>
					We would like to extend our heartfelt thanks to
					<a href="https://faqihnafsak.com" target="_blank">
						{" "}
						Faqihnafsak.com{" "}
					</a>
					for their incredible efforts in creating and providing the courses.
					All course content on our platform is sourced and belongs to their
					comprehensive video library, and we are grateful for their commitment
					to spreading knowledge about Fiqh Maliki.
				</p>
			</div>
			<Footer />
		</>
	);
}

export default Landing;
