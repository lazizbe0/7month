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
        `
        
        this.slides.forEach(slide => {
            slide.style = `
               position: absolute;
               width: ${this.width};
               height: ${this.height};
            `
            
            if(i != this.activeSlide) {
                slide.style.transform `translate${this.dir}(${this.moveSize}px)`;
            }
            
            if(i == this.slides.length - 1) {
                slide.style.transform = `translate${this.dir}(${-this.moveSize}px)`;
            }
        })
    }
    
    move(btn) {
        let btnLeftOrRight = btn == this.next ? this.moveSize * -1 : this.moveSize;
        
        for(let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.transition = '0ms';
            
            if(i != this.activeSlide) {
                slides[i].style.transform = `translate${this.dir}(${btnLeftOrRight * -1}px)`;
            }
        }
        
        this
    }
}   



// let arr = ['apple', 'banana', 'plum']

// arr.forEach(slide => {
//     console.log(slide);
// })

