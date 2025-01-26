export type ShippingZone = {
	name: string;
	countries: string[];
	baseRate: number; // in cents
	estimatedDays: string;
};

export const shippingZones: ShippingZone[] = [
	{
		name: "United States",
		countries: ["US"],
		baseRate: 500, // $5.00
		estimatedDays: "2-3",
	},
	{
		name: "Canada",
		countries: ["CA"],
		baseRate: 1000, // $10.00
		estimatedDays: "3-5",
	},
	{
		name: "Europe",
		countries: [
			"GB",
			"FR",
			"DE",
			"IT",
			"ES",
			"NL",
			"BE",
			"AT",
			"CH",
			"SE",
			"DK",
			"NO",
			"FI",
		],
		baseRate: 1500, // $15.00
		estimatedDays: "5-7",
	},
	{
		name: "Asia Pacific",
		countries: ["JP", "KR", "AU", "NZ", "SG", "HK"],
		baseRate: 2000, // $20.00
		estimatedDays: "7-10",
	},
];

export const defaultShippingRate = {
	baseRate: 2500, // $25.00
	estimatedDays: "10-15",
};

export function getShippingRate(countryCode: string): {
	rate: number;
	estimatedDays: string;
} {
	const zone = shippingZones.find((zone) =>
		zone.countries.includes(countryCode),
	);

	return zone
		? { rate: zone.baseRate, estimatedDays: zone.estimatedDays }
		: {
				rate: defaultShippingRate.baseRate,
				estimatedDays: defaultShippingRate.estimatedDays,
			};
}
