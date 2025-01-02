/* eslint-disable no-unused-vars */
import FeaturedCourses from "./FeaturedCourses";
import Categories from "./Categories";
import Hero from "../components/Hero/Hero";
import Reviews from "../components/Reviews/Reviews";
import LearningProcess from "../components/LearningProcess/LearningProcess";
import Benefits from "../components/Benefits/Benefits";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import RecommendedCourses from "./RecommendedCourses";
import PopularCourses from "./PopularCourses";
import FreeCourses from "./FreeCourses";
import RecommendedCategory from "./RecomandedCategory";
const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);

  console.log(isLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Hero />
          <RecommendedCourses />
          <FeaturedCourses />
          <PopularCourses />
          <FreeCourses />
          <RecommendedCategory />
        </div>
      ) : (
        <div>
          <Hero />
          <FeaturedCourses />
          <Categories />
          <LearningProcess />
          <Benefits />
          <Reviews />
        </div>
      )}
    </div>
  );
};

export default Home;
