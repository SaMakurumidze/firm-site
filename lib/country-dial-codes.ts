export type DialCountry = {
  iso2: string
  dial: string
  name: string
}

/** Lowercase ISO2 for https://flagcdn.com */
export function flagUrl(iso2: string, width: 40 | 24 = 40): string {
  return `https://flagcdn.com/w${width}/${iso2.toLowerCase()}.png`
}

const DIAL_COUNTRIES_UNSORTED: DialCountry[] = [
  { iso2: "zw", dial: "263", name: "Zimbabwe" },
  { iso2: "za", dial: "27", name: "South Africa" },
  { iso2: "bw", dial: "267", name: "Botswana" },
  { iso2: "na", dial: "264", name: "Namibia" },
  { iso2: "mz", dial: "258", name: "Mozambique" },
  { iso2: "zm", dial: "260", name: "Zambia" },
  { iso2: "mw", dial: "265", name: "Malawi" },
  { iso2: "ls", dial: "266", name: "Lesotho" },
  { iso2: "sz", dial: "268", name: "Eswatini" },
  { iso2: "ao", dial: "244", name: "Angola" },
  { iso2: "ke", dial: "254", name: "Kenya" },
  { iso2: "ng", dial: "234", name: "Nigeria" },
  { iso2: "gh", dial: "233", name: "Ghana" },
  { iso2: "tz", dial: "255", name: "Tanzania" },
  { iso2: "ug", dial: "256", name: "Uganda" },
  { iso2: "rw", dial: "250", name: "Rwanda" },
  { iso2: "et", dial: "251", name: "Ethiopia" },
  { iso2: "eg", dial: "20", name: "Egypt" },
  { iso2: "ma", dial: "212", name: "Morocco" },
  { iso2: "tn", dial: "216", name: "Tunisia" },
  { iso2: "dz", dial: "213", name: "Algeria" },
  { iso2: "us", dial: "1", name: "United States" },
  { iso2: "ca", dial: "1", name: "Canada" },
  { iso2: "gb", dial: "44", name: "United Kingdom" },
  { iso2: "ie", dial: "353", name: "Ireland" },
  { iso2: "de", dial: "49", name: "Germany" },
  { iso2: "fr", dial: "33", name: "France" },
  { iso2: "nl", dial: "31", name: "Netherlands" },
  { iso2: "be", dial: "32", name: "Belgium" },
  { iso2: "ch", dial: "41", name: "Switzerland" },
  { iso2: "at", dial: "43", name: "Austria" },
  { iso2: "it", dial: "39", name: "Italy" },
  { iso2: "es", dial: "34", name: "Spain" },
  { iso2: "pt", dial: "351", name: "Portugal" },
  { iso2: "se", dial: "46", name: "Sweden" },
  { iso2: "no", dial: "47", name: "Norway" },
  { iso2: "dk", dial: "45", name: "Denmark" },
  { iso2: "fi", dial: "358", name: "Finland" },
  { iso2: "pl", dial: "48", name: "Poland" },
  { iso2: "ua", dial: "380", name: "Ukraine" },
  { iso2: "in", dial: "91", name: "India" },
  { iso2: "cn", dial: "86", name: "China" },
  { iso2: "jp", dial: "81", name: "Japan" },
  { iso2: "kr", dial: "82", name: "South Korea" },
  { iso2: "au", dial: "61", name: "Australia" },
  { iso2: "nz", dial: "64", name: "New Zealand" },
  { iso2: "ae", dial: "971", name: "United Arab Emirates" },
  { iso2: "sa", dial: "966", name: "Saudi Arabia" },
  { iso2: "br", dial: "55", name: "Brazil" },
  { iso2: "mx", dial: "52", name: "Mexico" },
]

/** Alphabetically by country name (for the contact page picker). */
export const DIAL_COUNTRIES: DialCountry[] = [...DIAL_COUNTRIES_UNSORTED].sort((a, b) =>
  a.name.localeCompare(b.name, "en", { sensitivity: "base" }),
)

export function dialForIso(iso2: string): string | undefined {
  return DIAL_COUNTRIES.find((c) => c.iso2 === iso2)?.dial
}

export function buildE164Phone(iso2: string, nationalDigits: string): string {
  const dial = dialForIso(iso2)
  const digits = nationalDigits.replace(/\D/g, "")
  if (!dial || !digits) return ""
  return `+${dial}${digits}`
}
