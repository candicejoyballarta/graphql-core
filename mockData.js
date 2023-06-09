const Banners = [
	{
		id: 1,
		txtHeader: 'WHERE TO BUY TRANSITIONS®',
		txtDescription:
			'Locate an eye care professional near you or online and ask about Transitions® Light Intelligent Lenses™.',
		imgBackground: '/src/assets/img1.webp',
		buttons: [
			{
				id: 1,
				btnText: 'BUY IN STORE',
			},
			{
				id: 2,
				btnText: 'BUY ONLINE',
			},
		],
	},
	{
		id: 2,
		txtHeader: 'BUY TRANSITIONS IN STORE',
		txtDescription:
			'Looking for the best place to buy glasses with Transitions lenses? Search for your nearest eye doctor to book an appointment.',
		imgBackground: '/src/assets/img2.webp',
		buttons: [
			{
				id: 1,
				btnText: 'FIND',
			},
		],
	},
	{
		id: 3,
		txtHeader: 'BUY TRANSITIONS ONLINE',
		txtDescription:
			'Looking for the best place to buy glasses with Transitions lenses online? Find our certified sellers here.',
		imgBackground: '/src/assets/img3.webp',
		buttons: [
			{
				id: 1,
				btnText: 'BUY ONLINE',
			},
		],
	},
	{
		id: 4,
		imgHeader: '/src/assets/certified.webp',
		txtHeader: 'TRAINED SPECIALISTS READY TO ADVISE YOU',
		txtDescription:
			'Transitions Certified Providers are trained and equipped to recommend the perfect Transitions lenses to all their patients.',
		imgBackground: '/src/assets/img4.webp',
	},
];

const Stores = [
	{
		id: 1,
		txtHeader: 'IN NEW YORK',
		txtLink: 'View stores',
		imgBackground: '/src/assets/newyork.webp',
	},
	{
		id: 2,
		txtHeader: 'IN LOS ANGELES',
		txtLink: 'View stores',
		imgBackground: '/src/assets/losangeles.webp',
	},
	{
		id: 3,
		txtHeader: 'IN CHICAGO',
		txtLink: 'View stores',
		imgBackground: '/src/assets/chicago.webp',
	},
	{
		id: 4,
		txtHeader: 'IN DALLAS',
		txtLink: 'View stores',
		imgBackground: '/src/assets/dallas.webp',
	},
	{
		id: 5,
		txtHeader: 'IN PHEONIX',
		txtLink: 'View stores',
		imgBackground: '/src/assets/phoenix.webp',
	},
	{
		id: 6,
		txtHeader: 'IN PHILADELPHIA',
		txtLink: 'View stores',
		imgBackground: '/src/assets/philadelphia.webp',
	},
	{
		id: 7,
		txtHeader: 'IN DENVER',
		txtLink: 'View stores',
		imgBackground: '/src/assets/denver.webp',
	},
	{
		id: 8,
		txtHeader: 'IN SAN ANTONIO',
		txtLink: 'View stores',
		imgBackground: '/src/assets/sanantonio.webp',
	},
	{
		id: 9,
		txtHeader: 'IN INDIANAPOLIS',
		txtLink: 'View stores',
		imgBackground: '/src/assets/indianapolis.webp',
	},
];

const VidBanners = [
	{
		id: 1,
		txtHeader: `CHECK YOUR LIGHT \n SENSITIVITY.`,
		vidBackground: '/src/assets/vid5.mp4',
		buttons: {
			id: 1,
			btnText: 'GET STARTED',
		},
		style: 'light',
	},
	{
		id: 2,
		txtHeader: `PAIR YOUR FAVORITE \n FRAME WITH THE \n PERFECT LENS.`,
		vidBackground: '/src/assets/vid6.mp4',
		buttons: {
			id: 2,
			btnText: 'TRY ON NOW',
		},
		style: 'dark',
	},
];

const FAQs = [
	{
		id: 1,
		txtQuestion: 'How much do Transitions lenses cost?',
		txtAnswer: [
			'The price of Transitions lenses will vary because there are many factors that affect the price of the eyeglass lenses you purchase. The price is set by the retail store or eyecare professional’s office where you make your purchase.',
			'The final price takes into consideration the lens material, lens type (single-vision, bifocal, or progressive), your prescription and any coatings you opt to add, as well as any special promotions or discounts that are offered. Also, many insurance providers provide coverage for Transitions lenses as part of their vision care plan. It’s always a good idea to check with your insurance provider to see what’s covered before your exam, and it never hurts to ask your eyecare professional if any specials or coupons are available.',
			'Finally, be sure to ask your eyecare professional for authentic Transitions brand lenses and request the certificate of authenticity when you pick up your new glasses.',
		],
	},
	{
		id: 2,
		txtQuestion: 'How long do Transitions lenses last?',
		txtAnswer: [
			'Transitions lenses are designed to last the lifetime of your vision care prescription. In order to keep your prescription lenses current, regular, comprehensive eye exams are recommended to determine any prescription changes and help prevent any other eye problems. Talk to your eyecare professional or eye doctor to find out how often you should schedule a visit to preserve your eye health.',
		],
	},
	{
		id: 3,
		txtQuestion: 'Do I need to register Transitions lenses?',
		txtAnswer: [
			'Yes, you can register your Transitions lenses. To register, visit https://coa.transitions.com and follow the instructions on your Certificate of Authenticity. If you encounter any difficulties, please call Transitions Optical Customer Service at 1-800-533-2081 and someone will help register your lenses for you.',
		],
	},
	{
		id: 4,
		txtQuestion: 'Why buy Transitions brand lenses over clear lenses?',
		txtAnswer: [
			'Unlike clear lenses, which remain clear in all situations, Transitions lenses automatically adapt to changing light, providing your eyes with exactly the amount of shade they need for any situation, so you see things in the best light. They also help protect your eyes against harmful blue light, UV rays, and help reduce squinting and eye fatigue. Transitions lenses are available in a range of colors to match your favorite frame styles.',
		],
	},
	{
		id: 5,
		txtQuestion:
			'Can I use my insurance to buy glasses with Transitions lenses online?',
		txtAnswer: [
			'Many insurance providers provide coverage for Transitions lenses as part of their vision care plan. To find out how more about using your insurance coverage with Transitions visit our Pricing and Insurance page',
		],
	},
];

module.exports = { Banners, VidBanners, Stores, FAQs };
