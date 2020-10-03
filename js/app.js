// Instantiate UI
const ui = new UI;


const data = [
        
        './images/IMG_9226.JPG',
        './images/IMG_9252.JPG',
        './images/IMG_9238.JPG',
        './images/IMG_9224.JPG',
        './images/IMG_9254.JPG',
        './images/IMG_9243.JPG',
        './images/IMG_9251.JPG',
]



// The Next Event
document.querySelector('.btn button').addEventListener('click', loadProfile);

function loadProfile() {
    // Display Profile
    // console.log('Hello World')
    const profileData = profile.next().value;
    if(profileData !== undefined) {
        console.log(profileData)
        ui.showImages(profileData);
    }else{
        // Reload Current Page
        window.location.reload();
        
    }
    
}

// Call profileIterator
const profile = profileIterator(data);

// Reload Profile 
loadProfile()


// Profile Iterator
function profileIterator(profile) {
    let profileIndex = 0;

    return {
        next : function() {
            if(profileIndex < profile.length) {
                return {value:profile[profileIndex++], done:false};
            }else{
                return {done: true};
            }
        }
    }
}