import React from "react";
import { Download, ExternalLink, FileText } from "lucide-react";
import Modal from "./Modal";
import { useUI } from "../context/UIContext";

const RESUME_URL = "/Jitesh_Jain_Resume.pdf";

const ResumeViewer = () => {
  const { resumeOpen, closeResume } = useUI();

  return (
    <Modal open={resumeOpen} onClose={closeResume} labelledBy="resume-title" maxWidth="max-w-4xl">
      <div className="flex flex-col h-[92vh]">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-slate-700/70 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
              <FileText size={15} />
            </span>
            <h3 id="resume-title" className="text-sm font-bold text-white">
              Jitesh Jain — Résumé
            </h3>
          </div>
          <div className="flex items-center gap-2 pr-10">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300 bg-slate-800 border border-slate-600 hover:border-slate-400 transition-colors"
            >
              <ExternalLink size={13} /> New tab
            </a>
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition-opacity"
            >
              <Download size={13} /> Download
            </a>
          </div>
        </div>

        {/* PDF embed */}
        <div className="flex-1 bg-slate-800 min-h-0">
          <object data={`${RESUME_URL}#view=FitH`} type="application/pdf" className="w-full h-full">
            <iframe title="Résumé PDF" src={`${RESUME_URL}#view=FitH`} className="w-full h-full" />
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center p-6">
              <p className="text-sm text-gray-400">
                Your browser can't display the PDF inline.
              </p>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500"
              >
                <ExternalLink size={14} /> Open résumé
              </a>
            </div>
          </object>
        </div>
      </div>
    </Modal>
  );
};

export default ResumeViewer;
