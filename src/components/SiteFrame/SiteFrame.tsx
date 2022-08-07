import { Box } from '../primitives';

type SiteFrameProps = {};

const SiteFrame: React.FC<SiteFrameProps> = () => {
	return (
		<Box
			css={{
				position: 'fixed',
				inset: '$1',
				borderRadius: '$sm',
				boxShadow: '0 0 0 var(--fb-radii-sm) var(--fb-colors-primary12)',
			}}
		/>
	);
};

export default SiteFrame;
