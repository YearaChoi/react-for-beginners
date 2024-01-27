// Group_obj : 프로젝트에 있는 모든 그룹. (ex: genre=action ...)
// Group_key_arr : Group_obj의 모든 Key들

const Group_obj = {
  "High Rating": "minimum_rating=8",
  Romance: "genre=romance",
  Music: "genre=music",
  Animation: "genre=animation",
};

const Group_key_arr = Object.keys(Group_obj);

export { Group_obj, Group_key_arr };
