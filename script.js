// Attack Tree Template - Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to nodes for interactivity
    const nodes = document.querySelectorAll('.node');
    
    nodes.forEach(node => {
        node.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            nodes.forEach(node => node.classList.remove('active'));
        }
    });

    // Function to highlight nodes on hover
    nodes.forEach(node => {
        node.addEventListener('mouseenter', function() {
            this.style.opacity = '1';
        });
        
        node.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });

    // Responsive adjustment for connection lines
    window.addEventListener('resize', adjustTreeLayout);
    adjustTreeLayout(); // Call on load
});

function adjustTreeLayout() {
    const container = document.querySelector('.tree-container');
    const connectionLines = document.querySelector('.connection-lines');
    
    // Adjust connection lines based on container width
    if (window.innerWidth < 768) {
        connectionLines.style.height = '60px';
    } else {
        connectionLines.style.height = '80px';
    }
}

// Add animation on page load
window.addEventListener('load', function() {
    const nodes = document.querySelectorAll('.node');
    nodes.forEach((node, index) => {
        node.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.2}s forwards`;
        node.style.opacity = '0';
    });
});

// Define fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
