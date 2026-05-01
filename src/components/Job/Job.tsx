import Button from "../UI/Button/Button";

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

  const articleClasses = `${featured ? "border-green-400" : "border-transparent"} border-l-4 mb-14 px-4 py-4 pt-0 rounded shadow-md bg-white`;

  return (
    <article className={articleClasses}>
      <div>
        <div className="mb-4 border-b border-[#979797]">
          <img
            src={logo}
            alt={`${position} at ${company}`}
            className="w-12 h-12 rouded-full relative -top-6 -mb-3"
          />
          <div className="mb-2">
            <p className="text-green-400 font-bold text-sm leading-[150%] tracking-[-0.15px]">
              {company}
            </p>
          </div>
          <h2 className="mb-2 font-bold text-base leading-[150%] tracking-[-0.15px] text-green-900">
            {position}
          </h2>
          <ul className="flex gap-x-5 mb-4 items-center text-gray-400 list-disc text-base font-medium leading-[150%] tracking-[-0.15px]">
            <li className="list-none h-5">{postedAt}</li>
            <li className="h-6">{contract}</li>
            <li className="h-6">{location}</li>
          </ul>
        </div>
        <ul className="flex gap-2 max-w-full flex-wrap">
          <li>
            <Button>{role}</Button>
          </li>
          <li>
            <Button>{level}</Button>
          </li>
          {tools.map((tool) => (
            <li key={tool}>
              <Button>{tool}</Button>
            </li>
          ))}
          {languages.map((lang) => (
            <li key={lang}>
              <Button>{lang}</Button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Job;
