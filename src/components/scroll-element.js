import React, { Component } from 'react'
import PropTypes from "prop-types"

class ScrollElement extends Component {
    static contextTypes = {
        scroll: PropTypes.object,
    }

    componentDidMount() {
        this.context.scroll.register(this.props.name, this._element)
    }
      
    componentWillUnmount() {
        this.context.scroll.unregister(this.props.name)
    }

    render() {
        return (
            React.cloneElement(this.props.children, {
                ref: ref => this._element = ref
            }
        ))
    }
}

export default ScrollElement