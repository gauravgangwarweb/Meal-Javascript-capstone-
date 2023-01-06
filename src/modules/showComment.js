const getComments = async (id) => {
  const url = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hOVVEplHVzoMZ1QpOtNU/comments?item_id=${id}`);
  const result = await url.json();
  const data = result;
  return data;
};

export default getComments;