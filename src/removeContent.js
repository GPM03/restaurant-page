function removeContent(container) {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

export {removeContent}