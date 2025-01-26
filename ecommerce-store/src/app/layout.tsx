import { Outfit } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "La Cantine & Co | Huile d'Olive Extra Vierge",
	description:
		"Huile d'olive extra vierge de Puglia, Italie. Une production artisanale et familiale.",
};

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params?: { lang?: string };
}>) {
	const lang = params?.lang || "fr";

	return (
		<html lang={lang} className={outfit.variable}>
			<body className="min-h-screen bg-white text-zinc-900 font-sans antialiased">
				{children}
			</body>
		</html>
	);
}
