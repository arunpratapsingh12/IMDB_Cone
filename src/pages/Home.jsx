import { useState, useEffect } from "react";
import Header from "../components/common/Header";
import { categoryMovies } from "../services/Api";
import { NOWPLAYING_API_URL } from "../constants/constant";
import { Box } from "@mui/material";
import Banner from "../components/Banner";
import Nextup from "../components/Nextup";
import styled from "@emotion/styled";
import Slides from "../components/StyledBanner";

const Wrapper = styled(Box)`
  display: flex;
  padding: 0px 115px !important;
  ${"" /* padding: 20px 0; */}
`;

// const Components = styled('div')({
//   margin: 0px;
//   backgroundColor:#121212;
// })

const Home = () => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    const get_data = async () => {
      const data = await categoryMovies(NOWPLAYING_API_URL);
      console.log(data.results);
      setmovies(data.results);
      console.log(movies);
    };
    get_data();
  }, []);
  return (
    <div>
      <Header />
      <Wrapper>
        <Banner movies={movies} />
        <Nextup movies={movies} />
      </Wrapper>
      {/* <Slides movies={movies} />
      <Slides movies={movies} />
      <Slides movies={movies} /> */}
      <Slides movies={movies} />
    </div>
  );
};

export default Home;
