import React from 'react';
import expect, { spyOn } from 'expect';
import { renderToStaticMarkup as render } from 'react-dom/server';
import image from '../demo/src/images/milan.jpg';

import { Pannellum } from 'src/';

describe('Pannellum', () => {

  beforeEach(() => {
    spyOn(console, 'error');
    this.ref = React.createRef();
    this.pan = render(
      <Pannellum
        ref={this.ref}
        id="test"
        height="500px"
        width="100%"
        image={image}
        onLoad={this.handleLoad}
      />
    );
  });

  it('renders ....', async () => {

    console.log(this.ref);
    expect(this.pan)
      .toInclude('<div id="test" style="width:100%;height:500px"></div>');
  });

});
