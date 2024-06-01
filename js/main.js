// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
// var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
//     trigger: 'focus'
//   })

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

const popoverList = Array.from(popoverTriggerList).map(popoverTriggerEl => {
    return new bootstrap.Popover(popoverTriggerEl, {
        trigger: 'focus'
    });
});

