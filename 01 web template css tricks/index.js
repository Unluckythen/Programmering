let currentPage = 1
let menuNumber = 1

let pages //array med alle elementer med class = page
let menuItems //array med alle menupunkterne
let colors = ['red', 'green', 'blue', 'grey', 'pink', 'purple', 'black']

function setup(){
    console.log('P5.js er loaded' )

    select('#menu' + menuNumber) .addClass ('active')
    select('#page' + currentPage).addClass('visible')

    pages = selectAll('.page')
    menuItems = selectAll('.menuItem')

for( m of menuItems){
    m.mousePressed( function(e) {
        console.log(e.target)
    })
}

    //nu kan man se at alle pages er blevet til en liste med alle class = page ting 
    //console.log(pages.length)

    //lav en masse div'er vi kommer ind i page 3
    for(c of colors){
        //console.log(c)
        let div = createDiv()
        div.style('background-color', c)
        select('#page3').child(div)
    }
}

function shiftPage(num){
    if(num == "ArrowLeft"){
        num = currentPage - 1
    }
    if(num == "ArrowRight"){
        num = currentPage + 1
    }

    if(isNaN(num) || num > pages.length || num == 0){
        return
    }
    select("#page" + currentPage).removeClass('visible')
    currentPage = num
    select("#page" + currentPage).addClass('visible')
}

function keyPressed(){
    console.log(key)
    shiftPage(key)
}