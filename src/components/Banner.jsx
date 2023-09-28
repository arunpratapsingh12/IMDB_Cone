
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";

const responsive = {
  
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

 const StyledBanner = styled('img')({
   width: '100%',
   marginTop:'0%'
 })

const StyledBox = styled(Box)`
  margin-top: "0px" !important;
  background: "green" !important;
`;
 

const Banner = ({ movies }) => {
   
    
  return (
    <StyledBox style={{ width: "55%" }}>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="react-multi-carousel-list"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        style={{ overflow: "visible" }}
      >
        
        {movies.map((movie) => (
          <StyledBanner
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          />
        ))}
      </Carousel>
    </StyledBox>
  );
};

Banner.propTypes = {
  movies: PropTypes.array.isRequired, // You can specify the exact PropTypes for movies here
};


export default Banner;
