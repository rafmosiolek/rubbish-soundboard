class Button {
    constructor(label, x, y) {
        this.label = label;
        this.x = x;
        this.y = y;
    }

    draw() {
        rect(this.x, this.y, 100, 30);
        text(this.label, this.x + 50, this.y + 20);
        textAlign(CENTER);
    }
}