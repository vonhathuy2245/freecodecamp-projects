import React, { Component } from 'react';
const marked = require("marked");

class Preview extends Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        document.getElementById("preview").innerHTML = marked(this.props.preContent);
    }
    render() {
        return (
            <div id="preview-box">
                <div className="title-box">
                    <i className="fab fa-free-code-camp"></i>
                    <h3>Preview</h3>
                    <i className="fas fa-expand-arrows-alt"></i>
                    {/* <i class="fas fa-compress-alt"></i> */}
                </div>
                <div id="preview">
                </div>
            </div>
        );
    }
}

export default Preview;
