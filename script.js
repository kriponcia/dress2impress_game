function changeLayer(layerId, imageUrl, height) {
    const layer = document.getElementById(layerId);
    layer.style.backgroundImage = `url(${imageUrl})`;
    layer.style.height = height; 
    layer.style.display = imageUrl ? 'block' : 'none'; 
}

function changeHair(hairImage) {
    changeLayer('hair', hairImage, '500px');
}

function changeTop(topImage) {
    changeLayer('top', topImage, '500px');
}

function changeBottom(bottomImage) {
    changeLayer('bottom', bottomImage, '570px');
}

function resetOutfit() {
    changeLayer('hair', '', '0');   
    changeLayer('top', '', '');    
    changeLayer('bottom', '', ''); 
}
