export const site = {
	name: "Mariana Ordonez",
	shortName: "M. Ordonez",
	role: "Ecommerce Graphic Designer",
	url: "https://mordonez.com",
	email: "marianaordonez04@gmail.com",
	location: "Colombia, UTC-5",
	resumeUrl: "/downloads/Mariana-Ordonez-CV.pdf",
};

// Pre-filled "Get in touch" email link (direct-email fallback).
export const contactHref = `mailto:${site.email}?subject=${encodeURIComponent(
	"Design project or role inquiry",
)}`;

// Web3Forms access key for the /contact form. Create one free at
// https://web3forms.com (enter your email, copy the key here). It is public
// by design — it only routes submissions to your inbox.
export const web3formsAccessKey = "570e5b57-c9c9-48c3-bf96-6561e21b95bc";

export const navItems = [
	{ label: "Work", href: "/work/" },
	{ label: "Journal", href: "/journal/" },
	{ label: "Tools", href: "/tools/" },
	{ label: "Play", href: "/play/" },
	{ label: "About", href: "/about/" },
	{ label: "Contact", href: "/contact/" },
];

export const socialLinks = [
	{ label: "LinkedIn", url: "https://www.linkedin.com/in/mariana-ordo%C3%B1ez-alarc%C3%B3n-ux-designer/" },
	{ label: "Behance", url: "https://www.behance.net/marianaordoez1" },
	{ label: "Email", url: `mailto:${site.email}` },
];

export const proofBrands = [
	"Estore Labs",
	"Casabianca Cycling",
	"Planet of the Vapes",
	"trades.org",
	"Ferrero",
	"Kinder",
	"Nutella",
	"Tic Tac",
	"Butterfinger",
	"Crunch",
	"Keebler",
	"Royal Dansk",
];

export const capabilities = [
	{
		title: "eCommerce & marketplace creative",
		description:
			"Digital-shelf design for Amazon, Walmart and Target: hero images, A+/enhanced content, Brand Stores and product pages built to win the thumbnail and convert at marketplace scale.",
		tags: ["Digital shelf", "A+ content", "PDP design"],
	},
	{
		title: "Shopify & CRO",
		description:
			"Shopify stores end to end - theme customisation, sections, PDPs, collections and a smoother path to checkout - plus landing pages and A/B-tested creative built to lift conversion, AOV and retention.",
		tags: ["Shopify", "PDP & CRO", "A/B testing"],
	},
	{
		title: "Brand, social & design systems",
		description:
			"Brand systems, social and lifecycle creative, and reusable Figma libraries with clean developer handoff - AI-assisted to move fast without losing craft.",
		tags: ["Brand & social", "Figma systems", "Dev handoff"],
	},
];

