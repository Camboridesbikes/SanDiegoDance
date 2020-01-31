const ghpages = require('gh-pages')

ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'git@github.com:Camboridesbikes/SanDiegoDance.git'
    },
    () => {
        console.log('Deploy Complete!')
    }
)