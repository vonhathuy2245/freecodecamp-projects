import React, { Component } from 'react';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const temp = event.target.value;
        this.props.onChange(temp);
    }
    componentDidMount() {
        const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!

Or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
    - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
        document.getElementById("editor").defaultValue = placeholder;
        this.props.onChange(document.getElementById("editor").value);
    }
    render() {
        return (
            <div id="editor-box">
                <div className="title-box">
                    <i className="fab fa-free-code-camp"></i>
                    <h3>Editor</h3>
                    <i className="fas fa-expand-arrows-alt"></i>
                    {/* <i class="fas fa-compress-alt"></i> */}
                </div>
                <textarea name="editor" id="editor" cols="100" rows="10" onChange={this.handleChange}></textarea>
            </div>
        );
    }
}

export default Editor;
