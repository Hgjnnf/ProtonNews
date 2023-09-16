import Image from 'next/image';
import ProtonLogo from '../../public/protonnews.svg'
import { TypeWriter } from "@/components/TypeWriter";
import Navbar from '@/components/Navbar';
import { Introduction } from '@/components/Introduction';
import { Links } from '@/components/Links';
import { NewsContainer } from "@/components/NewsContainer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <div className='w-full flex justify-center'>
        <NewsContainer />
      </div>
      {/* <Links /> */}
    </>
  )
}
