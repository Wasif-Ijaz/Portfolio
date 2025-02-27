import { useState, useEffect } from 'react';
import Job from './Job';
import Spinner from './Spinner';

const Jobs = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let res = await fetch('/api/works');
        let data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const jobListings = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <section className="bg-gray-300 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Showcase Works'}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobListings.map((job) => (
              <Job key={job._id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Jobs;
