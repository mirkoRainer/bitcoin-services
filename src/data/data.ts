import { Locale, Service, ServiceCategory } from 'src/components/models';

export const data: Service[] = [
  {
    name: 'Swan Bitcoin',
    url: 'https://swanbitcoin.com/',
    description: 'A simple Bitcoin savings app that does all the work for you.',
    locales: [Locale.US],
    categories: [ServiceCategory['Fiat Exchange'], ServiceCategory['Education']]
  },
  {
    name: 'Oshi',
    url: 'https://www.oshi.tech/',
    description: 'Oshi is a powerful marketing and rewards platform built to replace stars, punch cards, and coffee points with something that people really want - Bitcoin.',
    locales: [Locale.US],
    categories: [ServiceCategory['Business Products']]
  },
  {
    name: 'Ibex',
    url: 'https://www.ibexmercado.com/',
    description: 'A Bitcoin payments processor.',
    locales: [Locale.US, Locale['El Salvador'], Locale.Guatemala],
    categories: [ServiceCategory['Business Products']]
  },
  {
    name: 'Crowd Health',
    url: 'https://www.joincrowdhealth.com/bitcoin',
    description: 'Leverage the power of Bitcoin + Health Care Crowdfunding to put decisions about your health back in your hands.',
    locales: [Locale.US],
    categories: [ServiceCategory.Medical]
  }
];
