let friendsList = [];

function addFriend(){
    let friendName = document.getElementById('friend');
    let friendNameIsIncluded = friendsList.includes(friendName.value);
    if(friendName.value && !friendNameIsIncluded){
        friendsList.push(friendName.value);
        friendName.value = '';
        showFriendsList(friendName.value);
    }else{
        let alertElement = document.getElementById('alert');
        let alertMessage = friendNameIsIncluded ? 'Nome duplicado, adicione outro!' :  'Preencha o campo de nome!';
        alertElement.innerText = alertMessage;
    };
    
};

function showFriendsList(){
    let list = document.getElementById('friendList');
    let elementList = document.createElement('li');

    for(index=0;index<friendsList.length;index++){
        elementList.innerHTML = `${friendsList[index]}`;
        list.appendChild(elementList);
    };
    
};