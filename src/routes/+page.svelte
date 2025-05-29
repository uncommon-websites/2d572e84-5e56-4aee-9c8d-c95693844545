<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
</script>

<CustomerCardHero
  centered={false}
  title="Send the right tech. Every time."
  subtitle="Probook helps home service companies book smarter, dispatch faster, and drive more revenue—automatically."
  customers={[
    {
      name: "Krystin Hines",
      position: "Lead Dispatcher, Lion Home Service",
      imageSrc: "/generated/image-a-cheerful-female-dispatcher-in-a-cozy-h.webp"
    },
    {
      name: "Mike Sullivan",
      position: "Lead Dispatcher, Auchinachie Services",
      imageSrc: "/generated/image-a-focused-male-hvac-dispatcher-at-his-wo.webp"
    },
    {
      name: "Brandy Heesh",
      position: "Operations Manager, Auchinachie Services",
      imageSrc: "/generated/image-a-poised-female-manager-of-a-plumbing-co.webp"
    },
    {
      name: "Jim Sloan",
      position: "General Manager, TR Miller Heating, Cooling & Plumbing",
      imageSrc: "/generated/image-a-confident-male-electrical-technician-s.webp"
    },
    {
      name: "Andrea Williams",
      position: "Lead Dispatcher, Blake Brothers",
      imageSrc: "/generated/image-a-dedicated-female-lead-dispatcher-weari.webp"
    }
  ]}
/>

<LogoScroller
	label="Trusted by industry leaders"
	logoUrls={[
		'https://logo.clearbit.com/serviceexperts.com',
		'https://logo.clearbit.com/ars.com',
		'https://logo.clearbit.com/americanstandardair.com',
		'https://logo.clearbit.com/onehourheatandair.com',
		'https://logo.clearbit.com/benjaminfranklinplumbing.com'
	]}
/>

<Summary
	title="What we do"
	text="Probook uses AI to assign the best technician to every job in real time. Our software helps home service companies boost sales, maximize dispatcher productivity, and deliver a better customer experience—automatically."
/>

<Testimonials
	testimonials={[
		{
			name: "Monica Ramos",
			position: "Dispatcher, Onsite Air & Heat",
			quote:
				"With Probook, I save at least three hours a day not having to reshuffle jobs manually. I actually have time to help customers instead of fighting the board."
			,
			image: "/generated/image-a-cheerful-female-dispatcher-wearing-a-h.webp"
		},
		{
			name: "Darius Kane",
			position: "Operations Manager, CleanFlow Plumbing",
			quote:
				"We used to send the wrong tech all the time, especially for tricky jobs. Probook’s recommendations cut our re-dispatches in half—and our callbacks dropped too."
			,
			image: "/generated/image-a-male-operations-manager-in-a-plumbing-.webp"
		},
		{
			name: "Kayla Goodwin",
			position: "Lead Dispatcher, BlueWire Electric",
			quote:
				"Since switching to Autopilot, our ticket average is up nearly $400 a week per tech, and I can finally take my lunch break without worrying."
			,
			image: "/generated/image-a-content-and-relaxed-female-dispatcher-.webp"
		}
	]}
/>

<Features
	title="AI-powered dispatching for home services"
	subtitle="Smarter assignments. Higher sales. Happier customers."
	features={[
	  {
	    title: "AI dispatch, not guesswork",
	    description: "Assign the best technician to every call, automatically—all based on real business data and outcomes."
	  },
	  {
	    title: "Real-time ServiceTitan integration",
	    description: "Seamless sync with ServiceTitan means your jobs and board are always up to date, no double entry required."
	  },
	  {
	    title: "Two automation levels",
	    description: "Pick Copilot for quick, data-backed suggestions or Autopilot for full board optimization—your team stays in control either way."
	  },
	  {
	    title: "Super fast onboarding",
	    description: "Launch in just 2 days with in-person training and direct support from our CEO—dispatchers learn with real jobs."
	  },
	  {
	    title: "Support that actually supports",
	    description: "Median response in 2–3 minutes and 97–100% satisfaction, so your team never feels stuck."
	  },
	  {
	    title: "Proven revenue impact",
	    description: "Customers report higher sales, more flips, and greater dispatcher efficiency—no extra payroll needed."
	  }
	]}
/>

<UseCases
  title="Use Cases"
  subtitle="Real-world applications for your business needs"
  useCases={[
    {
      title: "Effortless large team dispatching",
      description: "Let one dispatcher manage 20–25+ techs confidently. AI handles the board reshuffle and notifies staff of every move, so no tech or job slips through the cracks.",
      image: "/generated/image-a-busy-office-environment-with-an-hvac-d.webp",
      link: {
        href: "/use-cases/large-team-dispatch",
        label: "Learn more"
      }
    },
    {
      title: "Boost sales by matching techs",
      description: "Probook surfaces the best technician for every call, increasing average sale and flip rate with skill-based job matching, leading to happier homeowners and more installs.",
      image: "/generated/image-a-service-technician-dressed-in-a-unifor.webp",
      link: {
        href: "/use-cases/sales-upsell-matching",
        label: "Learn more"
      }
    },
    {
      title: "Faster urgent job bookings",
      description: "Book emergencies in seconds and keep the whole team aligned with real-time board updates and immediate job swaps, so urgent calls never stall your operation.",
      image: "/generated/image-inside-a-modern-workspace-a-plumbing-com.webp",
      link: {
        href: "/use-cases/urgent-booking-efficiency",
        label: "Learn more"
      }
    }
  ]}
/>

<AboutTeaser />
<CallToAction
  title="Make dispatch your competitive advantage"
  subtitle="Let Probook run your board, so you can focus on your team and growth."
  description="Switch to AI-powered dispatching that boosts sales, saves time, and delivers results—in days, not months. Trusted by leading Nexstar and ServiceTitan partners."
  imageSrc="/generated/image-a-cheerful-home-services-dispatcher-in-a.webp"
  callsToAction={[
    { href: '/demo', label: 'Book a demo', variant: 'primary' },
    { href: '/contact', label: 'Talk to sales', variant: 'secondary' },
  ]}
/>
