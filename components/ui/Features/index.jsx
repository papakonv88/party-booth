import SectionWrapper from "../../SectionWrapper"

const Features = () => {

    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0z"/>
                </svg>
            ,
            title: "Capture the Moment",
            desc: "Turn every moment into a memory with our state-of-the-art photobooths. Whether it’s a wedding, corporate event, or birthday party, our booths are designed to capture the joy, laughter, and creativity of your guests. With customizable backdrops, fun props, and instant printing, your event will be unforgettable!"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15.75 8.25v-1.5A2.25 2.25 0 0013.5 4.5h-3a2.25 2.25 0 00-2.25 2.25v1.5m-3 0a2.25 2.25 0 012.25-2.25h12a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 17.25v-9z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3 3-3"/>
                </svg>,
            title: "Share the Fun",
            desc: "Sharing is caring! Our photobooths come equipped with digital sharing options, making it easier than ever for your guests to post their favorite snaps on social media or send them via email. With high-resolution photos and GIFs, your event will be trending in no time!"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M4.5 9.75l7.5-6 7.5 6M4.5 19.5h15m-15 0a2.25 2.25 0 01-2.25-2.25v-9A2.25 2.25 0 014.5 6.75m15 12.75a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25m-15 0h15"/>
                </svg>,
            title: "Hassle-Free Setup",
            desc: "Let us handle the setup while you focus on enjoying your event. Our team provides professional delivery, installation, and on-site assistance to ensure everything runs smoothly. From start to finish, we’ve got you covered—because making memories should be stress-free"
        }
    ]

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600">
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        features.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SectionWrapper>
    )
}

export default Features
