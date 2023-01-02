import { Stack, Type } from '@/components/primitives';
import funBits from '@/content/funBits';
import { styled } from '@/styles';
import { signal } from '@preact/signals';
import Balancer from 'react-wrap-balancer';

const index = signal(Math.floor(Math.random() * funBits.length));

const ShuffleButton = styled('button', {
	textTransform: 'uppercase',
	letterSpacing: '0.04em',
	fontSize: '$sm',
	padding: '$1 $2',
	background: '$bg',
	color: '$primary6',
	borderRadius: '$sm',
	border: '2px solid $colors$primary3',
	marginBlockStart: '-$2',
	marginInlineEnd: '$2',
	transition: 'all 0.6s $expo',
	_hover: {
		borderColor: '$primary5',
		color: '$primary9',
	},
	_focusVisible: {
		outline: 'none',
		background: '$primary12',
		color: '$primary1',
	},
});

export const FunBits: React.FC = () => {
	const funBit = funBits[index.value];

	const randomise = (): void => {
		const newValue = Math.floor(Math.random() * funBits.length);
		if (newValue === index.value) {
			return randomise();
		}
		index.value = newValue;
	};

	return (
		<Stack.V css={{ alignItems: 'flex-start' }}>
			<Stack.V css={{ alignItems: 'flex-end' }}>
				<Type
					css={{
						color: '$primary9',
						background: '$primary1',
						border: '1px solid $colors$primary3',
						paddingInline: '$3',
						paddingBlock: '$2',
						borderRadius: '$sm',
						borderStartStartRadius: '$space$min',
						boxShadow: '$sm',
					}}
				>
					<Balancer>{funBit}</Balancer>
				</Type>
				<ShuffleButton onClick={randomise}>shuffle</ShuffleButton>
			</Stack.V>
		</Stack.V>
	);
};
