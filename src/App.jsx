import { Header } from './components/Header/Header'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

function App() {

  return (
    <>
    <TonConnectUIProvider manifestUrl="http://w00xy.github.io/ton-connect-react/tonconnect-manifest.json">
     <Header />
    </TonConnectUIProvider>
    </>
  )
}

export default App
