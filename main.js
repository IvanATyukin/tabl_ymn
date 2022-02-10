const body = document.querySelector('body')


for (let j = 1; j < 10; j++) {
    const ul = document.createElement('ul')
    body.appendChild(ul)
    for (let i = 1; i <= 10; i++) {
        const result = j * i
        let li = document.createElement('li')
        li.textContent = `${j} * ${i} = ${result}`;
        ul.appendChild(li)
    }
}