/**
 * SR UNIVERSITY - INTERACTIVE TIMETABLE APPLICATION
 * Department: BTECH-CSE (AIML) | Year: 4th Year (Sem 1, AC 2026-27)
 * Batch: 23CSBTB43
 */

// Master Course Catalog Definition
const COURSES = {
    'PE4': {
        code: '23CS201PE408',
        name: 'PE4 - SECURITY ETHICS AND REGULATIONS IN AI',
        shortName: 'Security & Ethics in AI',
        facultyLecture: 'Mr. Nagendar Yamsani',
        facultyLab: 'Ms. M Madhuri',
        room: '3207-BL3-SF',
        cssClass: 'subject-pe4',
        type: 'Elective 4',
        credits: '3 Credits (2L + 2P)',
        desc: 'Focuses on safety guidelines, ethical AI frameworks, compliance, risk assessment, and regulatory policies in modern machine learning systems.'
    },
    'PE3': {
        code: '23CS201PE406',
        name: 'PE3 - COMPILER DESIGN',
        shortName: 'Compiler Design',
        facultyLecture: 'Dr. Sasanko Sekhar Gantayat',
        facultyLab: 'Dr. Sasanko Sekhar Gantayat',
        roomLecture: '3216-BL3-SF',
        roomLab: '3218-BL3-SF',
        cssClass: 'subject-pe3',
        type: 'Elective 3',
        credits: '3 Credits (2L + 2P)',
        desc: 'Covers lexical analysis, parsing techniques (LL/LR), syntax-directed translation, intermediate code generation, and optimization.'
    },
    'PE2': {
        code: '23CS201PE403',
        name: 'PE2 - AUGMENTED AND VIRTUAL REALITY',
        shortName: 'AR / VR Systems',
        facultyLecture: 'Mr. Sripelli Jagadish',
        facultyLab: 'Mr. Sripelli Jagadish',
        room: '3218-BL3-SF',
        cssClass: 'subject-pe2',
        type: 'Elective 2',
        credits: '3 Credits (2L + 2P)',
        desc: 'Principles of immersive computing, 3D spatial rendering, VR headset architectures, Unity/Unreal integrations, and interactive virtual environments.'
    },
    'SE2': {
        code: '23CA201SE403',
        name: 'SE2 - AGENTIC AI',
        shortName: 'Agentic AI',
        facultyLecture: 'Dr. Balajee Maram',
        facultyLab: 'Mr. Battula Benarjun',
        roomLecture: '11101-BL11-FF',
        roomLab: '8104-BL8-FF',
        cssClass: 'subject-se2',
        type: 'Skill Enhancement 2',
        credits: '2 Credits (1L + 2P)',
        desc: 'Study of autonomous multi-agent systems, LLM tool integration, reasoning chains, memory systems, and multi-agent coordination.'
    },
    'PC': {
        code: '23CS008PR401',
        name: 'PC - CAPSTONE PROJECT',
        shortName: 'Capstone Project',
        facultyLecture: 'Department Project Mentor',
        facultyLab: 'Project Committee',
        room: 'Research Labs / Dept CSE',
        cssClass: 'subject-pc',
        type: 'Core Project',
        credits: '4 Credits',
        desc: 'Culminating industry or research-oriented group capstone project with periodic reviews, implementation, and thesis defense.'
    }
};

