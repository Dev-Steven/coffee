import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'antd';

const TheModal = props => {
	return ReactDOM.createPortal(
		<div>
			<Modal
				title={props.title}
				visible={true}
				okText={props.okText}
				onOk={props.handleOk}
				onCancel={props.handleCancel}
			>
				<p>{`Name: ${props.coffee.name}`}</p>
				<img
					src={`${props.coffee.picture}`}
					alt={`${props.coffee.name}`}
					style={{ height: '150px', width: '200px' }}
				/>
				<p>{`Price: $${props.coffee.price}`}</p>
				<p>{`Description: ${props.coffee.description}`}</p>
			</Modal>
		</div>,
		document.querySelector('#modal')
	);
};

export default TheModal;
