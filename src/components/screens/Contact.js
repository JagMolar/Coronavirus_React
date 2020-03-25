import React, {useReducer, useState} from 'react';
import Label from 'components/UI/Label';
import FormGroup from 'components/UI/FormGroup';

const MODIFY_INPUT = 'MODIFY_INPUT';

const initialState = {
    fullname:'',
    email:'',
    message:''
};

function reducer(state, action){
    if (action.type === MODIFY_INPUT) {
        return{
            ...state,
            [action.field]:action.value
        }
    } else {
        return state;
    }
}

const Contact = ()=> {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [image, setImage] = useState(null);

    function handleSubmit(event){
        event.preventDefault();
        const {fullname, email, message} = state;
        console.log(`${fullname} ${email} ${message}`);
        console.log(image);
    }

    // function handleChangeFullname (event){
    //     setFullname(event.target.value);
    // }

    function handleChangeInput(event){
        dispatch({
            type: MODIFY_INPUT,
            field: event.target.name,
            value: event.target.value
        });
    }

    function handleChangeFile(event){
        setImage(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Nombre Completo: </Label>
                <input  type="text" name="fullname" value={state.fullname} onChange={handleChangeInput} />
            </FormGroup>
            <FormGroup>
                <Label>Email: </Label>
                <input  type="text" name="email" value={state.email} onChange={handleChangeInput} />
            </FormGroup>
            <FormGroup>
                <Label>Mensaje: </Label>
                <textarea name="message" value={state.message} onChange={handleChangeInput} />
            </FormGroup>
            <FormGroup>
                <Label>Tu foto: </Label>
                <input type="file"  onChange={handleChangeFile} />
                {image && <img src={image} alt="mi foto" />}
            </FormGroup>
            <FormGroup>
                <input type="submit" value="Enviar" />
            </FormGroup>            
        </form>

    );
};

export default Contact;