// All scheduled periods for Batch 23CSBTB43
const SCHEDULE = [
    // Monday
    {
        id: 'mon-1',
        day: 'Monday',
        startTime: '13:30',
        endTime: '14:30',
        duration: '1 Hour',
        courseKey: 'PE2',
        type: 'Lecture',
        room: '3218-BL3-SF',
        faculty: 'Mr. Sripelli Jagadish'
    },
    {
        id: 'mon-2',
        day: 'Monday',
        startTime: '14:30',
        endTime: '15:30',
        duration: '1 Hour',
        courseKey: 'SE2',
        type: 'Lecture',
        room: '11101-BL11-FF',
        faculty: 'Dr. Balajee Maram'
    },

    // Tuesday
    {
        id: 'tue-1',
        day: 'Tuesday',
        startTime: '09:30',
        endTime: '10:30',
        duration: '1 Hour',
        courseKey: 'PE3',
        type: 'Lecture',
        room: '3216-BL3-SF',
        faculty: 'Dr. Sasanko Sekhar Gantayat'
    },
    {
        id: 'tue-2',
        day: 'Tuesday',
        startTime: '10:30',
        endTime: '11:30',
        duration: '1 Hour',
        courseKey: 'SE2',
        type: 'Lecture',
        room: '10003-BL10-GF',
        faculty: 'Dr. Balajee Maram'
    },
    {
        id: 'tue-3',
        day: 'Tuesday',
        startTime: '15:30',
        endTime: '17:30',
        duration: '2 Hours',
        courseKey: 'PE4',
        type: 'Lab',
        room: '3207-BL3-SF',
        faculty: 'Ms. M Madhuri'
    },

    // Wednesday
    {
        id: 'wed-1',
        day: 'Wednesday',
        startTime: '13:30',
        endTime: '15:30',
        duration: '2 Hours',
        courseKey: 'PE2',
        type: 'Lab',
        room: '3218-BL3-SF',
        faculty: 'Mr. Sripelli Jagadish'
    },
    {
        id: 'wed-2',
        day: 'Wednesday',
        startTime: '15:30',
        endTime: '16:30',
        duration: '1 Hour',
        courseKey: 'PE3',
        type: 'Lecture',
        room: '3216-BL3-SF',
        faculty: 'Dr. Sasanko Sekhar Gantayat'
    },

    // Thursday
    {
        id: 'thu-1',
        day: 'Thursday',
        startTime: '10:30',
        endTime: '11:30',
        duration: '1 Hour',
        courseKey: 'PE4',
        type: 'Lecture',
        room: '3207-BL3-SF',
        faculty: 'Mr. Nagendar Yamsani'
    },
    {
        id: 'thu-2',
        day: 'Thursday',
        startTime: '13:30',
        endTime: '15:30',
        duration: '2 Hours',
        courseKey: 'SE2',
        type: 'Lab',
        room: '8104-BL8-FF',
        faculty: 'Mr. Battula Benarjun'
    },

    // Friday
    {
        id: 'fri-1',
        day: 'Friday',
        startTime: '09:30',
        endTime: '10:30',
        duration: '1 Hour',
        courseKey: 'PE2',
        type: 'Lecture',
        room: '3218-BL3-SF',
        faculty: 'Mr. Sripelli Jagadish'
    },
    {
        id: 'fri-2',
        day: 'Friday',
        startTime: '13:30',
        endTime: '14:30',
        duration: '1 Hour',
        courseKey: 'PE4',
        type: 'Lecture',
        room: '3208-BL3-SF',
        faculty: 'Mr. Nagendar Yamsani'
    },
    {
        id: 'fri-3',
        day: 'Friday',
        startTime: '15:30',
        endTime: '17:30',
        duration: '2 Hours',
        courseKey: 'PE3',
        type: 'Lab',
        room: '3218-BL3-SF',
        faculty: 'Dr. Sasanko Sekhar Gantayat'
    }
];

// Time Slot rows for Matrix View
const TIME_SLOTS = [{
        label: '09:30 - 10:30',
        start: '09:30',
        end: '10:30'
    },
    {
        label: '10:30 - 11:30',
        start: '10:30',
        end: '11:30'
    },
    {
        label: '11:30 - 12:30',
        start: '11:30',
        end: '12:30'
    },
    {
        label: '12:30 - 13:30',
        start: '12:30',
        end: '13:30',
        isLunch: true
    },
    {
        label: '13:30 - 14:30',
        start: '13:30',
        end: '14:30'
    },
    {
        label: '14:30 - 15:30',
        start: '14:30',
        end: '15:30'
    },
    {
        label: '15:30 - 16:30',
        start: '15:30',
        end: '16:30'
    },
    {
        label: '16:30 - 17:30',
        start: '16:30',
        end: '17:30'
    }
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// State
let currentSelectedDay = getInitialDay();
let searchQuery = '';

function getInitialDay() {
    const todayName = new Date().toLocaleDateString('en-US', {
        weekday: 'long'
    });
    return DAYS.includes(todayName) ? todayName : 'Monday';
}

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderWeeklyMatrix();
    renderDailyAgenda(currentSelectedDay);
    renderCourseCatalog();
    initClockAndLiveStatus();
    initEventHandlers();
    loadStudentNotes();

    // On mobile devices (<=768px), default to the Day Agenda view for better mobile UX
    if (window.innerWidth <= 768) {
        switchToView('daily-agenda');
    }
});

