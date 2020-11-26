const cardControl = (e) => {
    const input = e.target;
    let ccNumString = input.value;
    ccNumString = ccNumString.replace(/[^0-9]/g, '');
    let typeCheck = ccNumString.substring(0, 2),
    cType='',
    block1='',
    block2='',
    block3='',
    block4='',
    formatted='';

    if  (typeCheck.length === 2) {
        typeCheck = parseInt(typeCheck);
        if (typeCheck >= 40 && typeCheck <= 49) {
            cType='Visa';
        }
        else if (typeCheck >= 51 && typeCheck <= 55) {
            cType='Master-Card';
        }
        else if ((typeCheck >= 60 && typeCheck <= 62) || (typeCheck === 64) || (typeCheck === 65)) {
            cType='Discover';
        }
        else if (typeCheck === 34 || typeCheck === 37) {
            cType='American-Express';
        }
        else {
            cType='Invalid';
        }
        if (cType !== 'Invalid') {
            input.parentNode.classList.add(cType)
        }
    }

    if (!cType) {
        input.parentNode.classList.remove('Visa', 'Master-Card', 'Discover', 'American-Express', 'Invalid')
    }
    
    block1 = ccNumString.substring(0, 4);
    if (block1.length === 4) {
        block1=block1 + ' ';
    }

    if (cType === 'Visa' || cType === 'Master-Card' || cType === 'Discover') {
        block2 = ccNumString.substring(4, 8);
        if (block2.length === 4) {
            block2=block2 + ' ';
        }
        block3 = ccNumString.substring(8, 12);
        if (block3.length ===4) {
            block3=block3 + ' ';
        }
        block4 = ccNumString.substring(12, 16);
    }
    else if (cType === 'American-Express') {
        block2 =  ccNumString.substring(4, 10);
        if (block2.length === 6) {
            block2=block2 + ' ';
        }
        block3 =  ccNumString.substring(10, 15);
        block4='';
    }
    else if (cType === 'Invalid') {
        block1 =  typeCheck;
        block2='';
        block3='';
        block4='';
        input.parentNode.classList.add('invalid-card')
        setTimeout(() => {input.parentNode.classList.remove('invalid-card')}, 40000)
    }

    formatted = block1 + block2 + block3 + block4;
    
    return({
        creditCard: formatted
    })
}

export default cardControl;