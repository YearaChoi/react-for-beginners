import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Slide from "../components/Slide";
import { Group_key_arr, Group_obj } from "../atom/NavList";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";

function Home() {
  return (
    <div>
      {/* Group_key_arr 배열을 순회하면서 각 그룹에 대한 내용을 렌더링 */}
      {/* Link 컴포넌트 사용하여 각 그룹에 대한 링크를 생성
      링크를 클릭하면 해당 그룹에 대한 페이지로 이동 */}
      {Group_key_arr.map((group) => {
        return (
          <div key={group}>
            <div className={styles.title}>
              <div className={styles.titleBox}>
                <Link
                  to={`/page/${Group_obj[group]}/1`}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                  }}
                >
                  <div className={styles.titleImg}>
                    {/* <FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon> */}
                  </div>
                  <div>
                    <span>{group}</span>
                  </div>
                </Link>
              </div>
            </div>
            {/* Slide 컴포넌트에 ytsApi prop 전달하여 이미지 슬라이드에 표시할 영화 목록을 가져오는 API의 URL을 동적으로 설정 */}
            <Slide
              ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${Group_obj[group]}&sort_by=rating`}
            />
          </div>
        );
      })}
      <div className={styles.footer}>
        <div className={styles.copyright}>
          <h3 className={styles.copyright_letter}>
            Copyright belongs to Kyungsle
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
