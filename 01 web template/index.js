console.log('P5.js er loaded')
let pages //array med alle elementer med class = page

let currentPage = 1

function setup(){
   console.log('P5.js er loaded')
   pages = selectAll('.page')
   //nu kan man se at pages er blevet til en liste med alle class = page ting
   //console.log(pages. length)

   selectAll('.page')
}
function shiftPage(num){
    if(num == "ArrowLeft"){
        num = currentPage - 1
}
    if(num == "ArrowRight"){
        num = currentPage + 1
    }
    if(isNaN(num) || num > pages.length || num ==0){
        return
    }
    select("#page" + currentPage) .removeClass('visible')
    currentPage = num 
    select("#page" + currentPage) .addClass('visible')

}

function keyPressed(){
    shiftPage(key)
}