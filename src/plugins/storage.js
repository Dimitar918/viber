export function getUser(){
    return JSON.parse(sessionStorage.getItem("user"));
}

export function setUser(user){
    sessionStorage.setItem("user", JSON.stringify(user));
}

export function deleteUser(){
    sessionStorage.removeItem("user");
}
