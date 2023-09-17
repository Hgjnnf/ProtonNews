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
}
interface NewsProps {
    news: NewsModel,
    popUp : () => void,
}

function News({news, popUp} : NewsProps) {
    return (
        <div className="w-[25.1rem] h-[18.3rem] rounded-[0.94rem] overflow-hidden bg-white drop-shadow-xl
            hover:cursor-pointer" onClick={popUp}>
            <div className="w-full h-full bg-transparent relative bottom-[4rem]">
                <img src={news.image_url} className="w-full h-full"></img>
                <div className="h-[3.8rem] w-full px-[1.31rem] pt-[0.5rem] pb-[0.2rem] flex flex-col">
                    <h3 className="font-inter font-bold text-[0.8rem]">{news.title}</h3>
                    <div className="flex items-center justify-between mt-auto">
                        <p className="text-[0.6rem] w-[11.3rem] font-inter font-thin truncate">{news.overview}</p>
                        <span className="text-[0.6rem]">{news.rating} <FaRegSmileBeam className="inline"/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function NewsContainer() {
    let samples : NewsModel[] = [
        {
            title : "Canada Won the FIFA Wold Cup for the First Time in History!",
            date : new Date(Date.now()),
            overview : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus enim optio necessitatibus harum sit facere ad excepturi non illo voluptas magni nisi, voluptate sed aliquam nesciunt vero omnis ullam nam!.In an extraordinary turn of events, Canada emerged victorious in the FIFA World Cup, stunning the global soccer community. Their remarkable journey to the top showcased unparalleled teamwork, determination, and skill, as they triumphed against formidable opponents. The celebration across the nation knew no bounds, marking a historic moment in Canadian sports history and uniting the country in a wave of pride and joy.",
            url : "https://www.google.com/",
            image_url : "https://img.uline.com/is/image/uline/S-20102?$Mobile_Zoom$",
            keywords : ["soccer", "football"],
            rating : 8.3,
        },
        {
            title : "Covid19 is officially gone!",
            date : new Date(Date.now()),
            overview : "There are no more masks. The government has burned them all.",
            url : "https://www.google.com/",
            image_url : "https://www.cheo.on.ca/en/resources-and-support/resources/P6221---Isolation-during-Covid/isolation-banner.jpg",
            keywords : ["covid19", "disease"],
            rating : 8.3,
        },
        {
            title : "Covid19 is officially gone!",
            date : new Date(Date.now()),
            overview : "There are no more masks. The government has burned them all.",
            url : "https://www.google.com/",
            image_url : "https://www.cheo.on.ca/en/resources-and-support/resources/P6221---Isolation-during-Covid/isolation-banner.jpg",
            keywords : ["covid19", "disease"],
            rating : 8.3,
        },
        {
            title : "Canada Won the FIFA Wold Cup",
            date : new Date(Date.now()),
            overview : "For the first time ever in the Canadian history, we won!!",
            url : "https://www.google.com/",
            image_url : "https://img.uline.com/is/image/uline/S-20102?$Mobile_Zoom$",
            keywords : ["soccer", "football"],
            rating : 8.3,
        },
        {
            title : "Covid19 is officially gone!",
            date : new Date(Date.now()),
            overview : "There are no more masks. The government has burned them all.",
            url : "https://www.google.com/",
            image_url : "https://www.cheo.on.ca/en/resources-and-support/resources/P6221---Isolation-during-Covid/isolation-banner.jpg",
            keywords : ["covid19", "disease"],
            rating : 8.3,
        },
    ]

    const [isPopped, setIsPopped] = useState(false)
    const [currPopUp, setCurrPopUp] = useState<NewsModel>({} as NewsModel)
    console.log(samples[0].date)
    
    return (
        <>
            <div className="w-[58.8rem] h-[32.8rem] grid grid-cols-2 justify-center gap-x-[5.81rem] gap-y-[2.56rem]
                overflow-y-scroll mt-10">
                {samples.map((sample, idx):JSX.Element => <News key={idx} news={sample} 
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