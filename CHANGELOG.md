# Changelog

All notable changes to BrewTracker are documented in this file.

The format is based on release sections with the categories **Added**, **Changed**, and **Fixed**.

## [3.2.1] - 2026-08-28

### Added
- About page
- Author information
- Privacy information
- Repository link

### Fixed
- About tab navigation

## [3.2.0] - 2026-08-28

### Added

- Dashboard and Statistics tabs in a single-page interface
- Monthly statistics selector
- KPI cards for:
  - Total coffees
  - Tracked days
  - Daily average
  - Most coffees in one day
  - Longest streak
- Monthly coffee trend chart
- Average coffee consumption by weekday
- Coffee type distribution
- Coffee size distribution
- Estimated caffeine intake for today, the current week, and the selected month
- Comparison between the selected month and previous month
- Monthly coffee consumption heatmap

### Changed

- Updated application version to BrewTracker 3.2 PWA
- Updated footer version to 3.2
- Updated PWA metadata to version 3.2
- Updated service worker cache to `brewtracker-3.2.0`
- Moved common presentation rules to `styles.css`
- Integrated Backup and Restore directly into the release

### Fixed

- Improved handling of invalid restore files
- Kept the native file input hidden while using the styled Restore button
- Preserved the existing `brewtracker.3.entries` storage key so data from version 3.1 remains available

## [3.1.0] - 2026-08-28

### Added

- JSON backup creation
- Restore from a BrewTracker JSON backup
- Backup validation
- Confirmation before replacing current data
- Backup of coffee entries, daily limit, and theme setting
- Copyright footer

### Changed

- Renamed **Download backup** to **Backup**
- Renamed **Restore backup** to **Restore**
- Updated the displayed application version to 3.1 PWA
- Standardized Previous and Next month button dimensions and arrow positions

### Fixed

- Hid the native file chooser from the permanent layout
- Improved the date input width on iPhone
- Added a clearer error for HTML files selected during restore

## [3.0.0] - 2026-08-24

### Added

- Initial Progressive Web App release
- Installable iPhone home screen app
- Offline application shell using a service worker
- Web app manifest and application icons
- Responsive dashboard and calendar
- Coffee entry creation, editing, and deletion
- Quick-add actions
- Daily, weekly, and monthly summaries
- Configurable daily limit and warning
- Dark mode
- Local browser storage
- GitHub Pages deployment support

## [2.2.0] - 2026-08-24

### Changed

- Reworked JavaScript for iPhone compatibility
- Replaced newer JavaScript syntax with broadly compatible constructs
- Added visible error handling for application startup issues

## [2.1.0] - 2026-08-24

### Changed

- Removed the export button
- Removed example data
- New installations start with an empty data set

## [2.0.0] - 2026-08-24

### Added

- Weekly consumption chart
- Quick Add
- Dark mode
- Favorite coffee and tracked-day insights
- Compact coffee count display in the calendar
