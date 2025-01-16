let friendsList = [];
let alertElement = document.getElementById('alert');
let friendName = document.getElementById('friend');
function addFriend(){
    let friendNameIsIncluded = friendsList.includes(friendName.value);
    if(friendName.value && !friendNameIsIncluded){
        friendsList.push(friendName.value);
        showFriendsList(friendName.value);
        cleanField(alertElement)
        cleanField(friendName)
        
    }else{
        showAlert(friendName,friendNameIsIncluded)
    };
    
};

function showAlert(friendName,isIncluded,message){
    let alertMessage = isIncluded ? '⚠️ Nome duplicado, adicione outro! ⚠️' :  '⚠️ Preencha o campo de nome! ⚠️';
    alertElement.innerText = message || alertMessage
    cleanField(friendName)
}

function showFriendsList(){
    let list = document.getElementById('friendList');
    let elementList = document.createElement('li');

    for(index=0;index<friendsList.length;index++){
        elementList.innerHTML = `${index + 1} - ${friendsList[index]}`;
        list.appendChild(elementList);
    };
    
};

function cleanField(element){
    if(element.tagName == 'INPUT'){
        element.value = ''
    }else{
        element.innerText = ''
    }
}

function drawFriend(){
    let showResult = document.getElementById('result')
    let elementList = document.createElement('li');
    cleanField(showResult)
    
    if(friendsList.length > 0){
        const randomFriendNumber = parseInt(Math.random() * friendsList.length)
        elementList.innerHTML= `${friendsList[randomFriendNumber]}`
        showResult.appendChild(elementList) 
    }else{
        showAlert(friendName,null,"⚠️ Lista vazia, adicione alguém! ⚠️")
        
    }
}