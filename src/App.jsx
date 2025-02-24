import { Header } from './components/Header/Header'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

function App() {

  return (
    <>
    <TonConnectUIProvider 
      manifestUrl="http://w00xy.github.io/ton-connect-react/tonconnect-manifest.json"
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/testing_ton_draindssd_bot/testing_ton_connnect'
      }}
    >
     <Header />
    </TonConnectUIProvider>
    </>
  )
}

export default App
