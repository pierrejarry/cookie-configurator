const infoDiv = document.querySelector('.main-content__main__info');
const closeIcon = document.querySelector('.main-content__main__info .close-icon');
const iabCheckbox = document.querySelector('.iab');
const checkboxInfo = document.querySelector('.checkbox-info');
const cookieBannerSwitchInput = document.getElementById('cookieBannerSwitch');
const resetSettingsBtn = document.getElementById('resetSettings');

const liElements = document.querySelectorAll('li');

const cookieBannerSection = document.querySelector('.main-content__main__cookie-banner');

/* Close Information div when clicking on close icon */
const closeDiv = () => infoDiv.remove();
const toggleCheckboxInfo = () => checkboxInfo.classList.toggle('show');
const closeCheckboxInfo = () => checkboxInfo.classList.remove('show');

const resetSettings = () => {
    cookieBannerSwitchInput.checked = false
}

const handleCookieBannerSettings = () => {
    if (cookieBannerSwitchInput.checked) {
        cookieBannerSection.classList.remove('inactive');
    } else {
        const checkboxInputs = cookieBannerSection.querySelectorAll('.cookie_checkbox');
        const listItems = cookieBannerSection.querySelectorAll('.list-item');

        cookieBannerSection.classList.add('inactive');

        for (checkbox of checkboxInputs) {
            checkbox.checked = false
        }

        for (item of listItems) {
            if (item.classList.contains('active')) {
                item.classList.remove('active')
            }
        }

        closeCheckboxInfo();
    }
}


/* Add active class when clicking on an item list */
for (let i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener('click', function handleClick(event) {
        const listItem = event.target,
              listParent = listItem.closest('ul'),
              allItems = listParent.querySelectorAll('.list-item');
    
        for (item of allItems) {
            item.classList.remove('active')
        }
    
        listItem.classList.contains('list-item') ? 
        listItem.classList.add('active') :
        listItem.closest('.list-item').classList.add('active');
    });
}


// Close Information div when click on close icon
closeIcon.addEventListener('click', closeDiv);

// Show information when checking IAB Checkbox
iabCheckbox.addEventListener('change', toggleCheckboxInfo);

// Reset all settings
resetSettingsBtn.addEventListener('click', resetSettings);

// Handle Cookie Banner Settings
cookieBannerSwitchInput.addEventListener('change', handleCookieBannerSettings);