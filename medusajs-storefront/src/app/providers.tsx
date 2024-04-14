"use client"
import React from "react"
import { PostHogProvider } from "posthog-js/react"
import posthog from "posthog-js" // Add missing import statement

// Initialize posthog only in the browser environment
if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  })
}

interface CSPostHogProviderProps {
  children: React.ReactNode
}

export const CSPostHogProvider: React.FC<CSPostHogProviderProps> = ({
  children,
}) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
