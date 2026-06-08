import { contentDe } from './content.de';
import { contentEn } from './content.en';

export type Language = 'en' | 'de';

export const languageOptions: Language[] = ['en', 'de'];

export const siteContent = {
  en: contentEn,
  de: contentDe,
} as const;

export type SiteContent = (typeof siteContent)[Language];
