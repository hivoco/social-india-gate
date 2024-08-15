import React, { useEffect, useRef } from "react";
import CloudPdfViewer from "@cloudpdf/viewer";

function TermsCondition() {
  const viewer = useRef(null);

  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "6f29f1fa-4c39-4b21-86bf-f486688dfbcc",
        darkMode: true,
      },
      viewer.current
    ).then((instance) => {});
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="viewer w-full h-full" ref={viewer}></div>
         
    </div>
  );
}

export default TermsCondition;
