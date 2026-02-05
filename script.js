console.log('MoaQuest Initialized');

// Hard Refresh on Logo Click
// Forces a reload by appending a timestamp to bypass cache
document.querySelector('.logo').addEventListener('click', function (e) {
    e.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set('reload', new Date().getTime());
    window.location.href = url.toString();
});
