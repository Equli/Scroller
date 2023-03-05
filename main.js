document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello World');

    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('section');

    console.log(sections);
    document.addEventListener('wheel', function (e) {
        const mousemove = e.wheelDeltaY;
        console.log(mousemove);

    })


})


