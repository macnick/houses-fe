export const fetchCardData = async () => {
  const res = await fetch('https://wizard-world-api.herokuapp.com/houses');
  const data = await res.json();
  return data;
};
