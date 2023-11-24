export function getListUser(){
    const ListUser = JSON.parse(localStorage.getItem('ListUserAssigniment3')) ?? [];
    return ListUser;
}

export function checkLoginLoader(){
    const currentUser = JSON.parse(localStorage.getItem('currentUserAssignment3')) ?? "guest";

    return currentUser;
}