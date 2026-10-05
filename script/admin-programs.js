let programCounter = 100;

    function openAddProgramModal() {
      document.getElementById('addProgramModal').style.display = 'flex';
    }

    function closeAddProgramModal() {
      document.getElementById('addProgramModal').style.display = 'none';
    }

    function openEditProgramModal(cardId) {
      const card = document.getElementById(cardId);
      if (!card) return;

      document.getElementById('editTargetCardId').value = cardId;
      document.getElementById('editProgTitle').value = card.querySelector('.card-title').innerText;
      document.getElementById('editProgDate').value = card.querySelector('.meta-date').innerText.replace('Date: ', '');
      document.getElementById('editProgLoc').value = card.querySelector('.meta-loc').innerText.replace('Location: ', '');
      document.getElementById('editProgLead').value = card.querySelector('.meta-lead').innerText.replace('Lead Committee: ', '');

      const badge = card.querySelector('.badge');
      if (badge.classList.contains('badge-completed')) {
        document.getElementById('editProgStatus').value = 'completed';
      } else if (badge.classList.contains('badge-ongoing')) {
        document.getElementById('editProgStatus').value = 'ongoing';
      } else {
        document.getElementById('editProgStatus').value = 'cancelled';
      }

      document.getElementById('editProgramModal').style.display = 'flex';
    }

    function closeEditProgramModal() {
      document.getElementById('editProgramModal').style.display = 'none';
    }

    function deleteProgram(cardId) {
      const card = document.getElementById(cardId);
      if (!card) return;
      const title = card.querySelector('.card-title').innerText;

      if (confirm(`Are you sure you want to delete "${title}"?`)) {
        card.remove();
      }
    }

    function handleCreateProgram(e) {
      e.preventDefault();
      programCounter++;
      const newId = `program-card-${programCounter}`;

      const title = document.getElementById('progTitle').value.trim();
      const date = document.getElementById('progDate').value.trim();
      const loc = document.getElementById('progLoc').value.trim();
      const lead = document.getElementById('progLead').value.trim();
      const status = document.getElementById('progStatus').value;
      const imgSrc = document.getElementById('progImgSelect').value;

      const slider = document.getElementById('programsSlider');
      const newCard = document.createElement('div');
      newCard.className = 'program-card';
      newCard.id = newId;

      newCard.innerHTML = `
        <img src="${imgSrc}" class="program-card-img" alt="${title}" onerror="this.src='../images/san-mateo-bg.jpg'">
        <div class="program-card-body">
          <div>
            <h3 class="card-title">${title}</h3>
            <p class="program-meta meta-date">Date: ${date}</p>
            <p class="program-meta meta-loc">Location: ${loc}</p>
            <p class="program-meta meta-lead">Lead Committee: ${lead}</p>
          </div>
          <div class="program-card-footer">
            <span class="badge badge-${status}">${status.toUpperCase()}</span>
            <div class="card-action-group">
              <button class="btn-action-edit" onclick="openEditProgramModal('${newId}')">Edit</button>
              <button class="btn-action-delete" onclick="deleteProgram('${newId}')">Delete</button>
            </div>
          </div>
        </div>
      `;

      slider.insertBefore(newCard, slider.firstChild);
      closeAddProgramModal();
      document.getElementById('newProgramForm').reset();
    }

    function handleUpdateProgram(e) {
      e.preventDefault();
      const cardId = document.getElementById('editTargetCardId').value;
      const card = document.getElementById(cardId);
      if (!card) return;

      const title = document.getElementById('editProgTitle').value.trim();
      const date = document.getElementById('editProgDate').value.trim();
      const loc = document.getElementById('editProgLoc').value.trim();
      const lead = document.getElementById('editProgLead').value.trim();
      const status = document.getElementById('editProgStatus').value;
      const imgSrc = document.getElementById('editProgImgSelect').value;

      card.querySelector('.card-title').innerText = title;
      card.querySelector('.meta-date').innerText = `Date: ${date}`;
      card.querySelector('.meta-loc').innerText = `Location: ${loc}`;
      card.querySelector('.meta-lead').innerText = `Lead Committee: ${lead}`;
      card.querySelector('.program-card-img').src = imgSrc;

      const badge = card.querySelector('.badge');
      badge.className = `badge badge-${status}`;
      badge.innerText = status.toUpperCase();

      closeEditProgramModal();
    }