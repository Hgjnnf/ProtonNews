import Navbar from "@/components/Navbar";
import Image from 'next/image';
import WordDisplay from "@/components/WordDisplay";
import Yoga from '../../../public/yoga.svg';
import Circle from '../../../public/circle.svg';
import NewsAPI from '../../../public/newsapi.svg';
import filter from '../../../public/filter.svg';
import hostimg from '../../../public/host.svg';
import { Bebas_Neue, Roboto} from "@next/font/google";

const Bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
})

const roboto = Roboto({
    subsets: ['latin'],
    weight: '300',
})

const headlines =  ['Post-tropical storm Lee makes N.S. landfall near Bay of Fundy coast',
'Brampton man charged after victim shot multiple times: Peel cops',
, 'Five new daycares in Calgary as E. coli outbreak spreads',
'Police officer injured while responding to assault at Kipling subway station',
"Iran's security forces briefly detain Mahsa Amini's father on anniversary of her death",
'Crash near Laurier closes Waterloo intersection',
'PTI Leader Arrested Again']

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="items-center bg-[#FFBB5C] mt-10">
        <div className={`flex justify-center ${Bebas.className}`}>
            <div className="flex w-3/4 mt-2">
              <h1 className="text-2xl"> News can get overwhelming </h1>
            </div>
        </div>
        <div className="flex justify-center h-40">
            <div className="flex w-2/3 justify-center flex-col">
                <WordDisplay words={headlines as string[]} />
            </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-3/4 mt-4">
          <h1 className={`text-xl ${roboto.className}`}> So we made Proton News </h1>
      </div>
      </div>
      <div className="flex justify-center -mb-32">
        <Image 
                  priority
                  src ={Yoga}
                  alt='Proton News'
                  className='scale-50 -mt-32'
          />
      </div>
      <div className="flex justify-center bg-[#FF9B50]">
        <div className="flex w-3/4 mt-4">
          <h1 className={`text-xl ${roboto.className}`}> News which is always <span className="text-lime-600">positive</span>, like a proton </h1>
        </div>
      </div>
      <div className="flex justify-center bg-[#FF9B50] h-40">
        <Image 
                  priority
                  src ={Circle}
                  alt='Proton News'
                  className='w-20 hover:animate-spin mt-4'
          />
      </div>
      <div className="flex justify-center">
        <div className="flex w-3/4 mt-4">
          <h1 className={`text-xl ${roboto.className}`}> We first get a wide veriety of news from <span className="underline">News API</span> , and perform preliminary filtering to tidy the data. </h1>
      </div>
      </div>
      <div className="flex justify-center h-40">
        <Image 
                  priority
                  src ={NewsAPI}
                  alt='Proton News'
                  className='mt-4 h-44'
          />
      </div>
      <div className="flex justify-center">
        <div className="flex w-3/4 mt-14">
          <h1 className={`text-xl ${roboto.className}`}> We use <span className="underline">cohere</span> to perform sentiment analysis <span className="font-bold italic"> and </span> summarize on news articles and filter
          out negative ones, so you can focus on positive news. </h1>
      </div>
      </div>
      <div className="flex justify-center h-40">
        <Image 
                  priority
                  src ={filter}
                  alt='Proton News'
                  className='h-44'
          />
      </div>
      <div className="flex justify-center">
        <div className="flex w-3/4 mt-14">
          <h1 className={`text-xl ${roboto.className}`}> We store the articles on <span className="underline">CockroachDB</span>, and host it on Next.js </h1>
      </div>
      </div>
      <div className="flex justify-center h-40">
        <Image 
                  priority
                  src ={hostimg}
                  alt='Proton News'
                  className='h-56'
          />
      </div>
      
    </>
  )
}