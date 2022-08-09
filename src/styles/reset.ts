const reset = {
  html: {
    lineHeight: 1.5,
    '-webkit-text-size-adjust': '100%',
    fontFamily: 'system-ui, sans-serif',
    '-webkit-font-smoothing': 'antialiased',
    textRendering: 'optimizeLegibility',
    '-moz-osx-font-smoothing': 'grayscale',
    touchAction: 'manipulation',
  },
  body: {
    position: 'relative',
    minHeight: '100%',
    'font-feature-settings': 'kern',
  },
  '*, *::before, *::after': {
    borderWidth: 0,
    borderStyle: 'solid',
    boxSizing: 'border-box',
  },
  main: {
    display: 'block',
  },
  hr: {
    borderTopWidth: '1px',
    boxSizing: 'content-box',
    height: 0,
    overflow: 'visible',
  },
  'pre, code, kbd, samp': {
    fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '1em',
  },
  a: {
    backgroundColor: 'transparent',
    color: 'inherit',
    textDecoration: 'inherit',
  },
  'abbr[title]': {
    borderBottom: 'none',
    textDecoration: 'underline dotted',
    '-webkit-text-decoration': 'underline dotted',
  },
  'b, strong': {
    fontWeight: 'bold',
  },
  small: {
    fontSize: '80%',
  },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sub: {
    bottom: '-0.25em',
  },
  sup: {
    top: '-0.5em',
  },
  img: {
    borderStyle: 'none',
  },
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: 1.15,
    margin: 0,
    padding: 0,
    color: 'inherit',
  },
  'button, input': {
    overflow: 'visible',
  },
  'button, select': {
    textTransform: 'none',
  },
  "button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner":
    {
      borderStyle: 'none',
      padding: 0,
    },
  fieldset: {
    margin: 0,
    padding: '0.35em 0.75em 0.625em',
  },
  legend: {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: 0,
    whiteSpace: 'normal',
  },
  progress: {
    verticalAlign: 'baseline',
  },
  textarea: {
    resize: 'vertical',
    overflow: 'auto',
  },
  "[type='checkbox'], [type='radio']": {
    boxSizing: 'border-box',
    padding: 0,
  },
  "[type='number']::-webkit-inner-spin-button, [type='number']::-webkit-outer-spin-button": {
    '-webkit-appearance': 'none !important',
  },
  "input[type='number']": {
    '-moz-appearance': 'textfield',
  },
  "[type='search']": {
    '-webkit-appearance': 'textfield',
    outlineOffset: '-2px',
  },
  "[type='search']::-webkit-search-decoration": {
    '-webkit-appearance': 'none !important',
  },
  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button',
    font: 'inherit',
  },
  details: {
    display: 'block',
  },
  summary: {
    display: 'list-item',
  },
  template: {
    display: 'none',
  },
  '[hidden]': {
    display: 'none !important',
  },
  'body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre': {
    margin: 0,
  },
  button: {
    background: 'transparent',
    padding: 0,
  },
  'ol, ul': {
    margin: 0,
    padding: 0,
  },
  "button, [role='button']": {
    cursor: 'pointer',
  },
  'button::-moz-focus-inner': {
    border: '0 !important',
  },
  table: {
    borderCollapse: 'collapse',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
  'img, svg, video, canvas, audio, iframe, embed, object': {
    display: 'block',
  },
  'img, video': {
    maxWidth: '100%',
    height: 'auto',
  },
  '[data-js-focus-visible] :focus:not([data-focus-visible-added])': {
    outline: 'none',
    boxShadow: 'none',
  },
  'select::-ms-expand': {
    display: 'none',
  },
};

export default reset;
