import { styled } from '@stitches/react';

const Svg = styled('svg', { height: '.675em', width: '.675em', display: 'inline-block' });

const Arrow: React.FC = () => {
	return (
		<Svg height="8" width="8" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg" role="presentation">
			<use xlinkHref="#arrow" />
		</Svg>
	);
};

export default Arrow;
