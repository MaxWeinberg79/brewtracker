# BrewTracker

BrewTracker is a responsive Progressive Web App for recording and analyzing daily coffee consumption. It runs directly in the browser, can be installed on an iPhone home screen, and remains usable offline after the first successful online load.

## Live App

[Open BrewTracker](https://maxweinberg79.github.io/brewtracker/)

## Current Version

**BrewTracker 3.2 PWA**

## Features

### Coffee Tracking

- Record coffee consumption for any date
- Select the coffee type
- Optionally select the cup size
- Enter multiple cups in one entry
- Edit and delete existing entries
- Quick-add buttons for frequently used coffee types

### Calendar and Dashboard

- Monthly calendar view
- Coffee count shown for each recorded day
- Color-coded consumption levels
- Previous and next month navigation
- Daily, weekly, and monthly summaries
- Configurable daily limit
- Warning when the daily limit is exceeded
- Light and dark mode

### Statistics

- Total coffees per month
- Number and percentage of tracked days
- Daily average
- Highest daily consumption
- Longest tracking streak
- Monthly coffee trend
- Average consumption by weekday
- Coffee type distribution
- Coffee size distribution
- Estimated caffeine intake
- Comparison with the previous month
- Monthly consumption heatmap

### Backup and Restore

- Create a JSON backup
- Restore entries from a BrewTracker backup
- Backup includes:
  - Coffee entries
  - Daily limit
  - Theme setting
- Validation prevents unsupported files from being restored

### PWA and Offline Support

- Installable on the iPhone home screen
- Standalone app display
- Offline use through a service worker
- Local data storage in the browser
- No account or login required
- No external database

## Data Storage

BrewTracker stores all user data locally in the browser using `localStorage`. Coffee entries are not uploaded to a server by the application.

Because browser data can be removed by the user, browser, or operating system, regular backups are recommended.

## Installation on iPhone

1. Open the [BrewTracker web app](https://maxweinberg79.github.io/brewtracker/) in Safari.
2. Tap the **Share** button.
3. Select **Add to Home Screen**.
4. Confirm the name **BrewTracker**.
5. Open BrewTracker from the new home screen icon.

The app must be loaded online at least once before the offline cache is available.

## Local Development

### Requirements

- A modern browser
- Python 3 for the optional local development server

### Start a local server

Open a terminal in the project folder and run:

```cmd
py -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Opening `index.html` directly from the iOS Files preview is not supported because that preview may not execute the application JavaScript.

## Project Structure

```text
brewtracker/
├── index.html
├── styles.css
├── app.js
├── sw.js
├── manifest.webmanifest
├── icon-180.png
├── icon-192.png
├── icon-512.png
├── README.md
├── CHANGELOG.md
└── LICENSE
```

## Deployment

BrewTracker is deployed with GitHub Pages from the `main` branch and repository root.

After changing application files:

1. Commit the changes.
2. Push the `main` branch.
3. Open BrewTracker online once so the service worker can retrieve the new release.
4. Close and reopen the installed PWA.

When changing cached files, also update the cache version in `sw.js`.

## Privacy

BrewTracker does not require registration and does not send coffee entries to an application backend. Hosting providers and browsers may process technical request data independently of BrewTracker.

## Author

**Karsten Kley**

## Copyright

© 2026 Karsten Kley · BrewTracker 3.2 PWA · All rights reserved.

## License

This project is proprietary software. See [LICENSE](LICENSE) for the permitted use and restrictions.
