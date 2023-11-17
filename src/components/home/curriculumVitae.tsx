'use client'

const CurriculumVitae = () => {
    return (
        <div className="relative row-start-3 cursor-pointer aspect-square transition-margin duration-200 hover:m-[-0.25rem]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full rounded-lg bg-gradient-to-tr from-emerald-500 to-green-500 text-white">
                <foreignObject width="100%" height="100%">
                    <a href="https://docs.google.com/document/d/1kFqbJSxU7nTyn4bjr5_IPkcpIuP2wgWsQpsgRTNzb-s/edit?usp=sharing" target="_blank">
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