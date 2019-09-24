!function () {
    var duration = 50

    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget) //button
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })


    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }

    let code = `
/*
* 首先，需要准备皮皮卡丘的皮
*/
    .preview {
    height: 100%;
    border: 1px solid green;
    display: flex; /*居中*/
    justify-content: center; /*居中*/
    align-items: center; /*居中*/
    background: #ffe600;
}

.wrapper {
    width: 100%;
    height: 165px;
    /*border: 1px solid red;*/
    position: relative;
}

.wrapper > :not(:last-child) {
    z-index: 1;
}

/*
* 接下来，画鼻子
*/

/*1 鼻子*/
.nose {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    /*background: black;*/
    position: absolute;
    left: 50%;
    margin-left: -12px;
    top: 28px;
}

/*
* 接下来，画眼睛
*/

.eye {
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    position: absolute; /*绝对定位*/
    border-radius: 50%;
    border: 2px solid #000000;
}

/*
* 接下来，画眼珠子
*/

.eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
}

/*
* 左眼在左边 （废话）
*/

.eye.left {
    right: 50%;
    margin-right: 80px;
}

/*
* 右眼在右边 （废话）
*/

.eye.right {
    left: 50%;
    margin-left: 80px;
}

/*
* 接下来，画脸蛋
*/

.face {
    width: 68px;
    height: 68px;
    background: #fc0d1c;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}

/*
*将脸放到正确的位置
*/
.face.left {
    right: 50%;
    margin-right: 100px;
}

.face.right {
    left: 50%;
    margin-left: 100px;
}


/*
* 接下来，画上嘴唇
*/
.upperLip {
    height: 25px;
    width: 75px;
    border: 2px solid black;
    background: #ffe600;
    transform: rotate(-20deg); /*角度*/
    position: absolute;
    top: 49px;
}

.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px; /*椭圆*/
    border-top: none;
    border-right: none;
}

.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px; /*椭圆*/
    border-top: none;
    border-left: none;
    transform: rotate(20deg); /*角度*/
}


/*
*接下来，画下嘴唇
*/
.lowerLip-wrapper {
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    /*z-index: -1; !*重叠顺序*!*/
    /*border: 1px solid red;*/
    /*height: 110px;*/
    width: 300px;
    overflow: hidden; /*就是溢出隐藏的意思*/
    height: 125px; /**/
    margin-bottom: -20px; /**/

}

.lowerLip {
    width: 300px;
    height: 3500px;
    background: #990513;
    /*background: #fc4a62;*/
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden; /*在lowerLip外无法显示*/

}

/*
*舌头
*/
.lowerLip::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 100px;
    background: #fc4a62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
}
/*
*好啦，这只可爱的皮卡丘画完啦~
*/
`

    writeCode('', code)



}.call()