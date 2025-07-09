import React from 'react';

const About = ({content}) => {
	return (
		<div name='works' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
		  <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
			<div className='pb-8 w-full flex justify-center items-center flex-col'>
			  <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>About</p>
			  <p className='py-6 text-2xl text-gray-300'>{content?.fields.about_caption}</p>
			  <p className='text-gray-500 py-6'>{content?.fields.about_main_details}</p>
			</div>
		  </div>
		</div>
	  );
};

export default About