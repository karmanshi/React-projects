
export function Decimal_Binary(num) {
    let b_d = ''
    while (num != 0) {
        let rem = num % 2;
        let ques = Number.parseInt(num / 2);
        num = ques
        b_d = rem.toString() + b_d
    }
    return b_d
}

export function Binary_Decimal(inputNumber) {
    let final_num = 0
    let base = 2
    let power = 0
    let len = inputNumber.length - 1
    while (len >= 0) {
        let numb = Number.parseInt(inputNumber[len])
        let product = numb * (base ** power)
        final_num = (final_num) + product
        power += 1
        len--

    }
    return final_num
}


export function Decimal_Octal(num) {
    let b_d = ''
    while (num != 0) {
        let rem = num % 8;
        let ques = Number.parseInt(num / 8);
        num = ques
        b_d = rem.toString() + b_d
    }
    return b_d
}

export function Octal_Decimal(inputNumber) {
    let final_num = 0
    let base = 8
    let power = 0
    let len = inputNumber.length - 1
    while (len >= 0) {
        let numb = Number.parseInt(inputNumber[len])
        let product = numb * (base ** power)
        final_num = (final_num) + product
        power += 1
        len--

    }
    return final_num
}

export function Decimal_Hexa(num) {
    let b_d = ''
    while (num != 0) {
        let rem = num % 16;
        if(rem==10){
            rem = 'A'
        }
        else if(rem == 11)
        {
            rem= 'B'
        }
        else if(rem == 12)
        {
            rem= 'C'
        }
        else if(rem == 13)
        {
            rem= 'D'
        }
        else if(rem == 14)
        {
            rem= 'E'
        }
        else if(rem == 15)
        {
            rem= 'F'
        }
        let ques = Number.parseInt(num / 16);
        num = ques
        b_d = rem.toString() + b_d
    }
    return b_d
}

export function Hexa_Decimal(inputNumber) {
    let final_num = 0
    let base = 16
    let power = 0
    let len = inputNumber.length - 1
    while (len >= 0) {
        let rem = inputNumber[len]
        if(rem== 'A'){
            rem = '10'
        }
        else if(rem == 'B')
        {
            rem= '11'
        }
        else if(rem == 'C')
        {
            rem= '12'
        }
        else if(rem == 'D')
        {
            rem= '13'
        }
        else if(rem == 'E')
        {
            rem= '14'
        }
        else if(rem == 'F')
        {
            rem= '15'
        }
        let numb = Number.parseInt(rem)
        let product = numb * (base ** power)
        final_num = (final_num) + product
        power += 1
        len--

    }
    return final_num
}

//12condition 