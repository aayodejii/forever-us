# Forever Us

I built this while talking with my partner. We wanted a simple way to see how many days we've been together and how far apart we are at any given moment. Thought others might find it useful too.

A beautiful app for couples to track the number of days they've been together and see how far apart they are in real time.

## Features

- **Day Counter**: See exactly how long you've been together, broken down into years, months, and days, with a smooth animated count-up
- **Distance Apart**: Automatically detects your location and calculates the distance to your partner using the Haversine formula
- **Persistent Storage**: Your data is saved locally so it survives page refreshes
- **Romantic Design**: Warm gradients, glassmorphism cards, floating hearts, and elegant typography

## Tech Stack

- React + TypeScript
- Tailwind CSS v4
- Vite
- Browser Geolocation API

## Getting Started

```bash
npm install
npm run dev
```

Open the app and fill in your details: your name, your partner's name, when you started dating, and your partner's location (city + coordinates). Your own location is detected automatically via the browser.

## How Distance Works

The app uses the browser's Geolocation API to get your current position, and you provide your partner's coordinates during setup. Distance is calculated using the [Haversine formula](https://en.wikipedia.org/wiki/Haversine_formula), which gives the great-circle distance between two points on a sphere.

Your partner can find their coordinates by long-pressing their location in Google Maps and copying the lat/lng values.

## License

MIT
