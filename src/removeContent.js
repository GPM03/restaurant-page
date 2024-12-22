function removeContent(container) {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
        container.classList.remove("content--about");
    }
}

export {removeContent}