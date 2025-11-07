import React, { useState } from 'react';
import { FileText, FileSpreadsheet, FileDown, Copy, Check } from 'lucide-react';

const TableWithExport = ({ title, children, tableId }) => {
  const [copied, setCopied] = useState(false);

  const getTableData = () => {
    const table = document.getElementById(tableId || 'export-table');
    if (!table) return { headers: [], rows: [] };

    const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim());
    const rows = Array.from(table.querySelectorAll('tbody tr')).map(tr => 
      Array.from(tr.querySelectorAll('td')).map(td => td.textContent.trim())
    );

    return { headers, rows };
  };

  const exportToCSV = () => {
    const { headers, rows } = getTableData();
    let csv = headers.join(',') + '\n';
    rows.forEach(row => {
      csv += row.map(cell => `"${cell}"`).join(',') + '\n';
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title || 'data'}-${new Date().getTime()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const exportToExcel = () => {
    const { headers, rows } = getTableData();
    let html = '<html><head><meta charset="utf-8"></head><body><table border="1">';
    html += '<thead><tr>';
    headers.forEach(header => {
      html += `<th style="background-color: #f3f4f6; font-weight: bold; padding: 8px;">${header}</th>`;
    });
    html += '</tr></thead><tbody>';
    rows.forEach(row => {
      html += '<tr>';
      row.forEach(cell => {
        html += `<td style="padding: 8px;">${cell}</td>`;
      });
      html += '</tr>';
    });
    html += '</tbody></table></body></html>';
    
    const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title || 'data'}-${new Date().getTime()}.xls`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const exportToPDF = () => {
    window.print();
  };

  const exportToWord = () => {
    const { headers, rows } = getTableData();
    let html = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word'>
      <head>
        <meta charset='utf-8'>
        <title>${title || 'Document'}</title>
        <style>
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid black; padding: 8px; text-align: left; }
          th { background-color: #f3f4f6; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>${title || 'Data Table'}</h1>
        <table>
          <thead><tr>
    `;
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += '</tr></thead><tbody>';
    rows.forEach(row => {
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
    a.download = `${title || 'data'}-${new Date().getTime()}.doc`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    const { headers, rows } = getTableData();
    let text = headers.join('\t') + '\n';
    rows.forEach(row => {
      text += row.join('\t') + '\n';
    });
    
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };

  return (
    <div className="table-with-export">
      <div className="datatable-actions">
        <button className="btn btn-sm btn-outline" onClick={copyToClipboard} title="Copy to Clipboard">
          {copied ? <Check size={16} /> : <Copy size={16} />}
          <span>{copied ? 'Tersalin!' : 'Copy'}</span>
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
        <button className="btn btn-sm btn-outline" onClick={exportToPDF} title="Print/PDF">
          <FileDown size={16} />
          <span>PDF</span>
        </button>
      </div>
      <div id={tableId || 'export-table'}>
        {children}
      </div>
    </div>
  );
};

export default TableWithExport;
