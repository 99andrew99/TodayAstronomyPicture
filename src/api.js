export async function call_api() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
  );

  const data = await response.json();

  console.log("api 로드 성공", data);

  return data;
}
