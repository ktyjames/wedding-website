const VERSION = process.env.NODE_ENV === 'development' ? 'dev' : String(require('json!../../../package.json').version)

const express = require('express')
const vendorPath = process.env.NODE_ENV === 'development' ? '': `<script src="vendor.bundle-${VERSION}.js"></script>`


// Index.html
const INDEX = `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=11">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Great Scott</title>
    <style> html, body, #root { width: 100%; height: 100%} </style>
  </head>
  <body>
    <div class="app" id="root"></div>
    ${vendorPath}
    <script src="client-${VERSION}.js"></script>
  </body>
</html>
`

const router = express.Router()
router.get('*', (req, res) => res.send(INDEX))

module.exports = router

