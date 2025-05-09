// داده‌های غذاها با دو حالت گرمی و دانه‌ای
const foods = {
    "مرغ": {
        protein: 0.32,  // گرم پروتئین در هر 1 گرم مرغ
        carbs: 0,
        fat: 0.03,
        image: "https://cdn-icons-png.flaticon.com/512/2821/2821778.png"
    },
    "گوشت": {
        protein: 0.26,  // گرم پروتئین در هر 1 گرم مرغ
        carbs: 0,
        fat: 0.15,
        image: "https://cdn-icons-png.flaticon.com/512/17164/17164786.png"
    },
    "ماهی": {
        protein: 0.22,  // گرم پروتئین در هر 1 گرم مرغ
        carbs: 0,
        fat: 0.12,
        image: "https://cdn-icons-png.flaticon.com/512/1868/1868665.png"
    },
    "تخم مرغ": {
        protein: 6,   // گرم پروتئین در هر 1 عدد (70 گرمی)
        carbs: 0,
        fat: 5,
        image: "https://cdn-icons-png.flaticon.com/512/10684/10684395.png",
        unit: "عدد",
        unitWeight: 70,
        byUnit: true  // محاسبه بر اساس عدد
    },
    "برنج پخته": {
        protein: 0.027,  // گرم پروتئین در هر 1 گرم برنج
        carbs: 0.28,
        fat: 0.28,
        image: "https://cdn-icons-png.flaticon.com/512/7997/7997172.png"
    },
    "ماکارونی": {
        protein: 0.05,  // گرم پروتئین در هر 1 گرم برنج
        carbs: 0.22,
        fat: 0.04,
        image: "https://cdn-icons-png.flaticon.com/512/6461/6461837.png"
    },
    "رشته پلو": {
        protein: 0.04,  // گرم پروتئین در هر 1 گرم برنج
        carbs: 0.28,
        fat: 0.05,
        image: "https://cdn-icons-png.flaticon.com/512/2515/2515207.png"
    },
    "نان لواش": {
        protein: 9,     // گرم پروتئین در هر 1 برش (100 گرمی)
        carbs: 55,
        fat: 1.5,
        image: "https://cdn-icons-png.flaticon.com/512/10684/10684646.png",
        unit: "عدد",
        unitWeight: 100,
        byUnit: true
    },
    "نان بربری": {
        protein: 9,     // گرم پروتئین در هر 1 برش (100 گرمی)
        carbs: 53,
        fat: 1.5,
        image: "https://cdn-icons-png.flaticon.com/512/10684/10684646.png",
        unit: "نصف",
        unitWeight: 100,
        byUnit: true
    },
    "نان سنگگ": {
        protein: 9,     // گرم پروتئین در هر 1 برش (100 گرمی)
        carbs: 50,
        fat: 1.3,
        image: "https://cdn-icons-png.flaticon.com/512/10684/10684646.png",
        unit: "نصف",
        unitWeight: 100,
        byUnit: true
    },
    "سیب": {
        protein: 0.5,
        carbs: 20,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 0.3,
        image: "https://cdn-icons-png.flaticon.com/512/8953/8953531.png",
        unit: "عدد",
        unitWeight: 150,
        byUnit: true
    },
    "ماست": {
        protein: 1.5,
        carbs: 4.5,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 0.5,
        image: "https://cdn-icons-png.flaticon.com/512/9691/9691363.png",
        unit: "لیوان",
        unitWeight: 100,
        byUnit: true
    },
    "دوغ": {
        protein: 1,
        carbs: 2,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 1,
        image: "https://cdn-icons-png.flaticon.com/512/3414/3414360.png",
        unit: "لیوان",
        unitWeight: 100,
        byUnit: true
    },
    "شیر": {
        protein: 8,
        carbs: 12,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 8,
        image: "https://cdn-icons-png.flaticon.com/256/11520/11520758.png",
        unit: "لیوان",
        unitWeight: 240,
        byUnit: true
    },
    "نوشابه یا دلستر": {
        protein: 0,
        carbs: 26,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 0,
        image: "https://cdn-icons-png.flaticon.com/512/6489/6489766.png",
        unit: "لیوان",
        unitWeight: 240,
        byUnit: true
    },
    "تخمه کدو": {
        protein: 0.30,  // گرم پروتئین در هر 1 گرم مرغ
        carbs: 0.1,
        fat: 0.45,
        image: "https://cdn-icons-png.flaticon.com/512/6113/6113423.png"
    },
    "تخمه آفتابگردان": {
        protein: 0.21,  // گرم پروتئین در هر 1 گرم مرغ
        carbs: 0.2,
        fat: 0.51,
        image: "https://cdn-icons-png.flaticon.com/512/7627/7627840.png"
    },
    "چیپس": {
        protein: 0.07,  // گرم پروتئین در هر 1 گرم مرغ
        carbs: 0.50,
        fat: 0.34,
        image: "https://cdn-icons-png.flaticon.com/512/3050/3050268.png"
    },
    "پوفک": {
        protein: 0.05,  // گرم پروتئین در هر 1 گرم مرغ
        carbs: 0.50,
        fat: 0.35,
        image: "https://cdn-icons-png.flaticon.com/512/5624/5624353.png"
    },
     "سوسیس": {
        protein: 6,
        carbs: 2,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 13,
        image: "https://cdn-icons-png.flaticon.com/512/1857/1857937.png",
        unit: "عدد",
        unitWeight: 50,
        byUnit: true
    },  
    "بستنی": {
        protein: 0.03,  // گرم پروتئین در هر 1 گرم مرغ
        carbs: 0.02,
        fat: 0.13,
        image: "https://cdn-icons-png.flaticon.com/512/284/284809.png"
    },
      "پنیر پیتزا": {
        protein: 0.22,  // گرم پروتئین در هر 1 گرم مرغ
        carbs: 0.03,
        fat: 0.25,
        image: "https://cdn-icons-png.flaticon.com/256/16414/16414441.png"
    },
      "پنیر": {
        protein: 0.17,  // گرم پروتئین در هر 1 گرم مرغ
        carbs: 0.02,
        fat: 0.22,
        image: "https://cdn-icons-png.flaticon.com/512/1303/1303977.png"
    },
    "موز": {
        protein: 1.5,
        carbs: 27,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 0.3,
        image: "https://cdn-icons-png.flaticon.com/512/765/765607.png",
        unit: "عدد",
        unitWeight: 120,
        byUnit: true
    },
    "آش دوغ": {
        protein: 5,
        carbs: 25,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 5,
        image: "https://cdn-icons-png.flaticon.com/512/3724/3724181.png",
        unit: "کاسه",
        unitWeight: 300,
        byUnit: true
    },
    "سوپ": {
        protein: 3,
        carbs: 12,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 3,
        image: "https://cdn-icons-png.flaticon.com/512/13420/13420464.png",
        unit: "کاسه",
        unitWeight: 250,
        byUnit: true
    },
    "خرما": {
        protein: 0.2,
        carbs: 5.3,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 0.1,
        image: "https://cdn-icons-png.flaticon.com/512/9622/9622184.png",
        unit: "عدد",
        unitWeight: 8,
        byUnit: true
    },
    "عدسی": {
        protein: 10,
        carbs: 30,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 5,
        image: "https://cdn-icons-png.flaticon.com/512/12928/12928180.png",
        unit: "کاسه",
        unitWeight: 250,
        byUnit: true
    },
    "خوراک لوبیا چیتی": {
        protein: 12,
        carbs: 35,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 6,
        image: "https://cdn-icons-png.flaticon.com/512/12928/12928180.png",
        unit: "کاسه",
        unitWeight: 300,
        byUnit: true
    },
    "خورش قرمه سبزی": {
        protein: 15,
        carbs: 20,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 20,
        image: "https://cdn-icons-png.flaticon.com/256/17765/17765386.png",
        unit: "بشقاب",
        unitWeight: 300,
        byUnit: true
    },
    "کوکو سبزی": {
        protein: 7,
        carbs: 10,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 10,
        image: "https://cdn-icons-png.flaticon.com/512/706/706857.png",
        unit: "بشقاب",
        unitWeight: 150,
        byUnit: true
    },
    "املت": {
        protein: 12,
        carbs: 8,      // گرم کربوهیدرات در هر 1 عدد (100 گرمی)
        fat: 14,
        image: "https://cdn-icons-png.flaticon.com/512/3280/3280100.png",
        unit: "بشقاب",
        unitWeight: 200,
        byUnit: true
    },
    
  

};

