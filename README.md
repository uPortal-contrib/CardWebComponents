# Card Web Components
Card component for the uPortal ecosystem (POC).
This component aims to display an Internationalized and accessible Card in Apereo uPortal.
So far tested in FF, Chrome, Safari and Edge (Windows, Mac, Linux, IOS & Android)

## Dependancies

hyperHTML
webcomponents-lite

## Running in uPortal

copy all the files in a `card/` directory, then copy this folder into
`uPortal-start/overlays/uPortal/src/main/webapp` (or other location served by Tomcat).

#### Sample HTML

Define a SimpleCMS portlet with HTML content like the following:

```HTML
<my-card id="what-is-uportal-i18n" messagesPath="@uPortal/card/" cssPath="@uPortal/card/css"></my-card>      
      
<script src='https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-lite.js' defer></script>
<script src='https://unpkg.com/hyperhtml@latest/min.js' defer></script>
<script  src="@uPortal/card/js/index.js" defer></script>
```
