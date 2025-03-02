import Image from "next/image";
// @ts-ignore
import den from "@/assets/img/den.JPG";
import CardProject2 from "@/components/cards/card_project_2";

const HomePage2 = () => {
    return (
        <div className={'w-full'}>
            {/*<header className="py-[30px] background-light">*/}
            {/*    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between w-full items-center">*/}
            {/*        <h1 className="text-2xl font-bold text-gray-900 w-full">DENY WIJAYA</h1>*/}
            {/*        <nav className="flex justify-end w-full">*/}
            {/*            <ul className={'flex space-x-4'}>*/}
            {/*                <li>*/}
            {/*                    <a href="service.html" className="font-[600]">PROJECTS</a>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <a href="contact.html" className="font-[600]">CONTACT</a>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </nav>*/}
            {/*    </div>*/}
            {/*</header>*/}
            <section className={'background-light'}>
                <div className={'max-w-7xl mx-auto px-4 w-full'}>
                    <div
                        className={'md:text-[120px] lg:text-[170px] xl:text-[230px] font-oswald flex justify-center font-[600]'}>
                        <p>DENY WIJAYA</p>
                    </div>
                    <div className="grid grid-cols-12 max-lg:overflow-hidden lg:gap-6">
                        <div className={'col-span-12 lg:col-span-3'}>
                            <p>
                                Tech Stack
                            </p>
                            <div className={'inline-grid grid-cols-4 gap-1 mt-2'}>
                                <img src={'https://skillicons.dev/icons?i=html'} alt={''}/>
                                <img src={'https://skillicons.dev/icons?i=css'} alt={''}/>
                                <img src={'https://skillicons.dev/icons?i=javascript'} alt={''}/>
                                <img src={'https://skillicons.dev/icons?i=typescript'} alt={''}/>
                                <img src={'https://skillicons.dev/icons?i=tailwind'} alt={''}/>
                                <img src={'https://skillicons.dev/icons?i=react'} alt={''}/>
                                <img src={'https://skillicons.dev/icons?i=next'} alt={''}/>
                                <img src={'https://skillicons.dev/icons?i=vue'} alt={''}/>
                                <img src={'https://skillicons.dev/icons?i=flutter'} alt={''}/>
                            </div>

                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className="hero-image lg:-mt-[100px]">
                                <Image src={den} alt="Den's"
                                       width={500}
                                       height={300}/>
                            </div>
                        </div>
                        <div className={'col-span-12 lg:col-span-3'}>
                            <p>Hi, my name Deny Wijaya, a passionate Frontend Developer with 4 years of experience.
                                My main stack includes React, TypeScript, and Tailwind CSS. I currently expanding
                                my skill set by learning Flutter and Dart for mobile development. I love crafting
                                seamless and
                                efficient user experiences, and I always eager to take on new challenges and improve my
                                skills.</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className={'background-dark'}>
                <div className={'max-w-7xl mx-auto px-4 py-[6rem] w-full'}>
                    <div className={'grid grid-cols-4'}>
                        <div className={'col-span-4 sm:col-span-1 font-oswald text-[24px]'}>
                            <h2 className="about-pre-title">About Me</h2>
                        </div>
                        <div
                            className="col-span-4 sm:col-span-3 about-content-part wow fadeInUp delay-0-2s max-md:px-0">
                            <p>
                                Front-End Developer with over 4 years of experience specializing in React and
                                TypeScript, complemented by 1 year of hands-on expertise in
                                Flutter. Creating intuitive, scalable, and high-performance user interfaces. Proficient
                                in modern web and mobile development technologies,
                                with a strong focus on delivering seamless user experiences. Approach to problem-solving
                                and a commitment to clean, maintainable code.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <section className={'background-light'}>
                <div className={'max-w-7xl mx-auto px-4 py-[6rem]'}>
                    <div className={'font-oswald text-[60px] uppercase font-[500]'}>
                        <h2>Projects</h2>
                    </div>
                    <div className={'flex sm:flex-row flex-col gap-[20px]'}>
                        <div>
                            <CardProject2 title={'Dinaran Gold'} number={1}
                                          body={'Dinaran Gold is a gold investment platform allowing users to buy and sell gold with various features. My team managed the entire mobile, web, backend, and DevOps systems, with the mobile app handling customer transactions and the web admin dashboard supporting staff operations.'}/>
                        </div>
                        <div>
                            <CardProject2 title={'Urban Distribution System'} number={2}
                                          body={'The Urban Distribution System is a semi-ERP solution of high complexity, managing multiple modules such as sales, purchasing, inventory, product bundling, discounts, customer partnerships, and more'}/>
                        </div>
                    </div>
                    <div className={'flex sm:flex-row flex-col gap-[20px] mt-[20px]'}>
                        <div>
                            <CardProject2 title={'Bali Bird Park Travel Agent App'} number={3}
                                          body={'The Bali Bird Park app is a mobile application for tour guides assisting visitors to the Bali Bird Park. The app tracks points earned by guides for each visitor they accompany'}/>
                        </div>
                        <div>
                            <CardProject2 title={'MS Glow Aesthetic Clinic Point of Sales'} number={4}
                                          body={'The MS Glow Clinic POS system was developed to streamline patient treatment bookings, tailored specifically to MS Glow Aesthetic Clinic’s requirements by adapting their existing manual system into a computerized solution'}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'background-dark'}>

                <div className={'max-w-7xl mx-auto px-4 py-[6rem]'}>
                    <div className={'font-oswald text-[60px] uppercase font-[500]'}>
                        <h2>Contact Me</h2>
                    </div>
                    <div className={'pt-[20px] flex justify-between '}>
                        <div className={'flex gap-[50px]'}>
                            <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                            <span className="text-[30px]">
                              <i className="ri-headphone-line"></i>
                            </span>
                                <h2 className={'font-oswald text-[20px] uppercase'}>Phone</h2>
                                <p>+6282247968304</p>
                            </div>
                            <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                            <span className="text-[30px]">
                              <i className="ri-mail-line"></i>
                            </span>
                                <h2 className={'font-oswald text-[20px] uppercase'}>Email me:</h2>
                                <p>denyekayana@mail.com</p>
                            </div>
                        </div>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                            <ul className={'flex gap-[20px]'}>
                                <li className={'text-[30px]'}>
                                    <a href="https://www.linkedin.com/in/denywijaya14/"><i
                                        className="ri-linkedin-fill"></i></a>
                                </li>
                                <li className={'text-[30px]'}>
                                    <a href="https://www.instagram.com/denyekayana/"><i
                                        className="ri-instagram-line"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage2