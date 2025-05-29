<!--
@component Pricing

Please update features according to the company's product offering. Do not remove this comment.
-->
<script lang="ts">
	// Types
	type PricingTier = {
		name: string;
		monthlyPrice?: number | null;
		yearlyPrice?: number | null;
		description: string;
		features: string[];
		cta: {
			label: string;
			href: string;
		};
		highlight?: boolean;
	};

	type PricingFeature = {
		name: string;
		tiers: {
			[key: string]: boolean | string;
		};
	};

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import IconCheck from "~icons/lucide/check";
	import IconX from "~icons/lucide/x";
	import NumberFlow from "@number-flow/svelte";
	import LogoScroller from "./LogoScroller.svelte";

	// Props
	const {
		title = "Simple, transparent pricing",
		subtitle = "Choose the plan that works best for your needs",
		tierNames = ["Copilot", "Autopilot", "Enterprise"],
	features = [
	{
		name: "Dispatchers supported",
		tiers: {
			Copilot: "Up to 3",
			Autopilot: "Up to 8",
			Enterprise: "Unlimited"
		}
	},
	{
		name: "Technicians supported",
		tiers: {
			Copilot: "Up to 15",
			Autopilot: "Up to 40",
			Enterprise: "Unlimited"
		}
	},
	{
		name: "Real-time job recommendations",
		tiers: {
			Copilot: true,
			Autopilot: true,
			Enterprise: true
		}
	},
	{
		name: "AI board automation",
		tiers: {
			Copilot: false,
			Autopilot: true,
			Enterprise: true
		}
	},
	{
		name: "Real-time ServiceTitan integration",
		tiers: {
			Copilot: true,
			Autopilot: true,
			Enterprise: true
		}
	},
	{
		name: "Late job alerts & proactive planning",
		tiers: {
			Copilot: true,
			Autopilot: true,
			Enterprise: true
		}
	},
	{
		name: "Technician & dispatcher analytics",
		tiers: {
			Copilot: true,
			Autopilot: true,
			Enterprise: "✓ + customization"
		}
	},
	{
		name: "Setup & onboarding",
		tiers: {
			Copilot: "Remote setup",
			Autopilot: "2-day in-person launch",
			Enterprise: "White-glove onboarding"
		}
	},
	{
		name: "Support speed (median)",
		tiers: {
			Copilot: "2–3 min",
			Autopilot: "2–3 min",
			Enterprise: "1–2 min + SLA"
		}
	},
	{
		name: "Custom integrations/permissions",
		tiers: {
			Copilot: false,
			Autopilot: false,
			Enterprise: true
		}
	},
	{
		name: "Security & compliance (SOC2, etc)",
		tiers: {
			Copilot: false,
			Autopilot: false,
			Enterprise: true
		}
	}
],
			{
				name: "Projects",
				tiers: {
					Starter: "5",
					Pro: "Unlimited",
					Enterprise: "Unlimited"
				}
			},
			{
				name: "Team members",
				tiers: {
					Starter: "1",
					Pro: "10",
					Enterprise: "Unlimited"
				}
			},
			{
				name: "Storage",
				tiers: {
					Starter: "1GB",
					Pro: "10GB",
					Enterprise: "Unlimited"
				}
			},
			{
				name: "API access",
				tiers: {
					Starter: false,
					Pro: true,
					Enterprise: true
				}
			},
			{
				name: "Custom domains",
				tiers: {
					Starter: false,
					Pro: true,
					Enterprise: true
				}
			},
			{
				name: "Analytics",
				tiers: {
					Starter: "Basic",
					Pro: "Advanced",
					Enterprise: "Advanced"
				}
			},
			{
				name: "Support response time",
				tiers: {
					Starter: "24 hours",
					Pro: "4 hours",
					Enterprise: "1 hour"
				}
			},
			{
				name: "Dedicated account manager",
				tiers: {
					Starter: false,
					Pro: false,
					Enterprise: true
				}
			},
			{
				name: "SLA",
				tiers: {
					Starter: false,
					Pro: false,
					Enterprise: "99.9%"
				}
			}
		],
	tiers = [
	{
		name: "Copilot",
		monthlyPrice: 349,
		yearlyPrice: 299,
		description: "Smarter decisions made fast. Copilot keeps your dispatchers in control with clear recommendations backed by real-time data. Best for companies looking to increase revenue with a lean, modern dispatch workflow.",
		features: [
			"AI-powered job matching with tech strengths and sales history",
			"Single-click actions inside ServiceTitan",
			"Live view of dispatcher efficiency and flip rates",
			"Supports up to 3 dispatchers and 15 techs",
			"Proactive late alerts and arrival windows",
			"Real-time ServiceTitan integration",
			"Industry-best support: median 2–3 min response"
		],
		cta: {
			label: "Start with Copilot",
			href: "/signup?plan=copilot"
		}
	},
	{
		name: "Autopilot",
		monthlyPrice: 699,
		yearlyPrice: 599,
		description: "High-volume automation that gets your board right, on its own. One dispatcher can manage up to 25+ techs using Probook’s intelligent reshuffling engine. Built for teams managing complex routing and large call volume at scale.",
		features: [
			"Automatic job reshuffling as calls come in",
			"Dispatcher approves jobs with one click",
			"Up to 8 dispatchers and 40+ techs",
			"Live technician utilization tracking",
			"Advanced routing logic with real-time updates",
			"In-person 2-day setup with our CEO",
			"Median support response: 2–3 min"
		],
		cta: {
			label: "Start with Autopilot",
			href: "/signup?plan=autopilot"
		},
		highlight: true
	},
	{
		name: "Enterprise",
		monthlyPrice: null,
		yearlyPrice: null,
		description: "For large or unique operations with custom workflows, integrations, or security requirements. Our team works with yours to build exactly what you need. Best for nationwide, multi-location, or highly custom operators.",
		features: [
			"Unlimited dispatchers and techs",
			"Private onboarding and onsite training",
			"Role-based permissions, regional boards, and enterprise controls",
			"Custom integrations, analytics, and workflows",
			"Optional white-labeling, SOC2-grade security",
			"Dedicated support line with SLA guarantees",
			"Direct founder-access for escalations"
		],
		cta: {
			label: "Contact sales",
			href: "/contact"
		}
	}
],
			{
				name: "Starter",
				monthlyPrice: 9.99,
				yearlyPrice: 7.99, // 20% savings
				description: "Perfect for individuals and small projects",
				features: [
					"Up to 5 projects",
					"Basic analytics",
					"24-hour support response time",
					"1GB storage"
				],
				cta: {
					label: "Get started",
					href: "/signup?plan=starter"
				}
			},
			{
				name: "Pro",
				monthlyPrice: 29.99,
				yearlyPrice: 23.99, // 20% savings
				description: "For growing teams and businesses",
				features: [
					"Unlimited projects",
					"Advanced analytics",
					"4-hour support response time",
					"10GB storage",
					"Custom domains",
					"Team collaboration tools"
				],
				cta: {
					label: "Get started",
					href: "/signup?plan=pro"
				},
				highlight: true
			},
			{
				name: "Enterprise",
				monthlyPrice: null,
				yearlyPrice: null,
				description: "For large organizations with specific needs",
				features: [
					"Everything in Pro",
					"Dedicated account manager",
					"1-hour support response time",
					"Unlimited storage",
					"Advanced security features",
					"Custom integrations",
					"99.9% uptime SLA"
				],
				cta: {
					label: "Contact sales",
					href: "/contact"
				}
			}
		]
	}: {
		title?: string;
		subtitle?: string;
		tiers?: PricingTier[];
		features?: PricingFeature[];
		tierNames?: string[];
		caption?: string;
	} = $props();

	// State
	let annual = $state(true);
