function getData() {
    return fetch('../assets/Planes.json') .then(response => response.json());
}

export { getData };