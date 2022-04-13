class Scroll {
    constructor(obj) {
        this.element = document.querySelector(obj.element)
        this.top = obj.top;
        this.element.style.position = 'fixed';
        this.init = obj.init;
        this.element.style.top = this.scroll();
        
        window.addEventListener('scroll', () => this.scroll());
        window.addEventListener('resize', () => this.scroll());
    }
    
   scroll() {
       
       this.window = this.scrollNumber();
    
       if(this.window - pageYOffset > 0) {
           this.element.style.top = this.window - pageXOffset + 'px';
       }else {
           this.element.style.top = 0;
       }
   }
   
   scrollNumber() {
       if (this.init == 'px') {
           return this.top >= 0 ? this.top : 0;
       }else if(this.init == '%' || this.init == underfined) {
           return this.calc(window.innerHeight, this.top) - this.element.clientHeight;
       }
   }
   
   calc(heigt, top) {
       return heigt / 100 * top;
   }
}

const scroll = new Scroll({
    element:'.header__nav',
    top: 100,
    init: '%'
})