</script>

<section class="section-py section-px container mx-auto">
	<div class="flex flex-col items-baseline justify-between lg:flex-row">
		<SectionHeader {title} {subtitle} />

		<div class="mb-8 flex justify-center">
			<div class="inline-flex items-center rounded-full bg-gray-100 p-0.5 dark:bg-gray-800">
				<Button
					variant="ghost"
					size="sm"
					class=" {!annual ? 'bg-white shadow-sm dark:bg-gray-700' : ''}"
					onclick={() => (annual = false)}
				>
					Monthly
				</Button>
				<Button
					variant="ghost"
					size="sm"
					rounded
					class={annual ? "bg-white shadow-sm dark:bg-gray-700" : ""}
					onclick={() => (annual = true)}
				>
					Annual <span class="text-primary-600 dark:text-primary-400 text-footnote">Save 20%</span>
				</Button>
			</div>
		</div>
	</div>

	<div class="bb grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each tiers as tier}
			<div
				class="flex flex-col rounded-xl bg-white p-6 ring ring-gray-200 transition-all duration-300 dark:bg-gray-800 dark:ring-gray-700"
				class:ring-2={tier.highlight}
				class:ring-primary={tier.highlight}
				class:dark:ring-primary-700={tier.highlight}
				class:translate-y-[-4px]={tier.highlight}
			>
				<div class="mb-8">
					<h3 class="text-title3 mb-4 dark:text-white">{tier.name}</h3>
					<div class="mt-2 flex items-baseline">
						{#if tier.monthlyPrice === null && tier.yearlyPrice === null}
							<span class="text-title2 dark:text-white">Custom</span>
						{:else}
							<NumberFlow
								class="text-title2 [&::part\(suffix\)]:text-caption dark:text-white"
								format={{
									style: "currency",
									currency: "USD",
									trailingZeroDisplay: "stripIfInteger"
								}}
								value={annual ? tier.yearlyPrice : tier.monthlyPrice}
								suffix="/month"
							/>
						{/if}
					</div>
					<p class="text-callout text-emphasis-medium mt-3 dark:text-gray-300">
						{tier.description}
					</p>
				</div>

				<div class="mb-8 flex-grow">
					<ul class="space-y-3">
						{#each tier.features as feature}
							<li class="flex items-center gap-2">
								<IconCheck class="text-primary-600 dark:text-primary-400 size-5 flex-shrink-0" />
								<span class="text-body text-emphasis-medium dark:text-gray-300">{feature}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="mt-auto">
					<Button
						href={tier.cta.href}
						variant={tier.highlight ? "primary" : "secondary"}
						class="w-full"
					>
						{tier.cta.label}
					</Button>
				</div>
			</div>
		{/each}
	</div>
	<div class="mt-32">
		<!-- Responsive table wrapper with horizontal scroll on mobile -->
		<!-- <div class=" hidden overflow-x-auto px-4 sm:mx-0 sm:block sm:px-0">
			<table
				class="w-full min-w-full border-separate border-spacing-0 border-gray-200 text-left dark:border-gray-700"
			>
				<thead>
					<tr>
						<th
							class="sticky left-0 min-w-[120px] border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
						>
							<span class="sr-only">Feature</span>
						</th>
						{#each tierNames as tierName}
							<th
								class="text-headline min-w-[100px] border-b border-gray-200 p-4 text-start font-normal dark:border-gray-700"
							>
								{tierName}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each features as feature}
						<tr>
							<td class="text-caption">
								{feature.name}
							</td>
							{#each tierNames as tierName}
								<td
									class="min-w-[100px] border-b border-gray-200 p-4 text-start text-gray-600 dark:border-gray-700 dark:text-gray-300"
								>
									{#if typeof feature.tiers[tierName] === "boolean"}
										{#if feature.tiers[tierName]}
											<IconCheck
												class="text-primary-600 dark:text-primary-400 mx-auto size-5 sm:mx-0"
											/>
										{:else}
											<IconX class="mx-auto size-5 text-gray-400 sm:mx-0" />
										{/if}
									{:else}
										{feature.tiers[tierName]}
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div> -->

		<!-- Mobile feature comparison (alternative view for very small screens) -->
		<div>
			<!-- Universal pricing comparison for mobile -->
			<div class="overflow-x-auto">
				<table class="w-full border-collapse">
					<!-- Sticky header with tier names -->
					<thead class="border-border sticky top-0 z-10 border-b">
						<tr>
							<th class="min-w-[120px] py-3 text-left">
								<span class="sr-only">Feature</span>
							</th>
							{#each tierNames as tierName, i}
								<th class="text-caption min-w-[100px] py-3 text-left dark:text-white">
									{tierName}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody class="divide-border divide-y">
						{#each features as feature}
							<tr>
								<td class="text-body py-3 pr-8 font-medium lg:pr-0 dark:text-white">
									{feature.name}
								</td>
								{#each tierNames as tierName, i}
									<td class="py-3">
										{#if typeof feature.tiers[tierName] === "boolean"}
											{#if feature.tiers[tierName]}
												<IconCheck class="text-primary-900 dark:text-primary-400 size-5" />
											{:else}
												<IconX class="size-5 text-gray-400" />
											{/if}
										{:else}
											<span class="text-callout font-medium text-gray-700 dark:text-gray-300">
												{feature.tiers[tierName]}
											</span>
										{/if}
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<LogoScroller />
</section>

<style lang="postcss">
	@reference '../../../app.css';

	:global(number-flow-svelte)::part(suffix) {
		@apply text-sm text-gray-400 dark:text-gray-500;
	}
</style>
