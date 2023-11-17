'use client'

import Link from 'next/link'
import DarkModeSwitch from "./darkModeSwitch";
import { HomeIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl';

const pagesList = [
    {
        "name": "home",
        "url": "",
        "icon": <HomeIcon />
    },
    {
        "name": "projects",
        "url": "projects",
        "icon": <RocketLaunchIcon />
    }
]

const NavBar = () => {
    const pathname = usePathname().slice(4);
    const locale = useLocale();
    const t = useTranslations('NavBar');
    return (
        <div className="grid grid-cols-4 md:grid-cols-12 auto-rows-auto gap-4 opacity-90 mb-4">
            {
                pagesList.map((item) => {
                    return <div key={item.name} className="group relative col-span-2 cursor-pointer transition-margin duration-200 hover:m-[-0.25rem]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 100"
                            className={
                                pathname == item.url ?
                                    "w-full h-full rounded-lg bg-gradient-to-tr from-pink-500 to-rose-500 text-white"
                                    :
                                    "w-full h-full rounded-lg bg-white text-gray-700 dark:bg-zinc-900 dark:text-gray-400 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-rose-500 hover:text-white hover:dark:text-white"
                            }
                        >
                            <foreignObject width="100%" height="100%">
                                <Link href={'/' + locale + "/" + item.url}>
                                    <div className="flex flex-col justify-center items-center h-full text-cente p-2">
                                        {item.icon}
                                        <span
                                            className={
                                                pathname == item.url ?
                                                    'font-bold'
                                                    :
                                                    'hidden group-hover:block font-bold'
                                            }
                                        >
                                            {t(item.name)}
                                        </span>
                                    </div>
                                </Link>
                            </foreignObject>
                        </svg>
                    </div>
                })
            }
            <div className="group relative md:col-start-9 col-span-2 cursor-pointer transition-margin duration-200 hover:m-[-0.25rem]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" className="w-full h-full rounded-lg bg-white text-gray-700 dark:bg-zinc-900 dark:text-gray-400 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-rose-500 hover:text-white hover:dark:text-white">
                    <foreignObject width="100%" height="100%">
                        <Link href={'/' + t("switchLanguage") + '/' + pathname}>
                            <div className="flex flex-col justify-center items-center h-full text-cente p-2 uppercase">
                                <div className="text-7xl font-bold">{locale}</div>
                                <span className='hidden group-hover:block font-bold'>{locale} / {t("switchLanguage")}</span>
                            </div>
                        </Link>
                    </foreignObject>
                </svg>
            </div>
            <DarkModeSwitch />
        </div>
    );
};

export default NavBar;