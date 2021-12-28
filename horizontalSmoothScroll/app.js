console.log("TEST")

let images = [...document.querySelectorAll('.img')];
let slider = document.querySelector('.slider');
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = 0.05;

window.addEventListener('resize', init)

images.forEach((img, idx) => {
    img.style.backgroundImage = `url(./images/${idx + 1}.jpg)`
})

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

function setTransform(el, transform) {
    el.style.transform = transform;
}

function init() {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`
    // document.body.style.height = `${sliderWidth - window.innerWidth + window.innerHeight}px`
}

function animate() {
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    target = window.scrollY;
    console.log(current, target)
    setTransform(slider, `translateX(-${current}px)`)
    animateImages()
    requestAnimationFrame(animate)
}

function animateImages() {
    let ratio = current / imageWidth;
    let intersectionRatioValue;

    images.forEach((image, idx) => {
        intersectionRatioValue = ratio - (idx * 0.7);
        setTransform(image, `translateX(${intersectionRatioValue * 70}px)`)
    })
}

init();
animate();

console.log(imageWidth)