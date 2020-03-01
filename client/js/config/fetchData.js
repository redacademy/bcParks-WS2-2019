const fetchData = async query => {
  try {
    const response = await fetch(
      'https://us1.prisma.sh/zareef-baksh/bcParks/dev',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query,
        }),
      },
    );
    const responseAsJson = await response.json();
    const result = await responseAsJson.data;
    return result;
  } catch (err) {
    return err;
  }
};
export default fetchData;
