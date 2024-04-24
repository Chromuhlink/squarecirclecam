function setup() {
    createCanvas(128,128);
    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();
  
    pixelDensity(20);

    // Create a button for capturing the image
    const captureBtn = createButton('Capture Image');
    captureBtn.mousePressed(saveImage);
}


function draw() {
    background(220);

    video.loadPixels();
  
    const stepSize = 2; 
    for (let y = 0; y < height; y += stepSize) {
        for (let x = 0; x < width; x += stepSize) {
            const i = (y * width + x) * 4;
            const darkness = (255 - video.pixels[i]) / 255;
            const radius = stepSize * darkness;
            const bluePalette = [color(100,0,237), color(0,191,255), color(28, 233, 0)];
            const randomColor = random(bluePalette);
            fill(randomColor);
            if (random() < 1) {
                ellipse(x, y, radius, radius);
            } else {
                rect(x, y, radius, radius);
            }
        }
    }
}

function saveImage() {
    save('myCanvas.jpg');
}
