import React, { Component } from 'react'
import { Statistic } from 'semantic-ui-react'

export default class renderStats extends Component {
    render() {
        return (
            <Statistic>
                <Statistic.Value>{this.props.tasks.length}</Statistic.Value>
                <Statistic.Label>All tasks</Statistic.Label>
                <Statistic.Value>{this.props.tasks.filter(el => el.status === "in_progress").length}
                </Statistic.Value>
                <Statistic.Label>In progress</Statistic.Label>
                <Statistic.Value>{this.props.tasks.filter(el => el.status === "todo").length}
                </Statistic.Value>
                <Statistic.Label>Todo</Statistic.Label>
                <Statistic.Value>{this.props.tasks.filter(el => el.status === "done").length}
                </Statistic.Value>
                <Statistic.Label>Done</Statistic.Label>
            </Statistic>

        )
    }
}

