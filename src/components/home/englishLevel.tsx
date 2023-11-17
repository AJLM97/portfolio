'use client'

import { useTranslations } from "next-intl";

const EnglishLevel = () => {
    const t = useTranslations('Home');
    return (
        <div className="relative row-start-3 cursor-pointer aspect-square transition-margin duration-200 hover:m-[-0.25rem]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full rounded-lg bg-gradient-to-tr from-orange-500 to-amber-500 text-white">
                <foreignObject width="100%" height="100%">
                    <a href="https://www.efset.org/cert/ic6jZH" target="_blank">
                        <div className="flex flex-col justify-center items-center h-full text-center">
                            <div className="text-sm font-medium uppercase">{t("efSet")}</div>
                            <div className="text-8xl font-bold">C1</div>
                            <div className="text-sm font-medium">EF SET</div>
                        </div>
                    </a>
                </foreignObject>
            </svg>
        </div>
    );
};

export default EnglishLevel;