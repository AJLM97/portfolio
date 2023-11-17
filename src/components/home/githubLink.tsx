'use client'

import { useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";

const GithubLink = () => {
    const t = useTranslations('Home');
    return (
        <div className="row-start-2 lg:row-start-3 relative cursor-pointer aspect-square transition-margin duration-200 hover:m-[-0.25rem]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full rounded-lg bg-gradient-to-tr from-violet-500 to-purple-500 text-white">
                <foreignObject width="100%" height="100%">
                    <a href="https://github.com/AJLM97" target="_blank">
                        <div className="flex flex-col justify-center items-center h-full text-center">
                            <FaGithub className="text-8xl font-bold" />
                        </div>
                    </a>
                </foreignObject>
            </svg>
        </div>
    );
};

export default GithubLink;