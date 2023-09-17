"use client"

import { useState } from "react"
import { FaRegSmileBeam } from "react-icons/fa"
import { IoCloseOutline } from "react-icons/io5"
type NewsModel = {
    title: string,
    date: Date,
    overview: string,
    url: string,
    image_url: string,
    keywords: string[],
    rating: number,
    primary_kw: string,
}
interface NewsProps {
    news: NewsModel,
    popUp : () => void,
}

function News({news, popUp} : NewsProps) {
    const placeHolder = "https://149487864.v2.pressablecdn.com/wp-content/uploads/2021/09/News-Placeholder.png"
    return (
        <div className="w-[25.1rem] h-[18.3rem] rounded-[0.94rem] overflow-hidden bg-white drop-shadow-xl
            hover:cursor-pointer" onClick={popUp}>
            <div className="w-full h-full bg-transparent relative bottom-[4rem]">
                <img src={news.image_url || placeHolder} className="w-full h-full"></img>
                <div className="h-[3.8rem] w-full px-[1.31rem] pt-[0.5rem] pb-[0.2rem] flex flex-col">
                    <h3 className="w-[18rem] h-[2rem] font-inter font-bold text-[0.8rem] overflow-y-hidden leading-tight">{news.title}</h3>
                    <div className="flex items-center justify-between mt-auto">
                        <p className="text-[0.6rem] w-[11.3rem] font-inter font-thin truncate">{news.overview}</p>
                        <span className="text-[0.6rem]">{news.rating} <FaRegSmileBeam className="inline"/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface containerProps {
    query : string
}
export function NewsContainer({query} : containerProps) {
    const [data, setData]  = useState<NewsModel[]>([] as NewsModel[])

    const [isPopped, setIsPopped] = useState(false)
    const [currPopUp, setCurrPopUp] = useState<NewsModel>({} as NewsModel)
    const fetchData = async (query: string) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/news?query=" + query) 
            setData(await response.json())
        } catch(err : unknown) {
            console.log(err)
        }
    }
    fetchData(query)
    
    return (
        <>
            <div className="w-[58.8rem] h-[32.8rem] grid grid-cols-2 justify-center gap-x-[5.81rem] gap-y-[2.56rem]
                overflow-y-scroll mt-10">
                {data?.map((sample, idx):JSX.Element => <News key={idx} news={sample} 
                    popUp={() => {setIsPopped(true); setCurrPopUp(sample)}}></News>)}
            </div>
            {/* Pop Up */}
            <div className={"w-screen h-screen flex justify-center content-center \
                bg-[#1a1919a5] absolute top-0 left-0 " + (isPopped ? "block" : "hidden")}>
                <div className={"w-[41.1rem] h-[41.1rem] bg-white mt-[5.06rem]"}>
                    <IoCloseOutline className="ml-auto mr-[0.81rem] mt-[0.75rem] w-[2.4rem] h-[2.4rem] hover:cursor-pointer"
                        onClick={() => setIsPopped(false)}/>
                    {/* Content */}
                    <h1 className="font-inter text-[2.2rem] font-bold text-center leading-tight px-[1.87rem]">{currPopUp.title}</h1>
                    <div className="font-inter flex gap-x-[0.5rem] justify-center">
                        <p>
                            {currPopUp.date?.toLocaleString("en-US", {month:"numeric", day:"numeric", year:"numeric"})}
                            
                        </p>
                        <p>•</p>
                        <p>{currPopUp.rating} rating</p>
                    </div>
                    <div className="w-full h-[21.3rem] text-[1.4rem] text-justify px-[3.37rem] overflow-y-scroll">
                        {currPopUp.overview}
                    </div>
                    <a href={currPopUp.url}>
                        <div className="w-[13.6rem] h-[3.5rem] bg-[#9CB8FF] text-black rounded-[4rem] text-[1.6rem]
                            px-[2.5rem] py-[0.35rem] mx-[13.6rem] mt-[2.5rem]
                            hover:bg-[#B6C8F5] hover:text-white">Learn More</div>
                    </a>
                </div>
            </div>
        </>
    )
}