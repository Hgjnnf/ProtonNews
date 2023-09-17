import { FaRegSmileBeam } from "react-icons/fa"
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
    news: NewsModel
}

function News({news} : NewsProps) {
    return (
        <div className="w-[25.1rem] h-[18.3rem] rounded-[0.94rem] overflow-hidden bg-white drop-shadow-xl
            hover:cursor-pointer">
            <div className="w-full h-full bg-transparent relative bottom-[4rem]">
                <img src={news.image_url} className="w-full h-full"></img>
                <div className="px-[1.31rem] py-[0.2rem]">
                    <h3 className="font-inter font-bold">{news.title}</h3>
                    <div className="flex items-center justify-between">
                        <p className="w-[11.3rem] font-inter font-thin truncate">{news.overview}</p>
                        <span>{news.rating} <FaRegSmileBeam className="inline"/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function NewsContainer() {
    let samples : NewsModel[] = [
        {
            title : "Canada Won the FIFA Wold Cup",
            date : new Date(Date.now()),
            overview : "For the first time ever in the Canadian history, we won!!",
            url : "trustmebro.com",
            image_url : "https://img.uline.com/is/image/uline/S-20102?$Mobile_Zoom$",
            keywords : ["soccer", "football"],
            rating : 8.3,
        },
        {
            title : "Covid19 is officially gone!",
            date : new Date(Date.now()),
            overview : "There are no more masks. The government has burned them all.",
            url : "trustmebro.com",
            image_url : "https://www.cheo.on.ca/en/resources-and-support/resources/P6221---Isolation-during-Covid/isolation-banner.jpg",
            keywords : ["covid19", "disease"],
            rating : 8.3,
        },
        {
            title : "Covid19 is officially gone!",
            date : new Date(Date.now()),
            overview : "There are no more masks. The government has burned them all.",
            url : "trustmebro.com",
            image_url : "https://www.cheo.on.ca/en/resources-and-support/resources/P6221---Isolation-during-Covid/isolation-banner.jpg",
            keywords : ["covid19", "disease"],
            rating : 8.3,
        },
        {
            title : "Canada Won the FIFA Wold Cup",
            date : new Date(Date.now()),
            overview : "For the first time ever in the Canadian history, we won!!",
            url : "trustmebro.com",
            image_url : "https://img.uline.com/is/image/uline/S-20102?$Mobile_Zoom$",
            keywords : ["soccer", "football"],
            rating : 8.3,
        },
        {
            title : "Covid19 is officially gone!",
            date : new Date(Date.now()),
            overview : "There are no more masks. The government has burned them all.",
            url : "trustmebro.com",
            image_url : "https://www.cheo.on.ca/en/resources-and-support/resources/P6221---Isolation-during-Covid/isolation-banner.jpg",
            keywords : ["covid19", "disease"],
            rating : 8.3,
        },
    ]
    
    return (
        <div className="w-[58.8rem] h-[32.8rem] grid grid-cols-2 justify-center gap-x-[5.81rem] gap-y-[2.56rem]
            overflow-y-scroll mt-10">
            {samples.map((sample):JSX.Element => <News news={sample}></News>)}
        </div>
    )
}