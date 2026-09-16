$(document).ready(function() {
    const colors = ['red', 'green', 'blue'];
    let colorIndex = 0;
    let currentWidth = 200;

    const $balloon = $('#balloon');

    function updateBalloon() {
        $balloon.css({
            'width': currentWidth + 'px',
            'height': (currentWidth * 1.1) + 'px',
            'background-color': colors[colorIndex]
        });
    }

   // คลิกเป่าโป่ง jQuery
    $balloon.click(function() {
        currentWidth += 10;
        colorIndex = (colorIndex + 1) % colors.length;

        if (currentWidth > 420) {
            currentWidth = 200;
            colorIndex = 0;
        }

        updateBalloon();
    });

    // เมาส์ออกจากลูกโป่ง jQuery
    $balloon.mouseleave(function() {
        currentWidth -= 5;
        if (currentWidth < 200) {
            currentWidth = 200;
        }

        updateBalloon();
    });
});