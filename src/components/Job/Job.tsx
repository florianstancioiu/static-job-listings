import Pill from "../UI/Pill/Pill";
import Button from "../UI/Button/Button";
import { useFiltersContext } from "../../store/FiltersContext";

export type JobProps = {
  job: {
    id: number;
    company: string;
    logo: string;
    isNew: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  };
};

const Job = ({ job }: JobProps) => {
  const {
    id,
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const { onAddFilter } = useFiltersContext();

  const articleClasses = `${featured ? "border-green-400" : "border-transparent"} border-l-5 mb-14 px-4 py-4 pt-0 rounded-md shadow-md bg-white xl:px-10 xl:py-8 xl:mb-6`;

  return (
    <article className={articleClasses}>
      <div className="xl:flex xl:justify-between xl:items-center">
        <div className="mb-4 border-b border-gray-300 xl:border-b-0 xl:mb-0 xl:flex">
          <img
            src={logo}
            alt={`${position} at ${company}`}
            className="size-12 rounded-full relative -top-6 -mb-3 xl:top-0 xl:mb-0 xl:size-22 xl:mr-6"
          />
          <div>
            <div className="mb-2 flex gap-x-2 items-center">
              <p className="text-green-400 font-bold text-sm leading-[150%] tracking-[-0.15px] xl:text-lg">
                {company}
              </p>
              {isNew && <Pill>New!</Pill>}
              {featured && <Pill bgColor="bg-green-900">Featured</Pill>}
            </div>
            <h2 className="mb-2 font-bold text-base leading-[150%] tracking-[-0.15px] text-green-900 hover:text-green-400 xl:text-[22px] cursor-pointer">
              {position}
            </h2>
            <ul className="flex gap-x-5 mb-4 items-center text-gray-400 list-disc text-base font-medium leading-[150%] tracking-[-0.15px] xl:mb-0 xl:text-lg">
              <li className="list-none h-5">{postedAt}</li>
              <li className="h-6">{contract}</li>
              <li className="h-6">{location}</li>
            </ul>
          </div>
        </div>
        <ul className="flex gap-2 max-w-full flex-wrap">
          <li>
            <Button
              onClick={() =>
                onAddFilter({ id: `${id}_${role}`, title: role, type: "role" })
              }
            >
              {role}
            </Button>
          </li>
          <li>
            <Button
              onClick={() =>
                onAddFilter({
                  id: `${id}_${level}`,
                  title: level,
                  type: "level",
                })
              }
            >
              {level}
            </Button>
          </li>
          {tools.map((tool) => (
            <li key={tool}>
              <Button
                onClick={() =>
                  onAddFilter({
                    id: `${id}_${tool}`,
                    title: tool,
                    type: "tool",
                  })
                }
              >
                {tool}
              </Button>
            </li>
          ))}
          {languages.map((lang) => (
            <li key={lang}>
              <Button
                onClick={() =>
                  onAddFilter({
                    id: `${id}_${lang}`,
                    title: lang,
                    type: "lang",
                  })
                }
              >
                {lang}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Job;
