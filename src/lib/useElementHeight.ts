import { useEffect, useRef, useState } from 'react';

const useElementSize = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [size, setSize] = useState<{ height: number; width: number }>({ width: 0, height: 0 });

	useEffect(() => {
		const updateSize = () => {
			if (ref.current) {
				const { height, width } = ref.current.getBoundingClientRect();
				setSize({ height, width });
			}
		};

		updateSize();
		window.addEventListener('resize', updateSize);

		return () => window.removeEventListener('resize', updateSize);
	}, []);

	return { ref, size };
};

export default useElementSize;
