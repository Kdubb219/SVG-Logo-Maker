class Triangle {
    constructor(x1, y1, x2, y2, x3, y3,color) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.x3 = x3;
      this.y3 = y3;
      this.color = color;
    }
  
    toSVG() {
      return `
        <polygon fill="${this.color}" points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" />
      `;
    }
  }
  
  class Circle {
    constructor(cx, cy, r, color) {
      this.cx = cx;
      this.cy = cy;
      this.r = r;
      this.color= color;
    }
  
    toSVG() {
      return `
        <circle fill="${this.color}" cx="${this.cx}" cy="${this.cy}" r="${this.r}" />
      `;
    }
  }
  
  class Square {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color=color;
    }
  
    toSVG() {
      return `
        <rect fill="${this.color}" x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" />
      `;
    }
  }


  function getShape (shape, color){
    if (shape=='Triangle'){
        const T= new Triangle (100,100,200,100,150,200,color);
        return T.toSVG();
    }
    else if (shape=='Circle'){
        const C=new Circle (100,100,100,color);
        return C.toSVG();
    }
    else {const S=new Square (50,50,100,100,color);
    return S.toSVG();
    }
  }

  module.exports= {getShape};