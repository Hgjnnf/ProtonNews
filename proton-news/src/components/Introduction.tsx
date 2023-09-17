import { TypeWriter } from "./TypeWriter";

export function Introduction() {
    return <>
        <div className="flex justify-center mt-10">
            <div className="flex w-2/3 text-xl justify-center">
                <h1 className="mx-1"> Get News That Are  </h1>
                <TypeWriter
                text={['Happy', 'Inspirational', 'Positive', 'Blissful', 'Delightful', 'Joyous']} />
            </div>
        </div>
    </>
}