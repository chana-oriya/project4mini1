function ChangeAll(props){
    
    return (
        <div>
            <button style={{...style }} onClick={() => props.changeAll('case', 'upper')}>Upper Case</button>
            <button style={{...style }} onClick={() => props.changeAll('case', 'lower')}>Lower Case</button>
        </div>
    )
}

const style={
    width:"60px",
    height:"40px",
    width: "fit-content",
    // blockSize: "fit-content",
    fontWeight:"bold",
    fontSize:"16px",
    margin:"3px"
}

export default ChangeAll;