const lol = document.getElementById('lol')
const bote = document.querySelector('.next')
const bote1 = document.querySelector('.prev')
arr =  ['img (2).jpg', 'img (1).jpg', 'img (3).jpg', 'ADser.png', 'img (2).jpg', 'img (1).jpg', 'img (3).jpg', 'ADser.png', 'img (2).jpg', 'img (1).jpg', 'img (3).jpg', 'ADser.png'];


    (function chinga(loll=0, clas){ 
        for (let index = 0+loll; index < 8+loll; index++) {
            uan = document.createElement('a')
            uan.href = arr[index]
            uan.innerHTML = `<img class="${clas}" src="${arr[index]}" alt="">`
            lol.appendChild(uan)
        }
    })()
 

    le = 0;
    bote.addEventListener('click', ()=>{
        if (arr.length >le+8){
            
            lol.innerHTML= ''
             for (let index = 0; index < 8; index++) {
                 le++
                 uan = document.createElement('a')
                 uan.href = arr[le]
                 uan.innerHTML = `<img class="adelante" src="${arr[le]}" alt="">`
                 lol.appendChild(uan)
                 
             }
             le = le-7
        }
    });

    bote1.addEventListener('click', ()=>{
        if (arr.length >8 && le > 0){
            lol.innerHTML= ''
            le = le+7
            for (let index = 0; index < 8; index++) {
                le--
                uan = document.createElement('a')
                uan.href = arr[le]
                uan.innerHTML = `<img class="atras" src="${arr[le]}" alt="">`
                lol.appendChild(uan)
                
            }
            lol.classList.add('q');
        }
        
    });

    // boton del video
    const btn = document.getElementById('btn')
    const previo = document.querySelector('.previo')

    btn.addEventListener('click', ()=>{
        if(btn.classList[1]){
            previo.classList.add('baja')
            previo.style.zIndex = '2';
            btn.innerHTML = 'Canales'
            btn.classList.remove('btm')
        }else{ 
            previo.style.display = 'block';
            previo.style.zIndex = '4';
            btn.classList.add('btm');
            btn.innerHTML = 'cerrar'
            previo.classList.remove('baja')
        }
    })
    
    
