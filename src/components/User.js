

function User(props) {
    return (
      <div>
        <h1>User!</h1>
        <p>Props: {props.match.params.id}</p>
      </div>
    );
  }
  
  export default User;
  