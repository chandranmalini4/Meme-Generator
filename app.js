const form = document.getElementById("form");

//const removeMeme=document.getElementById("remove")
const btn = document.getElementById("btn")
const divMeme = document.getElementById("meme")

//form.addEventListener('submit', (e) => {
    btn.addEventListener('click',(e)=>{
    const canvas = document.createElement('canvas')
    const imageUrl = document.getElementById("url").value;
    const textOnTop = document.getElementById("textontop").value
const textOnBottom = document.getElementById("textonbottom").value
    const ctx = canvas.getContext('2d');
     const removeMeme= document.createElement('button')
    removeMeme.innerHTML="Remove Meme"
    const image = new Image(); // Using optional size for image
    image.onload = drawImageActualSize; // Draw when image has loaded

    // Load an image of intrinsic size 300x227 in CSS pixels
    image.src = imageUrl

    function drawImageActualSize() {
        // Use the intrinsic size of image in CSS pixels for the canvas element
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;
        ctx.drawImage(this, 0, 0, this.width, this.height);
        ctx.font = '48px serif';
        ctx.fillStyle= "white";
        //ctx.textAlign="center"

    ctx.fillText(textOnTop, 20, 50, this.naturalWidth-20)
    ctx.fillText(textOnBottom,20,this.naturalHeight-10)
    
    }
    canvas.append(image);
    
    divMeme.append(removeMeme);
    divMeme.append(canvas);
    imageUrl.value=" ";
    textOnTop.value=" ";
    textOnBottom.value=" ";
    removeMeme.addEventListener('click',(e)=>{
        console.log(canvas);
        console.log(image)
        divMeme.remove(canvas)
        canvas.remove(image)
    })

    }
)
