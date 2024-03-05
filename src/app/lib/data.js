const BASE_URL = 'https://wizard-world-api.herokuapp.com/houses';

export const fetchCardData = async (searchTerm) => {
  const url = searchTerm ? `${BASE_URL}?name=${searchTerm}` : BASE_URL;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching card data', error);
  }
};
