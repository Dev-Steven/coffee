import React from 'react';

import { Carousel, Row, Col } from 'antd';

const Home = () => {
	return (
		<div>
			{/* <Carousel autoplay>
				<div>
					<img
						style={{ height: 180, width: 350 }}
						src='https://www.cancer.org/latest-news/coffee-and-cancer-what-the-research-really-shows/_jcr_content/par/textimage/image.img.jpg/1522697270446.jpg'
						alt='coffee with beans'
						className='center'
					/>
				</div>
				<div>
					<img
						style={{ height: 180, width: 350 }}
						src='https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/ways-to-make-coffee-super-healthy-1296x728-feature.jpg?w=1155&h=1528'
						alt='coffee with beans'
						className='center'
					/>
				</div>
				<div>
					<img
						style={{ height: 180, width: 350 }}
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuXOtmAcTEKtbzCvSJU9_FHR8qnwW_H2L_Yw&usqp=CAU'
						alt='coffee with beans'
						className='center'
					/>
				</div>
				<div>
					<img
						style={{ height: 180, width: 350 }}
						src='https://media3.s-nbcnews.com/i/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.jpg'
						alt='coffee with beans'
						className='center'
					/>
				</div>
			</Carousel> */}
			<div className='home-content'>
				<Row style={{ margin: '25px' }}>
					<Col span={24}>
						<h1 className='title'>Welcome to 96th Ave.</h1>
						<h4 style={{ textAlign: 'center' }}>
							We want to give coffee lovers a platform where they
							can post their favorite coffees so everyone can see.
							This platform is meant for coffee enthusiasts,
							someone who is looking to get into coffee, or
							someone who is looking to find a great cup of
							coffee. Join 96th Ave. and become apart of the
							biggest coffee community on the internet!
						</h4>
					</Col>
				</Row>
				<Row gutter={[16, 16]} style={{ textAlign: 'center' }}>
					<Col span={12}>
						<h2>Content 1</h2>
					</Col>
					<Col span={12}>
						<h2>Content 2</h2>
					</Col>
					<Col span={12}>
						<h2>Content 3</h2>
					</Col>
					<Col span={12}>
						<h2>Content 4</h2>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Home;
