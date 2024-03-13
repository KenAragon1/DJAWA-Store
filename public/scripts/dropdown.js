if (document.querySelector('[data-toggle="dropdown-menu"]')) {
    const dropdownBtn = document.querySelector('[data-toggle="dropdown-menu"]');
    const dropdownMenu = document.querySelector('[data-target="dropdown"]');
    dropdownBtn.addEventListener("click", () => {
        dropdownMenu.classList.toggle("invisible");
    });

    document.addEventListener("click", (e) => {
        if (
            !dropdownMenu.contains(e.target) &&
            !dropdownBtn.contains(e.target)
        ) {
            dropdownMenu.classList.add("invisible");
        }
    });
}
