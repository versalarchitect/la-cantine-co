"use client";

import { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Implement form submission logic
		console.log("Form submitted:", formData);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<main className="min-h-screen bg-[#FDFBF7] py-24 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-20">
					<h1 className="font-serif italic text-5xl mb-4">Contactez-Nous</h1>
					<div className="w-12 h-[1px] bg-[#9C8B7D] mx-auto mb-6" />
					<p className="text-sm uppercase tracking-[0.15em] text-[#766B63]">
						La Cantine & Co
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
					<div className="space-y-12">
						{/* Contact Form */}
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm uppercase tracking-[0.15em] text-[#766B63] mb-2"
								>
									Nom
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-white border border-[#E4DDD3] focus:outline-none focus:border-[#2C2824] transition-colors"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm uppercase tracking-[0.15em] text-[#766B63] mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-white border border-[#E4DDD3] focus:outline-none focus:border-[#2C2824] transition-colors"
								/>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-sm uppercase tracking-[0.15em] text-[#766B63] mb-2"
								>
									Sujet
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-white border border-[#E4DDD3] focus:outline-none focus:border-[#2C2824] transition-colors"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm uppercase tracking-[0.15em] text-[#766B63] mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={6}
									className="w-full px-4 py-3 bg-white border border-[#E4DDD3] focus:outline-none focus:border-[#2C2824] transition-colors resize-none"
								/>
							</div>

							<button
								type="submit"
								className="w-full py-4 bg-[#2C2824] text-[#FDFBF7] hover:bg-[#4A443E] transition-colors uppercase tracking-[0.2em] text-sm"
							>
								Envoyer le Message
							</button>
						</form>

						{/* Social Media Links */}
						<div>
							<h2 className="font-serif text-2xl mb-6">Suivez-Nous</h2>
							<div className="flex space-x-6">
								<a
									href="https://instagram.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#766B63] hover:text-[#2C2824] transition-colors"
								>
									<span className="sr-only">Instagram</span>
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										role="img"
										aria-labelledby="instagramTitle"
									>
										<title id="instagramTitle">Suivez-nous sur Instagram</title>
										<path
											fillRule="evenodd"
											d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
											clipRule="evenodd"
										/>
									</svg>
								</a>
								<a
									href="https://facebook.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#766B63] hover:text-[#2C2824] transition-colors"
								>
									<span className="sr-only">Facebook</span>
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										role="img"
										aria-labelledby="facebookTitle"
									>
										<title id="facebookTitle">Suivez-nous sur Facebook</title>
										<path
											fillRule="evenodd"
											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
											clipRule="evenodd"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>

					<div className="space-y-12">
						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h2 className="font-serif text-2xl mb-4">Notre Adresse</h2>
								<p className="text-[#4A443E] leading-relaxed">
									La Cantine & Co
									<br />
									Longueuil, Québec
									<br />
									J4H2T5
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl mb-4">Nos Coordonnées</h2>
								<div className="space-y-2">
									<p className="text-[#4A443E]">
										<span className="text-[#766B63] uppercase tracking-wider text-sm">
											Tél:{" "}
										</span>
										<a
											href="tel:514-609-4050"
											className="hover:text-[#2C2824] transition-colors"
										>
											514-609-4050
										</a>
									</p>
									<p className="text-[#4A443E]">
										<span className="text-[#766B63] uppercase tracking-wider text-sm">
											Courriel:{" "}
										</span>
										<a
											href="mailto:Info@cantineco.com"
											className="hover:text-[#2C2824] transition-colors"
										>
											Info@cantineco.com
										</a>
									</p>
								</div>
							</div>

							{/* Hours */}
							<div>
								<h2 className="font-serif text-2xl mb-6">Nos Heures</h2>
								<div className="space-y-4">
									<div className="flex justify-between items-center py-3 border-b border-[#E4DDD3]">
										<span className="text-[#766B63] uppercase tracking-wider text-sm">
											Lundi – Vendredi
										</span>
										<span className="text-[#4A443E]">7H – 20H</span>
									</div>
									<div className="flex justify-between items-center py-3 border-b border-[#E4DDD3]">
										<span className="text-[#766B63] uppercase tracking-wider text-sm">
											Samedi
										</span>
										<span className="text-[#4A443E]">8H – 19H</span>
									</div>
									<div className="flex justify-between items-center py-3 border-b border-[#E4DDD3]">
										<span className="text-[#766B63] uppercase tracking-wider text-sm">
											Dimanche
										</span>
										<span className="text-[#4A443E]">Fermé</span>
									</div>
								</div>
							</div>
						</div>

						{/* Map */}
						<div className="h-80 bg-white border border-[#E4DDD3]">
							<iframe
								title="Notre emplacement"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5185556673654!2d-73.51126548444385!3d45.53642937910204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b11a3c7b0bf%3A0x334fc9b61951d9c8!2sLongueuil%2C%20QC!5e0!3m2!1sen!2sca!4v1625178425789!5m2!1sen!2sca"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
