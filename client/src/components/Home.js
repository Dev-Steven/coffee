import React from 'react';

import { Carousel, Row, Col } from 'antd';

const Home = () => {
	return (
		<div>
			<Carousel autoplay>
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
			</Carousel>
			<Row className='home-content'>
				<h1 className='title'>Welcome to 96th Avenue</h1>
			</Row>
			<Row className='home-content' gutter={[40, 8]}>
				<Col className='gray-back' span={12}>
					<h2>Who are we?</h2>
					<h4>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec.
						Nec feugiat in fermentum posuere urna nec tincidunt.
						Ipsum a arcu cursus vitae. Sit amet porttitor eget dolor
						morbi non. Auctor neque vitae tempus quam. Nec
						ullamcorper sit amet risus. Malesuada nunc vel risus
						commodo. Nunc congue nisi vitae suscipit tellus mauris
						a. Ullamcorper dignissim cras tincidunt lobortis.
						Vivamus arcu felis bibendum ut. Velit euismod in
						pellentesque massa placerat duis ultricies lacus sed.
						Odio pellentesque diam volutpat commodo sed egestas
						egestas fringilla. Tortor pretium viverra suspendisse
						potenti nullam ac tortor vitae purus. Feugiat
						scelerisque varius morbi enim nunc faucibus a. Amet nisl
						purus in mollis nunc sed. Aenean euismod elementum nisi
						quis eleifend quam adipiscing vitae proin.
					</h4>
				</Col>
				<Col className='gray-back' span={12}>
					<h2>Why we're the best</h2>
					<h4>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Sed euismod nisi porta lorem mollis
						aliquam ut. Placerat duis ultricies lacus sed turpis.
						Mauris ultrices eros in cursus turpis massa tincidunt
						dui ut. Lacinia at quis risus sed vulputate. Velit
						dignissim sodales ut eu sem integer vitae justo eget. In
						hac habitasse platea dictumst quisque sagittis purus
						sit. Rutrum quisque non tellus orci ac auctor augue. Ut
						sem viverra aliquet eget sit. Ac turpis egestas sed
						tempus urna et. Pretium aenean pharetra magna ac
						placerat vestibulum lectus mauris. In massa tempor nec
						feugiat. Magna ac placerat vestibulum lectus mauris
						ultrices. Nibh mauris cursus mattis molestie a iaculis
						at erat pellentesque. Ut tortor pretium viverra
						suspendisse. Elit sed vulputate mi sit amet mauris
						commodo quis. Diam volutpat commodo sed egestas egestas
						fringilla. Ipsum dolor sit amet consectetur. Dictum at
						tempor commodo ullamcorper a lacus vestibulum. Vulputate
						ut pharetra sit amet aliquam id. Ut ornare lectus sit
						amet est placerat. Enim nunc faucibus a pellentesque sit
						amet porttitor eget. In pellentesque massa placerat
						duis. Semper feugiat nibh sed pulvinar proin gravida
						hendrerit lectus. Proin nibh nisl condimentum id
						venenatis a condimentum vitae sapien. Vestibulum lectus
						mauris ultrices eros in cursus turpis massa. Tortor
						pretium viverra suspendisse potenti nullam. Purus in
						massa tempor nec feugiat nisl pretium fusce id. Eget
						magna fermentum iaculis eu non diam. Aenean et tortor at
						risus viverra adipiscing. Congue eu consequat ac felis
						donec. Tincidunt vitae semper quis lectus nulla at
						volutpat diam ut. Pretium quam vulputate dignissim
						suspendisse in est ante in nibh. Eget felis eget nunc
						lobortis mattis aliquam faucibus purus.
					</h4>
				</Col>
			</Row>
		</div>
	);
};

export default Home;
