import React, {Component} from 'react';

export default class Form extends Component {

    constructor(props) {
        super(props);

        this.renderChildren = this.renderChildren.bind(this);
    }

    componentWillMount() {

    }

    componentDidMount(){
        this.inputs = [];
        this.registerInputs();
    }

    registerInputs() {
        const {children} = this.props;

        React.Children.forEach(children, child => {

            if(child.props.name) {
                console.log('child', child);
                // child.props.attachToForm = this.attachToForm;
                // child.props.detachFromForm = this.detachFromForm;
            }

        });
    }

    attachToForm(component) {
        this.inputs[component.props.name] = component;
    }

    detachFromForm(component) {
        delete this.inputs[component.props.name];
    }

    validateAndSubmit(e) {
        e.preventDefault();
        console.log('valdiate and submit');
        const {handleSubmit} = this.props;
        handleSubmit(e);
    }

    validateEmail() {

    }

    validate(child) {
        console.log('valdidating child', child.props.type);
        switch(child.props.type) {
            case 'email':
                console.log('yes it\'s and email')
                const {value} = child.props;
                // value.text/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
                /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/.test(value)
                return React.cloneElement(child, {
                    'emailinvalid': 'true'
                });
                break;
            case 'password':
                break;
            case 'text':
                break;
            default:
                break;

            return child;
        }
    }

    renderChildren() {
        return React.Children.map(this.props.children, child => {
            // console.log('renderChildren', this.props.children);
            console.log("validate", child.props.name, child.props.validate);

            let cloned = null;
            if(!!child.props.validate) {
                cloned = this.validate(child);
            } else {
                cloned = child;
            }

            // const cloned = React.cloneElement(child, {
            //     new: 'Yes indeed!'
            // });
            return cloned;
        });
    }

    render() {
        console.log('render Form');
        return (
            <form onSubmit={this.validateAndSubmit.bind(this)}>
                {this.renderChildren()}

            </form>
        );
    }
}
