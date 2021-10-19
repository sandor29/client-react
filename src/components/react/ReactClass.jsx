/**
 * Class
 */

class Welcome extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}