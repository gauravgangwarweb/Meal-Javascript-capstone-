const addComment = async (cName, comment, id) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hOVVEplHVzoMZ1QpOtNU/comments';
  const data = {
    item_id: id,
    username: cName,
    comment,
  };
  const prost = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  await fetch(url, prost).then((response) => response.text())
    .then((data) => data);
};

export default addComment;