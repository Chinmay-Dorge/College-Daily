import React from 'react'

const Landing = () => {
    return (
        <div className="bg-gray-800 text-white">
            <nav className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
                <div className="flex items-center">
                    <img src='dist/assets/Logo_white.svg' alt="Logo" className="h-4" />
                </div>
                <ul className="font-montserrat items-center hidden md:flex">
                    <li className="mx-3 ">
                        <a className="growing-underline" href="howitworks">
                            How it works
                        </a>
                    </li>
                    <li className="growing-underline mx-3">
                        <a href="features">Features</a>
                    </li>
                    <li className="growing-underline mx-3">
                        <a href="pricing">Pricing</a>
                    </li>
                </ul>
                <div className="font-montserrat hidden md:block">
                    <button className="mr-6 p-2 border border-white rounded-3xl">Login</button>
                </div>
                <div id="showMenu" className="md:hidden">
                    <img src='dist/assets/logos/Menu.svg' alt="Menu icon" />
                </div>
            </nav>
            <div id='mobileNav' className="hidden px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down">
                <div id="hideMenu" className="flex justify-end">
                    <img src='dist/assets/logos/Cross.svg' alt="" className="h-16 w-16" />
                </div>
                <ul className="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl">
                    <li className="my-6">
                        <a href="howitworks">How it works</a>
                    </li>
                    <li className="my-6">
                        <a href="features">Features</a>
                    </li>
                    <li className="my-6">
                        <a href="pricing">Pricing</a>
                    </li>
                </ul>
            </div>

            <section
                className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
                <div className="md:flex-1 md:mr-10">
                    <h1 className="font-pt-serif text-5xl font-bold mb-7">
                        A headline for your
                        <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
                            cool website
                        </span>
                    </h1>
                    <p className="font-pt-serif font-normal mb-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum
                        tempore consectetur voluptas, cumque nobis laboriosam voluptatem.
                    </p>
                    <div className="font-montserrat">
                        <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
                            Call to action
                        </button>
                        <button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
                            Secondary action
                        </button>
                    </div>
                </div>
                <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
                    <div className="relative">
                        <img src='dist/assets/Highlight3.svg' alt="" className="absolute -top-16 -left-10" />
                    </div>
                    <img src='dist/assets/MacBook Pro.png' alt="Macbook" />
                    <div className="relative">
                        <img src='dist/assets/Highlight2.svg' alt="" className="absolute -bottom-10 -right-6" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing