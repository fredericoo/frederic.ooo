import type { Box } from '@/components/primitives';
import type React from 'react';

export type AnyObject = Record<PropertyKey, unknown>;

export type ComponentVariant<TVariants extends string> = Record<TVariants, React.ComponentProps<typeof Box>['css']>;
