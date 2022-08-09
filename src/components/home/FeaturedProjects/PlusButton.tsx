import { Box } from '@/components/primitives';

type PlusButtonProps = {
	isOpen: boolean;
};

const PlusButton: React.FC<PlusButtonProps> = ({ isOpen }) => {
	return (
		<Box
			className="icon-plus"
			css={{
				borderRadius: '$rounded',
				backgroundColor: '$primary4',
				color: '$primary12',
				transform: '1',
				_transition: 'transform 0.6s $expo',
			}}
		>
			<Box
				css={{
					boxSizing: 'content-box',
					aspectRatio: '1',
					width: '2.5rem',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
					_transition: 'transform 1.5s $expo',
				}}
			>
				<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
					<line y1="6" x2="12" y2="6" stroke="currentColor" />
					<line x1="6" x2="6" y2="12" stroke="currentColor" />
				</svg>
			</Box>
		</Box>
	);
};

export default PlusButton;
