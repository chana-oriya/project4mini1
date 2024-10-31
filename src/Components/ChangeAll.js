function ChangeAll(props){
    
    const colorsToChange = ['red', 'black', 'blue'];
    const sizeToChange = ['16', '20', '24'];

    return (
        <div>
            <h3>change all!</h3>
            <button onClick={() => props.changeAll('case', 'upper')}>Upper Case</button>
            <button onClick={() => props.changeAll('case', 'lower')}>Lower Case</button>
            <div>
                {colorsToChange.map( (item) => <button onClick={() => props.changeAll('color', item)}>{item}</button>)}         
            </div>
            <div>
                {sizeToChange.map( (item) => <button onClick={() => props.changeAll('fontSize', item+"px")}>{item}</button>)}         
            </div>
        </div>
    )
}

export default ChangeAll;