function switchToView(viewName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.getAttribute('data-view') === viewName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    if (viewName === 'weekly-grid') document.getElementById('viewWeeklyGrid').classList.add('active');
    if (viewName === 'daily-agenda') document.getElementById('viewDailyAgenda').classList.add('active');
    if (viewName === 'subjects-catalog') document.getElementById('viewSubjectsCatalog').classList.add('active');
    if (viewName === 'campus-guide') document.getElementById('viewCampusGuide').classList.add('active');
}

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('sru_tt_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.className = theme === 'dark' ? 'ri-sun-line' : 'ri-moon-clear-line';
    }
}

// 1. Weekly Matrix Rendering
function renderWeeklyMatrix() {
    const tbody = document.getElementById('matrixTableBody');
    if (!tbody) return;

    let html = '';
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long'
    });

    // Highlight today's column header
    document.querySelectorAll('.modern-timetable th.col-day').forEach(th => {
        if (th.getAttribute('data-day') === today) {
            th.classList.add('today-col');
        } else {
            th.classList.remove('today-col');
        }
    });

    TIME_SLOTS.forEach(slot => {
        if (slot.isLunch) {
            html += `
                <tr>
                    <td class="time-cell">${slot.label}</td>
                    <td colspan="6" class="lunch-row-cell">
                        <i class="ri-restaurant-2-line"></i> LUNCH BREAK & CAMPUS RECESS (12:30 PM - 01:30 PM)
                    </td>
                </tr>
            `;
            return;
        }

        html += `<tr><td class="time-cell">${slot.label}</td>`;

        DAYS.forEach(day => {
            // Check if there is an event matching this slot
            const session = SCHEDULE.find(s => {
                if (s.day !== day) return false;
                // Match start time or if 2-hr lab overlaps
                if (s.startTime === slot.start) return true;
                if (s.duration === '2 Hours') {
                    // Check if current slot is the 2nd hour
                    const sHour = parseInt(s.startTime.split(':')[0]);
                    const currentHour = parseInt(slot.start.split(':')[0]);
                    return currentHour === sHour + 1;
                }
                return false;
            });

            if (session) {
                const course = COURSES[session.courseKey];
                const isSecondHour = (session.duration === '2 Hours' && session.startTime !== slot.start);

                if (isSecondHour) {
                    html += `
                        <td class="${day === today ? 'today-cell' : ''}">
                            <div class="cell-slot-card ${course.cssClass}" onclick="openClassModal('${session.id}')" title="Continued: ${course.name}">
                                <div class="slot-code-badge">
                                    <span>${course.code}</span>
                                    <span class="slot-tag">LAB (CONT.)</span>
                                </div>
                                <div class="slot-name">${course.shortName}</div>
                                <div class="slot-room-fac">
                                    <span class="slot-room"><i class="ri-map-pin-line"></i> ${session.room}</span>
                                    <span>${session.faculty.split(' ').slice(0, 2).join(' ')}</span>
                                </div>
                            </div>
                        </td>
                    `;
                } else {
                    html += `
                        <td class="${day === today ? 'today-cell' : ''}">
                            <div class="cell-slot-card ${course.cssClass}" onclick="openClassModal('${session.id}')" title="${course.name}">
                                <div class="slot-code-badge">
                                    <span>${course.code}</span>
                                    <span class="slot-tag">${session.type.toUpperCase()}</span>
                                </div>
                                <div class="slot-name">${course.shortName}</div>
                                <div class="slot-room-fac">
                                    <span class="slot-room"><i class="ri-map-pin-line"></i> ${session.room}</span>
                                    <span>${session.faculty.split(' ').slice(0, 2).join(' ')}</span>
                                </div>
                            </div>
                        </td>
                    `;
                }
            } else {
                html += `<td class="${day === today ? 'today-cell' : ''}"></td>`;
            }
        });

        // Weekend column (Sat / Sun)
        html += `<td class="weekend-cell" style="background: rgba(0,0,0,0.05); text-align: center; color: var(--text-muted); font-size: 0.75rem;">—</td>`;
        html += `</tr>`;
    });

    tbody.innerHTML = html;
}

