import React from 'react';
import ReactTooltip from 'react-tooltip';

export default function ServicePrice(getPriceContent) {
  return (
    <ReactTooltip
      className="services-tooltip"
      id="service-price"
      textColor="black"
      place="top"
      delayHide={100}
      clickable
      backgroundColor="#ffffff"
      getContent={getPriceContent}
    />
  );
}