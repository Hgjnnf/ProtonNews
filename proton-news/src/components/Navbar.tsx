// components/Navbar.tsx
import Link from "next/link";
import Image from 'next/image';
import ProtonLogo from '../../public/protonnews.svg'
import { Roboto} from "@next/font/google"

const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: ['300', '400'],
})

export function Navbar() {
  return (
    <div className={`${roboto.className} flex flex-row justify-center`}>
        <Link href={"/"}>
          <Image 
            priority
            src ={ProtonLogo}
            alt='Proton News'
            className='h-16 p-2 mt-5'
          />
        </Link>
    </div>
  );
};
export default Navbar;