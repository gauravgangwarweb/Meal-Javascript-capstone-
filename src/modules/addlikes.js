const postLike = async (id) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jPgcmki2kIAL2YLBRHYk/likes';
  const requestData = {
    item_id: id,
  };
  const prost = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  };
  await fetch(url, prost).then((response) => response.text())
    .then((data) => data);
};

export default postLike;