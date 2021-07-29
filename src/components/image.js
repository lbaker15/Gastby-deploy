import * as React from 'react';

class Image extends React.Component {
    render() {
        let image = this.props.data.contentfulSectionOne.image.file.url
        return (
            <img
            src={image}
            quality={95}
            alt="Front page image"
            style={{ zIndex: -1, width: '100vw', height: '100vh', marginTop: 0, position: 'absolute', top: 0, left: 0 }}
          />
        )
    }
}

export default Image;