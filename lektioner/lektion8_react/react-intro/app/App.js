import React from 'react';
import ReactDOM from 'react-dom';
import { List, FormInput, TextOutput, Mounted, Mount, Unmount }  from './exporter';
require('./style.css');

//Den övre komponenter hanterar state
class App extends React.Component {
	constructor(){
		super();
		this.state = {
			//data är för extrauppgiften
			data: [
				{id: 1, name: 'Agneta'},
				{id: 2, name: 'Steffe'},
				{id: 3, name: 'Polaren'},
				{id: 4, name: 'Buffe med kniven'},
				{id: 5, name: 'Hinkar-Berra'},
				{id: 6, name: 'Femtvåan'}
			],
      clicks: 0
		}
		//Binder metoden till komponenten
		this.update = this.update.bind(this);
    this.mount = this.mount.bind(this);
    this.unmount = this.unmount.bind(this)
	}
	//Metoden som ska kallas på varje gång vi skriver något i <input>
	update(e){
    if (!!e.target.value) {
		  this.setState({text: e.target.value});
    } else {
      this.setState({ text: TextOutput.defaultProps.text })
    }
	}

  mount(e) {
    console.log("mounting")
    this.setState({ shouldMount: !this.state.shouldMount }) // för att toggla
    //this.setState({ shouldMount: true });
    //ReactDOM.render(<Mounted/>, document.getElementById('mount'));
    this.setState({ clicks: this.state.clicks + 1 });
  }

  unmount() {
    this.setState({ shouldMount: false });
    //ReactDOM.unmountComponentAtNode(document.getElementById('mount'))
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.state.data[0].name == 'Agneta'
      ? console.log("Agneta detected, returning true")
      : console.log("this component will not update")

    return this.state.data[0].name == 'Agneta'
    
  }

    render() {
        return (
        	<div>
        		<TextOutput outputText={this.state.text}/>
        		<FormInput onChange={this.update} />
            <Mount onClick={this.mount} clicks={this.state.clicks}/>
            <Unmount onClick={this.unmount} />
            <div id='mount'></div>
            {this.state.shouldMount ? <Mounted>
                                        <p>Child to mounted component</p>
                                      </Mounted> 
                                    : null }
            <List list={this.state.data} />
        	</div>
        	);
    }
}

ReactDOM.render(<App />, document.getElementById('app'));