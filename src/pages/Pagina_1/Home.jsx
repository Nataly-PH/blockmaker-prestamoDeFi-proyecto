import { useAccount } from "wagmi";
import { LoadingSpinner, ErrorInfo, TextInput, Title } from "../../components/ui";
import { Navbar } from "../../components"

export default function Home() {
    const { address, isConnecting, isDisconnected } = useAccount();
    
    if (isConnecting) return <div>Connecting...</div>;
    if (isDisconnected) return <div>Disconnected</div>;

    return (
        <div className="flex flex-col gap-3">
            <div>Connected Wallet: {address}</div>
            <LoadingSpinner className="h3 w-3"></LoadingSpinner>
            <div>
                <h1 className="text-5xl font-bold underline">Componente Página Home</h1>
                <Navbar></Navbar>
            </div> 
            <ErrorInfo message="Error: Internal Servel Error"></ErrorInfo>

            <div>
                <TextInput></TextInput>
            </div>

            <Title>Este es un titulo de muestra</Title>

        </div>
    )

}



