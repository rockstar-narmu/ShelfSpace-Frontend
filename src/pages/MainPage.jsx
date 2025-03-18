import React from "react";
import Layout from "../components/Layout";
import ImageSlider from "../components/ImageSlider";
import Categories from "../components/Categries";
import Bestseller from "../components/Bestseller";
import { Merchandise } from "../components/Merchandise";
import Authors from "../components/Author";
import { Genres } from "./Genres";

const MainPage = () => {
  return (
    <Layout>
      < ImageSlider />
      < Categories />
      < Bestseller />
      < Merchandise />
      < Authors />
      < Genres />
    </Layout>
  );
};

export default MainPage;
