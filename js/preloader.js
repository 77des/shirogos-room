if (!window.matchMedia("(max-width: 768px)").matches) {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(function() {
            document.body.classList.add('bg-hovered');
            var preloader = document.querySelector('#page-preloader');
            if ( !preloader.classList.contains('done') ) {
                preloader.classList.add('done');
            }
        }, 1000)
    })
}
