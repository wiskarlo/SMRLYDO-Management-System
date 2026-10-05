    function openAddProposalModal() {
      document.getElementById('addProposalModal').style.display = 'flex';
    }

    function closeAddProposalModal() {
      document.getElementById('addProposalModal').style.display = 'none';
    }

    function viewProposalPDF(title, author, stage, docPath) {
      document.getElementById('pdfModalTitle').innerText = title;
      document.getElementById('pdfModalAuthor').innerText = `Submitted by: ${author}`;
      document.getElementById('pdfModalFilename').innerText = `File: ${docPath || 'documents/proposal_2026.pdf'}`;

      const stageSpan = document.getElementById('pdfModalStage');
      stageSpan.innerText = stage;
      stageSpan.className = 'badge ' + (stage === 'Final Approval' ? 'badge-completed' : 'badge-ongoing');

      document.getElementById('pdfModal').style.display = 'flex';
    }

    function closePDFModal() {
      document.getElementById('pdfModal').style.display = 'none';
    }

    function handleCreateProposal(e) {
      e.preventDefault();
      const title = document.getElementById('propTitle').value.trim();
      const author = document.getElementById('propAuthor').value.trim();
      const stage = document.getElementById('propStage').value;
      const docPath = document.getElementById('propDocPath').value.trim() || 'documents/proposal_2026.pdf';

      const tbody = document.getElementById('proposalsTableBody');
      const newRow = document.createElement('tr');

      const stageBadgeClass = stage === 'Final Approval' ? 'badge-completed' : 'badge-ongoing';

      newRow.innerHTML = `
        <td><strong>${title}</strong></td>
        <td>${author}</td>
        <td><span class="badge ${stageBadgeClass}">${stage}</span></td>
        <td>
          <button class="btn-primary" style="padding:0.4rem 0.9rem; font-size:0.82rem;">
            View PDF
          </button>
        </td>
      `;

      const viewBtn = newRow.querySelector('button');
      viewBtn.onclick = function() {
        viewProposalPDF(title, author, stage, docPath);
      };

      tbody.insertBefore(newRow, tbody.firstChild);

      document.getElementById('newProposalForm').reset();
      document.getElementById('propDocPath').value = 'documents/proposal_2026.pdf';
      closeAddProposalModal();

      alert(`Proposal "${title}" has been registered into the municipal compliance tracking table!`);
    }