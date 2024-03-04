import Image from 'next/image';
import { fetchCardData } from './lib/data';
import { Card } from './ui/Card';

export default async function Home() {
  const houses = await fetchCardData();
  console.log({ houses });

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        {houses.map((house) => (
          <Card key={house.id} {...house} />
        ))}
      </div>
    </main>
  );
}
