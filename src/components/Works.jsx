import React from 'react';

const Works = ({content}) => {
  return (
    <div name='works' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>Work</p>
          <p className='py-6 text-2xl'>{content?.fields.work_header}</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8'>
          {content?.fields.works.map((work, index) => {
            return (
              <div
                style={{ backgroundImage: `url(${work.work_image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div flex flex-col"
                key={index}
              >
                <div className="opacity-0 group-hover:opacity-100 bg-cyan-800 flex flex-col justify-center items-center rounded-md">
                  <span className=" text-lg font-bold text-white tracking-wider">
                    {work.work_title}
                  </span>
                  <p className="text-center">
                    {work.work_description}
                  </p>
                  <div className="pt-8 text-center">
                    <a href={work.github_url}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                    <a href={work.demo}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
