# Gateway widgets

Gateway widgets for collaborators

## HDRUK Data use Web component

A Web Component for embedding a [Data uses](https://web.www.healthdatagateway.org/search?search=&tab=Datauses) on a page.

### Testing locally

```js
npm run build
npm run serve
```

Serves on :8080

```js
npm publish

// Targets: https://unpkg.com/hdruk-gateway-widgets
```

### Publishing

```js
npm publish

// Targets: https://unpkg.com/hdruk-gateway-widgets
```

### Usage

```html
<script
  type="module"
  src="https://unpkg.com/hdruk-gateway-widgets/dist/hdruk-data-uses.js"
></script>
<hdruk-data-uses publisher="SAIL"></hdruk-data-uses>
```
