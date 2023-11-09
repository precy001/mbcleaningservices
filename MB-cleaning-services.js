const getStarted = document.querySelector('.js-get-started')
const servicePage = document.querySelector('.js-service-page')
const homePage = document.querySelector('.js-homepage')
const homeButton = document.querySelector('.js-home-button')
const serviceButton = document.querySelector('.js-service-button')

function moveToServicePage(){
    servicePage.classList.add('show-service-page')
    homePage.classList.add('hide-home-page')
    homeButton.classList.add('change-home-button-color')
    serviceButton.classList.add('change-service-button-color')
    aboutButton.classList.remove('change-about-button-color')
    aboutPage.classList.remove('show-about-page')
    workingProcess.classList.remove('show-working-process')
    contactPage.classList.remove('display-contact-page')
    contactButton.classList.remove('change-contact-color')
    selectionError.classList.remove('display-selection-error')
    numberOfClothesError.classList.remove('display-the-error')
    accountDisplay.classList.remove('display-the-account')
    form.classList.remove('display-form')
    mobileMenu.classList.remove('is-active')
    menuBtn.classList.remove('is-active')
};

function moveToHomePage(){
    servicePage.classList.remove('show-service-page')
    homePage.classList.remove('hide-home-page')
    homeButton.classList.remove('change-home-button-color')
    serviceButton.classList.remove('change-service-button-color')
    homePage.classList.add('animation')   
    aboutButton.classList.remove('change-about-button-color')
    aboutPage.classList.remove('show-about-page')
    workingProcess.classList.remove('show-working-process')
    contactPage.classList.remove('display-contact-page')
    contactButton.classList.remove('change-contact-color')
    selectionError.classList.remove('display-selection-error')
    numberOfClothesError.classList.remove('display-the-error')
    accountDisplay.classList.remove('display-the-account')
    form.classList.remove('display-form')
    mobileMenu.classList.remove('is-active')
    menuBtn.classList.remove('is-active')
}

const sweepButton = document.querySelector('.js-add-service-sweep')
const laundryButton = document.querySelector('.js-add-service-laundry')
const toiletButton = document.querySelector('.js-add-service-toilet')
const dishWashButton = document.querySelector('.js-add-service-wash-dish')
const roomSprayButton = document.querySelector('.js-add-service-spray-room')
const subscribeButton = document.querySelector('.js-add-service-subscribe')
const payNowButton = document.querySelector('.js-pay-now')
const numberOfClothes = document.querySelector('.js-number')
const numberOfClothesError = document.querySelector('.js-input-selection-error')
let bill = 0
let billDisplay = document.querySelector('.js-bill')

const arrayOfService = [

]

let serviceSelected = document.querySelector('.developer-add')

function calculateBill(particularService){
    if(particularService === 'sweepAndMop'){
        if(sweepButton.innerText === 'Add service'){
            sweepButton.innerText = 'Remove service'
            sweepButton.classList.add('is-added')
            bill+=6000
            payNowButton.classList.add('display-pay-now')
            arrayOfService.push('Sweeping and mopping')
        }else{
            sweepButton.innerText = 'Add service'
            sweepButton.classList.remove('is-added')
            bill-=6000
            arrayOfService.splice('Sweeping and moppping')
        }
    }else if(particularService === 'laundry'){
        if(laundryButton.innerText === 'Add service'){
            if(numberOfClothes.value === ''){
                numberOfClothesError.classList.add('display-the-error')
                servicePage.classList.remove('show-service-page')
            }else{
            laundryButton.innerText = 'Remove service'
            laundryButton.classList.add('is-added')
            bill+= numberOfClothes.value*400   
            payNowButton.classList.add('display-pay-now')
            numberOfClothes.classList.add('remove-type')
            arrayOfService.push(`Laundry of ${numberOfClothes.value} clothes`)
            }
        }else{
            laundryButton.innerText = 'Add service'
            laundryButton.classList.remove('is-added')
            bill-= numberOfClothes.value*400
            numberOfClothes.classList.remove('remove-type')
            arrayOfService.splice(`Laundry of ${numberOfClothes.value} clothes`)
        }
    }else if(particularService === 'cleanToilet'){
        if(toiletButton.innerText === 'Add service'){
            toiletButton.innerText = 'Remove service'
            toiletButton.classList.add('is-added')
            bill+=3000
            payNowButton.classList.add('display-pay-now')
            arrayOfService.push('Toilet cleaning')
        }else{
            toiletButton.innerText = 'Add service'
            toiletButton.classList.remove('is-added')
            bill-=3000
            arrayOfService.splice('Toilet cleaning')
        }
    }else if(particularService === 'washDish'){
        if(dishWashButton.innerText === 'Add service'){
            dishWashButton.innerText = 'Remove service'
            dishWashButton.classList.add('is-added')
            bill+=3000
            payNowButton.classList.add('display-pay-now')
            arrayOfService.push('Dish washing')
        }else{
            dishWashButton.innerText = 'Add service'
            dishWashButton.classList.remove('is-added')
            bill-=3000
            arrayOfService.splice('Dish washing')
        }
    }else if(particularService === 'sprayRoom'){
        if(roomSprayButton.innerText === 'Add service'){
            roomSprayButton.innerText = 'Remove service'
            roomSprayButton.classList.add('is-added')
            bill+=1500
            payNowButton.classList.add('display-pay-now')
            arrayOfService.push('Room spraying')
        }else{
            roomSprayButton.innerText = 'Add service'
            roomSprayButton.classList.remove('is-added')
            bill-=1500
            arrayOfService.splice('Room spraying')
        }
    }else if(particularService === 'subscribeMonthly'){
        if(subscribeButton.innerText === 'Add service'){
            subscribeButton.innerText = 'Remove service'
            subscribeButton.classList.add('is-added')
            bill+=50000
            payNowButton.classList.add('display-pay-now')
            arrayOfService.push('Monthly subscription')
        }else{
            subscribeButton.innerText = 'Add service'
            subscribeButton.classList.remove('is-added')
            bill-=50000
            arrayOfService.splice('Monthly subscription')
        }
    }
    if(bill < 1){
        bill = 0
    }
    billDisplay.innerText =  `You are to pay a sum of NGN ${bill} into the following account`
    serviceSelected.value = arrayOfService
}

