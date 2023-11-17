'use client'

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

const YearsOld = () => {
    const t = useTranslations('Home');
    const birthdayDate = new Date('1997-06-18');
    const [yearsOld, setYearsOld] = useState(0);

    const calcularEdad = () => {
        const today = new Date();
        const birthday = new Date(birthdayDate);
        const calculatedAge = today.getFullYear() - birthday.getFullYear();
        if (
            today.getMonth() < birthday.getMonth() ||
            (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())
        ) {
            setYearsOld(calculatedAge - 1);
        } else {
            setYearsOld(calculatedAge);
        }
    };

    useEffect(() => {
        calcularEdad();
    }, []);

    return (
        <div className="relative row-start-3 col-start-2 lg:row-start-2 lg:col-start-5 cursor-default aspect-square">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full rounded-lg bg-white text-gray-700 dark:bg-zinc-900 dark:text-gray-400">
                <foreignObject width="100%" height="100%">
                    <div className="flex flex-col justify-center items-center h-full text-center">
                        <div className="text-8xl font-bold">{yearsOld == 0 ? "??": yearsOld}</div>
                        <div className="text-sm font-bold">{t("age")}</div>
                    </div>
                </foreignObject>
            </svg>
        </div>
    );
};

export default YearsOld;