import './Backdrop.css';
const  Backdrop=(props)=>{
    return (
        <div className='Backdrop' onClick={props.change}>
        </div>
    );
};

export default Backdrop;