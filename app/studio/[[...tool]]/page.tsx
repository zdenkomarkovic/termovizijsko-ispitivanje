'use client'

import { useEffect, useState } from 'react'
import type { ComponentType } from 'react'
import config from '../../../sanity.config'

type StudioProps = { config: typeof config }

export default function StudioPage() {
  const [Studio, setStudio] = useState<ComponentType<StudioProps> | null>(null)

  useEffect(() => {
    import('sanity').then(({ Studio }) => {
      setStudio(() => Studio)
    })
  }, [])

  if (!Studio) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        color: '#666',
      }}>
        Učitavanje Studio-a...
      </div>
    )
  }

  return <Studio config={config} />
}
