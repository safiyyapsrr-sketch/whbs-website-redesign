// ─── REACT ICONS EXPORTS ──────────────────────────────────────────────────
export { FaTwitter, FaPinterest, FaFlickr, FaLink, FaWordpress, FaLinkedin, FaYoutube } from 'react-icons/fa'

// ─── CUSTOM SVG ICONS ─────────────────────────────────────────────────────

export function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={`w-[14px] h-[14px] ${className}`}
      aria-hidden="true"
    >
      <path d="M1 7h12M7 1l6 6-6 6" />
    </svg>
  )
}

export function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      className={`w-[11px] h-[11px] ${className}`}
      aria-hidden="true"
    >
      <path d="M2 6l3 3 5-5" />
    </svg>
  )
}

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-[18px] h-[18px] ${className}`}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="8" height="8" rx="2" fill="white" />
      <rect x="13" y="3" width="8" height="8" rx="2" fill="rgba(255,255,255,0.5)" />
      <rect x="3" y="13" width="8" height="8" rx="2" fill="rgba(255,255,255,0.5)" />
      <rect x="13" y="13" width="8" height="8" rx="2" fill="white" />
    </svg>
  )
}

export function PhoneIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 h-4 ${className}`}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function EmailIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 h-4 ${className}`}
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export function ClockIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 h-4 ${className}`}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export function MapPinIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 h-4 ${className}`}
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function LinkedInIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 h-4 ${className}`}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function TwitterIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 h-4 ${className}`}
      aria-hidden="true"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  )
}

export function YouTubeIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 h-4 ${className}`}
      aria-hidden="true"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2a29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  )
}

export function XIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-4 h-4 ${className}`}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function PinterestIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-4 h-4 ${className}`}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.62 11.16-.1-.95-.2-2.4.04-3.44.22-.94 1.4-5.95 1.4-5.95s-.36-.72-.36-1.78c0-1.67.97-2.92 2.18-2.92 1.03 0 1.52.77 1.52 1.7 0 1.03-.66 2.58-1 4.02-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.52 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.45 2.57-5.45 5.23 0 1.04.4 2.15.9 2.75.1.12.11.23.08.35-.1.38-.3.1.86.35-.4-.14-.52-.2-.55-.3-.38-.45-.63-1.07-.63-2.25 0-3.66 2.66-7.03 7.68-7.03 4.03 0 7.17 2.87 7.17 6.72 0 4.01-2.52 7.23-6.02 7.23-1.18 0-2.28-.61-2.66-1.33 0 0-.58 2.22-.72 2.76-.26 1.01-.97 2.28-1.45 3.06C9.57 23.77 10.77 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
    </svg>
  )
}

export function FlickrIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-4 h-4 ${className}`}
      aria-hidden="true"
    >
      <circle cx="6" cy="12" r="5" />
      <circle cx="18" cy="12" r="5" />
    </svg>
  )
}

export function DeliciousIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-4 h-4 ${className}`}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="9" height="9" />
      <rect x="13" y="13" width="9" height="9" />
      <rect x="13" y="2" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="2" y="13" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function WordPressIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-4 h-4 ${className}`}
      aria-hidden="true"
    >
      <path d="M12.158 12.786l-2.698 7.84c.806.236 1.657.365 2.54.365a8.955 8.955 0 0 0 3.8-.846c-.11-.2-.206-.414-.287-.64l-2.22-6.082-1.135-.637zm1.163-5.263c0-.62-.222-1.053-.412-1.393-.254-.432-.49-.804-.49-1.24 0-.494.38-.957.915-.957.043 0 .083.007.126.012a9.015 9.015 0 0 0-3.328-.636c-1.385 0-2.88.45-2.88 1.95 0 .584.267.973.513 1.393.254.432.553.864.553 1.24 0 .466-.233.916-.677.916a2.112 2.112 0 0 1-.41-.044c-.698 1.706-1.08 3.578-1.08 5.54 0 1.258.26 2.457.728 3.546l3.413-9.522 1.344.664zm7.59 4.398c-.015-.098-.052-.187-.098-.27l-2.072 5.674c-.053.155-.1.316-.14.48a9.01 9.01 0 0 0 2.31-5.884zm-1.89-5.463c-.117-.184-.234-.41-.234-.637 0-.444.38-.804.804-.804.09 0 .174.018.254.045a9.006 9.006 0 0 0-4.307-2.31 3.514 3.514 0 0 0-.455.518l-3.35 9.208 4.29 11.66c1.19-.942 2.164-2.168 2.822-3.576l.18-.54zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  )
}


