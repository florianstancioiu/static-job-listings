import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Job from "./components/Job/Job";
import availableJobs from "../public/data.json";

const App = () => {
  return (
    <>
      <Header />
      <main className="px-6">
        <Filters />
        {availableJobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </main>
    </>
  );
};

export default App;
