import * as React from "react";

class SectionTwoText extends React.Component {
    state = {children: []}
    componentDidMount() {
        this.setState((prev) => ({
            children: prev.children.concat(this.props.data.allContentfulBlog.nodes)
        }))
    }
    render() {
        const {children} = this.state;
        console.log(children)
        return (
            <div className="section2 flex justify-around content-start items-start">
                {children.map(x => {
                    return (
                        <div className="item">
                            <img src={x.image.file.url} />
                            <h2>{x.title}</h2>
                            <h3>{x.content.content.substr(0, 160)} ... </h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default SectionTwoText;