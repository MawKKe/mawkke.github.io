function* cycler(elements) {
    var i = 0;
    while (true) {
        yield elements[i];
        i = (i + 1) % elements.length;
    }
}

export { cycler };