// 2. Daily Agenda Rendering
function renderDailyAgenda(dayName) {
    const container = document.getElementById('agendaCardsContainer');
    if (!container) return;

    // Update active day chip
    document.querySelectorAll('.day-chip').forEach(chip => {
        if (chip.getAttribute('data-day') === dayName) {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }
    });

    if (dayName === 'Weekend' || dayName === 'Saturday' || dayName === 'Sunday') {
        container.innerHTML = `
            <div class="glass-card agenda-empty-state">
                <i class="ri-sun-foggy-line"></i>
                <h3>Weekend - No Regular Classes</h3>
                <p>Use this time for Capstone Project research, AI labs practice, and project development.</p>
            </div>
        `;
        return;
    }

    const daySessions = SCHEDULE.filter(s => s.day === dayName);

    // Apply search filter if present
    const filteredSessions = daySessions.filter(s => {
        if (!searchQuery) return true;
        const c = COURSES[s.courseKey];
        const searchTarget = `${c.name} ${c.code} ${s.faculty} ${s.room} ${s.type}`.toLowerCase();
        return searchTarget.includes(searchQuery.toLowerCase());
    });

    if (filteredSessions.length === 0) {
        container.innerHTML = `
            <div class="glass-card agenda-empty-state">
                <i class="ri-check-double-line"></i>
                <h3>No Classes Found</h3>
                <p>${searchQuery ? 'No matching classes for your search term.' : 'No scheduled classroom sessions on this day.'}</p>
            </div>
        `;
        return;
    }

    let html = '';
    filteredSessions.forEach(session => {
        const course = COURSES[session.courseKey];
        html += `
            <div class="agenda-card" onclick="openClassModal('${session.id}')">
                <div class="agenda-time-col">
                    <div class="agenda-time">${session.startTime} - ${session.endTime}</div>
                    <span class="agenda-duration"><i class="ri-time-line"></i> ${session.duration}</span>
                </div>

                <div class="agenda-main-col">
                    <div class="agenda-code-row">
                        <span class="agenda-code">${course.code}</span>
                        <span class="type-pill ${session.type.toLowerCase()}">${session.type}</span>
                        <span class="badge badge-primary">${course.type}</span>
                    </div>
                    <h3 class="agenda-title">${course.name}</h3>
                    <div class="agenda-meta-row">
                        <span><i class="ri-map-pin-2-fill"></i> Room: <strong>${session.room}</strong></span>
                        <span><i class="ri-user-3-fill"></i> Faculty: <strong>${session.faculty}</strong></span>
                    </div>
                </div>

                <div class="agenda-action-col">
                    <button class="btn btn-icon" title="View Details">
                        <i class="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// 3. Course Catalog Rendering
function renderCourseCatalog() {
    const grid = document.getElementById('courseCatalogGrid');
    if (!grid) return;

    let html = '';
    Object.keys(COURSES).forEach(key => {
        const c = COURSES[key];
        const sessions = SCHEDULE.filter(s => s.courseKey === key);

        let sessionsBadges = sessions.map(s => `
            <span class="schedule-badge">
                <i class="ri-time-line"></i> ${s.day.slice(0, 3)} ${s.startTime} (${s.type})
            </span>
        `).join('');

        if (key === 'PC') {
            sessionsBadges = `<span class="schedule-badge"><i class="ri-compass-line"></i> Guided Project / Continuous Evaluation</span>`;
        }

        html += `
            <div class="course-card">
                <div>
                    <div class="course-card-header">
                        <span class="course-code">${c.code}</span>
                        <span class="badge badge-glow">${c.type}</span>
                    </div>
                    <h3 class="course-name">${c.name}</h3>
                    <ul class="course-meta-list">
                        <li><i class="ri-user-star-line"></i> <strong>Theory Faculty:</strong> ${c.facultyLecture || 'N/A'}</li>
                        <li><i class="ri-flask-line"></i> <strong>Lab Faculty:</strong> ${c.facultyLab || 'N/A'}</li>
                        <li><i class="ri-map-pin-line"></i> <strong>Assigned Room:</strong> ${c.room || c.roomLecture || 'Dept Labs'}</li>
                        <li><i class="ri-award-line"></i> <strong>Credits:</strong> ${c.credits}</li>
                    </ul>
                    <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:1rem;">${c.desc}</p>
                </div>
                <div>
                    <div style="font-size:0.75rem; font-weight:700; color:var(--text-secondary); margin-bottom:0.4rem;">Weekly Schedule:</div>
                    <div class="course-schedule-pill-box">
                        ${sessionsBadges}
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

// 4. Live Clock & Class Status Detector
function initClockAndLiveStatus() {
    function updateClock() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', {
            hour12: false
        });
        const dateStr = now.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        const timeElem = document.getElementById('liveTime');
        const dateElem = document.getElementById('liveDate');
        if (timeElem) timeElem.textContent = timeStr;
        if (dateElem) dateElem.textContent = dateStr;

        evaluateLiveStatus(now);
    }

    updateClock();
    setInterval(updateClock, 1000);
}

