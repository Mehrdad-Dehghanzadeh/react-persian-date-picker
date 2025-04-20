import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Wrapper } from '@components'
import './styles/index.scss'

createRoot(document.getElementById('root')!).render(<StrictMode>
  <Wrapper />
</StrictMode>)
