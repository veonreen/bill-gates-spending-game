
// Initial budget and item data
let budget = 100000000000;
let totalSpent = 0;
let itemsPurchased = 0;
let items = {
    "big-mac": { price: 2, quantity: 0 },
    "flip-flops": { price: 3, quantity: 0 },
    "coca-cola-pack": { price: 5, quantity: 0 },
    "movie-ticket": { price: 12, quantity: 0 },
    "book": { price: 15, quantity: 0 },
    "lobster-dinner": { price: 45, quantity: 0 },
    "video-game": { price: 60, quantity: 0 },
    "amazon-echo": { price: 99, quantity: 0 },
    "year-of-netflix": { price: 100, quantity: 0 },
    "air-jordans": { price: 125, quantity: 0 },
    "airpods": { price: 199, quantity: 0 },
    "gaming-console": { price: 299, quantity: 0 },
    "drone": { price: 350, quantity: 0 },
    "smartphone": { price: 699, quantity: 0 },
    "bike": { price: 800, quantity: 0 },
    "kitten": { price: 1500, quantity: 0 },
    "puppy": { price: 1500, quantity: 0 },
    "auto-rickshaw": { price: 2300, quantity: 0 },
    "horse": { price: 2500, quantity: 0 },
    "acre-of-farmland": { price: 3000, quantity: 0 },
    "designer-handbag": { price: 5500, quantity: 0 },
    "hot-tub": { price: 6000, quantity: 0 },
    "luxury-wine": { price: 7000, quantity: 0 },
    "diamond-ring": { price: 10000, quantity: 0 },
    "jet-ski": { price: 12000, quantity: 0 },
    "rolex": { price: 15000, quantity: 0 },
    "ford-f150": { price: 30000, quantity: 0 },
    "tesla": { price: 75000, quantity: 0 },
    "monster-truck": { price: 150000, quantity: 0 },
    "ferrari": { price: 250000, quantity: 0 },
    "single-family-home": { price: 300000, quantity: 0 },
    "gold-bar": { price: 700000, quantity: 0 },
    "mcdonalds-franchise": { price: 1500000, quantity: 0 },
    "superbowl-ad": { price: 5250000, quantity: 0 },
    "yacht": { price: 7500000, quantity: 0 },
    "m1-abrams": { price: 8000000, quantity: 0 },
    "formula-1-car": { price: 15000000, quantity: 0 },
    "apache-helicopter": { price: 31000000, quantity: 0 },
    "mansion": { price: 45000000, quantity: 0 },
    "make-a-movie": { price: 100000000, quantity: 0 },
    "boeing-747": { price: 148000000, quantity: 0 },
    "mona-lisa": { price: 780000000, quantity: 0 },
    "skyscraper": { price: 850000000, quantity: 0 },
    "cruise-ship": { price: 930000000, quantity: 0 },
    "nba-team": { price: 2120000000, quantity: 0 }
};

// Update budget display
function updateBudgetDisplay() {
    document.getElementById('budget').textContent = `$${budget.toLocaleString()}`;
    document.getElementById('total-spent').textContent = `$${totalSpent.toLocaleString()}`;
    document.getElementById('items-purchased').textContent = itemsPurchased;
}

// Purchase item logic
function purchaseItem(itemId) {
    const item = items[itemId];
    if (budget >= item.price) {
        budget -= item.price;
        totalSpent += item.price;
        itemsPurchased += 1;
        item.quantity += 1;
        updateBudgetDisplay();
        checkAchievements();
        showCelebrationEffects();
        addCommentary(itemId);
    } else {
        alert('Not enough budget to purchase this item.');
    }
}

// Check achievements
function checkAchievements() {
    const achievements = document.getElementById('achievements').getElementsByTagName('li');
    if (totalSpent >= 1000000 && !achievements[1].classList.contains('achieved')) {
        achievements[1].classList.add('achieved');
        alert('Achievement unlocked: Spent $1 Million!');
    }
    if (totalSpent >= 1000000000 && !achievements[2].classList.contains('achieved')) {
        achievements[2].classList.add('achieved');
        alert('Achievement unlocked: Spent $1 Billion!');
    }
    if (itemsPurchased >= 10 && !achievements[3].classList.contains('achieved')) {
        achievements[3].classList.add('achieved');
        alert('Achievement unlocked: Purchased 10 Items!');
    }
    if (itemsPurchased >= 20 && !achievements[4].classList.contains('achieved')) {
        achievements[4].classList.add('achieved');
        alert('Achievement unlocked: Purchased 20 Items!');
    }
    if (budget <= 0) {
        showCompletionModal();
    }
}

// Show celebration effects
function showCelebrationEffects() {
    const effectsContainer = document.getElementById('celebration-effects');
    effectsContainer.innerHTML = '<div class="confetti"></div>'; // Placeholder for actual effects
    setTimeout(() => {
        effectsContainer.innerHTML = '';
    }, 2000);
}

// Show completion modal
function showCompletionModal() {
    const modal = document.getElementById('completion-modal');
    modal.style.display = 'block';
}

// Add Bill Gates commentary
function addCommentary(itemId) {
    const commentary = {
        "big-mac": "A classic choice for a quick meal!",
        "tesla": "Going green with a Tesla, nice!",
        "mansion": "Living large with a mansion!",
        "nba-team": "Owning an NBA team, impressive!"
        // Add more commentary as needed
    };
    if (commentary[itemId]) {
        alert(`Bill Gates says: "${commentary[itemId]}"`);
    }
}

// Add event listeners to buy buttons
document.querySelectorAll('.item button').forEach(button => {
    button.addEventListener('click', () => {
        const itemId = button.parentElement.id;
        purchaseItem(itemId);
    });
});

// Initialize game
updateBudgetDisplay();

// Modal close button
document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('completion-modal').style.display = 'none';
});

// Restart game button
document.getElementById('restart-game').addEventListener('click', () => {
    budget = 100000000000;
    totalSpent = 0;
    itemsPurchased = 0;
    for (let item in items) {
        items[item].quantity = 0;
    }
    updateBudgetDisplay();
    document.getElementById('completion-modal').style.display = 'none';
});
