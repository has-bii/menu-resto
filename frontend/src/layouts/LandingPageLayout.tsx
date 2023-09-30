import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export default function LandingPageLayout({children}: Props) {
  return (
        <div className="container mx-auto">
          {children}
        </div>
  )
}