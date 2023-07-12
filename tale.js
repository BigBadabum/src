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
console.log(kolobok('Дедушка'));