// متغیرهای全局
let totalProtein = 0;
let totalCarbs = 0;
let totalFat = 0;
let selectedFood = null;

// ایجاد کارت‌های غذا
const foodGrid = document.getElementById("food-grid");
Object.entries(foods).forEach(([foodName, foodData]) => {
    const foodCard = document.createElement("div");
    foodCard.className = "food-card";
    foodCard.innerHTML = `
        <div class="food-img-container">
            <img src="${foodData.image || 'placeholder-food.jpg'}" alt="${foodName}" class="food-img">
        </div>
        <div class="food-name">${foodName}</div>
        ${foodData.byUnit ? `<div class="food-unit">${foodData.unit}</div>` : ''}
    `;
    
    foodCard.addEventListener("click", () => {
        // حذف انتخاب قبلی
        document.querySelectorAll(".food-card.selected").forEach(card => {
            card.classList.remove("selected");
        });
        
        // انتخاب جدید
        foodCard.classList.add("selected");
        selectedFood = foodName;
        updateWeightInput(foods[foodName]);
    });
    
    foodGrid.appendChild(foodCard);
});

// آپدیت فیلد ورودی وزن/تعداد
function updateWeightInput(foodData) {
    const container = document.getElementById("weight-input-container");
    container.innerHTML = '';
    
    if (foodData.byUnit) {
        container.innerHTML = `
            <label for="food-count">تعداد ${foodData.unit}:</label>
            <input type="number" id="food-count" placeholder="مثلاً 2" min="1" step="1">
            <p class="unit-hint">هر ${foodData.unit} ≈ ${foodData.unitWeight} گرم</p>
        `;
    } else {
        container.innerHTML = `
            <label for="food-weight">وزن (گرم):</label>
            <input type="number" id="food-weight" placeholder="مثلاً 150">
        `;
    }
}

