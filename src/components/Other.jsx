import React from 'react';
import code from '../assets/code2.png';

const Other = () => {
  return (
    <div name='other' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>Other things I do</p>
          <p className='py-6 text-2xl'>Just a little section about what I do outside of coding.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>Running</span>
              <p className='text-center'>I'm training for a half marathon</p>
              <div className='pt-8 text-center'>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
              </div>
            </div>
          </div>
		  <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>Tennis</span>
              <p className='text-center'>I play a weekly game of tennis against my very talented photographer friend.</p>
              <div className='pt-8 text-center'>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
              </div>
            </div>
          </div>
		  <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>Boardgaming</span>
              <p className='text-center'>I'm an avid boardgamer, any excuse to dress up and roll a dice.</p>
              <div className='pt-8 text-center'>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
              </div>
            </div>
          </div>
		  <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>Cycling</span>
              <p className='text-center'>I love to cycle. I find it very theraputic, even when commuting and it's even better that its environmentally friendly. </p>
              <div className='pt-8 text-center'>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
              </div>
            </div>
          </div>
		  <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>Cooking</span>
              <p className='text-center'>I love to cook. I've been vegan for over 5 years now and I love to experiment with all different types of cuisine, getting to explore different flavours.</p>
              <div className='pt-8 text-center'>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
              </div>
            </div>
          </div>
		  <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>Reading</span>
              <p className='text-center'>I'm a big fantasy and sci-fi fan. Currently delving into the Wheel of Time series. I'm most excited about the upcomming release of the final book 'Red God' in the red rising series.</p>
              <div className='pt-8 text-center'>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;