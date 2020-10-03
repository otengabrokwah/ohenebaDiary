class UI {
    constructor() {
        this.displayImage = document.querySelector('.displayImage');
    }

    showImages(profile) {
        this.displayImage.innerHTML = `
            <img src="${profile}">
        `
    }
}



