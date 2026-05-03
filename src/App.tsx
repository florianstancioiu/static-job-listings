import useFilteredJobs from "./hooks/useFilteredJobs";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Job from "./components/Job/Job";

const App = () => {
  const { filteredJobs } = useFilteredJobs();

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
