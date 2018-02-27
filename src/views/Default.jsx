const React = require('react')

class Default extends React.Component {

    render() {

        return(
            <html>
                <head>
                    <meta charSet="utf-8"></meta>
                    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"></meta>
                    <title>React App</title>
                </head>
                <body>
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <div id="root"></div>
                    <script type="text/javascript" src="/js/bundle.js"></script>
                </body>
            </html>
        )

    }

}

module.exports = Default