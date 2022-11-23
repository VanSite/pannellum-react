import React from 'react';
import expect, { spyOn } from 'expect';
import { renderToStaticMarkup as render } from 'react-dom/server';
import image from '../demo/src/images/milan.jpg';

import { Pannellum } from 'src/';

describe('Pannellum', () => {

  beforeEach(function () {
    spyOn(console, 'error');
  });

  it('renders a Pannellum Image component', () => {
    expect(render(
      <Pannellum
        id="test"
        height="500px"
        width="100%"
      />
    ))
      .toInclude('<div id="test" style="width:100%;height:500px"></div>');
  });

  it('renders Pannellum image with other props', () => {
    expect(render(
      <Pannellum
        id="test"
        height="500px"
        width="100%"
        image={image}
        onLoad={this.handleLoad}
      />
    ))
      .toInclude('<div id="test" style="width:100%;height:500px"></div>');
  });

  it('renders with all the props', () => {
    expect(render(
      <Pannellum
        id="test"
        height="500px"
        width="100%"
        image={image}
        haov={180}
        vaov={90}
        vOffset={1}
        yaw={0}
        pitch={0}
        hfov={100}
        minHfov={50}
        maxHfov={150}
        minPitch={-90}
        maxPitch={90}
        minYaw={-180}
        maxYaw={180}
        autoRotate={0}
        compass={false}
        preview={''}
        previewTitle={''}
        previewAuthor={''}
        title={''}
        author={''}
        autoLoad={false}
        orientationOnByDefault={false}
        showZoomCtrl
        keyboardZoom
        mouseZoom
        draggable
        showFullscreenCtrl
        showControls
        onLoad={() => {}}
        onScenechange={() => {}}
        onScenechangefadedone={() => {}}
        onError={() => {}}
        onErrorcleared={() => {}}
        onMousedown={() => {}}
        onMouseup={() => {}}
        onTouchstart={() => {}}
        onTouchend={() => {}}
        hotspotDebug={false}
      />
    ))
      .toInclude('<div id="test" style="width:100%;height:500px"></div>');
  });
});
