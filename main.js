var $allButtons = $('.buttons span')

$('.buttons').on('click', function(event) {
    var x = $(event.target).index()
    var p = x * -300
    $('.images').css({
        'transform': `translateX(${p}px)`
    })

    buttonSlide($(event.target))
    n = x
})

var n = 0
var length = $allButtons.length
buttonSlide($allButtons.eq(n % length).trigger('click'))
var timeId = setTimer()

$('.window').on('mouseenter', function() {
    clearInterval(timeId)
})

$('.window').on('mouseout', function() {
    timeId = setTimer()
})

function buttonSlide($button) {
    $button.addClass('red')
    .siblings().removeClass('red')
}

function setTimer() {
    return setInterval(() => {
        $allButtons.eq(n % length).trigger('click')
        n += 1
    }, 2000)
}