'use client'

const HenryCertificate = () => {
    return (
        <div className="relative row-start-3 cursor-pointer aspect-square transition-margin duration-200 hover:m-[-0.25rem]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full rounded-lg bg-gradient-to-tr from-gray-900 to-zinc-900 text-white">
                <foreignObject width="100%" height="100%">
                    <a href="https://certificates.soyhenry.com/cert?id=0e94cced-3360-4564-9727-6a515fa89686" target="_blank">
                        <div className="flex flex-col justify-center items-center h-full text-center p-8">
                            <img
                                src="./henry.png"
                                alt="SoyHenry"
                                className="mb-4"
                            />
                            <div className="text-xl font-medium">Full Stack Developer</div>
                        </div>
                    </a>
                </foreignObject>
            </svg>
        </div>
    );
};

export default HenryCertificate;