import Image from 'next/image';
import ProtonLogo from '../../public/protonnews.svg'
import { TypeWriter } from "@/components/TypeWriter";
import Navbar from '@/components/Navbar';
import { Introduction } from '@/components/Introduction';
import { Links } from '@/components/Links';

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Links />
    </>
  )
}
