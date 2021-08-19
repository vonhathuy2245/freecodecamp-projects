import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import './MarkdownPreviewer.scss';
import $, { type } from 'jquery';

class MarkdownPreviewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentInEditor: ''
        }
        this.changeEditor = this.changeEditor.bind(this);
    }
    changeEditor(inputString) {
        this.setState({contentInEditor: inputString});
    }
    render() {
        // $(document).ready(function(){
        //     $("#editor-box .fa-expand-arrows-alt").click(function(){
        //         $("#preview-box").hide();
        //         $("#editor").outerHeight("100vh");
        //         $(this).removeClass("fa-expand-arrows-alt").addClass("fa-compress-alt"); 
        //     });
        //     // $("#editor-box .fa-expand-arrows-alt").click(function(){
        //     //     $("#preview-box").hide();
        //     //     $("#editor").outerHeight("100vh");
        //     //     $(this).removeClass("fa-expand-arrows-alt").addClass("fa-compress-alt"); 
        //     // });
        // });
        return (
            <div id="markdown-preview-container">
                <Editor onChange={this.changeEditor}></Editor>
                <Preview preContent={this.state.contentInEditor}></Preview>
            </div>
        );
    }
}

export default MarkdownPreviewer;
