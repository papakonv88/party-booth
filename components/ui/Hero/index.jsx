const Hero = () => (
    <section>
        <div class="relative">
            <video id="background-video" className="w-full md:h-auto h-[100%] max-h-full max-w-full object-cover" loop autoPlay muted>
                <source src="hero_video.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="custom-screen py-48 text-gray-600">
                <div className="space-y-5 max-w-8xl mx-auto text-center">
                    <h1 className="text-2xl text-white font-extrabold mx-auto md:text-4xl lg:text-6xl">
                        PhotoBoost your upcoming Event
                    </h1>
                    <p className="md:text-2xl text-1xl max-w-2xl mx-auto text-white">
                        Capture your favorite moments with our amazing photobooth equipment
                    </p>
                    {/*    <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/get-started"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        Start building
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="text-gray-700 border hover:bg-gray-50"
                        scroll={false}
                    >
                        Learn more
                    </NavLink>
                </div>*/}
                </div>
            </div>
        </div>
    </section>
)

export default Hero
