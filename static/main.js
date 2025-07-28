function* cycler(elements) {
    var i = 0;
    while (true) {
        yield elements[i];
        i = (i + 1) % elements.length;
    }
}

function setVisible(element, is_visible) {
    const new_state = ["hidden", "visible"][Number(is_visible)];
    element.style.visibility = new_state;
}

function visibilityToggler(element) {
    var cycle = cycler([
        () => setVisible(element, false),
        () => setVisible(element, true),
    ]);
    return () => {
        cycle.next().value();
    }
}

export { visibilityToggler };