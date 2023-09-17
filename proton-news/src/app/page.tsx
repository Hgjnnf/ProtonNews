import Image from 'next/image';
import ProtonLogo from '../../public/protonnews.svg'
import { TypeWriter } from "@/components/TypeWriter";
import Navbar from '@/components/Navbar';
import { Introduction } from '@/components/Introduction';
import { Links } from '@/components/Links';
import { NewsContainer } from "@/components/NewsContainer";
import { title } from 'process';
import SearchIcon from '../../public/search.svg'
import Link from 'next/link';

async function createQuery(data:FormData) {
  "use server"

  const query = data.get("query")?.valueOf()
  console.log(query)

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />

      <div className='flex justify-center mt-10'>
        <div className='w-3/4'>
            <form className='flex gap-2 flex-row justify-center' action={createQuery}> 
              <input type="text" name='query' className='border border-slate-500 bg-transparent rounded-full px-2 py-1 outline-none focus-within:border-slate-300 drop-shadow-lg focus-within:bg-slate-100 w-full' placeholder='Search' />
              <div>
                <button type='submit' className='border border-slate-500 text-slate-300 px-2 py-1 hover:bg-slate-100 place-self: end rounded-full h-8 w-8'>
                  <Image 
                    priority
                    src ={SearchIcon}
                    alt='Proton News'
                    className='h-6 w-6'
                  />
                </button>
              </div>
            </form>
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <NewsContainer />
      </div>
      {/* <Links /> */}
    </>
  )
}
