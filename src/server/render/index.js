import getManifest from '../getManifest';

const files = getManifest();

const render = (html, preloadedState) => (`
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <meta name="description" content="PLatzi video project full stack using MERN">
            <link rel="stylesheet" href="${files['main.css'] || '/assets/app.css'}" type="text/css"></link>
            <title>Platzi Video</title>
        </head>
        <body>
            <div id="app">${html}</div>
            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c',
  )}
            </script>
            <script src="${files['vendors.js'] || '/assets/vendor.js'}" type="text/javascript"></script>
            <script src="${files['main.js'] || '/assets/app.js'}" type="text/javascript"></script>
        </body>
    </html>
    `);

export default render;
