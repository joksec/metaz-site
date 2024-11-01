'use client'
import { redirect } from "next/navigation"

export default function ServiceSlugRedirect({ params }) {
    const { slug } = params || {}
    if (!slug) {
        redirect("/services")
    }
    redirect(`/service-details/${slug}`)
}

