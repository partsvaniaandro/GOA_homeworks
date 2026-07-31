class shape{
    constructor(width, height){
        this.width = width
        this.height = height
    }
    get perimeter(){
        return (this.width*2) + (this.height*2)
    }
    get area(){
        return this.width * this.height
    }
    set height(el){
        this.height = el
    }
    set width(el){
        this.width = el
    }
}