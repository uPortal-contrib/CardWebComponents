# Card Web Components

Card component for the uPortal ecosystem (POC).

This component aims to display an Internationalized and accessible Card in Apereo uPortal.
So far tested in FF, Chrome, Safari and Edge (Windows, Mac, Linux, IOS & Android)

## Dependancies

Low and very light (-3Kb) dependencies make the component fast and easy to maintain.

- hyperHTML @lastest
- webcomponents-lite 1.2.0
- @fortawesome/fontawesome-free 5.5.0 (svg only)
- (Bootstrap 4.1.1)

## Supported Languages

- en-US (default)
- fr-FR
- es-ES
- nl-NL
- it (_ new _)

![Card webcomponent](static/assets/2018-11-26_14-29-23.gif "uPortal card in en-US, fr-FR, es-ES, nl-NL")

## Features

- [x] WCAG 2.1 Level AA - Level AAA
- [x] extra Features in CSS Level 4 : :visible-focus (enable accessibility flags)

## Audits

![Card webcomponent Audit](static/assets/metrics_2018-12-04.png "Audit in Chrome devtool: Performance:100/100 - Accessibility: 100/100 - Best Practices:100/100 - SEO: 100/100")

## Build

- use `npm install` to get dependencies.
- use `npm start` to view code in a local web server.
- use `npm test` to run lint checks

## Screenshots

updated: 2018/12/04
![Card webcomponent](static/assets/cardwebcomponent_2.png "card in en-US")

## How it works

open `dist/index.html` and change `<html lang="en-US">` to `<html lang="fr-FR">`, the component will be in french.

In uPortal, the component will change automatically according to the user's locales switcher.

## Running in uPortal

copy all the files from `dist/` folder in a `card/` directory, then copy this folder into
`uPortal-start/overlays/uPortal/src/main/webapp` (or other location served by Tomcat).

#### Sample HTML

Define a SimpleCMS portlet with HTML content like the following:

```HTML
<my-card id="what-is-uportal-i18n" messagesPath="../../../../uPortal/card/" cssPath="../../../../uPortal/card/css"></my-card>
<script src='https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-lite.js' defer></script>
<script src='https://unpkg.com/regenerator-runtime@0.12.1/runtime.js' defer></script>
<script src="../../../../uPortal/card/my-card.umd.js" defer></script>
```
