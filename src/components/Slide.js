import { useEffect, useState } from "react";
import MovieSlide from "../render/MovieSlide";
import styles from "./Slide.module.css";
import Load from "../components/Load";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretSquareLeft } from "@fortawesome/free-solid-svg-icons";
// import { faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";

//Home slide show
function Slide({ ytsApi }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [trans, setTrans] = useState(0);

  //onClick: 버튼을 터치하면 함수 실행, 460px trans
  //460px : 한 Container는 230px 이므로 두개의 컨테이너 슬라이드
  // >= 0 : 오른쪽의 끝
  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans((current) => current + 460);
  };

  // -1380 : 230 *6, 버튼은 세 번만 클릭될 수 있음
  const onClickR = () => {
    if (trans <= -1380) {
      return;
    }
    setTrans((current) => current - 460);
  };

  // ytsApi를 Home.js에서 받아옴. 그룹 이름별로 분리되어있음
  const getMovies = async () => {
    const json = await (await fetch(ytsApi)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.slide_show}>
        {/* 로딩이 끝나면 Rendering */}
        {loading ? (
          <Load />
        ) : (
          <div
            className={styles.slides}
            style={{ transform: `translateX(${trans}px)` }}
          >
            {movies.map((movie) => {
              if (movie.medium_cover_image != null) {
                return (
                  <MovieSlide
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    rating={movie.rating}
                    runtime={movie.runtime}
                    title={movie.title}
                  />
                );
              }
            })}
          </div>
        )}
      </div>

      {/* FontAwesome 버튼 */}
      {loading ? null : (
        <div className={styles.controller}>
          <button className={styles.left} onClick={onClickL}>
            {/* <FontAwesomeIcon icon={faCaretSquareLeft}></FontAwesomeIcon> */}
          </button>
          <button className={styles.right} onClick={onClickR}>
            {/* <FontAwesomeIcon icon={faCaretSquareRight}></FontAwesomeIcon> */}
          </button>
        </div>
      )}
    </div>
  );
}

export default Slide;