export const caseStudies = [
	{
		slug: "estore-labs-marketplace-cro",
		client: "Estore Labs",
		title: "The Ferrero digital shelf on Amazon, Walmart and Kroger",
		outcome: "Designing the Ferrero digital shelf - the images that sell across US marketplaces.",
		summary:
			"Main images, carousels, A+ content and seasonal campaigns for Ferrero USA brands - Ferrero Rocher, Nutella, Kinder, Tic Tac, Butterfinger and Mother's - built to convert on Amazon, Walmart and Kroger.",
		problem:
			"On a marketplace the images are the product page - there's no salesperson, only the carousel. Ferrero's brands needed a listing system that wins the thumbnail, tells the whole story on scroll, and stays on-brand and spec-compliant across every retailer and season, at portfolio scale.",
		process: [
			"Design the full listing as a sequence: a main image that wins the thumbnail, then carousel images that answer questions in order - hero, benefits, claims, size and nutrition.",
			"Build A+ / Enhanced Content modules - brand story, lifestyle, comparison - as a reusable system any brand can be dropped into.",
			"Translate strict global Ferrero brand guidelines into platform-native layouts that meet Amazon, Walmart and Kroger image specs.",
			"Ship seasonal and campaign creative - Easter, Halloween and a cross-brand World Cup push - across the whole portfolio, on deadline.",
		],
		solution:
			"A repeatable digital-shelf system: every Ferrero brand gets a complete, on-brand, spec-compliant listing - from main image to A+ content - that a shopper reads at a glance and that scales across retailers and seasons.",
		impact: "Scaled output across a multi-brand portfolio, on deadline and without losing brand consistency.",
		role: "Digital Shelf Designer",
		timeline: "Ongoing retail optimization",
		period: "Sep 2024 - Present",
		tools: "Figma, Adobe CC, Amazon A+, Salsify",
		tags: ["Digital shelf", "A+ content", "Marketplace"],
		cover: "/case-studies/estore-labs/cover-shelf.webp",
		coverPosition: "center",
		showcase: {
			dir: "estore-labs/shelf",
			sections: [
				{
					heading: "The hero image - winning the thumbnail",
					note: "In search, the whole listing is a small thumbnail in a grid of competitors, so the main image is the single most important asset I design. A winner is instantly recognisable, shows the right size and count, and stays legible at that size - on the white background each retailer requires.",
					layout: "rail",
					items: [
						{ slug: "hero-nutella", title: "Show the size", caption: "The '13 oz' badge and the jar filling the frame mean the pack size reads before anyone zooms in." },
						{ slug: "hero-tictac", title: "Lead with the benefit", caption: "'Fruit Adventure', '100 mints', '65% more' - the reasons to buy, legible at thumbnail scale." },
						{ slug: "hero-kinder", title: "Prove the product", caption: "A cross-section beside the pack shows the creamy filling - the promise, made visible on white." },
						{ slug: "hero-butterfinger", title: "Own the season", caption: "A NestEggs pack that wins the Easter thumbnail without losing the brand." },
					],
				},
				{
					heading: "The image carousel - the shopper's storefront",
					note: "On the live Ferrero Rocher listing, the main image is followed by around seven secondary images and videos before 'see more'. This is the sequence I design - each image with one job.",
					layout: "rail",
					items: [
						{ slug: "fr-main", title: "The flavour promise", caption: "'Premium hazelnut milk chocolate' - an ingredient infographic (milk chocolate, roasted hazelnut, creamy filling, crispy wafer) that sells the product before a shopper reads a word." },
						{ slug: "fr-nutrition", title: "The facts", caption: "Nutrition and ingredients on a branded background - scannable inside the carousel, so the details never send anyone off the page." },
						{ slug: "fr-wrapped", title: "The product, up close", caption: "'Individually wrapped premium chocolates' - the detail shot that answers 'what exactly am I getting?'" },
						{ slug: "fr-gift", title: "The occasion", caption: "Positioned for gifting, so the listing sells a moment, not just a box." },
						{ slug: "fr-heritage", title: "The brand story", caption: "'A heritage of quality & craftsmanship' - the production story that builds trust and justifies the premium." },
					],
				},
				{
					heading: "A+ content - 'From the brand'",
					note: "Below the carousel, the 'From the manufacturer / From the brand' modules run full-width. I build them as a reusable system - these are live on the Ferrero Rocher listing right now.",
					layout: "stack",
					items: [
						{ slug: "fr-ec1", title: "Raise a Rocher", caption: "The brand-story banner that opens the A+ section." },
						{ slug: "fr-ec2", title: "Indulgence in every bite", caption: "A craft close-up module - the shot that builds desire and justifies the price." },
						{ slug: "fr-aplus", title: "Celebrate special moments", caption: "A lifestyle module: the product in a real moment of sharing." },
						{ slug: "fr-ec3", title: "The perfect gift for every occasion", caption: "The gifting module that carries the listing into every season." },
					],
				},
				{
					heading: "One system, the whole portfolio",
					note: "The same module system, tuned to each brand's world.",
					layout: "grid",
					items: [
						{ slug: "pf-nutella", caption: "Nutella" },
						{ slug: "pf-kinder", caption: "Kinder Chocolate" },
						{ slug: "pf-tictac", caption: "Tic Tac" },
						{ slug: "pf-butterfinger", caption: "Butterfinger" },
						{ slug: "pf-mothers", caption: "Mother's" },
					],
				},
				{
					heading: "Built to each retailer's spec",
					note: "Amazon, Walmart and Kroger each have their own image rules - same brand, different build.",
					layout: "grid",
					items: [
						{ slug: "rt-nutella-walmart", caption: "Nutella - Walmart" },
						{ slug: "rt-tictac-wmkroger", caption: "Tic Tac - Walmart & Kroger" },
					],
				},
				{
					heading: "Seasonal, at portfolio scale",
					note: "Easter, Halloween and a cross-brand World Cup push - designed once, shipped across the shelf.",
					layout: "grid",
					items: [
						{ slug: "sn-worldcup", caption: "World Cup 2026 - cross-brand" },
						{ slug: "sn-butterfinger-easter", caption: "Butterfinger - Easter" },
						{ slug: "sn-mothers-halloween", caption: "Mother's - Halloween" },
					],
				},
			],
			callouts: [
				{ title: "The main image wins the click", body: "In search, the whole listing is one thumbnail. I design the main image to read - product, flavour, count - at that size, because if it doesn't win the click, nothing else gets seen." },
				{ title: "The carousel answers questions in order", body: "On the page there's no salesperson. The secondary images take a shopper from 'what is it?' to ingredients, size, gifting and trust - the whole story before they scroll away." },
				{ title: "A+ content, built as a system", body: "Below the fold the 'From the brand' modules build the brand and justify the premium. I design them as a reusable system, so every Ferrero brand ships a complete, on-spec listing at marketplace speed." },
			],
		},
		liveLinks: [
			{
				title: "The image carousel that sells",
				body: "On a marketplace the image carousel is the storefront. I design the sequence - hero, benefits, size, lifestyle and trust - so shoppers get the whole story before they scroll.",
				linkLabel: "Butterfinger on Walmart",
				url: "https://www.walmart.com/ip/Butterfinger-Chocolatey-Peanut-Buttery-Full-Size-Candy-Bars-1-9-oz-each/966108792?classType=REGULAR&athbdg=L1200&from=/search",
			},
			{
				title: "A+ content, engineered to convert",
				body: "Beyond the basics, I plan Amazon A+ content and brand-story modules as a system - each block with a job: trigger craving, resolve doubt, build trust and lift perceived quality.",
				linkLabel: "Ferrero Rocher on Amazon",
				url: "https://www.amazon.com/Ferrero-Rocher-Hazelnut-Chocolate-Count/dp/B002Y1Z80U",
			},
			{
				title: "Brand stores that scale a portfolio",
				body: "Multi-page Amazon Brand Stores that give a whole catalog a consistent, shoppable home - navigation, category pages and seasonal features across the brand family.",
				linkLabel: "Nutella store on Amazon",
				url: "https://www.amazon.com/stores/Nutella/page/FF9AA69A-C4A0-4ED8-80A4-2F766D799C34",
			},
			{
				title: "Variants, bundles and the path to cart",
				body: "Conversion is more than content. I design the quantity, bundle and size selectors and the purchase flow so shoppers pick the right pack fast, without second-guessing the size or the bundle.",
				linkLabel: "Nutella on Amazon",
				url: "https://www.amazon.com/Nutella-Peanut-Spread-Afternoon-Snacking/dp/B0GZLHY72G",
			},
		],
		featured: true,
	},
	{
		slug: "planet-of-the-vapes-ecommerce",
		client: "Planet of the Vapes",
		title: "Shopify PDPs, campaigns and lifecycle design for Planet of the Vapes",
		outcome: "Conversion-focused Shopify product pages, landing pages and lifecycle design for a large DTC brand.",
		summary:
			"Shopify product and landing pages, promotional campaigns and email/SMS assets for a large DTC vaporizer catalogue - built to convert and quick to ship across frequent launches.",
		problem:
			"A high-volume DTC brand on Shopify, shipping frequent launches and seasonal campaigns, needed conversion-focused store pages and lifecycle assets that stayed on-brand without slowing production.",
		process: [
			"Designed Shopify product and landing pages, promotional campaigns and marketing assets supporting new-product launches and seasonal pushes.",
			"Improved on-site navigation, product discovery and the PDP-to-checkout flow inside Shopify, applying UX and conversion principles to lift engagement and sales.",
			"Worked with reusable Shopify sections and a modular design system so each launch was a fast, on-brand build - not a redesign.",
			"Integrated AI-assisted production and kept brand consistency across the Shopify store, email/SMS and social.",
		],
		solution:
			"A modular design system anchored in reusable Shopify sections and lifecycle templates, so launches and seasonal campaigns stayed consistent and quick to produce, with clearer product discovery and a smoother path to checkout.",
		impact: "Faster, on-brand launch and lifecycle production with clearer navigation and product discovery.",
		marketing: {
			dir: "potv",
			intro:
				"At Planet of the Vapes I designed the marketing and content layer around the Shopify store - social, email, campaigns and product-education graphics for a large vaporizer catalogue. The work had to move product while teaching a considered audience, staying consistent from Instagram to inbox.",
			images: [
				{ slug: "flavor-guide", alt: "Best vapes for flavor - flat-lay social post", w: 640, h: 640 },
				{ slug: "volcano-hybrid", alt: "Volcano Hybrid vaporizer promotional post", w: 640, h: 853 },
				{ slug: "potv-one-features", alt: "POTV ONE vaporizer annotated feature graphic", w: 640, h: 640 },
				{ slug: "mighty-plus", alt: "Mighty+ vaporizer product styling flat-lay", w: 640, h: 640 },
				{ slug: "instagram-feed", alt: "Planet of the Vapes Instagram feed system", w: 640, h: 2120 },
				{ slug: "venty-email", alt: "Venty in stock - email banner", w: 640, h: 1120 },
				{ slug: "glass-guide", alt: "Planet of the Vapes glass guide social post", w: 640, h: 640 },
				{ slug: "veazy-review", alt: "Storz & Bickel Veazy review thumbnail", w: 640, h: 360 },
				{ slug: "lobo-launch", alt: "POTV Lobo pre-order launch post", w: 640, h: 1065 },
				{ slug: "year-deals", alt: "Best deals of the year - product grid story", w: 640, h: 796 },
				{ slug: "arizer-giveaway", alt: "Arizer Air Max giveaway story", w: 640, h: 640 },
				{ slug: "potv-one-render", alt: "POTV ONE vaporizer product render", w: 640, h: 640 },
				{ slug: "mushroom-story", alt: "Red & white mushroom playful product story", w: 640, h: 640 },
				{ slug: "glass-feature", alt: "Glass mouthpiece annotated feature", w: 640, h: 640 },
				{ slug: "smoke-free", alt: "Smoke-free resolution product post", w: 640, h: 213 },
				{ slug: "venty-review", alt: "Venty vaporizer review editorial post", w: 640, h: 640 },
				{ slug: "420-sale", alt: "420 sale campaign post", w: 640, h: 1138 },
			],
			callouts: [
				{
					title: "Product education that sells",
					body: "Annotated feature graphics for the POTV ONE and glass mouthpiece translate spec sheets into A+-style visuals that answer a considered buyer's questions at a glance.",
				},
				{
					title: "One brand from feed to inbox",
					body: "A shared system spanned Instagram, email banners and campaign art - the feed mockup and Venty email carry the same voice across channels.",
				},
				{
					title: "Styling that makes hardware desirable",
					body: "Flat-lay and botanical styling - the flavour guide, Mighty+ and Volcano Hybrid - gave technical devices a premium, lifestyle feel.",
				},
			],
		},
		role: "Ecommerce & Campaign Designer",
		timeline: "Ongoing DTC design",
		period: "Jul 2023 - Present",
		tools: "Figma, Shopify, email/SMS modules, AI-assisted production",
		tags: ["eCommerce", "UI/UX", "Lifecycle", "Brand"],
		cover: "/case-studies/planet-of-the-vapes/cover.webp",
		coverPosition: "85% center",
		gallery: [
			{ src: "/case-studies/planet-of-the-vapes/pdp.webp", title: "The page that has to convert", caption: "A Shopify product detail page built around the decision: variant and add-on selectors, trust states and a frictionless Add to Cart, tuned for conversion and AOV." },
			{ src: "/case-studies/planet-of-the-vapes/content.webp", title: "Content that earns the scroll", caption: "Benefit-led hierarchy that makes the value obvious and scannable, not a wall of specs." },
			{ src: "/case-studies/planet-of-the-vapes/reviews.webp", title: "Trust where hesitation happens", caption: "Reviews and Q&A placed at the moment of doubt - social proof that de-risks the buy." },
			{ src: "/case-studies/planet-of-the-vapes/related.webp", title: "More value per order", caption: "Cross-sell and bundles that lift average order value without cluttering the decision." },
			{ src: "/case-studies/planet-of-the-vapes/infographic.webp", title: "Answers before objections", caption: "Education and A+ content that resolves questions before they cost a sale." },
			{ src: "/case-studies/planet-of-the-vapes/campaign.webp", title: "On-brand at every touch", caption: "Campaign and lifecycle assets kept consistent across web, email and social." },
		],
		featured: false,
	},
	{
		slug: "trades-design-system-cms",
		client: "trades.org",
		title: "Design system and custom CMS from scratch",
		outcome: "A scalable product system for faster web-product iteration.",
		summary:
			"Designed the UX foundation, component system and responsive templates for multiple web products and a custom CMS/ATS workflow.",
		problem:
			"The team needed to ship multiple product surfaces quickly without re-solving components, templates and handoff patterns on every release.",
		process: [
			"Led end-to-end design for multiple web products, from user research and wireframes to high-fidelity prototypes and developer handoff.",
			"Built scalable design systems and reusable component libraries in Figma, accelerating iteration speed for rapid experimentation.",
			"Designed responsive templates and custom CMS/ATS platforms from scratch, focused on usability, accessibility and conversion.",
			"Conducted UX research to identify friction points and optimize user flows, reducing drop-off across key funnels.",
		],
		solution:
			"A modular UX and visual system with reusable templates, clearer handoff and a CMS structure that supported faster iteration.",
		impact: "Faster iteration and reduced funnel drop-off risk through consistent product patterns.",
		role: "UX/UI Product Designer",
		timeline: "Product foundation",
		period: "Jul 2022 - Dec 2023",
		tools: "Figma, prototyping, documentation",
		tags: ["Product", "UI/UX", "Design systems"],
		cover: "/case-studies/trades-org/cover.webp",
		coverPosition: "center",
		gallery: [
			{ src: "/case-studies/trades-org/contacts.webp", title: "Data-dense views that stay scannable", caption: "A CRM contacts table with filters, search and multi-value fields, structured so a busy user finds the right record fast." },
			{ src: "/case-studies/trades-org/ats.webp", title: "Complex admin, made usable", caption: "An applicant-tracking admin with configurable requirement templates - data tables, filters and inline editing that stay clear even as the data gets dense." },
			{ src: "/case-studies/trades-org/contact.webp", title: "The whole record in one screen", caption: "A CRM contact profile that puts history, notes, details and linked companies exactly where they are needed - no hunting, no clutter." },
			{ src: "/case-studies/trades-org/tokens.webp", title: "A documented token system", caption: "Content color tokens with clear names, roles and parents - the foundation that keeps every screen consistent and easy to hand off." },
			{ src: "/case-studies/trades-org/buttons.webp", title: "Components with every state", caption: "A button component covering sizes, colors, icons and states - reusable parts that let the team ship fast without redrawing the basics." },
			{ src: "/case-studies/trades-org/designsystem.webp", title: "One system behind it all", caption: "A design system built from scratch to keep a growing product consistent, faster to iterate and aligned across the team." },
		],
		featured: true,
	},
	{
		slug: "casabianca-apparel-cro",
		client: "Casabianca Cycling",
		title: "Ongoing Shopify eCommerce design for Casabianca Cycling",
		outcome: "Four years designing and optimizing a cycling apparel brand's Shopify store.",
		summary:
			"As Casabianca's ongoing eCommerce designer, I designed and continuously optimized their Shopify storefront, product pages, campaigns and brand system from 2018 to 2022.",
		problem:
			"The Shopify store's shopping flow had visual clutter, weak purchase hierarchy and checkout friction that made the brand feel less trustworthy than the product.",
		process: [
			"Owned the Shopify store end to end: customised the theme in the theme editor, built reusable sections, and designed the product-page, collection, home and landing templates - continuously optimised over four years.",
			"Improved product-page hierarchy, variant and size selectors, and the path to Shopify checkout, applying conversion-focused principles to cut friction and make the buying decision easier.",
			"Delivered Liquid-aware, section-based specs the theme could drop straight in, and used Shopify apps only where they earned their place - keeping the store fast and easy to update.",
			"Kept one visual system across the Shopify store, campaigns and physical touchpoints, and extended it into social content, packaging and apparel product design.",
		],
		solution:
			"A calmer, continuously refined Shopify store - stronger product storytelling, cleaner CTAs, a smoother path to checkout and a reusable, section-based theme - kept consistent and on-brand across years of launches.",
		impact: "A calmer, more premium storefront that stayed consistent and on-brand across four years of product launches and campaigns.",
		marketing: {
			dir: "casabianca",
			intro:
				"Beyond the storefront, I ran Casabianca's visual and social presence - turning a technical apparel catalog into content people wanted to share. Every drop, sale and collaboration had to feel as premium as the product and stay unmistakably on-brand across dozens of touchpoints.",
			images: [
				{ slug: "givelo-collection", alt: "Casabianca x givelo limited collection - product photography", w: 640, h: 1138 },
				{ slug: "oxford-blue", alt: "Casabianca Oxford Blue jersey on model", w: 640, h: 800 },
				{ slug: "olive-green", alt: "Casabianca Olive Green jersey with Pantone reference", w: 640, h: 800 },
				{ slug: "origins-toucans", alt: "Casabianca Origins Toucans campaign ad", w: 640, h: 640 },
				{ slug: "storefront-mockup", alt: "Casabianca online storefront on mobile", w: 640, h: 710 },
				{ slug: "social-grid", alt: "Casabianca social post system - grid mockup", w: 640, h: 427 },
				{ slug: "givelo-3stripes", alt: "Casabianca x givelo 3Stripes concept post", w: 640, h: 640 },
				{ slug: "fall-sale", alt: "Casabianca Fall sale promo - Red Tuscan jersey", w: 640, h: 1138 },
				{ slug: "sale-olive", alt: "Casabianca sale post - olive jersey", w: 640, h: 640 },
				{ slug: "sale-palm", alt: "Casabianca sale post - palm print jersey", w: 640, h: 640 },
				{ slug: "bubble-gum-pink", alt: "Casabianca Bubble Gum Pink jersey detail", w: 640, h: 800 },
				{ slug: "morocco-orange", alt: "Casabianca Morocco Orange jersey on model", w: 640, h: 800 },
				{ slug: "pink-longsleeve", alt: "Casabianca pink long-sleeve jersey ad", w: 640, h: 640 },
			],
			callouts: [
				{
					title: "A colour story per jersey",
					body: "Each colourway got its own identity - shot on-model with its named colour and Pantone reference (Oxford Blue, Morocco Orange, Olive Green) so the catalogue read as a considered collection, not a list.",
				},
				{
					title: "One system, every touchpoint",
					body: "Reusable social templates and a shared storefront-to-Instagram visual language kept launches, sales and Black Friday on-brand at speed - the storefront and post-grid mockups show the system in use.",
				},
				{
					title: "Collabs that still felt like Casabianca",
					body: "The givelo collaboration led with restrained product photography and the wordmark, so a co-branded drop never lost the brand's own voice.",
				},
			],
		},
		role: "Ecommerce Designer, Shopify & CRO",
		timeline: "Ongoing eCommerce design",
		period: "Sep 2018 - Jun 2022",
		tools: "Figma, Shopify, brand system",
		tags: ["CRO", "UI/UX", "Web", "Brand"],
		cover: "/case-studies/casabianca-cycling/cover.webp",
		coverPosition: "center 30%",
		gallery: [
			{ src: "/case-studies/casabianca-cycling/pdp.webp", title: "The product page, redesigned", caption: "A full PDP for a technical jersey - gallery, color and size selectors, fabric features, size help, reviews and cross-sell, on desktop and mobile.", maxWidth: 800 },
			{ src: "/case-studies/casabianca-cycling/explainer.webp", title: "Designed around the buying decision", caption: "Fit confidence, shipping and returns, and cart clarity - the things that actually convert technical apparel, not just visual taste." },
			{ src: "/case-studies/casabianca-cycling/brandboard.webp", title: "A brand board to design against", caption: "Wordmark, a restrained commercial palette and catalog photography - the visual system that kept the redesign unmistakably on-brand." },
			{ src: "/case-studies/casabianca-cycling/forher.webp", title: "Campaign that speaks to the rider", caption: "Brand campaign imagery that gives the apparel a clear, confident identity across the store." },
			{ src: "/case-studies/casabianca-cycling/live.webp", title: "Live in the store", caption: "The shipped Casabianca storefront, from the product page to the ask-a-question flow." },
		],
		featured: true,
	},
];

