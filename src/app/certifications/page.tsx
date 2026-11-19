import { redirect } from 'next/navigation'
// Certifications page removed per site architecture decision
// Standards information now appears within the About page and service pages
export default function CertificationsPage() {
  redirect('/about')
}
