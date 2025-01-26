import type { Locale } from "@/types/i18n";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "La Cantine & Co | Huile d'Olive Extra Vierge",
	description:
		"Huile d'olive extra vierge de Puglia, Italie. Une production artisanale et familiale.",
};

interface RootLayoutProps {
	children: React.ReactNode;
	params: { lang: Locale };
}

export default async function LangLayout({
	children,
	params: { lang },
}: RootLayoutProps) {
	const dict = await getDictionary(lang);

	return (
		<div className={outfit.className}>
			{/* Announcement Bar */}
			<div className="bg-[#F3EFE8] text-center py-2 text-xs tracking-wider text-[#766B63]">
				{dict.common.freeShipping}
			</div>

			<header className="sticky top-0 z-50 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="flex justify-between items-center py-8">
						<Link
							href={`/${lang}`}
							className="text-2xl tracking-wide font-serif italic"
						>
							La Cantine & Co
						</Link>
						<LanguageSwitcher />
					</div>
					<nav className="flex items-center justify-center space-x-12 py-4 border-t border-b border-[#E4DDD3]">
						<Link
							href={`/${lang}/shop`}
							className="text-sm tracking-widest hover:text-[#766B63] transition"
						>
							{dict.navigation.boutique}
						</Link>
						<Link
							href={`/${lang}/about`}
							className="text-sm tracking-widest hover:text-[#766B63] transition"
						>
							{dict.navigation.about}
						</Link>
						<Link
							href={`/${lang}/contact`}
							className="text-sm tracking-widest hover:text-[#766B63] transition"
						>
							{dict.navigation.contact}
						</Link>
					</nav>
				</div>
			</header>

			<main className="flex-1">{children}</main>

			<footer className="bg-[#F3EFE8] py-20 mt-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
						<div>
							<h3 className="text-sm tracking-widest mb-6 text-[#2C2824]">
								{dict.navigation.boutique}
							</h3>
							<div className="space-y-3">
								<Link
									href={`/${lang}/shop`}
									className="block text-sm text-[#766B63] hover:text-[#2C2824]"
								>
									{dict.navigation.boutique}
								</Link>
								<Link
									href={`/${lang}/about`}
									className="block text-sm text-[#766B63] hover:text-[#2C2824]"
								>
									{dict.navigation.about}
								</Link>
							</div>
						</div>

						<div>
							<h3 className="text-sm tracking-widest mb-6 text-[#2C2824]">
								{dict.navigation.contact}
							</h3>
							<div className="space-y-3">
								<Link
									href={`/${lang}/contact`}
									className="block text-sm text-[#766B63] hover:text-[#2C2824]"
								>
									{dict.contact.title}
								</Link>
								<p className="text-sm text-[#766B63]">info@lacantine.co</p>
							</div>
						</div>

						<div>
							<h3 className="text-sm tracking-widest mb-6 text-[#2C2824]">
								{dict.common.followUs}
							</h3>
							<div className="space-y-3">
								<a
									href="https://instagram.com"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-sm text-[#766B63] hover:text-[#2C2824]"
								>
									Instagram
								</a>
								<a
									href="https://facebook.com"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-sm text-[#766B63] hover:text-[#2C2824]"
								>
									Facebook
								</a>
							</div>
						</div>

						<div>
							<h3 className="text-sm tracking-widest mb-6 text-[#2C2824]">
								{dict.common.newsletter}
							</h3>
							<p className="text-sm text-[#766B63] mb-4">
								{dict.common.subscribeNewsletter}
							</p>
							<form className="space-y-4">
								<input
									type="email"
									placeholder={dict.common.emailAddress}
									className="w-full px-4 py-2 text-sm bg-white border border-[#E4DDD3] focus:outline-none focus:border-[#2C2824]"
								/>
								<button
									type="submit"
									className="w-full px-4 py-2 text-sm text-[#FDFBF7] bg-[#2C2824] hover:bg-[#4A443E] transition-colors uppercase tracking-[0.2em]"
								>
									{dict.common.subscribe}
								</button>
							</form>
						</div>
					</div>

					<div className="mt-20 pt-8 border-t border-[#9C8B7D] text-center text-xs tracking-wider text-[#766B63]">
						© {new Date().getFullYear()} La Cantine & Co. {dict.common.allRightsReserved}
					</div>
				</div>
			</footer>
		</div>
	);
}
