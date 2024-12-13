const Hero = () => (
    <section>
        <div class="relative">
            <video autoplay muted playsinline loop id="background-video" className="w-full md:h-auto h-[100%] max-h-full max-w-full object-cover">
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

                </div>
            </div>
        </div>
    </section>
)

export default Hero
