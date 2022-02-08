let a = []
let b = []
for (i=2; i<10;i++){
    for (j=1; j<10;j++){

        b.push(i, '*', j, '=', Number(i*j))
    }
a.push(b)
b = []
}
document.querySelector('.n2').textContent += a[0].join(' ') 
document.querySelector('.n3').textContent += a[1].join(' ') 
document.querySelector('.n4').textContent += a[2].join(' ') 
document.querySelector('.n5').textContent += a[3].join(' ') 
document.querySelector('.n6').textContent += a[4].join(' ') 
document.querySelector('.n7').textContent += a[5].join(' ') 
document.querySelector('.n8').textContent += a[6].join(' ') 
document.querySelector('.n9').textContent += a[7].join(' ') 
