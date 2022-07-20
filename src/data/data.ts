import { Locale, Service, ServiceCategory } from 'src/components/models';

export const data: Service[] = [
  {
    name: 'Swan Bitcoin',
    url: 'https://swanbitcoin.com/',
    description: 'A simple Bitcoin savings app that does all the work for you.',
    locales: [Locale.USA],
    categories: [ServiceCategory['Fiat Exchange'], ServiceCategory['Education']]
  },
  {
    name: 'Oshi',
    url: 'https://www.oshi.tech/',
    description: 'Oshi is a powerful marketing and rewards platform built to replace stars, punch cards, and coffee points with something that people really want - Bitcoin.',
    locales: [Locale.USA],
    categories: [ServiceCategory['Business Products']]
  },
  {
    name: 'Ibex',
    url: 'https://www.ibexmercado.com/',
    description: 'A Bitcoin payments processor.',
    locales: [Locale.USA, Locale['El Salvador'], Locale.Guatemala],
    categories: [ServiceCategory['Business Products']]
  },
  {
    name: 'Crowd Health',
    url: 'https://www.joincrowdhealth.com/bitcoin',
    description: 'Leverage the power of Bitcoin + Health Care Crowdfunding to put decisions about your health back in your hands.',
    locales: [Locale.USA],
    categories: [ServiceCategory.Medical]
  },
  {
    name: 'Beef Initiative',
    url: 'https://beefinitiative.com/',
    description: 'The Beef Initiative is a trade group focused on decentralizing and making our food supply more localized, redundant and secure, and improving the quality of our food through pure animal protein and sound money, which is a critical input to achieving food security.',
    locales: [Locale.USA],
    categories: [ServiceCategory.Food, ServiceCategory.Education]
  },
  {
    name: 'BTC Pay Server',
    url: 'https://btcpayserver.org/',
    description: 'BTCPay Server is a self-hosted, open-source cryptocurrency payment processor. It\'s secure, private, censorship-resistant and free.',
    locales: [Locale.Global],
    categories: [ServiceCategory['Business Products'], ServiceCategory.Payments]
  },
  {
    name: 'bitrawr',
    url: 'https://www.bitrawr.com/',
    description: 'Bitcoin is everywhere. But how long did it take you to grasp sound money, Austrian economics, blockchain technology, and the failures of central banking?',
    locales: [Locale.Global],
    categories: [ServiceCategory.Education]
  },
  {
    name: 'Machankura',
    url: 'https://8333.mobi/',
    description: 'Machankura is a custodial lightning service that is helping to on board millions of Africans onto the Bitcoin network. We do that by utilizing a common technology here on the continent called USSD. Since most of the population uses feature phones, we thought using the existing USSD technology combined with the lightning network could enable anyone send and receive Bitcoin regardless of the phone used. We are currently operational in 6 different countries; Uganda, South Africa, Kenya, Nigeria, Ghana and Malawi.',
    locales: [Locale.Africa, Locale.Uganda, Locale['South Africa'], Locale.Kenya, Locale.Nigeria, Locale.Ghana, Locale.Malawi],
    categories: [ServiceCategory.Payments, ServiceCategory['Lightning Network']]
  }
];
