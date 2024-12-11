import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"

const CTA = ({reverse, image, title, description}) => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className={`items-center gap-x-12 lg:flex ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={image} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            {title}
                        </h2>
                        <p className="mt-3 text-gray-600">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA
