import { Link } from "react-router-dom";

const ViewWorks = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6 overflow-hidden">
      <Link
        to="/works"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >
        View All Works
      </Link>
    </section>
  );
};

export default ViewWorks;
