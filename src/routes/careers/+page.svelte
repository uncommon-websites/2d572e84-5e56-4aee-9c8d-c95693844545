<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
		{
			title: "Flexible Work",
			description: "Remote-first with flexible hours that respect work-life balance.",
			icon: IconBriefcase
		},
		{
			title: "Growth Opportunities",
			description: "Continuous learning with mentorship and education stipends.",
			icon: IconUsers
		},
		{
			title: "Comprehensive Benefits",
			description: "Health coverage, retirement plans, and generous paid time off.",
			icon: IconHeart
		}
	];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
  {
    name: "Luis Mendoza",
    position: "Support Engineer",
    company: "Customer Success Team",
    quote:
      "From my first day at Probook, I felt genuinely welcomed. There’s a real sense of teamwork here—everyone roots for each other, and you always know help is just a message away. I feel proud to help our customers and to be part of a company that values respect and kindness every day.",
    image: "/generated/image-a-professional-headshot-of-a-hispanic-ma.webp"
  },
  {
    name: "Jasmine Carter",
    position: "Product Manager",
    company: "Product Team",
    quote:
      "The growth I’ve experienced at Probook is unmatched. Leadership is truly invested in your success, and there’s a strong culture of mentorship. Every new challenge here means another chance to learn. I’ve had opportunities to lead projects and shape the direction of our product in ways I never imagined possible.",
    image: "/generated/image-a-professional-headshot-of-a-black-femal.webp"
  },
  {
    name: "Emily Rhodes",
    position: "Operations Director",
    company: "Operations",
    quote:
      "What sets Probook apart is how much we actually enjoy working together. I’ve never been part of a team that is this open and collaborative—smart people, no egos. The environment is fast-paced, and we’re always encouraged to share ideas and question how things can be better. It makes every day rewarding.",
    image: "/generated/image-a-professional-headshot-of-a-white-femal.webp"
  }
];

	const processSteps = [
		{
			step: 1,
			title: "Apply",
			description:
				"Submit your application through our careers portal with your resume and portfolio."
		},
		{
			step: 2,
			title: "Interview",
			description: "Meet with our team to discuss your experience, skills, and career aspirations."
		},
		{
			step: 3,
			title: "Welcome aboard",
			description: "Join our team and start your journey building the future with us."
		}
	];

	const values = [
		{
			icon: IconHeart,
			title: "Passion",
			description: "We're driven by a shared passion for innovation and excellence."
		},
		{
			icon: IconUsers,
			title: "Collaboration",
			description: "We believe in teamwork and collaboration to achieve great things."
		},
		{
			icon: IconGlobe,
			title: "Global Impact",
			description: "We're committed to making a positive impact on the world."
		}
	];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Grow with a team that cares"
	subtitle="Join a supportive, fast-moving crew building AI for real-world impact in home services—together, we solve meaningful problems and grow every day."
	imageSrc="/generated/image-a-modern-open-office-space-with-large-wi.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Grow your career—and help shape the future of home services" />

	<div class="prose max-w-none mb-12 text-body">
		<ul>
			<li><strong>Shape the future of home service ops:</strong> We're building real tools to drive revenue, not dashboards that collect dust.</li>
			<li><strong>Work directly with industry leaders:</strong> We solve real frontline problems—for companies that run 20, 40, even 100+ service trucks.</li>
			<li><strong>Early team, high impact:</strong> Every role here directly moves the business forward. No layers of approval. Big results every week.</li>
			<li><strong>Customer-obsession built in:</strong> Support stats don’t lie—our median reply time is under 3 minutes and users feel it.</li>
		</ul>
	</div>

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<ol class="prose max-w-none mb-10">
			<li>Submit your resume or share a short write-up. No cover letter required—we care about your experience and motivation.</li>
			<li>Intro call (30 minutes). Meet with our team to learn more about each other and discuss your experience and goals.</li>
			<li>Role-specific task or live session. You'll either complete a short assignment relevant to the position or join a collaborative session with us.</li>
			<li>Final interview with leadership and future teammates.</li>
			<li>Decision within one week. Every applicant hears back. You'll get a response within 72 hours of applying, no matter the outcome.</li>
		</ol>

		<p class="text-body text-emphasis-low">Our process is straightforward, transparent, and respectful of your time. If you have questions, we're always available to help.</p>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