document.getElementById("add-btn").addEventListener("click", () => {
    if (!selectedFood) {
        alert("لطفاً یک غذا انتخاب کنید!");
        return;
    }
    
    // ریست متغیرهای محاسباتی قبل از محاسبه غذای جدید
    totalProtein = 0;
    totalCarbs = 0;
    totalFat = 0;
    
    const foodData = foods[selectedFood];
    let weight, protein, carbs, fat;
    
    if (foodData.byUnit) {
        const count = parseFloat(document.getElementById("food-count").value);
        if (isNaN(count) || count <= 0) {
            alert(`لطفاً تعداد معتبری از ${foodData.unit} را وارد کنید!`);
            return;
        }
        protein = foodData.protein * count;
        carbs = foodData.carbs * count;
        fat = foodData.fat * count;
    } else {
        weight = parseFloat(document.getElementById("food-weight").value);
        if (isNaN(weight) || weight <= 0) {
            alert("لطفاً وزن معتبری به گرم وارد کنید!");
            return;
        }
        protein = foodData.protein * weight;
        carbs = foodData.carbs * weight;
        fat = foodData.fat * weight;
    }
    
    // آپدیت مقادیر (که حالا فقط برای غذای فعلی است)
    totalProtein = protein; // نه += بلکه =
    totalCarbs = carbs;
    totalFat = fat;
    
    // محاسبه کالری
    const totalCalories = (totalProtein * 4) + (totalCarbs * 4) + (totalFat * 9);
    
    // آپدیت UI
    updateTotals(totalProtein, totalCarbs, totalFat, totalCalories);
});

