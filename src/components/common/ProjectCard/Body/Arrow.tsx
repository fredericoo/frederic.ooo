import { styled } from '@stitches/react';

const Arrow: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={className}
			height="8"
			width="8"
			viewBox="0 0 9 9"
			xmlns="http://www.w3.org/2000/svg"
			role="presentation"
		>
			<use xlinkHref="#arrow" />
		</svg>
	);
};

export default styled(Arrow, { height: '.675em', width: '.675em', display: 'inline-block' });
