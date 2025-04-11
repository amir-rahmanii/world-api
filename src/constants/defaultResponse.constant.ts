export const DEFAULT_RESPONSE_JSON_FA = `[{
"id": 364,
"iso2": "ir",
"iso3": "irn",
"name": "ایران",
"flag": "${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}/v1/countries/flag/IR.svg",
"capital": "تهران",
"calling_code": 98,
"continent": "آسیا",
"lat": 32.0,
"long": 53.0
}]` as const satisfies string;

export const DEFAULT_RESPONSE_JSON_EN = `[{
"id": 364,
"iso2": "ir",
"iso3": "irn",
"name": "Iran",
"flag": "${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}/v1/countries/flag/IR.svg",
"capital": "Tehran",
"calling_code": 98,
"continent": "Asia",
"lat": 32.0,
"long": 53.0
}]` as const satisfies string;

export const DEFAULT_RESPONSE_JSON_ARRAY_FA = `[{
"id": 364,
"iso2": "ir",
"iso3": "irn",
"name": "ایران",
"flag": "${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}/v1/countries/flag/IR.svg",
"capital": "تهران",
"calling_code": 98,
"continent": "آسیا",
"lat": 32.0,
"long": 53.0
  },
  {
"id": 368,
"iso2": "iq",
"iso3": "irq",
"name": "عراق",
"flag": "${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}/v1/countries/flag/IQ.svg",
"capital": "بغداد",
"calling_code": 964,
"continent": "آسیا",
"lat": 33.0,
"long": 44.0
  }]` as const satisfies string;
