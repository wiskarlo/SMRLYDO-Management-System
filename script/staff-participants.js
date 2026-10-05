function openRegisterModal() {
      document.getElementById('registerModal').style.display = 'flex';
    }

    function closeRegisterModal() {
      document.getElementById('registerModal').style.display = 'none';
    }

    function openProfileModal() {
      document.getElementById('profileModal').style.display = 'flex';
    }

    function closeProfileModal() {
      document.getElementById('profileModal').style.display = 'none';
    }

    function viewYouthProfile(name, brgy, phone, email, dob, history) {
      document.getElementById('profNameTitle').innerText = name;
      document.getElementById('profBarangay').innerText = brgy;
      document.getElementById('profPhone').innerText = phone;
      document.getElementById('profEmail').innerText = email;
      document.getElementById('profDob').innerText = dob;
      document.getElementById('profHistory').innerText = history;
      openProfileModal();
    }

    function handleRegisterYouth(e) {
      e.preventDefault();
      const name = document.getElementById('regName').value.trim();
      const brgy = document.getElementById('regBarangay').value;
      const phone = document.getElementById('regPhone').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const dob = document.getElementById('regDob').value;

      const existingNames = ["sofia bianca encisa", "luis carlo deduyo"];
      const isDuplicate = existingNames.includes(name.toLowerCase());
      const checkBadge = isDuplicate 
        ? '<span class="badge badge-duplicate">Flagged Duplicate</span>' 
        : '<span class="badge badge-clean">Clean</span>';

      const tbody = document.getElementById('participantTableBody');
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${name}</strong></td>
        <td>${brgy}</td>
        <td>${phone}</td>
        <td>${checkBadge}</td>
        <td>
          <button class="btn-secondary" style="padding:0.35rem 0.8rem; font-size:0.8rem; color:#0b57d0;" onclick="viewYouthProfile('${name}', '${brgy}', '${phone}', '${email}', '${dob}', 'Newly Registered (No previous modules)')">
            View Profile
          </button>
        </td>
      `;
      tbody.prepend(tr);

      closeRegisterModal();
      document.getElementById('registerForm').reset();
      
      if (isDuplicate) {
        alert(`Warning: Profile matching "${name}" was detected! Flagged for staff review pursuant to duplicate prevention protocols.`);
      } else {
        alert(`Participant "${name}" successfully registered into the youth profiling database!`);
      }
    }