'use client'

import React from "react";
import { motion } from "framer-motion"
import { useTheme } from "next-themes";
import '@/styles/darkModeSwitch.css'

const DarkModeSwitch = () => {
    const { theme, setTheme } = useTheme();

    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30,
    }

    return (
        <div className="col-span-2 flex justify-center items-center p-4 rounded-lg bg-white dark:bg-zinc-900">
            <div onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")} className={`flex-start flex h-[50px] w-full rounded-[50px] bg-zinc-200 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 dark:place-content-end place-content-start`}>

                <motion.div
                    className="flex h-[40px] w-[40px] items-center justify-center rounded-full"
                    layout
                    transition={spring}
                >
                    <motion.div whileTap={{ rotate: 360 }}>
                        <div className="flex h-[40px] w-[40px] rounded-full darkmodeswitch"></div>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    )
};

export default DarkModeSwitch;