export const articles = [
	{
		slug: "ai-ab-tests-faster-design-craft",
		title: "How I Use AI to Run A/B Tests 3x Faster",
		keyword: "AI-assisted design workflow",
		category: "AI Product, AI UX, CRO",
		excerpt:
			"Where AI helps with ideation, asset variants and copy exploration, and where human taste and conversion judgment still make the call.",
		outline: [
			"The old variant-production bottleneck.",
			"Where AI plugs in: ideation, asset generation and copy variants.",
			"Where humans stay in control: hypothesis, taste and QA.",
			"A before and after timeline for a faster testing loop.",
		],
	},
	{
		slug: "trustworthy-ai-interfaces",
		title: "Designing Trustworthy AI Interfaces",
		keyword: "designing AI products",
		category: "AI Product, AI UX",
		excerpt:
			"Explainability, confidence, graceful failure and human-in-the-loop patterns for AI features people can trust.",
		outline: [
			"Why AI UX is different from standard product UX.",
			"Patterns for confidence, uncertainty and clear next steps.",
			"How to design useful empty states and failure states.",
			"What makes human review feel safe instead of slow.",
		],
	},
	{
		slug: "high-converting-product-detail-page",
		title: "The Anatomy of a High-Converting Product Detail Page",
		keyword: "high-converting product detail page",
		category: "CRO, Web",
		excerpt:
			"Above-the-fold hierarchy, variant selectors, trust proof and mobile-first decisions that help shoppers buy.",
		outline: [
			"Above-the-fold hierarchy for fast shopper confidence.",
			"Variant, bundle and quantity selector patterns.",
			"Trust, returns and proof where buyers need it.",
			"Amazon A+ and Shopify differences.",
		],
	},
	{
		slug: "scalable-design-system-figma",
		title: "From Wireframe to Shippable: Building a Scalable Design System in Figma",
		keyword: "design system in Figma",
		category: "Product, UI/UX",
		excerpt:
			"Tokens, components, patterns and handoff docs that make experimentation faster instead of messier.",
		outline: [
			"Start with tokens and repeated product decisions.",
			"Turn components into patterns, not just parts.",
			"Document handoff rules that developers can trust.",
			"Use the system to speed experimentation.",
		],
	},
	{
		slug: "landing-page-cro-fixes",
		title: "CRO Teardown: 7 Landing-Page Fixes That Lift Conversion",
		keyword: "landing page CRO",
		category: "CRO, Web",
		excerpt:
			"Seven practical fixes across hierarchy, CTA clarity, friction, proof, speed, forms and mobile UX.",
		outline: [
			"Make the primary action visible without hunting.",
			"Reduce form and checkout friction.",
			"Add proof close to moments of doubt.",
			"Design mobile first because mobile decides the sale.",
		],
	},
	{
		slug: "generative-ai-toolkit-designers",
		title: "Prompting as a Design Skill",
		keyword: "generative AI design tools",
		category: "AI UX, Brand",
		excerpt:
			"My generative-AI toolkit for moodboards, assets, copy, research synthesis and faster production with guardrails.",
		outline: [
			"Prompt patterns for moodboards and directions.",
			"AI for copy variants and content exploration.",
			"Guardrails for brand consistency.",
			"What AI still cannot replace.",
		],
	},
];

