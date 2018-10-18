const FormOne = (props) => (
  <form id='form1'>
    <input type = 'text' placeholder = 'name'></input>
    <input type = 'text' placeholder = 'email'></input>
    <input type = 'text' placeholder = 'password'></input>
    <button>Hot Cheetos (Next)</button>
  </form>
)

const FormTwo = (props) => (
  <form id='form2'>
    <input type = 'text' placeholder = 'address'></input>
    <input type = 'text' placeholder = 'city'></input>
    <input type = 'text' placeholder = 'phone'></input>
    <button>Next</button>
  </form>
)

const FormThree = (props) => (
  <form id='form3'>
    <input type = 'text' placeholder = 'credit card'></input>
    <input type = 'text' placeholder = 'expiry date'></input>
    <input type = 'text' placeholder = 'billing zip code'></input>
    <button>Buy</button>
  </form>
)

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <button id='checkout'>Check Out</button>
      <FormOne />
      <FormTwo />
      <FormThree />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
