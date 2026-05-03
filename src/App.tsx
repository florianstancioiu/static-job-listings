import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Job from "./components/Job/Job";
import availableJobs from "./data.json";

const App = () => {
  return (
    <>
      <Header />
      <main className="px-6 relative">
        <Filters />
        <div className="md:grid grid-cols-2 gap-x-4">
          {availableJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
