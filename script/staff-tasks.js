let mode = 'add';
    let taskCounter = 10;

    function openTaskModal(currentMode, targetId) {
      mode = currentMode;
      const modal = document.getElementById('taskModal');
      const heading = document.getElementById('taskModalHeading');
      
      if (mode === 'edit') {
        heading.innerText = 'Edit Task Details';
        const row = document.getElementById(targetId);
        document.getElementById('editTaskId').value = targetId;
        document.getElementById('taskNameInput').value = row.children[0].innerText;
        document.getElementById('taskProgramInput').value = row.children[1].innerText;
        document.getElementById('taskDeadlineInput').value = row.children[2].innerText;
        document.getElementById('taskStatusInput').value = row.children[3].innerText.trim();
      } else {
        heading.innerText = 'Add New Task';
        document.getElementById('taskForm').reset();
        document.getElementById('editTaskId').value = '';
      }
      modal.style.display = 'flex';
    }

    function closeTaskModal() {
      document.getElementById('taskModal').style.display = 'none';
    }

    function deleteTask(rowId) {
      const row = document.getElementById(rowId);
      if (row && confirm(`Delete "${row.children[0].innerText}"?`)) {
        row.remove();
      }
    }

    function handleSaveTask(e) {
      e.preventDefault();
      const name = document.getElementById('taskNameInput').value.trim();
      const prog = document.getElementById('taskProgramInput').value.trim();
      const deadline = document.getElementById('taskDeadlineInput').value.trim();
      const status = document.getElementById('taskStatusInput').value;
      const badgeClass = status === 'Completed' ? 'badge-completed' : 'badge-ongoing';

      if (mode === 'edit') {
        const rowId = document.getElementById('editTaskId').value;
        const row = document.getElementById(rowId);
        row.children[0].innerHTML = `<strong>${name}</strong>`;
        row.children[1].innerText = prog;
        row.children[2].innerText = deadline;
        row.children[3].innerHTML = `<span class="badge ${badgeClass}">${status}</span>`;
      } else {
        taskCounter++;
        const newRowId = `task-row-${taskCounter}`;
        const tbody = document.getElementById('taskTableBody');
        const tr = document.createElement('tr');
        tr.id = newRowId;
        tr.innerHTML = `
          <td><strong>${name}</strong></td>
          <td>${prog}</td>
          <td>${deadline}</td>
          <td><span class="badge ${badgeClass}">${status}</span></td>
          <td>
            <button class="btn-secondary" style="padding:0.3rem 0.75rem; font-size:0.8rem;" onclick="openTaskModal('edit', '${newRowId}')">Edit</button>
            <button class="btn-secondary" style="padding:0.3rem 0.75rem; font-size:0.8rem; color:#b91c1c;" onclick="deleteTask('${newRowId}')">Delete</button>
          </td>
        `;
        tbody.prepend(tr);
      }
      closeTaskModal();
    }