/* eslint-disable no-unused-vars */
import FeaturedCourses from "./FeaturedCourses";
import Categories from "./Categories";
import Hero from "../components/Hero/Hero";
import Reviews from "../components/Reviews/Reviews";
import LearningProcess from "../components/LearningProcess/LearningProcess";
import Benefits from "../components/Benefits/Benefits";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <Categories />
      <LearningProcess />
      <Benefits />
      <Reviews />
    </>
  );
};

export default Home;
