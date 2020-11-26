const newUsers = (e) => {
    const input = e.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    const name = input.name;

    return({
        [name]: value
    })
}

export default newUsers;