function updateTotals(protein, carbs, fat, calories) {
    document.getElementById("total-protein").textContent = protein.toFixed(1);
    document.getElementById("total-carbs").textContent = carbs.toFixed(1);
    document.getElementById("total-fat").textContent = fat.toFixed(1);
    document.getElementById("total-calories").textContent = calories.toFixed(1);
}

// محاسبه و ذخیره کالری روزانه
document.getElementById("calc-calories").addEventListener("click", () => {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseFloat(document.getElementById("age").value);
    const activity = parseFloat(document.getElementById("activity").value);
    
    if (isNaN(height) || isNaN(weight) || isNaN(age)) {
        alert("لطفاً اطلاعات را کامل وارد کنید!");
        return;
    }
    
    // محاسبه BMR (مردان)
    let bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    
    const dailyCalories2 = Math.round(bmr * activity);
    
    // ذخیره در localStorage
    localStorage.setItem('dailyCalories2', dailyCalories2);
    
    // نمایش نتیجه
    updateDailyNeedsDisplay();
});

// محاسبه و ذخیره پروتئین روزانه
document.getElementById("calc-protein").addEventListener("click", () => {
    const weight = parseFloat(document.getElementById("weight").value);
    
    if (isNaN(weight)) {
        alert("لطفاً وزن را وارد کنید!");
        return;
    }
    
    // محاسبه پروتئین
    const proteinMin = Math.round(weight * 1.6);
    const proteinMax = Math.round(weight * 2.2);
    
    // ذخیره در localStorage (میانگین گرفته می‌شود)
    const avgProtein = Math.round((proteinMin + proteinMax) / 2);
    localStorage.setItem('dailyProtein', avgProtein);
    
    // نمایش نتیجه
    updateDailyNeedsDisplay();
});

// تابع برای نمایش مقادیر ذخیره شده
function updateDailyNeedsDisplay() {
    // نمایش کالری
    const savedCalories = localStorage.getItem('dailyCalories2');
    if (savedCalories) {
        document.getElementById("saved-calories-dey").textContent = savedCalories;
    }
    
    // نمایش پروتئین
    const savedProtein = localStorage.getItem('dailyProtein');
    if (savedProtein) {
        document.getElementById("saved-protein-dey").textContent = savedProtein;
    }
}

// بارگذاری مقادیر ذخیره شده هنگام لود صفحه
window.addEventListener('DOMContentLoaded', () => {
    updateDailyNeedsDisplay();
});


// متغیرهای اصلی

let dailyCalories = 0;
let dailyProtein2 = 0; // اضافه شد
let calorieTimer;
const CALORIE_DEBOUNCE_TIME = 2000; // 5 ثانیه

// تابع محاسبه کالری کل فعلی
function calculateCurrentCalories() {
    return (totalProtein * 4) + (totalCarbs * 4) + (totalFat * 9);
}

// تابع ذخیره خودکار
function autoSaveCalories() {
    clearTimeout(calorieTimer);
    
    calorieTimer = setTimeout(() => {
        const currentCalories = calculateCurrentCalories();
        dailyCalories += currentCalories;
        dailyProtein2 += totalProtein; // اضافه شد
        
        localStorage.setItem('dailyCalories', dailyCalories.toString());
        localStorage.setItem('dailyProtein2', dailyProtein2.toString()); // اضافه شد
        
        updateSavedCaloriesDisplay();
        
        console.log('ذخیره شد - کالری:', currentCalories, 'پروتئین:', totalProtein, 'مجموع امروز:', dailyCalories, dailyProtein2);
    }, CALORIE_DEBOUNCE_TIME);
}

