function ChangeAll(props){
    
    const colorsToChange = ['red', 'black', 'blue'];
    const sizeToChange = ['16', '20', '24'];

    return (
        <div>
            <h3>change all:</h3>
            <button class="cc" style={{...style }} onClick={() => props.changeAll('case', 'upper')}>Upper Case</button>
            <button class="cc" style={{...style }} onClick={() => props.changeAll('case', 'lower')}>Lower Case</button>
            <div>
                {colorsToChange.map( (item) => <button class="cc" style={{...style }} onClick={() => props.changeAll('color', item)}>{item}</button>)}         
            </div>
            <div>
                {sizeToChange.map( (item) => <button class="cc" style={{...style }} onClick={() => props.changeAll('fontSize', item+"px")}>{item}</button>)}         
            </div>
        </div>
    )
}

const style={
    width:"60px",
    height:"40px",
    width: "fit-content",
    fontWeight:"bold",
    fontSize:"16px",
    margin:"3px"
}

export default ChangeAll;