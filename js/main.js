const infoDiv = document.querySelector('.main-content__main__info');
const closeIcon = document.querySelector('.main-content__main__info .close-icon');

/* Close Information div when clicking on close icon */
const closeDiv = () => infoDiv.remove();


/* Add active class when clicking on an item list */

document.addEventListener('click', function handleClick(event) {
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

closeIcon.addEventListener('click', closeDiv);
