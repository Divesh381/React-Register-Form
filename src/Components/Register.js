import React from 'react';
import Styled from 'styled-components';

export default function Register(props) {


    let btnText;
    let passBoxType;
    let btnClass = ['btn', 'm-1' ,'float-right'];
    if (props.showPass === true) {

        btnText="Hide Password";
        passBoxType = "text";
        btnClass.push('btn-danger');
    }
    else {
        btnText = "Show password";
        passBoxType = "password";
        btnClass.push('btn-success');
    }

    const StyledButton = Styled.button`
    
    displaya:${(props)=>(props.flag === "1" ? "inline-block" : "block")};
    color: white;
    background-color:${(props) => props.color};
    border: none;
    border-radius: 5px;
    padding: 10px 5px;
    font-size: 1rem;
    margin: 5px;
    width: ${(props)=>(props.flag === "1" ? "45%" : "100%")};
    `;

//     const StyledRegisterContainer = Styled.div`
//     width:600px;
//     box-shadow: 1px 0.5px 1px 1px;
//     border-radius: 10px;
//     background-color: white;
//    &:hover{
//      box-shadow: 2px 2px 10px rgba(0,0,0,.2);
//    }

//    @media (min-width:0px) and (max-width:600px)
//    {
//      width:300px;
//    }
//     `;
    return (
        <div className='container card p-3  mt-2 ' style={{width:'600px'}} >
            <h1 className='text-center'>Registration Form</h1>
            <form onSubmit={props.submits}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' id='name' className='form-control' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' id='email' required className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type={passBoxType} id='password' name='password' required className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary m-1'>Register</button>
                <button type="button" className={btnClass.join(" ")} onClick={props.click}>{btnText}</button>
                {/* onClick={props.click} */}
                <br/>
                <StyledButton type='button' color="orange" flag="1">Login </StyledButton>
                <StyledButton type='button' color="green"  flag="1">Login with google</StyledButton>
                <StyledButton type='button' color="blue"  flag="0">Login with facebook</StyledButton>
            </form>
        {/* </StyledRegisterContainer> */}
        </div>
        
    );
}
