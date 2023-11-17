import { useTranslations } from 'next-intl';
import YearsOld from '@/components/home/yearsOld';
import CurriculumVitae from '@/components/home/curriculumVitae';
import SendEmail from '@/components/home/sendEmail';
import EnglishLevel from '@/components/home/englishLevel';
import GithubLink from '@/components/home/githubLink';
import LinkedInLink from '@/components/home/linkedInLink';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 auto-rows-auto gap-4 opacity-90">
      <div className="group relative lg:row-span-2 col-span-3 lg:col-span-4 cursor-default">
        <div className="w-full h-full rounded-lg bg-white text-gray-700 dark:bg-zinc-900 dark:text-gray-400">
          <div className="flex flex-col justify-center h-full p-8 text-left">
            <h2 className='text-5xl font-bold pb-4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent'>{t("greetings")}</h2>
            <p className='whitespace-pre-line text-xl'>{t("aboutMe")}</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative cursor-default aspect-square">
        <img
          src="/me.png"
          alt="Photo of myself"
          className="absolute inset-0 w-full h-full rounded-lg object-cover object-center"
        />
      </div>
      <YearsOld />
      <EnglishLevel />
      <SendEmail />
      <LinkedInLink />
      <GithubLink />
      <CurriculumVitae />
    </div>
  );
};
