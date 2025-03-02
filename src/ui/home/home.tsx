import CardWork from "@/components/card_work/card_work";
import portfolioWork from "@/data/portfolio_working";
import CardProject from "@/components/card_project/card_project";
import portfolioProject from "@/data/portfolio_project";
import {FaInstagram, FaLinkedin} from "react-icons/fa";


const HomePage = () => {
    return (
        <div
            className={'lg:relative p-[20px] lg:p-0 lg:px-[6rem] gap-[20px] lg:flex mx-auto min-h-screen max-w-screen-xl'}>
            <header
                className={' lg:sticky top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'}>
                <div>
                    <p className={'text-4xl font-[800] text-black-heading'}>Deny Wijaya</p>
                    <p className={'text-lg mt-3 font-[600] text-black-heading'}>FrontEnd Developer</p>
                    <p className={'mt-4 text-black-text'}>Crafting seamless frontend experiences</p>
                </div>
                <div className={'flex gap-[10px] text-black-heading mt-[20px]'}>
                    <a href="https://www.linkedin.com/in/denywijaya14/"><FaLinkedin size={24}/></a>
                    <a href="https://www.instagram.com/denyekayana/"><FaInstagram size={24}/></a>
                </div>
            </header>
            <main className={'lg:w-1/2 py-[6rem]'}>
                <section className={'mb-[9rem] text-black-text'}>
                    <p>
                        Hi, my name Deny Wijaya, a passionate Frontend Developer with 4 years of experience.
                        My main stack includes React, TypeScript, and Tailwind CSS. I currently expanding
                        my skill set by learning Flutter and Dart for mobile development. I love crafting seamless and
                        efficient user experiences, and I always eager to take on new challenges and improve my
                        skills.
                    </p>
                </section>
                <section className={'flex flex-col gap-5 mb-[5rem]'}>
                    <div className={'flex items-center gap-[20px]'}>
                        <p className={'text-[18px] font-[800]'}>Experience</p>
                        <hr className={'border-[0.5px] border-solid w-full text-black-text opacity-50'}/>
                    </div>
                    {portfolioWork.map((item, index) => (
                        <CardWork key={index} startYear={item.start_date} endYear={item.end_date} title={item.title}
                                  description={item.description}/>
                    ))}
                </section>
                <section className={'flex flex-col gap-5'}>
                    <div className={'flex items-center gap-[20px]'}>
                        <p className={'text-[18px] font-[800]'}>Projects</p>
                        <hr className={'border-[0.5px] border-solid w-full text-black-text opacity-50'}/>
                    </div>
                    {portfolioProject.map((item, index) => (
                        <CardProject key={index} title={item.title} description={item.description}/>
                    ))}
                </section>
            </main>
        </div>

    )
}

export default HomePage