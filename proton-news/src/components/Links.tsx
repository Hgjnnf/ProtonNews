import Image from 'next/image';
import { Merienda} from "@next/font/google"
import cohere from '../../public/cohere.svg'
import cockroach from '../../public/cockroach.png'

const greatVibes = Merienda({
    subsets: ['latin'],
    weight: '300',
})

export function Links() {
    return <>
    {/* bg-[#003809] */}
     {/* text-[#f5e2b3] */}
        <div className="flex mt-5 justify-center">
            <div className="flex w-3/4 flex-col">
                <p className={`${greatVibes.className}`}> A Hack The North project powered by </p>
                <Image 
                    priority
                    src ={cohere}
                    alt='Proton News'
                    className='mx-5 scale-50'
                />
                <Image 
                    priority
                    src ={cockroach}
                    alt='Proton News'
                    className='scale-50'
                />
            </div>
        </div>
    </>
}