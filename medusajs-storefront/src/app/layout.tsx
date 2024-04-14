import { Metadata } from "next"
import { Open_Sans, Roboto_Mono } from "next/font/google"
import { CSPostHogProvider } from "./providers"
import "styles/globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  //👇 Add variable to our object
  variable: "--font-opensans",
})

//👇 Configure the object for our second font
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-mode="light"
      className={`${openSans.variable} ${robotoMono.variable} font-sans`}
    >
      <CSPostHogProvider>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Modesty</title>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
          <main className="relative">{props.children}</main>
        </body>
      </CSPostHogProvider>
    </html>
  )
}
