const kolobok = (name) => {
    switch (name){
        case 'Дедушка':
            return 'Я от дедушки ушел';
            break;
        case 'Заяц':
            return 'Я от зайца ушел';
            break;
        case 'Лиса': 
            return 'Меня сьели';
            break;
    }
}


const newYear = (actionName) => {
    if (actionName === 'Дед Мороз'){
        return `${actionName}! ${actionName}! ${actionName}!`
    }else if (actionName === 'Снегурочка'){
        return `${actionName}! ${actionName}! ${actionName}!`
    }
}


//console.log(kolobok('Дедушка'));
//console.log(newYear('Дед Мороз'))