const speedometer = document.querySelector('#speedometer')
const speed = document.querySelector('#speed')
const option = { enableHighAccuracy: true }

let watchId = null

speedometer.addEventListener('click', ()=> {
    if (!watchId) {
        watchId = navigator.geolocation.watchPosition(updatePosition, handleError, option)
    } else {
        navigator.geolocation.clearWatch(watchId)
        watchId = null
        speed.textContent = 0
    }
})

function updatePosition(position) {
    if (position.coords.speed === null)
        return
    
    speed.textContent = (position.coords.speed * 3.6).toFixed(1)
}

function handleError(error) {
    console.log(error.message)
}