import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class OtraPagina extends Component{

    constructor(props){
        super(props);
        this.state = {
            id : null
        }
    }

    componentDidMount(){
        console.log(this.props);

        if(this.props.match.params.id){
            this.setState({id:this.props.match.params.id});
        }
    }


    redirigeIndex(){
        this.props.history.push("/");
    }

    render(){
        return (
            <div style={{backgroundColor:"black",color:"white"}}>
                    <p>
                        Otra App {this.state.id}
                    </p>

                    <button onClick={this.redirigeIndex.bind(this)}>Regresar</button>

                    <br/>

                    <Link to="/" > Regresar con LINK</Link>
            </div>
        )
    }

}

export default OtraPagina;