const url = "http://api.wukaka.com/"

//登录
function login(data) {
    return request({
        url: url + "login",
        method: 'post',
        data: data
    })
}

//查看是否过期
function life() {
    // return request({
    //     url: url + "isLife",
    // })
}


//获取用户上次登录信息
function get_user_info(username) {
    return request({
        url: url + "user/" + username + ""
    })
}


function check_user(username){
    return request({
        url: url + "user/isHave",
        data: {username:username},
    })
}

function add_user(data){
    return request({
        url: url + "user",
        method:"post",
        data: data,
    })
}

