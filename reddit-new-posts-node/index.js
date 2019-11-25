const ConnectionBuilder = require('electron-cgi').ConnectionBuilder;
const readline = require('readline');

const connection = new ConnectionBuilder().connectTo('dotnet', 'run', '--project', '../reddit-new-posts-scanner-dotnet').build();

connection.on('show-posts', posts => {
    console.clear();    
    if (posts.length === 0){
        console.log('No results...');
    }
    posts.forEach(post => {
        console.log(`${post.title} ${post.upvoteCount}↑ (${post.url})\n`);
    });
});

connection.onDisconnect = () => {
    console.log('Node: Connection closed');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a subbreddit name (e.g. dotnet) to display its posts, or just press enter to get a list with the top new posts from reddit. To quit press q followed by enter at any time: ', subreddit => {
    connection.send('select-subreddit', subreddit, () => {
        connection.send('start', null, () => {            
            connection.close();
        });
    });
    rl.on('line', input => {
        if (input === 'q'){
            connection.send('stop');
            rl.close()
        }
    })
});