export const toolStack = [
	{
		category: "Design & prototyping",
		items: ["Figma", "auto layout", "variables", "component libraries", "interactive prototypes", "dev handoff"],
		description:
			"End-to-end product design in Figma - systems, prototyping, documentation and clean developer handoff for product and commerce teams.",
	},
	{
		category: "AI-assisted tooling",
		items: ["Claude Code", "ChatGPT", "Gemini", "Nano Banana", "Paper", "Lovable", "AI-assisted prototyping", "research synthesis", "prompt libraries", "asset variants"],
		description:
			"AI-assisted environments like Claude Code to accelerate design, prototyping and iteration, with human judgment kept at the center.",
	},
	{
		category: "Visual & motion",
		items: ["Photoshop", "Illustrator", "After Effects", "Procreate"],
		description:
			"Brand craft, illustration, motion studies and production-ready creative systems.",
	},
	{
		category: "eCommerce & lifecycle",
		items: ["Shopify", "Amazon A+", "Salsify", "Klaviyo", "PDP design", "A/B testing"],
		description:
			"Shopify stores, marketplace listings, email/SMS modules and conversion decisions tied to metrics.",
	},
	{
		category: "Process",
		items: ["Notion", "Asana", "analytics review", "handoff docs", "CRO decisions"],
		description:
			"Clear documentation and measurable decision-making for remote product teams.",
	},
];

