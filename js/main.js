/* ------------------------------------------------------
     [ Constants ]
-------------------------------------------------------*/

const infoDiv = document.querySelector('.main-content__main__info');
const closeIcon = document.querySelector('.main-content__main__info .close-icon');
const iabCheckbox = document.querySelector('.iab');
const checkboxInfo = document.querySelector('.checkbox-info');
const resetSettingsBtn = document.getElementById('resetSettings');
const liElements = document.querySelectorAll('li');
const mainSection = document.querySelectorAll('.main-section');

/* ------------------------------------------------------
     [ Functions ]
-------------------------------------------------------*/

/* Close Information div when clicking on close icon */
const closeDiv = () => infoDiv.remove();

const toggleCheckboxInfo = () => checkboxInfo.classList.toggle('show');
const closeCheckboxInfo = () => checkboxInfo.classList.remove('show');

const disableSection = (s) => {
    const switchParent = s.closest('.main-section');
    const checkboxInputs = switchParent.querySelectorAll('.section_checkbox');
    const listItems = switchParent.querySelectorAll('.list-item');

    switchParent.classList.add('inactive');
    s.checked = false;

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

const handlePageSettings = (s) => {
    const switchElem = s.target;
    const switchParent = switchElem.closest('.main-section');
    
    if (switchElem.checked) {
        switchParent.classList.remove('inactive');
    } else {
        disableSection(s.target);
    }
}

const resetSettings = () => {
    for (let i = 0; i < mainSection.length; i++) {
        const toggleSwitch = mainSection[i].querySelector('.toggle-switch');
        disableSection(toggleSwitch);
    }
}

/* ------------------------------------------------------
     [ Event Listener ]
-------------------------------------------------------*/

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

// Handle Cookie Banner Settings
for (let i = 0; i < mainSection.length; i++) {
    const toggleSwitch = mainSection[i].querySelector('.toggle-switch');

    toggleSwitch.addEventListener('change', handlePageSettings.bind(toggleSwitch));
}

// Reset all settings
resetSettingsBtn.addEventListener('click', resetSettings);