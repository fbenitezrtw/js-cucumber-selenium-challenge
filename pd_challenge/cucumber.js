module.exports = {
    default: `--publish-quiet
              --format './node_modules/@cucumber/pretty-formatter'
              --format 'json:reports/report.json'
              --format 'html:reports/report.html'
              --require ./step_definitions/*.js
              --require ./support/*.js`
}