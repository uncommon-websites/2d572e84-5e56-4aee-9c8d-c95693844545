<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "Brian Sloan",
      position: "President",
      company: "TR Miller Heating, Cooling & Plumbing",
      quote: "With Probook, we doubled our average sale and increased our flip rate by over 25%. The value we’ve seen in the first six months far surpasses the cost.",
      image: "/generated/image-a-professional-headshot-of-a-white-male-.webp"
    },
    {
      name: "Andrea Williams",
      position: "Lead Dispatcher",
      company: "Blake Brothers",
      quote: "Everyone on my dispatch team sees their territory, goal, and metrics in one clear view. Training new team members is faster—and trust in dispatch decisions is way up.",
      image: "/generated/image-a-professional-headshot-of-a-black-woman.webp"
    },
    {
      name: "Chris Holleran",
      position: "GM & VP",
      company: "Auchinachie Services",
      quote: "We manage 40+ techs with just two dispatchers. Probook Autopilot makes it not only possible—but easier. Their support team is second to none.",
      image: "/generated/image-a-professional-headshot-of-a-hispanic-ma.webp"
    }
  ]}
/>

<CallToAction
  title="Ready to increase revenue and tech efficiency with smarter dispatching?"
  subtitle="Get set up in days with hands-on support from our team—including a 2-day in-person launch with our CEO."
  description="Start driving real results on your dispatch board faster than you think. Experience the difference with Probook’s proven onboarding and customer service."
  imageSrc="/generated/image-a-cheerful-home-services-dispatcher-sitt.webp"
  callsToAction={[
    { href: '/book-demo', label: 'Book a demo', variant: 'primary' },
    { href: '/contact', label: 'Talk to sales', variant: 'secondary' }
  ]}
/>
