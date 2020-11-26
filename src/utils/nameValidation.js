const nameControl = (e) => {
    const input = e.target;
    if (input.value.match(/\d/)) {
        input.parentNode.classList.add('invalid-name')
        setTimeout(() => {input.parentNode.classList.remove('invalid-name')}, 1500)
    }
    const value = input.value.replace(/[^A-zА-яё]/g, '');

    return({
        name: value
    })
}

export default nameControl;