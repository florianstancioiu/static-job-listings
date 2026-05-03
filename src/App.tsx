import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Job from "./components/Job/Job";
import { useFiltersContext } from "./store/FiltersContext";
import availableJobs from "./data.json";
import { type JobProps } from "./components/Job/Job";

const App = () => {
  const [filteredJobs, setFilteredJobs] = useState<JobProps["job"][]>([]);
  const { filters } = useFiltersContext();

  const getJobTags = (job: JobProps["job"]) => {
    return [job.role, job.level, ...job.languages, ...job.tools];
  };

  useEffect(() => {
    const actualFilters = filters.map((item) => item.title);

    const getFilteredJobs = () => {
      if (actualFilters.length === 0) {
        setFilteredJobs(availableJobs);
        return;
      }

      setFilteredJobs(
        availableJobs.filter((job) => {
          const jobTags = getJobTags(job);

          return actualFilters.every((item) => jobTags.includes(item));
        }),
      );
    };

    getFilteredJobs();
  }, [JSON.stringify(filters)]);

  return (
    <>
      <Header />
      <main className="px-6 relative md:w-2xl md:mx-auto md:px-0 xl:w-278">
        <Filters />
        <div className="md:grid grid-cols-2 gap-x-4 xl:grid-cols-1">
          {filteredJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
