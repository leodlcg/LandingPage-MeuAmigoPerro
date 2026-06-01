function initializeNucleos(){

    const cards =
        document.querySelectorAll(
            ".nucleos__card"
        );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if(entry.isIntersecting){

                        entry.target.classList.add(
                            "nucleos__card--visible"
                        );

                    }

                });

            },
            {
                threshold:0.3
            }
        );

    cards.forEach(card => {

        observer.observe(card);

    });

}