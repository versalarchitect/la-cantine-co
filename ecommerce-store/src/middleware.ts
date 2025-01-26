import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { Locale } from "./types/i18n";

const locales: Locale[] = ["en", "fr", "it"];
const defaultLocale = "fr";

function getLocale(request: NextRequest): string {
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => {
		negotiatorHeaders[key] = value;
	});

	const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
	return matchLocale(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	const pathnameIsMissingLocale = locales.every(
		(locale) =>
			!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
	);

	if (pathnameIsMissingLocale) {
		const locale = getLocale(request);
		return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
	}
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
