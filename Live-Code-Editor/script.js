function renderOutput() {
    const html = document.getElementById("html-input").value;
    const css = document.getElementById("css-input").value;
    const js = document.getElementById("js-input").value;

    const previewFrame = document.getElementById("live-output");

    const source = `
    <html>
      <head><style>${css}</style></head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
    </html>
  `;

    previewFrame.srcdoc = source;
}