const selectionError = document.querySelector('.js-selection-error-display')
const accountDisplay = document.querySelector('.js-display-account')


function checkServicesButton(){
    if(sweepButton.innerText === 'Add service' && laundryButton.innerText === 'Add service' && toiletButton.innerText ==='Add service'
        && dishWashButton.innerText === 'Add service' && roomSprayButton.innerText ==='Add service' && subscribeButton.innerText === 'Add service'
    ){
      selectionError.classList.add('display-selection-error')
      servicePage.classList.remove('show-service-page')
    }else{
        accountDisplay.classList.add('display-the-account')
        servicePage.classList.remove('show-service-page')
    }
}

const aboutPage = document.querySelector('.js-about-page')
const aboutButton = document.querySelector('.js-about-button')
function moveToAboutPage(){
    aboutPage.classList.add('show-about-page')
    aboutButton.classList.add('change-about-button-color')
    homePage.classList.add('hide-home-page')
    homeButton.classList.add('change-home-button-color')
    serviceButton.classList.remove('change-service-button-color')
    servicePage.classList.remove('show-service-page')
    workingProcess.classList.remove('show-working-process')
    contactPage.classList.remove('display-contact-page')
    contactButton.classList.remove('change-contact-color')
    selectionError.classList.remove('display-selection-error')
    numberOfClothesError.classList.remove('display-the-error')
    accountDisplay.classList.remove('display-the-account')
    form.classList.remove('display-form')
    mobileMenu.classList.remove('is-active')
    menuBtn.classList.remove('is-active')
}

const readMoreButton = document.querySelector('.js-read-more')
const workingProcess = document.querySelector('.js-working-process')

function moveToReadMore(){
    workingProcess.classList.add('show-working-process')
    aboutPage.classList.remove('show-about-page')
}

const contactButton = document.querySelector('.js-contact-button')
const contactPage = document.querySelector('.js-contact-page')

function moveToContactPage(){
    contactPage.classList.add('display-contact-page')
    contactButton.classList.add('change-contact-color')
    aboutPage.classList.remove('show-about-page')
    aboutButton.classList.remove('change-about-button-color')
    servicePage.classList.remove('show-service-page')
    homePage.classList.add('hide-home-page')
    homeButton.classList.add('change-home-button-color')
    serviceButton.classList.remove('change-service-button-color')
    servicePage.classList.remove('show-service-page')
    workingProcess.classList.remove('show-working-process')
    selectionError.classList.remove('display-selection-error')
    numberOfClothesError.classList.remove('display-the-error')
    accountDisplay.classList.remove('display-the-account')
    form.classList.remove('display-form')
    mobileMenu.classList.remove('is-active')
    menuBtn.classList.remove('is-active')
}

const okButton = document.querySelector('.js-ok-button')
function removeError(){
    selectionError.classList.remove('display-selection-error')
    servicePage.classList.add('show-service-page')
    numberOfClothesError.classList.remove('display-the-error')
}

const form = document.querySelector('.js-apply-form')
function displayForm(){
    form.classList.add('display-form')
    accountDisplay.classList.remove('display-the-account')
}

const menuBtn = document.querySelector('.hamburger');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('is-active')
    mobileMenu.classList.toggle('is-active')
})

const mobileMenu = document.querySelector('.mobile-nav')
const mainPage = document.querySelector('.js-main')
mainPage.addEventListener('click', () => {
    mobileMenu.classList.remove('is-active')
    menuBtn.classList.remove('is-active')
})