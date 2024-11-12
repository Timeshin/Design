import { FC, ReactNode } from 'react'

declare global {
  type NextErrorComponent = FC<{
    error: Error & { digest?: string }
    reset: () => void
  }>

  type NextLayout = {
    children: ReactNode
  }

  type NextTemplate = {
    children: ReactNode
  }

  type RequestError = { status: number } | string

  type NextTemplate = FC<{
    children: ReactNode
  }>
}
