import type { NextMiddleware } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware: NextMiddleware = (request, event) => {
	const timeInSeconds = Math.round(new Date().getTime() / 1000);
	const eventToTrack = {
		event: 'pageview',
		properties: {
			token: process.env.MIXPANEL_TOKEN,
			time: timeInSeconds,
			distinct_id: request.ip || 'anonymous',
			$insert_id: timeInSeconds + '-' + request.ip,
			...request.geo,
			referrer: request.referrer,
			url: request.url,
		},
	};

	event.waitUntil(
		fetch(`https://api.mixpanel.com/track?verbose=1`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify([eventToTrack]),
		})
			.then(res => res.json())
			.catch(e => {
				console.log(`😢 Unable to track: ${e}`);
			})
	);

	return NextResponse.next();
};

export const config = {
	matcher: '/',
};
