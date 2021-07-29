import * as React from 'react';
import { graphql, userStaticQuery, StaticQuery } from 'gatsby';
import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import './css/section.css'

const client = contentful.createClient({
  space: 't3lt13yhts4k',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'n2qOD4zE_f3yq57h1pVxRj1c5oEFLx6SHA-yCkDxtRM'
});



class SectionOneText extends React.Component {
    holder = React.createRef();
    componentDidMount() {
        client
        .getEntry('7vlSgJTgJTjhxfviKWCwvW')
        .then(entry => {
        let {headerOne, headerTwo} = entry.fields;
        let one = documentToHtmlString(headerOne);
        let two = documentToHtmlString(headerTwo);
        let array = [one, two]
        return array;
        })
        .then(renderedHtml => {
        // console.log(renderedHtml);
        renderedHtml.map((item) => {
            let doc = new DOMParser().parseFromString(item, 'text/html')
            let parsed = doc.body.childNodes;
            Array.from(parsed).map(x => {
            // console.log(x, this.holder)
            this.holder.current.append(x)
            })

        })
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div style={{height: '70vh'}} class="flex text-center flex-1 flex-col items-center content-center justify-items-center justify-center" ref={this.holder} id="rich-text-body">

            </div>
        )
    }
}

export default SectionOneText;

