//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}

	get width(){
		return this._width;
	}

	get height(){
		return this._height;
	}

	set width(widthValue){
		this._width = widthValue;
	}

	set height(heightValue){
		this._height = heightValue;
	}

	getArea(){
		let area = this._width * this._height;
		return area;
	}
}

class Square extends Animal {
	constructor(side){
		this.side =side;
	}

	getPerimeter(){
		let perimeter = 2 * side ;
		return perimeter;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
