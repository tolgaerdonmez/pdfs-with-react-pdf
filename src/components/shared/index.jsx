import React from 'react';
import { Text as PDFText, View as PDFView, Image as PDFImage } from '@react-pdf/renderer';

const useHtml = process.env.USE_HTML === 'true';

export function Text({ children, ...props }) {
  if (useHtml) {
    return <p {...props} dangerouslySetInnerHTML={{ _html: children }}></p>;
  }
  return (
    <PDFText
      {...props}
      render={() => <span dangerouslySetInnerHTML={{ _html: children }}></span>}
    ></PDFText>
  );
}

export function View({ children, ...props }) {
  if (useHtml) {
    return <div {...props}>{children}</div>;
  }
  return <PDFView {...props}>{children}</PDFView>;
}

export function Image({ children, ...props }) {
  if (useHtml) {
    return <img {...props}>{children}</img>;
  }
  return <PDFImage {...props}>{children}</PDFImage>;
}
