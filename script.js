const SAMPLE_PROCEDURES = {
  mri: {
    category: 'Diagnostic Imaging',
    cpt: 'CPT 73721',
    title: 'Knee MRI (Without Contrast)',
    description:
      'A non-invasive magnetic resonance scan used to evaluate knee ligaments, cartilage, tendons, and joint pain without radiation.',
    savingsHighlight: 'Potential Savings: Up to $1,725',
    spectrum: {
      low: '$425',
      mid: '$1,180',
      high: '$2,150'
    },
    facilities: [
      {
        type: 'Independent Imaging Center',
        name: 'Valley Outpatient Imaging',
        distance: '3.2 miles away • Freestanding',
        cashPrice: '$425',
        insuranceRange: '$480 – $650',
        bestValue: true,
        note: 'All-inclusive global fee (scan + radiologist reading).'
      },
      {
        type: 'Multi-Specialty Clinic',
        name: 'Sonoran Orthopedic & Diagnostics',
        distance: '5.8 miles away • Clinic',
        cashPrice: '$1,120',
        insuranceRange: '$1,050 – $1,390',
        bestValue: false,
        note: 'Includes facility and standard diagnostic interpretation.'
      },
      {
        type: 'Hospital Outpatient Dept.',
        name: 'Metro General Hospital Imaging',
        distance: '4.1 miles away • Hospital-Owned',
        cashPrice: '$2,150',
        insuranceRange: '$1,980 – $2,640',
        bestValue: false,
        note: 'Hospital outpatient facility fee billed separately from radiologist.'
      }
    ]
  },
  colonoscopy: {
    category: 'Preventive & GI Care',
    cpt: 'CPT 45378',
    title: 'Diagnostic Colonoscopy',
    description:
      'An outpatient endoscopic examination of the large intestine used for screening and evaluating digestive symptoms.',
    savingsHighlight: 'Potential Savings: Up to $2,410',
    spectrum: {
      low: '$1,090',
      mid: '$2,350',
      high: '$3,500'
    },
    facilities: [
      {
        type: 'Ambulatory Surgery Center',
        name: 'Desert Endoscopy & Surgery Center',
        distance: '2.9 miles away • Surgery Center',
        cashPrice: '$1,090',
        insuranceRange: '$1,150 – $1,520',
        bestValue: true,
        note: 'Bundled outpatient center, physician, and standard sedation estimate.'
      },
      {
        type: 'Specialty GI Practice',
        name: 'Central Gastroenterology Group',
        distance: '6.4 miles away • Outpatient Suite',
        cashPrice: '$1,980',
        insuranceRange: '$1,850 – $2,490',
        bestValue: false,
        note: 'Pathology biopsy fees may apply if tissue samples are collected.'
      },
      {
        type: 'Hospital Outpatient Dept.',
        name: 'University & Regional Medical Center',
        distance: '3.7 miles away • Hospital-Owned',
        cashPrice: '$3,500',
        insuranceRange: '$3,100 – $4,250',
        bestValue: false,
        note: 'Higher institutional overhead and hospital facility charges.'
      }
    ]
  },
  mammogram: {
    category: 'Women’s Preventive Health',
    cpt: 'CPT 77066',
    title: 'Diagnostic Mammogram (Bilateral)',
    description:
      'Detailed X-ray imaging of both breasts used to evaluate specific symptoms or follow up on screening results.',
    savingsHighlight: 'Potential Savings: Up to $465',
    spectrum: {
      low: '$185',
      mid: '$360',
      high: '$650'
    },
    facilities: [
      {
        type: 'Independent Imaging Center',
        name: 'ClearView Women’s Imaging',
        distance: '2.1 miles away • Freestanding',
        cashPrice: '$185',
        insuranceRange: '$210 – $295',
        bestValue: true,
        note: 'Includes 3D tomosynthesis and board-certified radiologist review.'
      },
      {
        type: 'Community Health Clinic',
        name: 'East Valley Diagnostics',
        distance: '4.9 miles away • Outpatient Clinic',
        cashPrice: '$340',
        insuranceRange: '$320 – $430',
        bestValue: false,
        note: 'Same-week appointments available; transparent self-pay discount.'
      },
      {
        type: 'Hospital Outpatient Dept.',
        name: 'St. Luke’s Hospital Breast Center',
        distance: '5.3 miles away • Hospital-Owned',
        cashPrice: '$650',
        insuranceRange: '$590 – $820',
        bestValue: false,
        note: 'Includes hospital outpatient department facility fee.'
      }
    ]
  },
  endoscopy: {
    category: 'Outpatient Procedure',
    cpt: 'CPT 43239',
    title: 'Upper GI Endoscopy (EGD with Biopsy)',
    description:
      'A minimally invasive procedure using a flexible camera to examine the esophagus, stomach, and upper small intestine.',
    savingsHighlight: 'Potential Savings: Up to $1,940',
    spectrum: {
      low: '$960',
      mid: '$1,920',
      high: '$2,900'
    },
    facilities: [
      {
        type: 'Ambulatory Surgery Center',
        name: 'Camelback Outpatient Surgery',
        distance: '3.5 miles away • Surgery Center',
        cashPrice: '$960',
        insuranceRange: '$1,040 – $1,380',
        bestValue: true,
        note: 'Transparent self-pay bundle; averages 65% less than hospital settings.'
      },
      {
        type: 'Regional GI Clinic',
        name: 'Arizona Digestive Health Suite',
        distance: '7.0 miles away • Clinic',
        cashPrice: '$1,750',
        insuranceRange: '$1,620 – $2,150',
        bestValue: false,
        note: 'Includes facility and physician fee; lab analysis billed separately.'
      },
      {
        type: 'Hospital Outpatient Dept.',
        name: 'Banner / Regional Hospital Endoscopy',
        distance: '4.4 miles away • Hospital-Owned',
        cashPrice: '$2,900',
        insuranceRange: '$2,650 – $3,480',
        bestValue: false,
        note: 'Hospital outpatient setting with separate anesthesia & facility bills.'
      }
    ]
  },
  labs: {
    category: 'Laboratory Tests',
    cpt: 'CPT 80053',
    title: 'Comprehensive Metabolic Panel (CMP)',
    description:
      'A routine 14-test blood panel measuring blood sugar, electrolytes, kidney function, and liver health.',
    savingsHighlight: 'Potential Savings: Up to $161',
    spectrum: {
      low: '$29',
      mid: '$85',
      high: '$190'
    },
    facilities: [
      {
        type: 'Direct-to-Consumer Lab',
        name: 'Walk-In Lab Access Center',
        distance: '1.8 miles away • Retail Lab',
        cashPrice: '$29',
        insuranceRange: '$25 – $48',
        bestValue: true,
        note: 'Upfront cash price with no hidden blood-draw or venipuncture fee.'
      },
      {
        type: 'National Reference Lab',
        name: 'Quest / Labcorp Patient Service Center',
        distance: '2.4 miles away • National Lab',
        cashPrice: '$69',
        insuranceRange: '$45 – $95',
        bestValue: false,
        note: 'Widely in-network; lower negotiated rates apply for most PPO plans.'
      },
      {
        type: 'Hospital Outpatient Lab',
        name: 'Regional Hospital Draw Station',
        distance: '3.9 miles away • Hospital-Owned',
        cashPrice: '$190',
        insuranceRange: '$140 – $265',
        bestValue: false,
        note: 'Hospital lab processing carries significantly higher negotiated markups.'
      }
    ]
  }
};

