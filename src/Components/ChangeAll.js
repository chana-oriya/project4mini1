function ChangeAll(props){
    
    return (
        <div>
            <button onClick={() => props.changeAll('case', 'upper')}>Upper Case</button>
            <button onClick={() => props.changeAll('case', 'lower')}>Lower Case</button>
        </div>
    )
}

export default ChangeAll;