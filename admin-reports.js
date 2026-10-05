const MONTH_DATA = {
      "2026-02": {
        period: "FEB 2026",
        programs: 4,
        confirmed: 310,
        turnout: "88.5% Turnout",
        satisfaction: "4.78",
        duplicates: 0,
        barangays: [
          { name: "G. Bayan 1", val: 85, h: "85%" },
          { name: "G. Bayan 2", val: 68, h: "68%" },
          { name: "Ampid 1", val: 52, h: "52%" },
          { name: "Banaba", val: 44, h: "44%" },
          { name: "Malanday", val: 33, h: "33%" },
          { name: "Silangan", val: 28, h: "28%" }
        ],
        tags: [
          { tag: "#GoodGovernance", pct: "43%", color: "#1e3a8a" },
          { tag: "#Leadership", pct: "29%", color: "#2563eb" },
          { tag: "#CivicDuty", pct: "18%", color: "#f59e0b" },
          { tag: "#Logistics", pct: "10%", color: "#64748b" }
        ],
        table: [
          { name: "CSO Youth Academy (Orientation)", date: "Feb 07, 2026", target: 60, actual: 58, mode: "50 QR / 8 Manual", rating: "4.82", status: "Approved" },
          { name: "Banaba Youth Dialogue", date: "Feb 18, 2026", target: 50, actual: 48, mode: "42 QR / 6 Manual", rating: "4.75", status: "Approved" }
        ]
      },
      "2026-01": {
        period: "JAN 2026",
        programs: 3,
        confirmed: 240,
        turnout: "82.0% Turnout",
        satisfaction: "4.65",
        duplicates: 1,
        barangays: [
          { name: "G. Bayan 1", val: 60, h: "60%" },
          { name: "G. Bayan 2", val: 55, h: "55%" },
          { name: "Ampid 1", val: 48, h: "48%" },
          { name: "Banaba", val: 35, h: "35%" },
          { name: "Malanday", val: 25, h: "25%" },
          { name: "Silangan", val: 17, h: "17%" }
        ],
        tags: [
          { tag: "#Leadership", pct: "40%", color: "#2563eb" },
          { tag: "#GoodGovernance", pct: "32%", color: "#1e3a8a" },
          { tag: "#Budgeting", pct: "18%", color: "#10b981" },
          { tag: "#Logistics", pct: "10%", color: "#64748b" }
        ],
        table: [
          { name: "New Year Youth Assembly", date: "Jan 12, 2026", target: 100, actual: 92, mode: "80 QR / 12 Manual", rating: "4.65", status: "Approved" },
          { name: "SK Strategic Planning 2026", date: "Jan 24, 2026", target: 40, actual: 38, mode: "35 QR / 3 Manual", rating: "4.70", status: "Approved" }
        ]
      },
      "2025-12": {
        period: "DEC 2025",
        programs: 5,
        confirmed: 420,
        turnout: "91.2% Turnout",
        satisfaction: "4.85",
        duplicates: 0,
        barangays: [
          { name: "G. Bayan 1", val: 95, h: "95%" },
          { name: "G. Bayan 2", val: 82, h: "82%" },
          { name: "Ampid 1", val: 70, h: "70%" },
          { name: "Banaba", val: 64, h: "64%" },
          { name: "Malanday", val: 58, h: "58%" },
          { name: "Silangan", val: 51, h: "51%" }
        ],
        tags: [
          { tag: "#CommunityOutreach", pct: "48%", color: "#ec4899" },
          { tag: "#Volunteerism", pct: "26%", color: "#8b5cf6" },
          { tag: "#Leadership", pct: "16%", color: "#2563eb" },
          { tag: "#Logistics", pct: "10%", color: "#64748b" }
        ],
        table: [
          { name: "Kabataang San Mateo Year-End Summit", date: "Dec 14, 2025", target: 150, actual: 142, mode: "128 QR / 14 Manual", rating: "4.88", status: "Approved" },
          { name: "Youth Volunteer Recognition Day", date: "Dec 20, 2025", target: 80, actual: 78, mode: "70 QR / 8 Manual", rating: "4.82", status: "Approved" }
        ]
      }
    };

    function renderSelectedMonthReport() {
      const selected = document.getElementById('reportMonthSelect').value;
      const data = MONTH_DATA[selected];

      document.getElementById('statPrograms').innerText = data.programs;
      document.getElementById('statPeriodBadge').innerText = data.period;
      document.getElementById('statConfirmed').innerText = data.confirmed;
      document.getElementById('statTurnoutRate').innerText = data.turnout;
      document.getElementById('statSatisfaction').innerText = data.satisfaction;
      document.getElementById('statDuplicates').innerText = data.duplicates;

      const chartContainer = document.getElementById('barChartContainer');
      chartContainer.innerHTML = '';
      data.barangays.forEach(b => {
        const col = document.createElement('div');
        col.className = 'bar-col';
        col.innerHTML = `
          <div style="font-size:0.75rem; font-weight:700; color:#2563eb;">${b.val}</div>
          <div class="bar-fill" style="height:${b.h};"></div>
          <div class="bar-label">${b.name}</div>
        `;
        chartContainer.appendChild(col);
      });

      const tagsList = document.getElementById('thematicTagsList');
      tagsList.innerHTML = '';
      data.tags.forEach(t => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.innerHTML = `
          <span style="font-weight:600; color:${t.color};">&bull; ${t.tag}</span>
          <strong>${t.pct}</strong>
        `;
        tagsList.appendChild(li);
      });

      const tbody = document.getElementById('reportsTableBody');
      tbody.innerHTML = '';
      data.table.forEach(r => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${r.name}</td>
          <td>${r.date}</td>
          <td>${r.target}</td>
          <td><strong>${r.actual}</strong></td>
          <td>${r.mode}</td>
          <td>${r.rating}</td>
          <td><span class="badge badge-completed">${r.status}</span></td>
        `;
        tbody.appendChild(tr);
      });
    }

    renderSelectedMonthReport();