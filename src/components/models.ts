export interface Service {
  name: string;
  description: string;
  url: string;
  locales: Locale[];
  categories: ServiceCategory[];
}

export enum ServiceCategory {
  'Fiat Exchange',
  'Payments',
  'Business Products',
  'Medical',
  'Food',
  'Education',
  'Lightning Network',
  'Podcast',
  'Meetup'
}

// I know there are SO many more, but let's add them as they come up.
export enum Locale {
  'Global',
  'USA',
  'Canada',
  'El Salvador',
  'Guatemala',
  'Africa',
  'Uganda',
  'South Africa',
  'Kenya',
  'Nigeria',
  'Ghana',
  'Malawi'
}