export const resources = [
	{
		title: "PDP and landing-page CRO checklist",
		description: "A practical audit sheet for product pages, landing pages and mobile commerce funnels.",
		file: "/downloads/PDP-Landing-CRO-Checklist.html",
		kind: "Checklist",
		cta: "Open the checklist",
	},
	{
		title: "Figma design-system starter kit",
		description: "A starter structure for tokens, components, variants and handoff documentation.",
		file: "/downloads/Figma-Design-System-Starter-Kit.html",
		kind: "Starter kit",
		cta: "Open the starter kit",
	},
	{
		title: "AI design prompt pack",
		description: "Prompt patterns for research synthesis, moodboards, content variants and QA.",
		file: "/downloads/AI-Design-Prompt-Pack.html",
		kind: "Prompt pack",
		cta: "Open the prompt pack",
	},
	{
		title: "Email and SMS component template",
		description: "Lifecycle-design modules for Klaviyo flows, retention emails and SMS moments.",
		file: "/downloads/Email-SMS-Component-Template.html",
		kind: "Template",
		cta: "Open the template",
	},
];

export const playGallery = [
	{ slug: "shiitake-mushroom", alt: "Shiitake mushroom - typographic illustration", width: 700, height: 700 },
	{ slug: "portobello-mushroom", alt: "Portobello mushroom - typographic illustration", width: 700, height: 700 },
	{ slug: "oyster-mushroom", alt: "Oyster mushroom - illustrated label", width: 700, height: 700 },
	{ slug: "shiitake-pizza", alt: "Shiitake mushroom pizza - holographic poster", width: 700, height: 875 },
	{ slug: "oyster-tacos", alt: "Oyster mushroom tacos - animated type", width: 800, height: 1000 },
	{ slug: "melena-de-leon", alt: "Lion's mane mushroom - educational illustration", width: 700, height: 700 },
	{ slug: "bbq-sauce", alt: "Homemade BBQ sauce - illustrated recipe", width: 700, height: 875 },
	{ slug: "fried-chicken", alt: "Fried chicken - illustrated recipe", width: 700, height: 875 },
	{ slug: "chili", alt: "Chili pepper - textured illustration", width: 700, height: 700 },
	{ slug: "popsicle", alt: "Popsicle - animated illustration", width: 800, height: 800 },
	{ slug: "chemex", alt: "The Chemex - brewing method poster", width: 700, height: 1050 },
	{ slug: "brewing-methods", alt: "Coffee brewing methods - print", width: 700, height: 1050 },
	{ slug: "calm-palm", alt: "Calm palm - botanical print", width: 700, height: 1050 },
	{ slug: "sequoia", alt: "Sequoia - botanical print", width: 700, height: 1050 },
	{ slug: "potted-plant", alt: "Potted plant - illustration", width: 700, height: 700 },
	{ slug: "bogota", alt: "Bogota, Colombia - travel poster", width: 700, height: 1050 },
	{ slug: "blossomed-heart", alt: "Blossomed heart - floral anatomical poster", width: 700, height: 1050 },
	{ slug: "washing-dishes", alt: "Washing dishes - animated illustration", width: 800, height: 693 },
	{ slug: "dog-portrait", alt: "Dog portrait - illustration", width: 700, height: 875 },
	{ slug: "line-figure", alt: "Figure - single-line drawing", width: 700, height: 1089 },
	{ slug: "la-raqueta", alt: "La raqueta - minimal sport poster", width: 700, height: 1050 },
	{ slug: "nairo", alt: "Nairo - cycling portrait print", width: 700, height: 467 },
	{ slug: "two-riders", alt: "Two riders - cycling illustration", width: 700, height: 560 },
	{ slug: "potv", alt: "Planet of the Vapes - product illustration", width: 700, height: 875 },
	{ slug: "casabianca-coral", alt: "Casabianca cycling apparel - coral jersey", width: 700, height: 700 },
	{ slug: "casabianca-olive", alt: "Casabianca cycling apparel - olive jersey", width: 700, height: 700 },
	{ slug: "pepairegui", alt: "pepairegui - brand identity", width: 700, height: 700 },
];

