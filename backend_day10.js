
const validateEmail =(email) =>{

    const emailRule= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(emailRule.test(email)){
        return 'email valid'
    }else{
        return 'invalid email format'
    }
}

console.log(validateEmail('olyseg_9@gmail.com.co'))