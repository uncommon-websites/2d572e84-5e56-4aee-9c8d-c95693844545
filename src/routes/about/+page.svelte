<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
  {
    title: "Hands-on leadership",
    description: "Our CEO personally trains dispatchers in the field to guarantee fast, confident launches."
  },
  {
    title: "Built for dispatchers",
    description: "Every feature comes from real problems faced by home service teams—and gets tested right at the board."
  },
  {
    title: "Direct impact, every day",
    description: "We celebrate real business wins: higher sales, smoother days, and more techs handled per dispatcher."
  },
  {
    title: "Trust and accountability",
    description: "Everyone owns their results—our tech, our service, and our team. If it isn't delivering, we fix it fast."
  }
];
</script>

<SecondaryHero
	title="Smarter dispatching. Better results."
	subtitle="AI schedules the right tech for every job—to boost sales, efficiency, and customer experience."
	imageSrc="/mockups/airport-screen-1748536788779.png"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Probook started because we were tired of watching dispatchers drown in chaos. After spending countless hours with real teams in HVAC and plumbing shops, our founder George Eliadis saw the same pattern everywhere: overworked dispatchers manually reshuffling boards all day long while sales got missed, techs got frustrated, and no one had time to step back and fix it. There had to be a smarter, simpler, more human way to dispatch—one that didn’t rely on gut-feel, lucky guesses, or flying blind.",
		"So we built Probook: intelligent dispatching software that actually helps the people doing the job. With our AI Copilot, dispatchers get smart recommendations for the best tech on each job. Flip it into Autopilot, and it automatically reshuffles the board in real-time to maximize coverage, sales, and efficiency. Get up and running in two days—our CEO joins every launch on-site to make sure the team starts strong. Questions? Our median support response time is under three minutes, with resolutions in under 30.",
		"What makes Probook different isn’t just the tech—it’s how we built it. Hand-in-hand with some of the best dispatchers and ops teams in the country. We've helped teams like Lion Home Service boost their flip rate, helped TR Miller dispatch 40 techs on a single board, and helped Auchinachie Services finally get out of reactive decision-making. When the board works for you, not against you, everything changes."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
	stakeholderType="team"
	title="Our founder."
	subtitle="Leadership you can count on."
	stakeholders={[
		{
			name: "George Eliadis",
			position: "Founder & CEO",
			bio: "George Eliadis brings deep expertise in home services and a hands-on approach to every launch. As Probook's founder and CEO, he personally supports dispatchers through every step, ensuring each team succeeds and actually benefits from technology built for their day-to-day. George is dedicated to transforming dispatch from a stressful guessing game into a strategic advantage—always measured by real customer outcomes.",
			image: "/generated/image-a-portrait-headshot-of-a-professional-ma.webp"
		}
	]}
/>

<StakeholderGrid
	stakeholderType="investor"
	title="Backed by the best."
	subtitle="Point Nine, TSIC and others"
	stakeholders={[
		{
			name: "Point Nine Capital",
			image: "https://cdn.brandfetch.io/pointnine.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7"
		},
		{
			name: "TSIC Ventures",
			image: "https://cdn.brandfetch.io/tiny.vc/w/400/h/400/logo?c=1a2b3c4d5e"
		},
		{
			name: "Sequoia Capital",
			image: "https://cdn.brandfetch.io/sequoiacap.com/w/400/h/400/logo"
		}
	]}
/>

<!-- CTA Section -->
<CallToAction
  title="Ready to shape the future of home services?"
  subtitle="Join a team that puts dispatchers first"
  description="Interested in working at Probook, seeing how our tech works, or partnering up? Let's talk—be part of the most trusted AI dispatch solution for home service pros. Book a live demo or reach out to join the team."
  callsToAction={[
    { href: "https://calendly.com/george-probook/demo", label: "Book a demo", variant: "primary" },
    { href: "/careers", label: "See careers", variant: "secondary" }
  ]}
  imageSrc="/uploaded/andrea-blake-brothers.jpg"
/>