export const watercolors = [
	{ slug: "orchid", title: "Orchid", alt: "Orchid - watercolour study on paper", width: 700, height: 700 },
	{ slug: "four-leaf-clover", title: "Four-leaf clover", alt: "Four-leaf clover - watercolour study on paper", width: 700, height: 969 },
	{ slug: "glass-sphere", title: "Pink glass sphere", alt: "Pink glass sphere - watercolour study on paper", width: 700, height: 969 },
	{ slug: "blackberry", title: "Blackberry", alt: "Blackberry - watercolour study on paper", width: 700, height: 700 },
	{ slug: "artichoke", title: "Artichoke", alt: "Artichoke - watercolour study on paper", width: 700, height: 700 },
	{ slug: "strawberry", title: "Strawberry", alt: "Strawberry - watercolour study on paper", width: 700, height: 700 },
];

// Client brand & marketing work shown as a secondary "Beyond UX" section on /about.
export const beyondUx = [
	{ slug: "creyente-brand", brand: "Creyente", alt: "Creyente mezcal - brand graphic with illustrated animals" },
	{ slug: "creyente-quimeras", brand: "Creyente", alt: "Creyente mezcal - Las Quimeras product post" },
	{ slug: "creyente-ritual", brand: "Creyente", alt: "Creyente mezcal - Ritual Espadin recipe" },
	{ slug: "creyente-espadin", brand: "Creyente", alt: "Creyente mezcal - Espadin bottle detail" },
	{ slug: "cecilia-burger", brand: "Cecilia", alt: "Cecilia - international burger day post" },
	{ slug: "cecilia-chefs", brand: "Cecilia", alt: "Cecilia - Chefs event poster" },
	{ slug: "cecilia-domicilios", brand: "Cecilia", alt: "Cecilia - delivery announcement" },
	{ slug: "cecilia-email", brand: "Cecilia", alt: "Cecilia - newsletter layout" },
	{ slug: "perfecto-exfoliantes", brand: "Perfecto Bronceado", alt: "Perfecto Bronceado - natural exfoliants carousel" },
	{ slug: "perfecto-bronceado", brand: "Perfecto Bronceado", alt: "Perfecto Bronceado - social post" },
	{ slug: "marrana-eats", brand: "Marrana Eats", alt: "Marrana Eats - social layout" },
];

