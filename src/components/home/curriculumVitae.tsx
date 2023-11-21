'use client'

import { useTranslations } from "next-intl";

const CurriculumVitae = () => {
    const t = useTranslations('Home');
    return (
        <div className="relative row-start-3 cursor-pointer aspect-square transition-margin duration-200 hover:m-[-0.25rem]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full rounded-lg bg-gradient-to-tr from-emerald-500 to-green-500 text-white">
                <foreignObject width="100%" height="100%">
                    <a href={t("cvLink")} target="_blank">
                        <div className="flex flex-col justify-center items-center h-full text-center p-8">
                        <img
                                src="./curriculumVitae.png"
                                alt="Curriculum Vitae"
                                className="w-full p-2"
                            />
                        </div>
                    </a>
                </foreignObject>
            </svg>
        </div>
    );
};

export default CurriculumVitae;