import Image from "next/image";
import destar from "@/assets/icon/destar-nobg.png"
import urban from "@/assets/icon/urban-nobg.png"
import aksara from "@/assets/icon/aksara-nobg.png"

import {Chips, ChipsSmall} from "@/ui/v3/components/chips";
import Card from "@/ui/v3/components/card";

import dinaran from "@/assets/img/dinaran.png";
import bbp from "@/assets/img/bbp.png";
import clinic from "@/assets/img/clinic.png";
import hairkatz from "@/assets/img/hairkatz.png";

import {IoMdMail} from "react-icons/io";
import {FaGithub, FaLinkedin, FaReact} from "react-icons/fa";
import {SiFlutter, SiTypescript} from "react-icons/si";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {AiOutlineMoon} from "react-icons/ai";
import {MdOutlineWbSunny} from "react-icons/md";


import {useEffect, useState} from "react";
import useDarkMode from "@/hook/dark_mode";


const HomePage3 = () => {
    const [isDark, setIsDark] = useDarkMode();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={"max-w-2xl mx-auto px-6 py-24 flex flex-col gap-10 bg-white dark:bg-primary"}>
            <header
                className={`duration-500 ease-out delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className={'den-title'}>Hi, I`m Deny Wijaya</h1>
                <h2 className={'den-subtitle'}>Frontend Engineer</h2>
            </header>

            {/*ABOUT*/}
            <section
                className={`flex flex-col gap-1 transform transition-all duration-500 ease-out delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <h3 className={'den-heading'}>About</h3>
                <p className={'den-heading-item'}>Professional coder that love solving problem with
                    simplicity. Passionate researching FrontEnd technology and AI products.
                    Currently, I’m collaborating with my team on <a
                        className={'text-primary dark:text-white font-medium'}
                        href="https://hairkatz.com/home">Hairkatz</a> which
                    is our own digital product.
                </p>
            </section>

            {/*WORK EXPERIENCE*/}
            <section
                className={`flex flex-col gap-1 transform transition-all duration-500 ease-out delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className={'den-heading'}>Experience</h3>
                <div className={'flex flex-col gap-y-4'}>
                    <div className={'flex gap-4 items-center'}>
                        <div>
                            <Image src={aksara} alt="destar"
                                   width={40}
                                   height={40}
                            />
                        </div>
                        <div>
                            <h4 className={'font-poppins text-sm font-medium text-primary dark:text-white'}>Aksara
                                Algoritma Nusantara</h4>
                            <p className={'den-heading-item'}>2021 - Present</p>
                        </div>
                    </div>
                    <div className={'flex gap-4 items-center'}>
                        <div>
                            <Image src={urban} alt="destar"
                                   width={40}
                                   height={40}
                            />
                        </div>
                        <div>
                            <h4 className={'font-poppins text-sm font-medium text-primary dark:text-white'}>Urban Beauty
                                Indonesia</h4>
                            <p className={'den-heading-item'}>2019 - Present</p>
                        </div>
                    </div>
                    <div className={'flex gap-4 items-center'}>
                        <div>
                            <Image src={destar} alt="destar"
                                   width={40}
                                   height={40}
                            />
                        </div>
                        <div>
                            <h4 className={'font-poppins text-sm font-medium text-primary dark:text-white'}>Destar
                                Studio</h4>
                            <p className={'den-heading-item'}>2018 - 2019</p>
                        </div>

                    </div>

                </div>
            </section>


            {/*SKILLS*/}
            <section
                className={`flex flex-col gap-1 duration-500 ease-out delay-[400ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className={'den-heading'}>Skills</h3>
                <div className={'flex flex-wrap gap-2'}>
                    <Chips icon={<FaReact className={'text-primary dark:text-white'}/>} text={'React'}/>
                    <Chips icon={<SiTypescript className={'text-primary dark:text-white'}/>}
                           text={'Typescript'}/>
                    <Chips icon={<SiFlutter className={'text-primary dark:text-white'}/>}
                           text={'Flutter'}/>
                    <Chips icon={<RiNextjsFill className={'text-primary dark:text-white'}/>}
                           text={'Next'}/>
                    <Chips icon={<RiTailwindCssFill className={'text-primary dark:text-white'}/>}
                           text={'Tailwind'}/>
                </div>
            </section>

            {/*WORKS*/}
            <section
                className={`flex flex-col gap-1 duration-500 ease-out delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                <h3 className={'den-heading'}>Check Out My Works</h3>
                <h4 className={'den-heading-item'}>This is my work that I`ve been choosen</h4>
                <div className={'grid sm:grid-cols-2 grid-cols-1 gap-2 mt-2'}>
                    <Card
                        type={'Mobile App'}
                        image={hairkatz}
                        title={'Hairkatz'}
                        description={"A booking application that connects customers with capsters. It features AI-powered booking to make the process easier for customers."}>
                        <ChipsSmall text={'Flutter'}/>
                        <ChipsSmall text={'Dart'}/>
                    </Card>

                    <Card
                        type={'Web'}
                        image={dinaran}
                        title={'Dinaran Gold'}
                        description={"Gold investment platform allowing users to buy and sell gold with various features. My team managed the entire mobile, web, backend, and DevOps systems, and I'm responsible on build their web dashboard."}>
                        <ChipsSmall text={'React'}/>
                        <ChipsSmall text={'Tailwind'}/>
                        <ChipsSmall text={'Typescript'}/>
                    </Card>

                    <Card
                        type={'Mobile App'}
                        image={bbp}
                        title={'Bali Bird Park App'}
                        description={'A mobile app for tour guides assisting visitors to the Bali Bird Park. The app tracks points earned by guides for each visitor they accompany.'}>
                        <ChipsSmall text={'Flutter'}/>
                        <ChipsSmall text={'Dart'}/>
                        <ChipsSmall text={'Firebase'}/>
                    </Card>

                    <Card
                        type={'Web'}
                        image={clinic}
                        title={'MK Skin Clinic POS'}
                        description={'POS system was developed to streamline patient treatment bookings, tailored specifically to MS Glow Aesthetic Clinic’s requirements by adapting their existing manual system into a computerized solution.'}>
                        <ChipsSmall text={'Next'}/>
                        <ChipsSmall text={'Tailwind'}/>
                        <ChipsSmall text={'Typescript'}/>
                    </Card>


                </div>
            </section>

            <section
                className={`flex justify-center flex-col items-center mt-20 duration-500 ease-out delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className={'den-title'}>Work with me</h1>
                <h2 className={'den-subtitle'}>Let’s chat! →</h2>
                <p className={'den-heading-item mt-3'}>Or just say hi, I don’t bite (unless you’re a taco). 🌮</p>
            </section>

            {/*NAVBAR STICKY*/}
            <div className={'flex justify-center'}>
                <div
                    className="fixed bottom-3 z-50 bg-white p-3 shadow-md flex gap-2 justify-center rounded-xl border border-border">
                    <a href="https://www.linkedin.com/in/denywijaya14/" target={'_blank'}>
                        <div className={'hover:bg-border rounded-full text-primary transition duration-300'}>
                            <FaLinkedin className="text-primary p-2 text-[32px]"/>
                        </div>
                    </a>

                    <a href="https://github.com/deny-wijaya" target={'_blank'}>
                        <div className={'hover:bg-border rounded-full text-primary transition duration-300'}>
                            <FaGithub className="text-primary p-2 text-[32px]"/>
                        </div>
                    </a>

                    <a href="mailto:denyekayana@gmail.com">
                        <div className={'hover:bg-border rounded-full text-primary transition duration-300'}>
                            <IoMdMail className="text-primary p-2 text-[32px]"/>
                        </div>
                    </a>

                    <div className="w-[2px] h-full bg-primary"></div>

                    {isDark ?
                        <div className={'hover:bg-border rounded-full text-primary transition duration-300'}
                             onClick={() => {
                                 setIsDark(!isDark)
                             }}>
                            <AiOutlineMoon className="text-primary p-2 text-[32px]"/>
                        </div>
                        :
                        <div className={'hover:bg-border rounded-full text-primary transition duration-300'}
                             onClick={() => {
                                 setIsDark(!isDark)
                             }}>
                            <MdOutlineWbSunny className="text-primary p-2 text-[32px]"/>
                        </div>
                    }

                </div>
            </div>

        </div>
    )
}

export default HomePage3