// تابع نمایش مقدار ذخیره شده
function updateSavedCaloriesDisplay() {
    const savedCaloriesElement = document.getElementById("saved-calories");
    const savedProteinElement = document.getElementById("saved-protein"); // اضافه شد
    
    if (savedCaloriesElement) {
        savedCaloriesElement.textContent = dailyCalories.toFixed(1);
    }
    
    if (savedProteinElement) { // اضافه شد
        savedProteinElement.textContent = dailyProtein2.toFixed(1);
    }
}

// ریست روزانه
function setupResetButton() {
    const resetBtn = document.getElementById("next-day-btn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            dailyCalories = 0;
            dailyProtein2 = 0; // اضافه شد
            localStorage.removeItem('dailyCalories');
            localStorage.removeItem('dailyProtein2'); // اضافه شد
            updateSavedCaloriesDisplay();
            console.log('ریست روزانه انجام شد');
        });
    }
}

// مقداردهی اولیه
function initCalorieTracker() {
    // بارگذاری مقادیر ذخیره شده از localStorage
    const savedCalories = localStorage.getItem('dailyCalories');
    const savedProtein = localStorage.getItem('dailyProtein2'); // اضافه شد
    
    dailyCalories = savedCalories ? parseFloat(savedCalories) : 0;
    dailyProtein2 = savedProtein ? parseFloat(savedProtein) : 0; // اضافه شد
    
    updateSavedCaloriesDisplay();
    setupResetButton();
    
    // ردیابی تغییرات در مقادیر غذایی
    let lastProtein = totalProtein;
    let lastCarbs = totalCarbs;
    let lastFat = totalFat;
    
    setInterval(() => {
        if (totalProtein !== lastProtein || 
            totalCarbs !== lastCarbs || 
            totalFat !== lastFat) {
            
            lastProtein = totalProtein;
            lastCarbs = totalCarbs;
            lastFat = totalFat;
            autoSaveCalories();
        }
    }, 1000); // بررسی هر 1 ثانیه
}

// شروع سیستم هنگام لود صفحه
window.addEventListener('DOMContentLoaded', initCalorieTracker);



// ساختار ذخیره‌سازی جدید در localStorage
const WEEKLY_DATA_KEY = 'weeklyCaloriesData';

// تابع مقداردهی اولیه
function initWeeklyData() {
    if (!localStorage.getItem(WEEKLY_DATA_KEY)) {
        const initialData = {
            saturday: 0,
            sunday: 0,
            monday: 0,
            tuesday: 0,
            wednesday: 0,
            thursday: 0,
            friday: 0
        };
        localStorage.setItem(WEEKLY_DATA_KEY, JSON.stringify(initialData));
    }
}

// تابع ذخیره کالری در روز انتخاب شده
function saveCaloriesToDay() {
    const selectedDay = document.getElementById('day-selector').value;
    const weeklyData = JSON.parse(localStorage.getItem(WEEKLY_DATA_KEY));
    
    weeklyData[selectedDay] = dailyCalories;
    localStorage.setItem(WEEKLY_DATA_KEY, JSON.stringify(weeklyData));
    
    // ریست روزانه
    dailyCalories = 0;
    localStorage.removeItem('dailyCalories');
    updateDisplays();
}

// تابع نمایش داده‌های هفتگی
function updateWeekDisplay() {
    const weeklyData = JSON.parse(localStorage.getItem(WEEKLY_DATA_KEY));
    
    for (const day in weeklyData) {
        const element = document.getElementById(day);
        if (element) {
            element.querySelector('span').textContent = weeklyData[day];
        }
    }
}

// تابع جامع به‌روزرسانی نمایش
function updateDisplays() {
    updateSavedCaloriesDisplay();
    updateWeekDisplay();
}

// رویداد کلیک دکمه ثبت
document.getElementById('save-day-btn').addEventListener('click', saveCaloriesToDay);

// مقداردهی اولیه هنگام لود صفحه
window.addEventListener('DOMContentLoaded', () => {
    initWeeklyData();
    updateDisplays();
    setupResetButton();
});
