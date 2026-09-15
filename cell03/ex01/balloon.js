const balloon = document.getElementById('balloon');

const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

let currentWidth = 200;

function updateBalloon() {
    balloon.style.width = currentWidth + 'px';
  
    balloon.style.height = (currentWidth * 1.1) + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener('click', function() {
  
    currentWidth += 10;

    colorIndex = (colorIndex + 1) % colors.length;


    if (currentWidth > 420) {
        currentWidth = 200;
        colorIndex = 0; 
    }

    updateBalloon();
});

balloon.addEventListener('mouseleave', function() {
 
    currentWidth -= 5;
    if (currentWidth < 200) {
        currentWidth = 200; 
    }



    updateBalloon();
});