function initializeMenu(){

    const menuLinks =
        document.querySelectorAll(
            ".menu__link"
        );

    menuLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const target =
                    document.querySelector(
                        link.getAttribute("href")
                    );

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }
        );

    });

}