const arrow_left = document.getElementById('arrow-left');
const arrow_right = document.getElementById('arrow-right');
const hero_image = document.getElementById('hero_image');
const pe = document.getElementById('ps');
const he = document.getElementById('hs');
let images = ['banner3.png','banner2.png','banner1.png'];
let hs = ['WOMAN FASHION','SUMMER SALE','MAN FASHION']
let ps = ['Taking your Viewing Experience to Next Level','50% off in all products','Get up to 50% off Today Only!']

arrow_left.addEventListener('click',(e) => {
    console.log(hero_image.src)
    var str = hero_image.src.split('/');
    // console.log(str[4])
    var current_image = str[4];
    let image_index = 0;
    for (let index = 0; index < images.length; index++) {
            if(images[index] === current_image){
                image_index = index;
            }
    
        }
    var to_index  = image_index - 1;

    if(to_index < 0){
        to_index = images.length - 1;
    }
    hero_image.src = "images/"+images[to_index];
    var con = document.querySelector('.hero-content');
    con.style = "width:0%;overflow:hidden;";
    pe.innerHTML = '';
    he.innerHTML = '';
    setTimeout(() => {
        
        pe.innerHTML = ps[to_index];
        he.innerHTML = hs[to_index]
        con.style = "  transition: all 1s ease;width:50%;"
    }, 500);
})



arrow_right.addEventListener('click',(e) => {
    console.log(hero_image.src)
    var str = hero_image.src.split('/');
    // console.log(str[4])
    var current_image = str[4];
    let image_index = 0;
    for (let index = 0; index < images.length; index++) {
            if(images[index] === current_image){
                image_index = index;
            }
    
        
    }
    var to_index  = image_index + 1;

    if(to_index > images.length - 1){
        to_index = 0;
    }
    // hero_image.style = 'transition'
    hero_image.src = "images/"+images[to_index];
    var con = document.querySelector('.hero-content');
    con.style = "width:0%;overflow:hidden;";
    pe.innerHTML = '';
    he.innerHTML = '';
    setTimeout(() => {
        
        pe.innerHTML = ps[to_index];
        he.innerHTML = hs[to_index]
        con.style = "  transition: all 1s ease;width:50%;"
    }, 500);
})



var is_open = false;


var bar = document.getElementById('bar');

bar.addEventListener('click',(e)=>{
    const mobile_nav_content = document.querySelector('.mobile_nav_content');
    if(!is_open){
        mobile_nav_content.style = "height:50vh;overflow:auto;";
        is_open = true;
        bar.classList.remove('fa-bars');
        bar.classList.add('fa-close');
    }else{
        bar.classList.remove('fa-close');
        bar.classList.add('fa-bars');
        mobile_nav_content.style = "height:0;overflow:hidden;";
        is_open = false;
    }
})