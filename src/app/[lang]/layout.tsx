import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Leandro Farias',
  description: 'A simple portfolio made by Leandro Farias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  )
}
