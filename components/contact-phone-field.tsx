"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DIAL_COUNTRIES, flagUrl } from "@/lib/country-dial-codes"
import { cn } from "@/lib/utils"

type ContactPhoneFieldProps = {
  id: string
  countryIso: string
  national: string
  onCountryChange: (iso2: string) => void
  onNationalChange: (value: string) => void
  disabled?: boolean
  required?: boolean
}

export function ContactPhoneField({
  id,
  countryIso,
  national,
  onCountryChange,
  onNationalChange,
  disabled,
  required,
}: ContactPhoneFieldProps) {
  const selected = DIAL_COUNTRIES.find((c) => c.iso2 === countryIso) ?? DIAL_COUNTRIES[0]

  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-medium text-gray-900">
        Phone Number {required ? <span className="text-red-600">*</span> : null}
      </label>
      <div
        className={cn(
          "flex w-full min-w-0 overflow-hidden rounded-lg border border-gray-300 bg-white transition-[color,box-shadow]",
          "focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        <Select value={countryIso} onValueChange={onCountryChange} disabled={disabled}>
          <SelectTrigger
            aria-label="Country calling code"
            className="h-11 min-w-[158px] w-[158px] shrink-0 gap-2 rounded-none border-0 border-r border-gray-200 bg-gray-50 px-2 py-0 shadow-none focus:ring-0 focus-visible:ring-0 data-[size=default]:h-11 sm:min-w-[168px] sm:w-[168px]"
          >
            <SelectValue>
              <span className="flex items-center gap-2 truncate">
                <span className="relative flex h-5 w-7 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-gray-200 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={flagUrl(selected.iso2, 40)} alt="" width={28} height={20} className="h-full w-full object-cover" />
                </span>
                <span className="font-medium tabular-nums text-gray-900">+{selected.dial}</span>
              </span>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="max-h-72" position="popper">
            {DIAL_COUNTRIES.map((c) => (
              <SelectItem key={c.iso2} value={c.iso2} className="cursor-pointer">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-5 w-7 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-gray-200 bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={flagUrl(c.iso2, 40)} alt="" width={28} height={20} className="h-full w-full object-cover" />
                  </span>
                  <span className="tabular-nums text-gray-700">+{c.dial}</span>
                  <span className="truncate text-gray-600">{c.name}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <input
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          id={id}
          name="phoneNational"
          value={national}
          onChange={(e) => onNationalChange(e.target.value.replace(/[^\d\s-]/g, ""))}
          required={required}
          disabled={disabled}
          placeholder="771 234 567"
          className="min-w-0 flex-1 border-0 bg-transparent px-4 py-2.5 text-gray-900 outline-none placeholder:text-gray-400"
        />
      </div>
      <p className="mt-1.5 text-xs text-gray-500">Choose your country code, then enter your number without the leading 0.</p>
    </div>
  )
}
