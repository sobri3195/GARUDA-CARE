import React from 'react';
import { FileText, FileSpreadsheet, FileDown, Copy, Check } from 'lucide-react';

const DataTable = ({ headers, data, title }) => {
  const [copied, setCopied] = React.useState(false);

  const exportToCSV = () => {
    let csv = headers.join(',') + '\n';
    data.forEach(row => {
      csv += row.join(',') + '\n';
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title || 'data'}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const exportToExcel = () => {
    let html = '<table border="1">';
    html += '<thead><tr>';
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += '</tr></thead><tbody>';
    data.forEach(row => {
      html += '<tr>';
      row.forEach(cell => {
        html += `<td>${cell}</td>`;
      });
      html += '</tr>';
    });
    html += '</tbody></table>';
    
    const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title || 'data'}.xls`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const exportToPDF = () => {
    window.print();
  };

  const exportToWord = () => {
    let html = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word'>
      <head><meta charset='utf-8'><title>${title || 'Document'}</title></head>
      <body>
        <h1>${title || 'Data Table'}</h1>
        <table border="1" cellpadding="5" cellspacing="0">
          <thead><tr>
    `;
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += '</tr></thead><tbody>';
    data.forEach(row => {
      html += '<tr>';
      row.forEach(cell => {
        html += `<td>${cell}</td>`;
      });
      html += '</tr>';
    });
    html += '</tbody></table></body></html>';
    
    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title || 'data'}.doc`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    let text = headers.join('\t') + '\n';
    data.forEach(row => {
      text += row.join('\t') + '\n';
    });
    
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="datatable-wrapper">
      <div className="datatable-actions">
        <button className="btn btn-sm btn-outline" onClick={copyToClipboard} title="Copy to Clipboard">
          {copied ? <Check size={16} /> : <Copy size={16} />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
        <button className="btn btn-sm btn-outline" onClick={exportToExcel} title="Export to Excel">
          <FileSpreadsheet size={16} />
          <span>Excel</span>
        </button>
        <button className="btn btn-sm btn-outline" onClick={exportToCSV} title="Export to CSV">
          <FileSpreadsheet size={16} />
          <span>CSV</span>
        </button>
        <button className="btn btn-sm btn-outline" onClick={exportToWord} title="Export to Word">
          <FileText size={16} />
          <span>Word</span>
        </button>
        <button className="btn btn-sm btn-outline" onClick={exportToPDF} title="Export to PDF">
          <FileDown size={16} />
          <span>PDF</span>
        </button>
      </div>
      <div className="datatable-content">
        {/* This is where the actual table will be rendered as children */}
      </div>
    </div>
  );
};

export default DataTable;
