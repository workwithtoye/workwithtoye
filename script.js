// --- Constants (Content Data) ---
const PROJECTS = [
    {
        id: '1',
        title: 'Penthel UX Strategy',
        description: 'Strategic implementation of journey mapping and persuasion psychology to boost website traffic by 20% and conversion rates by 15%.',
        year: '2024',
        category: 'Content Strategy',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
        tags: ['UX Writing', 'Journey Mapping', 'Persuasion Psych']
    },
    {
        id: '2',
        title: 'DCFPI Digital Audit',
        description: 'Comprehensive content audit and information architecture restructuring, resulting in a 35% increase in site traffic and engagement.',
        year: '2024',
        category: 'Information Architecture',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
        tags: ['Accessibility', 'SEO', 'Data Analytics']
    },
    {
        id: '3',
        title: 'Wellness Program Launch',
        description: 'Developing content models and utilizing user research to drive a 20% engagement boost for the Carers Network Ireland wellness initiative.',
        year: '2023',
        category: 'Product Design',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop',
        tags: ['User Research', 'Content Modeling', 'Community']
    }
];

const BIO_CONTEXT = "Olutoyese Oyedepo is a Content Strategist and UX Designer based in Dublin, specializing in persuasion psychology, data-driven user experiences, and information architecture.";
const SYSTEM_INSTRUCTION = `
  You are Zenith, the AI personal assistant for a Content Strategist and UX Designer named Olutoyese Oyedepo. 
  You are helpful, minimalist, and direct. 
  Olutoyese's portfolio includes: ${PROJECTS.map(p => p.title).join(', ')}.
  Olutoyese's bio: ${BIO_CONTEXT}.
  When asked about projects, provide concise details based on content strategy and UX. 
  If asked about something unrelated to Olutoyese's work, gently steer the conversation back to his skills (UX, Strategy, Data, Persuasion Psychology) or contact info. 
  Always maintain a sophisticated, understated tone.
  `;

// --- Theme Toggle ---
const themeBtn = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('theme-icon-light');
const darkIcon = document.getElementById('theme-icon-dark');

function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
    } else {
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
    }
}

themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.theme = isDark ? 'dark' : 'light';
    updateThemeIcons();
});

// Initialize icons
updateThemeIcons();

// --- Mobile Menu ---
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('menu-close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelectorAll('.menu-link');

function toggleMenu(show) {
    if (show) {
        mobileMenu.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
    } else {
        mobileMenu.classList.add('opacity-0');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
    }
}

menuBtn.addEventListener('click', () => toggleMenu(true));
closeMenuBtn.addEventListener('click', () => toggleMenu(false));
menuLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));

// --- Live Clock ---
const clockEl = document.getElementById('live-clock');

function updateClock() {
    const now = new Date();
    const options = {
        timeZone: 'Europe/Dublin',
        hour: 'numeric',
        minute: '2-digit',
        hour12: false
    };
    const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
    clockEl.textContent = `DUB ${timeString}`;
}

setInterval(updateClock, 1000);
updateClock();

// --- Scroll Reveal ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

// --- Back to Top ---
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Project Modal ---
const modal = document.getElementById('project-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalCloseBtn = document.getElementById('modal-close-btn');
// Elements to populate
const modalImg = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalYear = document.getElementById('modal-year');
const modalCat = document.getElementById('modal-category');
const modalDesc = document.getElementById('modal-description');
const modalTags = document.getElementById('modal-tags');

function openModal(projectId) {
    const project = PROJECTS.find(p => p.id === projectId);
    if (!project) return;

    modalImg.src = project.image;
    modalImg.alt = project.title;
    modalTitle.textContent = project.title;
    modalYear.textContent = project.year;
    modalCat.textContent = project.category;
    modalDesc.textContent = project.description;

    modalTags.innerHTML = '';
    project.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'border border-black/10 dark:border-white/10 px-2 py-1 mono text-[10px] uppercase';
        span.textContent = tag;
        modalTags.appendChild(span);
    });

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Lock scroll
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Unlock scroll
}

// Attach listeners to project cards
document.querySelectorAll('[data-project-id]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.projectId));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(card.dataset.projectId);
        }
    });
});

modalCloseBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

// --- AI Assistant ---
const aiToggleBtn = document.getElementById('ai-toggle-btn');
const aiCloseBtn = document.getElementById('ai-close-btn');
const aiTerminal = document.getElementById('ai-terminal');
const aiMessages = document.getElementById('ai-messages');
const aiInput = document.getElementById('ai-input');

let isAiOpen = false;
const GEMINI_API_KEY = ""; // USER MUST FILL THIS

function toggleAI() {
    isAiOpen = !isAiOpen;
    if (isAiOpen) {
        aiToggleBtn.classList.add('hidden');
        aiTerminal.classList.remove('hidden');
        aiTerminal.parentElement.classList.add('flex', 'flex-col'); // Fix layout
        aiInput.focus();
    } else {
        aiToggleBtn.classList.remove('hidden');
        aiTerminal.classList.add('hidden');
        aiTerminal.parentElement.classList.remove('flex', 'flex-col');
    }
}

function addMessage(role, text) {
    const div = document.createElement('div');
    div.className = "flex flex-col gap-1 break-words";

    const roleSpan = document.createElement('span');
    roleSpan.className = `uppercase opacity-50 mb-0.5 ${role === 'user' ? 'text-right' : 'text-left'}`;
    roleSpan.textContent = role === 'user' ? 'USER@LOC' : 'ROOT@ZENITH';

    const contentDiv = document.createElement('div');
    contentDiv.className = role === 'user' ? 'text-right' : 'text-left whitespace-pre-wrap';

    if (role === 'assistant') {
        const prefix = document.createElement('span');
        prefix.className = "mr-2 opacity-50";
        prefix.textContent = ">";
        contentDiv.appendChild(prefix);
    }

    contentDiv.appendChild(document.createTextNode(text));

    div.appendChild(roleSpan);
    div.appendChild(contentDiv);
    aiMessages.appendChild(div);

    // Remove typing indicator if exists
    const typing = document.getElementById('ai-typing');
    if (typing) typing.remove();

    aiMessages.scrollTop = aiMessages.scrollHeight;
}

function showTyping() {
    const div = document.createElement('div');
    div.id = 'ai-typing';
    div.className = "animate-pulse";
    div.textContent = "> PROCESSING REQUEST...";
    aiMessages.appendChild(div);
    aiMessages.scrollTop = aiMessages.scrollHeight;
}

async function callGemini(prompt) {
    if (!GEMINI_API_KEY) {
        return "ERROR: API_KEY_MISSING. Please configure your API key in script.js.";
    }

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                system_instruction: { parts: [{ text: SYSTEM_INSTRUCTION }] } // Note: Check API support for system instruction in v1beta/models/gemini-pro vs 1.5-flash
            })
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error.message);
        return data.candidates[0].content.parts[0].text;
    } catch (e) {
        console.error(e);
        return "SYSTEM ERROR: CONNECTION FAILED.";
    }
}

aiToggleBtn.addEventListener('click', toggleAI);
aiCloseBtn.addEventListener('click', toggleAI);

aiInput.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter' && aiInput.value.trim()) {
        const text = aiInput.value.trim();
        aiInput.value = '';
        addMessage('user', text);
        showTyping();
        const response = await callGemini(text);
        addMessage('assistant', response);
    }
});
