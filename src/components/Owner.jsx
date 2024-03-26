import { useContractRead } from 'wagmi'
import { BlockmakerPrestamoDeFiABI } from '../contracts/ABIs/BlockmakerPrestamoDeFiABI'
import { Title } from './ui'

function OwnerSkeleton() {
    return (
        <div className='w-full bg-white border shadow px-3.5 py-5 rounded-md grid gap-2 w:360px sm:w-[469px]'>
            <div className='h-5 bg-gray-300 rounded animate-pulse w-20'></div>
            <div className='h-7 bg-gray-300 rounded animate-pulse'></div>
        </div>
    )
}

export default function Owner() {
    const { data, isLoading } = useContractRead({
        address: import.meta.env.VITE_PRESTAMODEFI_CONTRACT_ADDRESS,
        abi: BlockmakerPrestamoDeFiABI,
        functionName: 'owner'
    })

    if (!isLoading) return <OwnerSkeleton></OwnerSkeleton>
             

    return (
        <section className='flex flex-col before:bg-white border shadow p-4 rounded  w: 360px  sm: w-[469px]'>
            <Title>Owner</Title>
            {isLoading ? <div>Loading...</div> : <p className="text-xs sm:text-sm bg-gray-100 p-2 rounded-md">{data}</p>}
            </section>
    )
}


