const Person = ({ name, age, hobbies }) => {
    let msg;
    if (age > 18) {
        msg = <div class="alert alert-success" role="alert">Please go vote!
        <button type="button" class="btn btn-success">Vote online now!</button>
        </div>        
    }
    else {
        msg = <div class="alert alert-danger" role="alert">You must be 18.</div>
        
    }
    if (name.length > 8) {
        name = name.slice(0,6);    
    }

    return (
        <div>
            <p>Learn some information about this person.</p>
            <div class="card col-sm-6">
                <div class="card-body">
                    <h3 class="card-title">{name}</h3>
                    <h5 class="card-text">{age}</h5>
                    <h5 class="card-text">Voter eligibility: {msg}</h5>
                    <p class="card-text">Hobbies: <ul>{hobbies.map(h => <li>{h}</li>)}</ul></p>
                    <button type="button" class="btn btn-outline-primary">Contact {name} </button>
                </div>
            </div>            
        </div>
    )
}