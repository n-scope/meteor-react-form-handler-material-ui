AutoCompleteInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        defaultValue: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ])
    },
    componentWillMount() {
        FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
    },
    _onChange(value) {
        FormHandler.inputChanged(this.props.formId, this.props.name, value);
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    },
    render: function() {

        let options = this.props.dataSource;

        if (this.props.useAllowedValues) {
            if (this.props.allowedValues) {
                options = [];
                this.props.allowedValues.map((value) => {
                    options.push({label: value, value: value});
                });
            } else {
                console.error("Auto complete input " + this.props.name + " has useAllowedValues but does not have any allowedValues");
            }
        }

        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <MUIComponents.AutoComplete fullWidth={true} autoComplete="off" onUpdateInput={this._onChange} {...this.props} placeholder={null} hintText={this.props.placeholder} dataSource={options} floatingLabelText={this.props.label} errorText={this.props.errorText} />
            </div>
        )
    }
});