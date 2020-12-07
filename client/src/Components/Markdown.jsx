import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

class Markdown extends React.PureComponent {
    render() {
        return (
            <ReactMarkdown
                escapeHtml={false}
                source={this.props.value}
                renderers={{
                    code: CodeBlock
                }}
            />
        );
    }
}

Markdown.propTypes = {
    value: PropTypes.string.isRequired
};

export default Markdown;
