import { ConnectKitProvider } from "connectkit";
import { WagmiConfig } from "wagmi";
import { AppLayout } from "./components/ui/layauts";
import { config } from "./config/wagmi";
import { InicioYAutenticacion, GestionUsuario, OperacionesDePrestamos } from "./pages";
import { Home } from "./pages/Pagina_1";
import { Routes, Route } from "react-router-dom";



function App() {
  
  return ( 
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <AppLayout>
          <Routes>
            <Route path="/" element={<InicioYAutenticacion></InicioYAutenticacion>}></Route>    
            <Route path="/usuarios" element={<GestionUsuario></GestionUsuario>}></Route>
            <Route path="/prestamos" element={<OperacionesDePrestamos></OperacionesDePrestamos>}></Route>
          </Routes>

          <Home></Home>
      
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default App