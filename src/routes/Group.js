import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieGroup from "../render/MovieGroup";
import { Link } from "react-router-dom";
import styles from "./Group.module.css";
import Load from "../components/Load";

// 영화 카드들 정렬

const List_arr = [1, 2, 3, 4, 5];

function Group() {
  const { group, page } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
    return;
  }, [group, page]);

  return (
    <div className={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <div className={styles.movies}>
          {/* movies 배열을 순회하면서 각 영화에 대한 정보를 나타내는 MovieGroup 컴포넌트를 렌더링. movie 객체의 속성들을 props로 전달 */}
          {movies.map((movie) => (
            <MovieGroup
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImg={movie.medium_cover_image}
              rating={movie.rating}
              runtime={movie.runtime}
              summary={movie.summary}
              year={movie.year}
            />
          ))}
        </div>
      )}

      {/* loading이 false일 때, 화면 하단에 그룹 목록에 대한 링크를 표시 */}
      {loading ? null : (
        <div className={styles.footer}>
          <div className={styles.list}>
            {/* List_arr 배열을 순회하면서 각 그룹에 대한 링크를 나타내는 Link 컴포넌트를 생성 */}
            {List_arr.map((lst) => {
              // 각 링크의 목적지 경로를 동적으로 생성
              return (
                <Link key={lst} to={`/page/${group}/${lst}`}>
                  {lst}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Group;
