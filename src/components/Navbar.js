import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Group_obj, Group_key_arr } from "../atom/NavList";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState(null);

  // Search Bar을 터치할 때의 event
  const searchClick = (event) => {
    setSearch(event.target.value);
  };

  return (
    // Navigation Bar, 항상 container위에 있음
    <div className={styles.container}>
      {/* 페이지 이름 */}
      <div className={styles.pageName}>
        <Link to={"/"}>Movie Home</Link>
      </div>

      {/* group링크 */}
      <div className={styles.GroupLink}>
        {Group_key_arr.map((key) => {
          return (
            <div className={styles.Link} key={key}>
              <div className={styles.Link_sep}>
                <Link to={`/page/${Group_obj[key]}/1`}>{key}</Link>
              </div>
            </div>
          );
        })}
        {/* 메리크리스마스 생략 */}
      </div>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <div>
          <form>
            {/* search Text */}
            <input
              type="text"
              placeholder="Search Movie"
              value={search}
              onChange={searchClick}
              onMouseOutCapture={() => {
                setSearch("");
              }}
            ></input>
            {/* Search Button */}
            <Link to={`/search/${search}`}>
              <button></button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
