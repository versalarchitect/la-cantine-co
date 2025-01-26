"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "../types/i18n";
import { Button } from "./ui/button";

const locales: Locale[] = ["en", "fr", "it"];
const localeNames = {
	en: "English",
	fr: "Français", 
	it: "Italiano",
} as const;

export default function LanguageSwitcher() {
	const pathname = usePathname();
	const router = useRouter();

	// Get the current locale from the first path segment, defaulting to French
	const currentLocale = (pathname.split("/")[1] as Locale) || "fr";

	const handleLocaleChange = (newLocale: Locale) => {
		// Prevent unnecessary navigation if already on the selected locale
		if (currentLocale === newLocale) return;

		// Construct new path based on current location
		const newPath = pathname === "/" 
			? `/${newLocale}`
			: `/${newLocale}${pathname.substring(3)}`;

		router.push(newPath);
	};

	return (
		<nav aria-label="Language switcher" className="flex gap-2">
			{locales.map((locale) => {
				const isSelected = currentLocale === locale;
				return (
					<Button
						key={locale}
						type="button"
						onClick={() => handleLocaleChange(locale)}
						aria-current={isSelected ? "true" : undefined}
						className={`
							px-3 py-1 rounded-md text-sm transition-colors duration-200
							${isSelected 
								? "bg-[#766B63] text-[#F3EFE8]" 
								: "bg-[#F3EFE8] hover:bg-[#E4DDD3] text-[#766B63]"
							}
						`}
					>
						{localeNames[locale]}
					</Button>
				);
			})}
		</nav>
	);
}
