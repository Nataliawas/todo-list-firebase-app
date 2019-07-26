import React from 'react'

import { Checkbox } from 'semantic-ui-react'

class Filters extends React.Component {

    state = {
        showDone: true,
        showInProgress: true,
        showTodo: true
    }

    toggleDone = () => {
        this.setState({ showDone: !showDone })
    }

    handleClick = () => {
        console.log(this.state)
    }

    render() {

        return (
            <div>
                <Checkbox
                    label={"todo"}
                    onChange={this.toggleDone}
                    key={"todo"}
                />
                <Checkbox
                    label={"in_progress"}
                    //   onChange={this.toggleCheckbox}
                    key={"in_progress"}
                />
                <Checkbox
                    label={"done"}
                    //   onChange={this.toggleCheckbox}
                    key={"done"}
                />
                <button className="btn btn-default small" type="submit" onClick={this.handleClick}>Filter</button>
            </div>
        )
    }
}



export default Filters