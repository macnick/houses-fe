import { Card } from './Card';
import { fetchCardData } from '../lib/data';

export const Houses = async () => {
  let houses = await fetchCardData();

  return (
    <div>
      {houses.map((house) => (
        <div key={house.id} className='mb-4'>
          <Card {...house} />
        </div>
      ))}
    </div>
  );
};
