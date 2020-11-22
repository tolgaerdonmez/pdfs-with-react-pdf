import ReactPDF from '@react-pdf/renderer';
import 'dotenv/config';
import Epub from 'epub-gen';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import thread from '../thread.json';
import PDF from './components/PDF';
import Thread from './components/Thread';

const createOptions = ({ title, author, html }) => ({
  title,
  author,
  content: [{ title: title, data: html }],
  appendChapterTitles: false,
  verbose: false,
  tocTitle: 'Contents',
  publisher: 'Twindle',
});

async function main() {
  if (process.env.USE_HTML === 'true') {
    const html = renderToStaticMarkup(<Thread />);
    const opts = createOptions({
      title: thread[0].common.user.name,
      author: thread[0].common.user.name,
      html,
    });
    new Epub(opts, './output.epub');
  } else {
    ReactPDF.render(
      <PDF>
        <Thread thread={thread} />
      </PDF>,
      `./output.pdf`
    );
  }
}

main();