function evaluateLiveStatus(now) {
    const currentDay = now.toLocaleDateString('en-US', {
        weekday: 'long'
    });
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const heading = document.getElementById('statusHeading');
    const nameElem = document.getElementById('activeClassName');
    const typeElem = document.getElementById('activeClassType');
    const roomElem = document.getElementById('activeClassRoom');
    const facultyElem = document.getElementById('activeClassFaculty');
    const timeElem = document.getElementById('activeClassTime');

    if (!heading || !nameElem) return;

    if (!DAYS.includes(currentDay)) {
        heading.innerHTML = `<i class="ri-sun-line"></i> Weekend Mode`;
        nameElem.textContent = `No scheduled classes today`;
        typeElem.style.display = 'none';
        roomElem.textContent = `Campus Closed`;
        facultyElem.textContent = `Capstone Project Work`;
        timeElem.textContent = `Saturday / Sunday`;
        return;
    }

    const todaySessions = SCHEDULE.filter(s => s.day === currentDay).sort((a, b) => {
        return timeToMinutes(a.startTime) - timeToMinutes(b.startTime);
    });

    // Check if class is ongoing right now
    let ongoingSession = null;
    let nextSession = null;

    for (const session of todaySessions) {
        const startMin = timeToMinutes(session.startTime);
        const endMin = timeToMinutes(session.endTime);

        if (currentMinutes >= startMin && currentMinutes < endMin) {
            ongoingSession = session;
            break;
        } else if (currentMinutes < startMin && !nextSession) {
            nextSession = session;
        }
    }

    if (ongoingSession) {
        const course = COURSES[ongoingSession.courseKey];
        heading.innerHTML = `<i class="ri-radar-line" style="color:var(--success);"></i> Class In Session Right Now`;
        nameElem.textContent = course.name;
        typeElem.style.display = 'inline-block';
        typeElem.className = `type-pill ${ongoingSession.type.toLowerCase()}`;
        typeElem.textContent = ongoingSession.type;
        roomElem.textContent = ongoingSession.room;
        facultyElem.textContent = ongoingSession.faculty;
        timeElem.textContent = `${ongoingSession.startTime} - ${ongoingSession.endTime} (${ongoingSession.duration})`;
    } else if (nextSession) {
        const course = COURSES[nextSession.courseKey];
        const minUntil = timeToMinutes(nextSession.startTime) - currentMinutes;
        heading.innerHTML = `<i class="ri-timer-line" style="color:var(--primary-light);"></i> Next Class Starts in ${minUntil} min`;
        nameElem.textContent = course.name;
        typeElem.style.display = 'inline-block';
        typeElem.className = `type-pill ${nextSession.type.toLowerCase()}`;
        typeElem.textContent = nextSession.type;
        roomElem.textContent = nextSession.room;
        facultyElem.textContent = nextSession.faculty;
        timeElem.textContent = `${nextSession.startTime} - ${nextSession.endTime}`;
    } else {
        heading.innerHTML = `<i class="ri-checkbox-circle-line" style="color:var(--success);"></i> Day Complete`;
        nameElem.textContent = `All scheduled classes finished for ${currentDay}`;
        typeElem.style.display = 'none';
        roomElem.textContent = `Campus Recess`;
        facultyElem.textContent = `Self Study / Project`;
        timeElem.textContent = `Free Hours`;
    }
}

function timeToMinutes(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
}

// 5. Modal Popup Handler
function openClassModal(sessionId) {
    const session = SCHEDULE.find(s => s.id === sessionId);
    if (!session) return;
    const course = COURSES[session.courseKey];

    document.getElementById('modalCourseCode').textContent = course.code;
    document.getElementById('modalTitle').textContent = course.name;
    document.getElementById('modalDateTime').textContent = `${session.day}, ${session.startTime} - ${session.endTime} (${session.duration})`;
    document.getElementById('modalType').textContent = `${session.type} (${course.type})`;
    document.getElementById('modalRoom').textContent = session.room;
    document.getElementById('modalFaculty').textContent = session.faculty;
    document.getElementById('modalDesc').textContent = course.desc;

    document.getElementById('classModal').classList.add('active');
}

