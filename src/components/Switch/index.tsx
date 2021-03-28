import React, { Component } from 'react';
import Switch from 'react-switch';

type Props = { div: string; checked: boolean };
type State = { checked: boolean };

class MaterialDesignSwitch extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { checked: props.checked };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked: boolean) {
    this.setState({ checked });
  }

  render() {
    const { div } = this.props;
    const { checked } = this.state;

    return (
      <div className="example">
        <h2>{div}</h2>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="material-switch">
          <Switch
            checked={checked}
            onChange={this.handleChange}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </label>
      </div>
    );
  }
}

export default MaterialDesignSwitch;
