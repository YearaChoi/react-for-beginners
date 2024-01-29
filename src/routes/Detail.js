import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../render/MovieDetail";
import styles from "./Detail.module.css";
import Load from "../components/Load";

// 영화의 세부 정보를 표시하는 페이지
function Detail() {
  // 특정 영화의 세부 정보를 표시하므로, 해당 영화의 고유한 식별자 Id가 필요
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    // 영화 상태 업로드
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  });

  return (
    <div className={styles.container}>
      {loading ? (
        <Load />
      ) : (
        // MovieDetail 컴포넌트를 렌더링하고, 해당 영화의 세부 정보를 movie 상태에서 가져와서 각각의 prop으로 전달
        <MovieDetail
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          rating={movie.rating}
          runtime={movie.runtime}
          description_full={movie.description_full}
          background_image_original={movie.background_image_original}
          title={movie.title}
          genres={movie.genres}
          style_tag="Detail"
        />
      )}
    </div>
  );
}
export default Detail;
