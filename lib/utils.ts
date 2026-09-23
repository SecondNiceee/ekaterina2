import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Must match the basePath default in next.config.mjs
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/ekaterina'

export function assetPath(path: string): string {
  return `${basePath}${path.startsWith('/') ? path : '/' + path}`
}
