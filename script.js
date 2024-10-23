function navigateTo(pageId) {
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const currentPage = document.getElementById(pageId);
    currentPage.style.display = 'flex';
    currentPage.style.opacity = '0';

    setTimeout(() => {
        currentPage.style.opacity = '1';
    }, 10);

    const buttons = currentPage.querySelectorAll('.button');
    buttons.forEach(button => {
        button.style.opacity = 0;
        setTimeout(() => {
            button.style.opacity = 1;
        }, 3000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    navigateTo('page1');
});
