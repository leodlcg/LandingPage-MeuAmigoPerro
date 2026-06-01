function initializeApoiadores(){

    const names =
        document.querySelectorAll(
            ".apoiadores__name"
        );

    setInterval(() => {

        names.forEach(name => {

            name.classList.remove(
                "apoiadores__name--animate"
            );

        });

        const randomIndex =
            Math.floor(
                Math.random() *
                names.length
            );

        names[randomIndex]
            .classList.add(
                "apoiadores__name--animate"
            );

    },3000);

}