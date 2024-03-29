import { Loading } from './ui/Loading';
import { Houses } from './ui/houses';
import Search from './ui/search';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-center mb-12'>
        <h1 className='text-4xl font-bold text-gray-800 dark:text-gray-200'>
          Wizarding World
        </h1>
        <p className='text-gray-500 dark:text-gray-300'>
          Houses of Hogwarts School of Witchcraft and Wizardry
        </p>
      </div>
      <div className='w-96 mb-4'>
        <Search placeholder='Search by house name' />
      </div>
      <div>
        <Suspense fallback={<Loading />}>
          <Houses />
        </Suspense>
      </div>
    </main>
  );
}
