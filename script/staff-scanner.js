const YOUTH_ROSTER = [
      { name: "Sofia Bianca Encisa", barangay: "Guitnang Bayan 1", status: "Registered" },
      { name: "Luis Carlo Deduyo", barangay: "Ampid 1", status: "Registered" },
      { name: "Eldridge Shean Camaya", barangay: "Banaba", status: "Registered" },
      { name: "Niña Angela Binolac", barangay: "Malanday", status: "Registered" },
      { name: "Gabriel James Tagnipez", barangay: "Silangan", status: "Registered" },
      { name: "Jasmine Annika Pereye", barangay: "Silangan", status: "Registered" }
    ];

    function renderSearchResults(list) {
      const box = document.getElementById('manualResultsBox');
      box.innerHTML = '';
      if (list.length === 0) {
        box.innerHTML = '<div style="font-size:0.85rem; color:#94a3b8; padding:0.5rem;">No participant record found.</div>';
        return;
      }
      list.forEach(p => {
        const item = document.createElement('div');
        item.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:0.5rem; border-bottom:1px solid #f1f5f9; font-size:0.85rem;';
        item.innerHTML = `
          <div><strong>${p.name}</strong> <span style="color:#64748b;">(${p.barangay})</span></div>
          <button class="btn-primary" style="padding:0.25rem 0.65rem; font-size:0.75rem;" onclick="confirmCheckIn('${p.name}')">Check-In</button>
        `;
        box.appendChild(item);
      });
    }

    function filterManualSearch() {
      const query = document.getElementById('manualSearchInput').value.toLowerCase();
      const filtered = YOUTH_ROSTER.filter(p => p.name.toLowerCase().includes(query));
      renderSearchResults(filtered);
    }

    function simulateQRScan() {
      const random = YOUTH_ROSTER[Math.floor(Math.random() * YOUTH_ROSTER.length)];
      confirmCheckIn(random.name);
    }

    function confirmCheckIn(name) {
      const alertBox = document.getElementById('scanAlertBox');
      document.getElementById('confirmedAttendee').innerText = name;
      document.getElementById('checkInTime').innerText = new Date().toLocaleTimeString();
      alertBox.style.display = 'block';
      setTimeout(() => alertBox.style.display = 'none', 4500);
    }

    renderSearchResults(YOUTH_ROSTER);