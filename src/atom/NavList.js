// Group_obj : 프로젝트에 있는 모든 그룹. (ex: genre=action ...)
// Group_key_arr : Group_obj의 모든 Key들

const Group_obj = {
  "High Rating": "minimum_rating=8",
  Romance: "genre=romance",
  Music: "genre=music",
  Adventure: "genre=adventure",
  Documentary: "genre=Documentary",
  Animation: "genre=animation",
  Family: "genre=Family",
};

// Group_obj 객체의 속성들의 이름을 배열로 가져와서 Group_key_arr 변수에 할당. 이 배열은 객체의 속성들의 순서를 따르며, 배열의 각 요소는 해당 객체 속성의 이름을 나타냄
const Group_key_arr = Object.keys(Group_obj);

export { Group_obj, Group_key_arr };
