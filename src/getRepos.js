const token = process.env.REACT_APP_GITHUB_TOKEN;


// get github avatar
const getAvatar = async () => {
    const response = await fetch(`https://api.github.com/users/blackgirlbytes`, {
        headers: {
            Authorization: `token ${token}`,
        },
    });
    console.log(response, 'giuij');
    return response.avatar_url;
};

module.exports = {

    getAvatar,
}