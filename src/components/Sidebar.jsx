function Sidebar () {
    return (
        <div style={{padding: '0 0 0 20px'}}>
        <h3> furniture</h3>
        <div className= 'vender-select'>
            <span>All</span>
            <span>Owner</span>
            <span>Dealer</span>
        </div>
        <ul>
            <li>
                <imput type= 'checkbox'></imput>
                <span>Search titles only</span> 
            </li>
            <li>
                <imput type= 'checkbox'></imput>
                <span>has image</span> 
            </li>
            <li>
                <imput type= 'checkbox'></imput>
                <span>posted today</span> 
            </li>
            <li>
                <imput type= 'checkbox'></imput>
                <span>bundle duplicates</span> 
            </li>
            <li>
                <imput type= 'checkbox'></imput>
                <span>include nearby areas</span> 
            </li>
        </ul>
        </div>
    )
}

export default Sidebar