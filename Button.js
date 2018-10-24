class Button {
    constructor(label, x, y) {
        this.label = label;
        this.x = x;
        this.y = y;
    }

    draw() {
        if (this.containsMouse()) {
            fill('orange');
        } else {
            fill('green');
        }
        rect(this.x, this.y, 100, 30);

        fill(0);
        text(this.label, this.x + 50, this.y + 20);
        textAlign(CENTER);
    }

    containsPoints(x, y) {
        var left = this.x;
        var right = this.x + 100;
        var top = this.y;
        var bottom = this.y + 30;

        var isInHorizontalRange = left < x && x < right;
        var isInVerticalRange = top < y && y < bottom;

        return isInHorizontalRange && isInVerticalRange;
    }

    containsMouse() {
        return this.containsPoints(mouseX, mouseY);
    }
}