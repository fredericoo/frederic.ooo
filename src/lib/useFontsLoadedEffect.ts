import FontFaceObserver from 'fontfaceobserver';
import { useEffect } from 'react';

const useFontsLoadedEffect = (fontFamily: string, effect: () => void) => {
	useEffect(() => {
		const font = new FontFaceObserver(fontFamily);
		font.load().then(effect);
	}, [effect, fontFamily]);
};

export default useFontsLoadedEffect;
