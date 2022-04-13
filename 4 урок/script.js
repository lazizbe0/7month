class Slider {
    constructor(obj) {
        this.slider = document.querySelector(obj.slider);
        this.sliderLine = this.slider.querySelector(obj.sliderLine);
        this.slides = this.sliderLine.children;
        this.next = this.slider.querySelector(obj.next);
        this.prev = this.slider.querySelector(obj.prev);
        
        this.width = this.slider.clientWidth;
        this.height = this.slider.clientHeight;
        this.dir = obj.direction.toUpperCase() == 'X' ? 'X' : 'Y';
        this.moveSize = 'X' === this.dir ? this.width : this.height; 
        
        this.activeSlide = 0;
        
        this.sliderLine.style = `
            position: relative;
            height: ${this.height}px;       
            overflow: hidden;
        `;
        
        for(let i = 0; i < this.slides.length; i++) {
            this.slides[i].style = `
                position: absolute;
                width: ${this.width}px;
                height: ${this.height}px;
            `
            
            if(i != this.activeSlide) {
                this.slides[i].style.transform = `translate${this.dir}(${this.moveSize}px)`;
            }
            
            if(i === this.slides.length) {
                this.slides[i].style.transform = `translate${this.dir}(${this.moveSize}px)`;
            }
        }
        
        
        
        this.next.addEventListenner('click', () => this.move(this.next));
        this.prev.addEventListenner('click', () => this.move(this.prev));
    }
    
    move(btn) {
        let btnLeftOrRight = btn == this.next ? this.moveSize * -1 : this.moveSize;
        
        for(let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.transition = '0ms';
            
            if(i != this.activeSlide) {
                slides[i].style.transform = `translate${this.dir}(${btnLeftOrRight * -1}px)`;
            }
        }
        
        this.slides[this.activeSlide].style.transform = `translate${this.dir}(${btnLeftOrRight}px)`;
        this.slides[this.activeSlide].style.transform = '1000ms';
        
        if(btn == this.next) {
            this.activeSlide++;
            if(this.activeSlide >= this.slides.length) {
                this.activeSlide = 0
            }
        }else if(btn == this.prev) {
            this.activeSlide--;
            
            if(this.activeSlide < 0) {
                this.activeSlide = this.slides.length - 1;
            }
        }
        
        this.slides[this.activeSlide].style.transform = `translate${this.dir}(${btnLeftOrRight}px)`;
        this.slides[this.activeSlide].style.transition = '1000ms';
    }
}   



// let arr = ['apple', 'banana', 'plum']

// arr.forEach(slide => {
//     console.log(slide);
// })

const slider = new Slider({
    slider: '.slider',
    sliderLine: '.slider__line',
    next: '.slider__next',
    prev: '.slider__prev',
    direction: 'X'
})

// let obj = {
//     slider: 'slider'
// }

// console.log(obj.slider);