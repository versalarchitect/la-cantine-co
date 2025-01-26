import type { Locale } from "../types/i18n";

const dictionaries = {
	en: () => import("../dictionaries/en.json").then((module) => module.default),
	fr: () => import("../dictionaries/fr.json").then((module) => module.default),
	it: () => import("../dictionaries/it.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
	return dictionaries[locale]?.() ?? dictionaries.en();
};
