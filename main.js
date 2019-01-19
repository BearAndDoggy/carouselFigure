var buttons = $('.buttons > span')
var current = 0

bindEvents()
autoSlide()
init()

function init() {
    $('.images').children(':first').clone(true).appendTo('.images')
    $('.images').children(':nth-child(5)').clone(true).prependTo('.images')
}

function autoSlide() {
    var timer = setInterval(() => {
        slideTo(current + 1)
    }, 2000)

    $('.window').on('mouseover', function () {
        clearInterval(timer)
    }).on('mouseout', function () {
        timer = setInterval(() => {
            slideTo(current + 1)
        }, 2000)
    })
}


function bindEvents() {
    buttons.on('mouseenter', function (e) {
        var target = e.currentTarget
        var i = $(target).index()
        slideTo(i)
    })

    $('.next').on('click', function () {
        slideTo(current + 1)
    })

    $('.previous').on('click', function () {
        slideTo(current - 1)
    })
}

function slideTo(i) {
    if (i > buttons.length - 1) {
        i = 0
    } else if (i < 0) {
        i = buttons.length - 1
    }

    if (i === 0 && current === buttons.length - 1) {
        $('.images').css({
            'transform': `translateX(${(-(buttons.length + 1) * 300)}px)`
        }).one('transitionend', function () {
            $('.images').hide()
            $('.images').offset()
            $('.images').css({
                'transform': `translateX(-300px)`
            }).show()
        })
    } else if (i === buttons.length - 1 && current === 0) {
        $('.images').css({
            'transform': `translateX(0px)`
        }).one('transitionend', function () {
            $('.images').hide()
            $('.images').offset()
            $('.images').css({
                'transform': `translateX(${(- buttons.length * 300)}px)`
            }).show()
        })
    } else {
        $('.images').css({
            'transform': `translateX(${(- (i+1) * 300)}px)`
        })
    }
    buttons.eq(i).addClass('black').siblings().removeClass('black')
    current = i
}