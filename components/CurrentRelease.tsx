import { useEffect, useState } from 'react'

const ZENTRO_API_URL = process.env.NEXT_PUBLIC_ZENTRO_API_URL || 'https://zentro-ide.com'

export function CurrentReleaseVersion() {
  const [version, setVersion] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${ZENTRO_API_URL}/api/v1/releases/latest?platform=windows&arch=amd64&channel=stable`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.version) setVersion(data.version)
      })
      .catch(() => {})
  }, [])

  return <strong>{version ? `v${version}` : 'the latest version'}</strong>
}
