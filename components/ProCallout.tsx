import { Callout } from 'nextra/components'

type ProCalloutProps = {
  /** What the reader gets, e.g. "Schema rollback". Defaults to a generic line. */
  feature?: string
}

/** The one place a Pro feature page points at the trial, so the offer reads the same everywhere. */
export function ProCallout({ feature }: ProCalloutProps) {
  return (
    <Callout type="default" emoji="✦">
      <strong>{feature ? `${feature} is a Pro feature.` : 'Pro feature.'}</strong> Try it free for 30
      days — no credit card. In Zentro, open <strong>Settings → License</strong> and choose{' '}
      <strong>Start 30-day Pro trial</strong>. <a href="/pro/license">How the trial works →</a>
    </Callout>
  )
}