function closeModal() {
    document.getElementById('classModal').classList.remove('active');
}

// 6. Event Handlers
function initEventHandlers() {
    // Theme toggle
    document.getElementById('themeToggleBtn').addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('sru_tt_theme', newTheme);
        updateThemeIcon(newTheme);
    });

    // View Switching Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.getAttribute('data-view');
            switchToView(view);
        });
    });

    // Day Chips in Agenda View
    document.querySelectorAll('.day-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            currentSelectedDay = chip.getAttribute('data-day');
            renderDailyAgenda(currentSelectedDay);
        });
    });

    // Search Input
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        clearBtn.style.display = searchQuery ? 'block' : 'none';
        renderDailyAgenda(currentSelectedDay);
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearBtn.style.display = 'none';
        renderDailyAgenda(currentSelectedDay);
    });

    // Modal Close
    document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
    document.getElementById('modalCloseAction').addEventListener('click', closeModal);
    document.getElementById('classModal').addEventListener('click', (e) => {
        if (e.target.id === 'classModal') closeModal();
    });

    // Print (if button exists)
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Export .ICS Calendar (if button exists)
    const exportIcsBtn = document.getElementById('exportIcsBtn');
    if (exportIcsBtn) {
        exportIcsBtn.addEventListener('click', exportIcsCalendar);
    }

    // Notes auto-save
    const notesBox = document.getElementById('studentNotes');
    notesBox.addEventListener('input', () => {
        localStorage.setItem('sru_tt_notes', notesBox.value);
    });

    document.getElementById('clearNotesBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to clear your notes?')) {
            notesBox.value = '';
            localStorage.removeItem('sru_tt_notes');
        }
    });
}

function loadStudentNotes() {
    const saved = localStorage.getItem('sru_tt_notes');
    if (saved) {
        const notesBox = document.getElementById('studentNotes');
        if (notesBox) notesBox.value = saved;
    }
}

// 7. ICS Calendar Generator (RFC 5545)
function exportIcsCalendar() {
    const dayMap = {
        'Monday': 'MO',
        'Tuesday': 'TU',
        'Wednesday': 'WE',
        'Thursday': 'TH',
        'Friday': 'FR'
    };

    let icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//SR University//Timetable Batch 23CSBTB43//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'X-WR-CALNAME:SRU Timetable 23CSBTB43',
        'X-WR-TIMEZONE:Asia/Kolkata'
    ];

    SCHEDULE.forEach(session => {
        const course = COURSES[session.courseKey];
        const byDay = dayMap[session.day];
        const [sh, sm] = session.startTime.split(':');
        const [eh, em] = session.endTime.split(':');

        // Reference start date: 2026-08-17 (Monday)
        const dayOffsets = {
            'Monday': 17,
            'Tuesday': 18,
            'Wednesday': 19,
            'Thursday': 20,
            'Friday': 21
        };
        const dayDate = dayOffsets[session.day];

        const dtStart = `202608${dayDate}T${sh}${sm}00`;
        const dtEnd = `202608${dayDate}T${eh}${em}00`;

        icsContent.push(
            'BEGIN:VEVENT',
            `UID:${session.id}-2026@sruniv.com`,
            `DTSTAMP:20260816T000000Z`,
            `DTSTART;TZID=Asia/Kolkata:${dtStart}`,
            `DTEND;TZID=Asia/Kolkata:${dtEnd}`,
            `RRULE:FREQ=WEEKLY;BYDAY=${byDay};UNTIL=20261231T235959Z`,
            `SUMMARY:${course.shortName} (${session.type})`,
            `DESCRIPTION:${course.name}\\nFaculty: ${session.faculty}\\nRoom: ${session.room}\\nCode: ${course.code}`,
            `LOCATION:${session.room}`,
            'STATUS:CONFIRMED',
            'END:VEVENT'
        );
    });

    icsContent.push('END:VCALENDAR');

    const blob = new Blob([icsContent.join('\r\n')], {
        type: 'text/calendar;charset=utf-8'
    });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'SRU_Timetable_23CSBTB43.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}