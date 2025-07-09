import React from 'react';

const Skills = ({content}) => {
  return (
    <div name='skills' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>Skills</p>
          <p className='py-6 text-2xl'>{content?.fields.skills_header}</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
				    {content?.fields.skills.map((skill, index) => {
      				return (
        				<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500" key={index}>
          					<p className="my-4">{skill.technology_learnt}</p>
        				</div>
      				);
    			  })}
          </div>
      </div>
    </div>
  );
};

export default Skills;
