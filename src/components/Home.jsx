import React from 'react';

const Home = ({content}) => {
	return (
		<div name='home' className='h-screen w-full bg-[#0a192f]'>
			<div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
				<div className='flex flex-col justify-center h-full'>
					<h2 className='text-4xl sm:text-7xl font-bold text-white'>
						{content?.fields.landing_caption}
					</h2>
					<div className='text-2xl sm:text-2xl font-bold text-white'>
              			<p>
                			{content?.fields.landing_title}
              			</p>
            		</div>
					<p className='text-gray-500 py-4 max-w-md'>
						{content?.fields.landing_main_text}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home