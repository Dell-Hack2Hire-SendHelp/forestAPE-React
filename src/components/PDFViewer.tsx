import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { saveAs } from "file-saver";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  url: string;
}

const PDFViewer: React.FC<Props> = ({ url }) => {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [file, setFile] = useState<Blob | null>(null);

  // Define the function to handle the user clicking the download button
  const handleDownload = () => {
    if (file) {
      saveAs(file, "document.pdf");
    }
  };

  // Define the function to handle the user loading the PDF file
  const handleLoad = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  // Define the function to handle the user changing the page number
  const handlePageChange = ({ pageNumber }: { pageNumber: number }) => {
    setPageNumber(pageNumber);
  };

  // Define the function to handle the PDF file loading error
  const handleError = (error: Error) => {
    console.error(error);
  };

  // Load the PDF file
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      setFile(blob);
    });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto">
        <Document file={file} onLoadSuccess={handleLoad}>
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="flex items-center justify-between px-4 py-2 mt-4 bg-gray-200 rounded-md">
          <p className="text-gray-700 text-xl font-bold">
            Page {pageNumber} of {numPages}
          </p>
          <button
            onClick={handleDownload}
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
