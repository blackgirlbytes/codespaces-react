const token = process.env.REACT_APP_GITHUB_TOKEN;

async function getRepoList() {
    // get list of repos from github
    const response = await fetch('https://api.github.com/users/blackgirlbytes/repos', {
        headers: {
            Authorization: `token ${token}`,
            'Access-Control-Allow-Origin': '*',
        },
    });
    console.log(response.json)
    return response.json();
}

module.exports = {
    getRepoList,
}