
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ search }) => {
  const movieTab = useSelector((state) => state.NormalReducer.movieTab);
  const starTab = useSelector((state) => state.StarReducer.starTab)
//   const [rate, setRate] = useState(starTab.filter((star) => star.isColored===true).length);

  return (
    <div className="Display ">
      <div className="d-flex  flex-wrap justify-content-around ">
        {movieTab
          .filter(
            (movie) => movie.rating >= starTab.filter((star) => star.isColored===true).length
          )
          .filter((movie) =>
            movie.title.toUpperCase().match(search.toUpperCase())
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
