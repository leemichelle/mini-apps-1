const FormOne = props => React.createElement(
  'form',
  { id: 'form1' },
  React.createElement('input', { type: 'text', placeholder: 'name' }),
  React.createElement('input', { type: 'text', placeholder: 'email' }),
  React.createElement('input', { type: 'text', placeholder: 'password' }),
  React.createElement(
    'button',
    null,
    'Hot Cheetos (Next)'
  )
);

const FormTwo = props => React.createElement(
  'form',
  { id: 'form2' },
  React.createElement('input', { type: 'text', placeholder: 'address' }),
  React.createElement('input', { type: 'text', placeholder: 'city' }),
  React.createElement('input', { type: 'text', placeholder: 'phone' }),
  React.createElement(
    'button',
    null,
    'Next'
  )
);

const FormThree = props => React.createElement(
  'form',
  { id: 'form3' },
  React.createElement('input', { type: 'text', placeholder: 'credit card' }),
  React.createElement('input', { type: 'text', placeholder: 'expiry date' }),
  React.createElement('input', { type: 'text', placeholder: 'billing zip code' }),
  React.createElement(
    'button',
    null,
    'Buy'
  )
);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { id: 'checkout' },
        'Check Out'
      ),
      React.createElement(FormOne, null),
      React.createElement(FormTwo, null),
      React.createElement(FormThree, null)
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkZvcm1PbmUiLCJwcm9wcyIsIkZvcm1Ud28iLCJGb3JtVGhyZWUiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicmVuZGVyIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxVQUFXQyxLQUFELElBQ2Q7QUFBQTtBQUFBLElBQU0sSUFBRyxPQUFUO0FBQ0UsaUNBQU8sTUFBTyxNQUFkLEVBQXFCLGFBQWMsTUFBbkMsR0FERjtBQUVFLGlDQUFPLE1BQU8sTUFBZCxFQUFxQixhQUFjLE9BQW5DLEdBRkY7QUFHRSxpQ0FBTyxNQUFPLE1BQWQsRUFBcUIsYUFBYyxVQUFuQyxHQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGLENBREY7O0FBU0EsTUFBTUMsVUFBV0QsS0FBRCxJQUNkO0FBQUE7QUFBQSxJQUFNLElBQUcsT0FBVDtBQUNFLGlDQUFPLE1BQU8sTUFBZCxFQUFxQixhQUFjLFNBQW5DLEdBREY7QUFFRSxpQ0FBTyxNQUFPLE1BQWQsRUFBcUIsYUFBYyxNQUFuQyxHQUZGO0FBR0UsaUNBQU8sTUFBTyxNQUFkLEVBQXFCLGFBQWMsT0FBbkMsR0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixDQURGOztBQVNBLE1BQU1FLFlBQWFGLEtBQUQsSUFDaEI7QUFBQTtBQUFBLElBQU0sSUFBRyxPQUFUO0FBQ0UsaUNBQU8sTUFBTyxNQUFkLEVBQXFCLGFBQWMsYUFBbkMsR0FERjtBQUVFLGlDQUFPLE1BQU8sTUFBZCxFQUFxQixhQUFjLGFBQW5DLEdBRkY7QUFHRSxpQ0FBTyxNQUFPLE1BQWQsRUFBcUIsYUFBYyxrQkFBbkMsR0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixDQURGOztBQVNBLE1BQU1HLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZTixLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDRDs7QUFFRE8sV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLFVBQVEsSUFBRyxVQUFYO0FBQUE7QUFBQSxPQURBO0FBRUEsMEJBQUMsT0FBRCxPQUZBO0FBR0EsMEJBQUMsT0FBRCxPQUhBO0FBSUEsMEJBQUMsU0FBRDtBQUpBLEtBREY7QUFRRDtBQWQrQjs7QUFrQmxDQyxTQUFTRCxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJFLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9ybU9uZSA9IChwcm9wcykgPT4gKFxuICA8Zm9ybSBpZD0nZm9ybTEnPlxuICAgIDxpbnB1dCB0eXBlID0gJ3RleHQnIHBsYWNlaG9sZGVyID0gJ25hbWUnPjwvaW5wdXQ+XG4gICAgPGlucHV0IHR5cGUgPSAndGV4dCcgcGxhY2Vob2xkZXIgPSAnZW1haWwnPjwvaW5wdXQ+XG4gICAgPGlucHV0IHR5cGUgPSAndGV4dCcgcGxhY2Vob2xkZXIgPSAncGFzc3dvcmQnPjwvaW5wdXQ+XG4gICAgPGJ1dHRvbj5Ib3QgQ2hlZXRvcyAoTmV4dCk8L2J1dHRvbj5cbiAgPC9mb3JtPlxuKVxuXG5jb25zdCBGb3JtVHdvID0gKHByb3BzKSA9PiAoXG4gIDxmb3JtIGlkPSdmb3JtMic+XG4gICAgPGlucHV0IHR5cGUgPSAndGV4dCcgcGxhY2Vob2xkZXIgPSAnYWRkcmVzcyc+PC9pbnB1dD5cbiAgICA8aW5wdXQgdHlwZSA9ICd0ZXh0JyBwbGFjZWhvbGRlciA9ICdjaXR5Jz48L2lucHV0PlxuICAgIDxpbnB1dCB0eXBlID0gJ3RleHQnIHBsYWNlaG9sZGVyID0gJ3Bob25lJz48L2lucHV0PlxuICAgIDxidXR0b24+TmV4dDwvYnV0dG9uPlxuICA8L2Zvcm0+XG4pXG5cbmNvbnN0IEZvcm1UaHJlZSA9IChwcm9wcykgPT4gKFxuICA8Zm9ybSBpZD0nZm9ybTMnPlxuICAgIDxpbnB1dCB0eXBlID0gJ3RleHQnIHBsYWNlaG9sZGVyID0gJ2NyZWRpdCBjYXJkJz48L2lucHV0PlxuICAgIDxpbnB1dCB0eXBlID0gJ3RleHQnIHBsYWNlaG9sZGVyID0gJ2V4cGlyeSBkYXRlJz48L2lucHV0PlxuICAgIDxpbnB1dCB0eXBlID0gJ3RleHQnIHBsYWNlaG9sZGVyID0gJ2JpbGxpbmcgemlwIGNvZGUnPjwvaW5wdXQ+XG4gICAgPGJ1dHRvbj5CdXk8L2J1dHRvbj5cbiAgPC9mb3JtPlxuKVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxidXR0b24gaWQ9J2NoZWNrb3V0Jz5DaGVjayBPdXQ8L2J1dHRvbj5cbiAgICAgIDxGb3JtT25lIC8+XG4gICAgICA8Rm9ybVR3byAvPlxuICAgICAgPEZvcm1UaHJlZSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19