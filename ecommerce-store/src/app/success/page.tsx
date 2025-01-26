import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/types/i18n";
import Link from "next/link";

interface SuccessPageProps {
	params: { lang: Locale };
}

export default async function Success({ params: { lang } }: SuccessPageProps) {
	const dict = await getDictionary(lang);

	return (
		<main className="min-h-screen bg-[#FDFBF7] py-24 px-4">
			<div className="max-w-3xl mx-auto text-center">
				<div className="mb-20">
					<div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center bg-[#E4DDD3] rounded-full">
						<svg
							className="w-10 h-10 text-[#2C2824]"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							role="img"
							aria-labelledby="successTitle"
						>
							<title id="successTitle">{dict.success.title}</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>

					<h1 className="font-serif italic text-5xl mb-4">
						{dict.success.title}
					</h1>
					<div className="w-12 h-[1px] bg-[#9C8B7D] mx-auto mb-8" />
					<p className="text-[#4A443E] mb-12 font-light">
						{dict.success.message}
					</p>

					<div className="max-w-md mx-auto bg-white p-8 mb-12 border border-[#E4DDD3]">
						<h2 className="font-serif text-2xl mb-6">
							{dict.success.shipping.title}
						</h2>
						<div className="space-y-4 text-left">
							<div className="flex justify-between items-center py-3 border-b border-[#E4DDD3]">
								<span className="text-[#766B63] uppercase tracking-wider text-sm">
									{dict.product.estimatedDelivery}
								</span>
								<span className="text-[#4A443E]">
									{dict.success.shipping.estimatedTime}
								</span>
							</div>
							<div className="flex justify-between items-center py-3 border-b border-[#E4DDD3]">
								<span className="text-[#766B63] uppercase tracking-wider text-sm">
									{dict.product.carrier}
								</span>
								<span className="text-[#4A443E]">
									{dict.success.shipping.carrier}
								</span>
							</div>
							<div className="flex justify-between items-center py-3 border-b border-[#E4DDD3]">
								<span className="text-[#766B63] uppercase tracking-wider text-sm">
									{dict.product.tracking}
								</span>
								<span className="text-[#4A443E]">
									{dict.success.shipping.tracking}
								</span>
							</div>
						</div>
					</div>

					<div className="space-y-4">
						<Link
							href={`/${lang}`}
							className="inline-block px-8 py-4 border border-[#2C2824] text-[#2C2824] hover:bg-[#2C2824] hover:text-[#FDFBF7] transition-colors uppercase tracking-[0.2em] text-sm mr-4"
						>
							{dict.success.buttons.home}
						</Link>
						<Link
							href={`/${lang}/boutique`}
							className="inline-block px-8 py-4 bg-[#2C2824] text-[#FDFBF7] hover:bg-[#4A443E] transition-colors uppercase tracking-[0.2em] text-sm"
						>
							{dict.success.buttons.shop}
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
