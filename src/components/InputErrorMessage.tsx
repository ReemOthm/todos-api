interface IProps {
    msg?: string
}

const InputErrorMessage = ({msg}:IProps)=>{
    return msg && <p className="text-sm text-red-800">{msg}</p>
}

export default InputErrorMessage;