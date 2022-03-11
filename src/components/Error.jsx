export default ({message}) => {
    const {err} = message;
    const {error} = err;
    // console.log(Object.keys(message))
    console.log(error, 'error');
    console.log(typeof err)
    return <p>error: {{message:{err}}}</p>
}