// Carousel navigation buttons
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

// Carousel elements
// All carousel items
const sections = document.querySelectorAll(".section")
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')

// Only one carousel item
const numberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')

// Active slide index (changes with navigation)
let active = 0; // Value that changes → let

// Total number of slides (fixed value)
const total = items.length // Fixed value → const

// Initializes a variable
let timer;

// Function that switches products
function update(direction) {
    // Finds the 'active' class and removes it
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.section.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    // If greater than 0, it's Next
    if(direction > 0) {
        active = active + 1

        // If already on the last product, go back to the start (Loop)
        if (active === total) {
            active = 0
        }
    }

    // If less than 0, it's Prev
    else if (direction < 0) {
        active = active -1

        // Loop
        if (active < 0) {
            active = total -1
        }
    }

    // Makes the indicator show a '0' before the product number
    numberIndicator.textContent = String(active + 1).padStart(2, '0')

    // Removes 'active' from the current product and adds it to the next one
    items[active].classList.add('active')
    sections[active].classList.add('active')

    // Updates the product indicator
    dots[active].classList.add('active')
}

// When the button is clicked, it calls a function
// Prev
prevButton.addEventListener('click', () => {
    update(-1)
})

// Next
nextButton.addEventListener('click', () => {
    update(1)
})
