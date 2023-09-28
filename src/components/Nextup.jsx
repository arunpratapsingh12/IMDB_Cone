import { Typography, Box, styled } from "@mui/material";
import PropTypes from "prop-types";

const Component = styled(Box)`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 20px;
  & > p {
    color: #f5c518;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Wrapper = styled(Box)`
  color: #ffffff;
  display: flex;
  & > p {
    margin-left: 20px;
  }
`;

const Poster = styled("img")({
  width: 80,
});

const UpNext = ({ movies }) => {
    // console.log(movies[0].original_title);
  return (
    <Component>
      <Typography>Up next</Typography>
      {movies.splice(0, 3).map((movie) => (
        <Wrapper key={movie.id}>
          <Poster
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="poster"
          />
          <Typography>{movie.original_title}</Typography>
        </Wrapper>
      ))}
    </Component>
  );
};

UpNext.propTypes = {
  movies: PropTypes.array.isRequired, // You can specify the exact PropTypes for movies here
};

export default UpNext;