let currentProcKey = 'mri';
let currentRateFilter = 'all';

function renderProcedureExplorer() {
  const data = SAMPLE_PROCEDURES[currentProcKey];
  if (!data) return;

  document.getElementById('procCategory').textContent = data.category;
  document.getElementById('procCpt').textContent = data.cpt;
  document.getElementById('procTitle').textContent = data.title;
  document.getElementById('procDesc').textContent = data.description;
  document.getElementById('procSavingsHighlight').textContent = data.savingsHighlight;

  document.getElementById('specLow').textContent = data.spectrum.low;
  document.getElementById('specMid').textContent = data.spectrum.mid;
  document.getElementById('specHigh').textContent = data.spectrum.high;

  const grid = document.getElementById('facilityGrid');
  grid.innerHTML = '';

  data.facilities.forEach((facility) => {
    const card = document.createElement('div');
    card.className = `facility-card ${facility.bestValue ? 'best-value' : ''}`;

    let priceRowsHtml = '';
    if (currentRateFilter === 'all' || currentRateFilter === 'cash') {
      priceRowsHtml += `
        <div class="price-row">
          <span class="price-row-label">Cash / Self-Pay Price</span>
          <span class="price-row-value ${facility.bestValue ? 'cash-highlight' : ''}">${facility.cashPrice}</span>
        </div>
      `;
    }
    if (currentRateFilter === 'all' || currentRateFilter === 'insurance') {
      priceRowsHtml += `
        <div class="price-row">
          <span class="price-row-label">Insurance Negotiated Range</span>
          <span class="price-row-value">${facility.insuranceRange}</span>
        </div>
      `;
    }

    card.innerHTML = `
      <div>
        <div class="facility-type-row">
          <span class="facility-type">${facility.type}</span>
          ${facility.bestValue ? '<span class="best-badge">Lowest Est. Cost</span>' : ''}
        </div>
        <h4>${facility.name}</h4>
        <div class="facility-meta">${facility.distance}</div>
        <div class="price-blocks">
          ${priceRowsHtml}
        </div>
      </div>
      <div class="facility-note">${facility.note}</div>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Initial render of interactive preview
  renderProcedureExplorer();

  // Procedure tab switching
  const procTabs = document.querySelectorAll('.proc-tab');
  procTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      procTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      currentProcKey = tab.dataset.proc;
      renderProcedureExplorer();
    });
  });

  // Rate type filter switching
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentRateFilter = btn.dataset.rate;
      renderProcedureExplorer();
    });
  });

  // Mobile navigation toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const primaryNav = document.getElementById('primaryNav');
  if (mobileToggle && primaryNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Early Access Form Handling
  const form = document.getElementById('earlyAccessForm');
  const formSuccess = document.getElementById('formSuccess');
  const successMessage = document.getElementById('successMessage');
  const resetFormBtn = document.getElementById('resetFormBtn');

  if (form) {
    form.addEventListener('submit', (event) => {
      // If a real external Formspree/backend endpoint is configured, allow normal submission
      const actionAttr = form.getAttribute('action');
      if (actionAttr && actionAttr !== '#') {
        return;
      }

      event.preventDefault();
      const nameInput = document.getElementById('fullName').value.trim();
      const roleSelect = document.getElementById('role');
      const roleText = roleSelect.options[roleSelect.selectedIndex].text;

      if (successMessage) {
        successMessage.textContent = `Thanks, ${nameInput || 'friend'}! We've logged your interest (${roleText}) and will reach out as soon as our healthcare price lookup portal is ready.`;
      }

      form.hidden = true;
      formSuccess.hidden = false;
    });
  }

  if (resetFormBtn && form && formSuccess) {
    resetFormBtn.addEventListener('click', () => {
      form.reset();
      formSuccess.hidden = true;
      form.hidden = false;
    });
  }
});