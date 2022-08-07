import { styled } from '@/styles';
import { buildScale } from '@/styles/utils';
import type { N } from 'ts-toolbelt';
import Box from './Box';

export const V = styled(Box, {
	display: 'flex',
	flexDirection: 'column',
	variants: {
		spacing: buildScale({
			incrementsCount: 17,
			getKey: i => i as N.Range<0, 16>[number],
			getValue: i => ({ '&>*:not(:last-child)': { marginBlockEnd: `$${i}` } }),
		}),
	},
});

export const H = styled(Box, {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	variants: {
		spacing: buildScale({
			incrementsCount: 17,
			getKey: i => `$${i}` as `$${N.Range<0, 16>[number]}`,
			getValue: i => ({ '&>*:not(:last-child)': { marginInlineEnd: `$${i}` } }),
		}),
	},
});

const Stack = { H, V };
export default Stack;
