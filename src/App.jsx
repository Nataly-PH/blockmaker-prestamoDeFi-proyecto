import { ConnectKitProvider } from "connectkit";
import { WagmiConfig } from "wagmi";
import { AppLayout } from "./components/ui/layauts";
import { config } from "./config/wagmi";
import { Home } from "./pages";



function App() {
  
  return ( 
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <AppLayout>
          <Home></Home>
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default App