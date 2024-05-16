
// --------------------task1-------------------

const colors = [ "#912323" , "#283229" , "#b01d7a" , "#713628" , "#644330" , "black" , "white"];

const firstColorPhone = document.querySelector('.image1');
const secondColorPhone = document.querySelector('.image2');
const thirdColorPhone = document.querySelector('.image3');
const fourthColorPhone = document.querySelector('.image4');
const fifthColorPhone = document.querySelector('.image5');

const sectionBgColor = document.querySelector(".iphone-sec");

firstColorPhone.addEventListener('click' , ()=>{

    sectionBgColor.style.backgroundColor = colors[0];

})
secondColorPhone.addEventListener('click' , ()=>{

    sectionBgColor.style.backgroundColor = colors[1];

})
thirdColorPhone.addEventListener('click' , ()=>{

    sectionBgColor.style.backgroundColor = colors[2];

})
fourthColorPhone.addEventListener('click' , ()=>{

    sectionBgColor.style.backgroundColor = colors[3];

})
fifthColorPhone.addEventListener('click' , ()=>{

    sectionBgColor.style.backgroundColor = colors[4];

})

// -------------------end task1-------------------

// ---------------------task2---------------------

const iconMoonDark = document.querySelector('.icon-moon');
const sectionDarkMode = document.querySelector(".dark-mode-sec");

iconMoonDark.addEventListener('click' , ()=>{
    sectionDarkMode.classList.toggle("dark")
})


// -------------------end task2-------------------

// ---------------------task3---------------------


const iconAccordion = document.querySelector('.acc-icons');
const iconAccordion2 = document.querySelector('.acc-icons2');
const iconAccordion3 = document.querySelector('.acc-icons3');
const answerParaghraph = document.querySelector(".hidden-paragraph")
const answerParaghraph2 = document.querySelector(".hidden-paragraph2")
const answerParaghraph3 = document.querySelector(".hidden-paragraph3")

iconAccordion.addEventListener('click' , ()=>{
answerParaghraph.classList.toggle("show-paragraph")
iconAccordion.classList.toggle("icotransform")

})
iconAccordion2.addEventListener('click' , ()=>{
answerParaghraph2.classList.toggle("show-paragraph")
iconAccordion2.classList.toggle("icotransform")
})
iconAccordion3.addEventListener('click' , ()=>{
answerParaghraph3.classList.toggle("show-paragraph")
iconAccordion3.classList.toggle("icotransform")
})



// -------------------end task3-------------------

// ---------------------task4---------------------


const iconRating = document.querySelectorAll('.iconrating');
const commentAwesomeRating = document.querySelector('.awesome')
const commentBadRating = document.querySelector('.bad')

iconRating.forEach( ( star , index) =>{
    star.addEventListener( 'click' , () =>{
    iconRating.forEach(del => del.classList.remove ("iconrating-gold"))

    for (let i=0 ; i < index+1 ; i++){
        iconRating[i].classList.add("iconrating-gold")
        if(i < 2){
            commentBadRating.classList.add("bad-show")
            commentAwesomeRating.classList.remove("awesome-show")
            
        }
        else if(i >= 2){
            commentAwesomeRating.classList.add("awesome-show")
            commentBadRating.classList.remove("bad-show")
        }
    }
    } )




} )