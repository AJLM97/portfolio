'use client'

import React from "react";
import { useDisclosure } from "@nextui-org/react";
import { FaGithub } from 'react-icons/fa';

type ProjectProps = {
    src: string,
    alt: string,
    text: string,
    link: string,
    technologies: string[]
};

const Project: React.FC<ProjectProps> = ({ src, alt, text, link, technologies }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div
                className="relative cursor-pointer aspect-square transition-margin duration-200 hover:m-[-0.25rem] opacity-90"
                onClick={onOpen}>
                <img
                    src={`/projects/${src}`}
                    alt={alt}
                    className="absolute inset-0 w-full h-full rounded-lg object-cover object-center"
                />
            </div>
            {
                isOpen && <div className="absolute z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-sky-100 scrollbar-track-transparent dark:scrollbar-thumb-gray-700 dark:scrollbar-track-transparent">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">

                            <div className="relative transform overflow-hidden rounded-lg bg-white text-gray-700 dark:bg-zinc-900 dark:text-gray-400 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="px-4 pb-4 pt-5 sm:p-4 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="text-center sm:text-left">
                                            <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white" id="modal-title">{alt}</h3>
                                            <div className="mt-2 flex justify-center items-center">
                                                <img
                                                    src={`/projects/${src}`}
                                                    alt={alt}
                                                    className="max-h-lg object-cover object-center"
                                                />
                                            </div>
                                            <div className="mt-2">
                                                <p className="whitespace-pre-line text-sm">{text}</p>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-8">
                                                {technologies.map((item) => {
                                                    return <div key={item} className="cursor-default font-semibold text-sm px-2 py-1 rounded-md bg-neutral-900 text-white dark:bg-gray-100 dark:text-black">{item}</div>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 flex flex-row-reverse gap-4 justify-between sm:px-6 bg-gray-100 dark:bg-neutral-900">
                                    <div className="cursor-pointer inline-flex w-full justify-center rounded-md bg-gradient-to-tr from-pink-500 to-rose-500 hover:from-rose-500 hover:to-pink-500 text-white px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto" onClick={onClose}>Close</div>
                                    <a href={link} target="_blank">
                                        <div className="cursor-pointer inline-flex w-full justify-center rounded-md sm:rounded-full bg-gradient-to-tr from-violet-500 to-purple-500 hover:from-purple-500 hover:to-violet-500 p-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset sm:mt-0 sm:w-auto" onClick={onClose}>
                                            <FaGithub className="text-xl" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Project;