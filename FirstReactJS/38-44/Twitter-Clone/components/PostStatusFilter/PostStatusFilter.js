import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: "all", label:"All"},
            {name: "like", label:"Liked"}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-info'
            return(
                    <Button
                        key={name}
                        variant="outlined"
                        className={`btn ${clazz}`}
                        onClick={() => {
                            this.props.onFilterSelect(name)
                        }}
                    >
                        {label}
                    </Button>
                )

        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
