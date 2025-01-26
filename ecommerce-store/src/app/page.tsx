import { product } from "@/config/product";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-[#F8F6F1]">
			{/* Hero Section */}
			<section className="pt-40 pb-32 px-4">
				<div className="max-w-3xl mx-auto text-center">
					<p className="text-xs text-[#8B7355] uppercase tracking-[0.4em] mb-8 font-medium">
						Puglia • Italia Meridionale
					</p>
					<h1 className="text-5xl md:text-7xl font-serif italic mb-4 text-[#2C1810]">
						{product.name}
					</h1>
					<p className="font-light text-xl mb-6 text-[#5C4D44]">{product.nameSecondary}</p>
					<div className="w-20 h-[1px] bg-[#8B7355] mx-auto mb-8" />
					<p className="text-sm uppercase tracking-[0.25em] mb-12 text-[#8B7355]">
						Olio Extra Vergine • Prima Spremitura a Freddo
					</p>
					<div className="space-y-8">
						<p className="text-lg text-[#4A443E] font-light max-w-2xl mx-auto leading-relaxed">
							{product.description.fr}
						</p>
						<div className="flex justify-center space-x-4">
							<div className="w-2 h-2 bg-[#8B7355] rounded-full" />
							<div className="w-2 h-2 bg-[#8B7355] rounded-full" />
							<div className="w-2 h-2 bg-[#8B7355] rounded-full" />
						</div>
					</div>
				</div>
			</section>

			{/* Product Showcase */}
			<section className="px-4 mb-40">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
						<div className="relative aspect-[3/4] group">
							<div className="absolute inset-0 bg-[#E4DDD3] transform -rotate-2 transition-transform group-hover:rotate-0 duration-500" />
							<div className="absolute inset-0 transform rotate-2 transition-transform group-hover:rotate-0 duration-500">
								<Image
									src={product.images[0]}
									alt={product.nameSecondary}
									fill
									className="object-cover"
									priority
								/>
							</div>
							<div className="absolute -bottom-8 right-8 transform rotate-[-8deg]">
								<Image
									src="/certification-stamp.png"
									alt="Italian Certification"
									width={100}
									height={100}
									className="opacity-90"
								/>
							</div>
						</div>
						<div className="space-y-10">
							<div>
								<p className="text-sm uppercase tracking-[0.2em] text-[#8B7355] mb-3">
									Azienda Familiare
								</p>
								<h2 className="text-3xl font-serif italic text-[#2C1810] mb-6">
									Tradizione Pugliese
								</h2>
								<div className="space-y-4">
									{product.details.map((detail, index) => (
										<div key={index} className="flex items-center space-x-3">
											<div className="w-1.5 h-1.5 bg-[#8B7355] rounded-full" />
											<p className="text-[#4A443E]">{detail}</p>
										</div>
									))}
								</div>
							</div>
							<div className="pt-6 border-t border-[#E4DDD3]">
								<div className="flex items-center justify-between mb-6">
									<p className="text-2xl font-serif text-[#2C1810]">
										€{(product.price / 100).toFixed(2)}
									</p>
									<p className="text-sm text-[#8B7355] uppercase tracking-wider">
										Spedizione Gratuita
									</p>
								</div>
								<Link
									href="/api/checkout"
									className="block w-full py-4 px-8 bg-[#2C1810] text-white text-center uppercase tracking-wider hover:bg-[#3D251B] transition-colors duration-300"
								>
									Acquista Ora
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-40 px-4 bg-[#F3EFE8]">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-20">
						<h2 className="font-serif italic text-4xl mb-4 text-[#2C1810]">
							La Nostra Tradizione
						</h2>
						<div className="w-16 h-[1px] bg-[#8B7355] mx-auto mb-6" />
						<p className="text-[#8B7355] uppercase tracking-[0.2em] text-sm">
							Eccellenza Artigianale
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
						{product.details.map((detail) => (
							<div key={detail} className="text-center group">
								<div className="w-8 h-[1px] bg-[#8B7355] mx-auto mb-6 transition-all group-hover:w-12" />
								<p className="text-[#4A443E] font-light">{detail}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
