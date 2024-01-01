
const Navbar = () => {
    return (
        <div className="h-18 w-full bg-[#0f443c] text-white">
            <div className="flex max-w-screen-xl mx-auto justify-between py-2 items-center">
                <div>
                    <button className="font-semibold text-xl">echojobs</button>
                </div>
                <div className="flex gap-14 text-lg leading-none font-normal">
                    <div className="flex gap-10">
                        <button>Search Jobs</button>
                        <button>Blog</button>
                        <button>Communities</button>
                    </div>
                    <div className="flex gap-10 items-center">
                        <div>
                            <button>Login</button>
                        </div>
                        <div>
                            <button className="text-black bg-white py-3 px-7 rounded-3xl font-medium">Post a Job</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar