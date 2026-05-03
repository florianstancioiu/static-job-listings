import { useEffect, useState } from "react";

import { useFiltersContext } from "../store/FiltersContext";
import availableJobs from "../data.json";
import { type JobProps } from "../components/Job/Job";

const useFilteredJobs = () => {
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

  return {
    filteredJobs,
  };
};

export default useFilteredJobs;
