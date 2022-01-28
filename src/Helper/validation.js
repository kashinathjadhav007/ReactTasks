const Validation=()=>{
    let errors={}

    if(!/^[A-Za-z]+$/.test(Name))
    {
        errors.Name="please enter  valid name"
    }

    if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/test(Mail))
    {
        errors.Email="please enter correct email "
    }

    if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/test(Password))
    {
        errors.Password="please enter correct password "
    }
}
export default Validation;