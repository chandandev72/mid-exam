import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import Courses from "./Courses";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <Hero />
      <Courses data={courses} />
    </div>
  );
};

export default Home;
