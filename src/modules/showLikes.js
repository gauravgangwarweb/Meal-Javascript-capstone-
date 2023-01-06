export const getLikes = async () => {
  const url = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jPgcmki2kIAL2YLBRHYk/likes');
  const result = await url.json();
  const data = result;
  return data;
};

export const showLikes = (id, arr) => {
  const likesObj = arr.find((l) => +l.item_id === +id);
  if (!likesObj) {
    return 0;
  }
  return likesObj.likes;
};