function initializeMembros(){

    const tabs =
        document.querySelectorAll(
            ".membros__tab"
        );

    tabs.forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                tabs.forEach(current => {

                    current.classList.remove(
                        "membros__tab--active"
                    );

                });

                tab.classList.add(
                    "membros__tab--active"
                );

            }
        );

    });

}