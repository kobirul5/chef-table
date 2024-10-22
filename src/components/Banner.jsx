import BackgroundImage from '../assets/image/chefcover.jpg'
const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen mb-10 rounded-3xl"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                }}>
                <div className="hero-overlay bg-gradient-to-t from-[#150b2be1] rounded-3xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="md:w-9/12">
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">
                            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                        <div className='flex gap-5 justify-center'>
                        <button className="btn bg-green-500 border-none rounded-full px-6">Explore Now</button>
                        <button className="btn bg-[#ffffff00] rounded-full px-6 text-white">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;