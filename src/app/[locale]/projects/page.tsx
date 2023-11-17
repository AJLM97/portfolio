import { useLocale } from 'next-intl';
import projects from "@/projects.json";
import Project from '@/components/project';

export default function Projects() {
    const locale = useLocale();
    return (
        <div className="grid grid-cols-3 lg:grid-cols-5 auto-rows-auto gap-4">
            {[...projects].reverse().map((item) => {
                return <Project key={item.name} src={`${item.name}.png`} alt={item.name} text={item.description[locale == "en" ? "en" : "es"]} link={item.github} technologies={item.technologies} />
            })}
        </div>
    );
};