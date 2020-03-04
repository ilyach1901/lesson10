const usersData = {}
for (let i = 1; i <= 10; i++) {
    const text = prompt('Введите \nИмя и \nВозраст: \nПользователь:' + i)
    let name = 'Имя:'
    let age = 'Возраст:'
    for (let x = 0; x < text.length; x++) {
        if (isNaN(text[x]) === false) {
            age += text[x]
        } else if (isNaN(text[x]) === true) {
            name += text[x]
        }
    }
    usersData[i] = {
        text: 'Пользователь:' + i,
        name: name,
        age: age
    }
}
for (const keyN in usersData) {
    for (const keys in usersData[keyN]) {
        console.log(usersData[keyN][keys]);
    }
}
