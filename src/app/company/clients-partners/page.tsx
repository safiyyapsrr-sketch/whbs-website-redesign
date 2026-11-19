import { redirect } from 'next/navigation'

// Canonical URL is /partners — redirect here
export default function ClientsPartnersRedirect() {
  redirect('/partners')
}
