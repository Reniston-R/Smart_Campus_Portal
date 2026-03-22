document.addEventListener('DOMContentLoaded', () => {
    // Hide all panels initially except the one marked active
    const panels = document.querySelectorAll('.panel');
    panels.forEach(p => {
        if (!p.classList.contains('active')) {
            p.style.display = 'none';
        }
    });
});

function showPanel(id, btnClicked) {
    // Hide all panels
    const panels = document.querySelectorAll(".panel");
    panels.forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
    });

    // Remove active class from all buttons
    const btns = document.querySelectorAll(".nav-btn");
    btns.forEach(b => {
        b.classList.remove('active');
    });

    // Show the target panel
    const targetPanel = document.getElementById(id);
    if(targetPanel) {
        targetPanel.style.display = "block";
        // Small delay to ensure display: block is applied before opacity animation
        setTimeout(() => {
            targetPanel.classList.add('active');
        }, 10);
    }
    
    // Add active class to clicked button
    if(btnClicked) {
        btnClicked.classList.add('active');
    }
}

function calc() {
    const d = parseFloat(document.getElementById("d").value);
    const s = parseFloat(document.getElementById("s").value);
    
    const resDiv = document.getElementById("result");
    const resVal = document.getElementById("result-val");
    const resSub = document.getElementById("result-sub");

    if (isNaN(d) || isNaN(s) || s <= 0 || d < 0) {
        resDiv.style.display = "block";
        resVal.textContent = "Error";
        resSub.textContent = "Please enter valid, positive numbers.";
        resVal.style.color = "var(--danger)";
        resDiv.style.borderColor = "rgba(239, 68, 68, 0.2)";
        resDiv.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
        return;
    }

    const timeHours = d / s;
    const totalMinutes = Math.round(timeHours * 60);
    
    resDiv.style.display = "block";
    resVal.style.color = "var(--text-main)";
    resDiv.style.borderColor = "rgba(16, 185, 129, 0.2)";
    resDiv.style.backgroundColor = "rgba(16, 185, 129, 0.1)";

    if (totalMinutes < 60) {
        resVal.textContent = `${totalMinutes} min`;
    } else {
        const h = Math.floor(totalMinutes / 60);
        const m = totalMinutes % 60;
        resVal.textContent = m > 0 ? `${h}h ${m}m` : `${h}h`;
    }
    
    resSub.textContent = `At ${s} km/h for a ${d} km journey`;
}