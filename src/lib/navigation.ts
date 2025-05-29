/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
        label: "Effortless large team dispatching",
        href: "/use-cases/large-team-dispatch",
        image: "/generated/image-a-busy-office-environment-with-an-hvac-d.webp",
        description: "Let one dispatcher manage 20–25+ techs confidently. AI handles board reshuffling and notifies staff, so no tech or job slips through the cracks.",
        showInNav: true,
        showInFooter: true
      },
      {
        label: "Boost sales by matching techs",
        href: "/use-cases/sales-upsell-matching",
        image: "/generated/image-a-service-technician-dressed-in-a-unifor.webp",
        description: "Increase average sale and flip rate by matching the right technician to every call. Happier homeowners, more upsells, and fewer callbacks.",
        showInNav: true,
        showInFooter: true
      },
      {
        label: "Faster urgent job bookings",
        href: "/use-cases/urgent-booking-efficiency",
        image: "/generated/image-inside-a-modern-workspace-a-plumbing-com.webp",
        description: "Book and dispatch emergencies instantly. Real-time board updates keep the whole team aligned so no urgent call is missed or delayed.",
        showInNav: true,
        showInFooter: true
      }
    ]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
