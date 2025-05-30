// Language switching functionality

document.addEventListener('DOMContentLoaded', function() {
  const langToggle = document.getElementById('lang-toggle');
  
  // Content translations
  const translations = {
    en: {
      navbar: {
        brand: 'Witch',
        crepes: 'Crepes',
        syrian: 'Syrian',
        coldDrinks: 'Cold Drinks',
        hotDrinks: 'Hot Drinks',
        breakfast: 'Breakfast',
        pizza: 'Pizza'
      },
      hero: {
        name: 'Witch',
        slogan: 'Taste the extraordinary',
        desc: 'Welcome to our culinary paradise where every bite tells a story. Explore our diverse menu crafted with passion and the finest ingredients.'
      },
      sections: {
        crepes: 'Crepes',
        syrian: 'Syrian',
        coldDrinks: 'Cold Drinks',
        hotDrinks: 'Hot Drinks',
        breakfast: 'Breakfast Sandwiches',
        pizza: 'Pizza'
      },
      menuItems: {
        // Crepes
        'Nutella Crepe': {
          title: 'Nutella Crepe',
          desc: 'Sweet crepe filled with Nutella chocolate spread',
          price: '$6.99'
        },
        'Strawberry Crepe': {
          title: 'Strawberry Crepe',
          desc: 'Fresh strawberries with whipped cream',
          price: '$7.99'
        },
        'Savory Chicken Crepe': {
          title: 'Savory Chicken Crepe',
          desc: 'Grilled chicken with mushrooms and cheese',
          price: '$9.99'
        },
        'Banana Caramel Crepe': {
          title: 'Banana Caramel Crepe',
          desc: 'Sliced bananas with caramel sauce and ice cream',
          price: '$8.50'
        },
        // Syrian
        'Shawarma Plate': {
          title: 'Shawarma Plate',
          desc: 'Marinated chicken or beef with rice and salad',
          price: '$12.99'
        },
        'Falafel Wrap': {
          title: 'Falafel Wrap',
          desc: 'Crispy falafel with tahini sauce and vegetables',
          price: '$7.99'
        },
        'Kibbeh': {
          title: 'Kibbeh',
          desc: 'Minced meat with bulgur wheat and spices',
          price: '$8.99'
        },
        'Hummus Plate': {
          title: 'Hummus Plate',
          desc: 'Creamy hummus with olive oil and fresh pita bread',
          price: '$6.50'
        },
        // Cold Drinks
        'Fresh Lemonade': {
          title: 'Fresh Lemonade',
          desc: 'Freshly squeezed lemons with mint leaves',
          price: '$3.99'
        },
        'Fruit Smoothie': {
          title: 'Fruit Smoothie',
          desc: 'Blend of seasonal fruits with yogurt',
          price: '$5.50'
        },
        'Iced Coffee': {
          title: 'Iced Coffee',
          desc: 'Cold brew coffee with cream and ice',
          price: '$4.50'
        },
        'Fresh Orange Juice': {
          title: 'Fresh Orange Juice',
          desc: 'Freshly squeezed orange juice',
          price: '$4.50'
        },
        // Hot Drinks
        'Espresso': {
          title: 'Espresso',
          desc: 'Single shot of rich espresso',
          price: '$2.99'
        },
        'Cappuccino': {
          title: 'Cappuccino',
          desc: 'Espresso with steamed milk and foam',
          price: '$4.50'
        },
        'Green Tea': {
          title: 'Green Tea',
          desc: 'Premium green tea leaves with honey',
          price: '$3.50'
        },
        'Hot Chocolate': {
          title: 'Hot Chocolate',
          desc: 'Rich chocolate with steamed milk and whipped cream',
          price: '$4.99'
        },
        // Breakfast
        'Egg & Cheese': {
          title: 'Egg & Cheese',
          desc: 'Fried egg with American cheese on a toasted bagel',
          price: '$5.99'
        },
        'Bacon & Egg': {
          title: 'Bacon & Egg',
          desc: 'Crispy bacon with fried egg and cheese',
          price: '$6.99'
        },
        'Avocado Toast': {
          title: 'Avocado Toast',
          desc: 'Smashed avocado with poached egg on sourdough',
          price: '$8.50'
        },
        'Veggie Wrap': {
          title: 'Veggie Wrap',
          desc: 'Scrambled eggs with peppers, onions, and spinach',
          price: '$7.50'
        },
        // Pizza
        'Margherita': {
          title: 'Margherita',
          desc: 'Fresh tomatoes, mozzarella, and basil',
          price: '$12.99'
        },
        'Pepperoni': {
          title: 'Pepperoni',
          desc: 'Classic pepperoni with mozzarella cheese',
          price: '$14.99'
        },
        'Vegetarian': {
          title: 'Vegetarian',
          desc: 'Bell peppers, mushrooms, onions, and olives',
          price: '$13.99'
        },
        'BBQ Chicken': {
          title: 'BBQ Chicken',
          desc: 'Grilled chicken with BBQ sauce and red onions',
          price: '$15.99'
        }
      }
    },
    ar: {
      navbar: {
        brand: 'ويتش',
        crepes: 'كريب',
        syrian: 'سوري',
        coldDrinks: 'مشروبات باردة',
        hotDrinks: 'مشروبات ساخنة',
        breakfast: 'فطور',
        pizza: 'بيتزا'
      },
      hero: {
        name: 'ويتش',
        slogan: 'تذوق الطعم الاستثنائي',
        desc: 'مرحبًا بكم في جنة الطهي حيث كل لقمة تحكي قصة. استكشف قائمتنا المتنوعة المصنوعة بشغف وأجود المكونات.'
      },
      sections: {
        crepes: 'كريب',
        syrian: 'أطباق سورية',
        coldDrinks: 'مشروبات باردة',
        hotDrinks: 'مشروبات ساخنة',
        breakfast: 'ساندويتشات الإفطار',
        pizza: 'بيتزا'
      },
      menuItems: {
        // Crepes
        'Nutella Crepe': {
          title: 'كريب نوتيلا',
          desc: 'كريب محشو بنوتيلا',
          price: '٦.٩٩ $'
        },
        'Strawberry Crepe': {
          title: 'كريب فراولة',
          desc: 'فراولة طازجة مع كريمة مخفوقة',
          price: '٧.٩٩ $'
        },
        'Savory Chicken Crepe': {
          title: 'كريب دجاج',
          desc: 'دجاج مشوي مع فطر وجبنة',
          price: '٩.٩٩ $'
        },
        'Banana Caramel Crepe': {
          title: 'كريب موز بالكراميل',
          desc: 'شرائح موز مع صوص كراميل وآيس كريم',
          price: '٨.٥٠ $'
        },
        // Syrian
        'Shawarma Plate': {
          title: 'طبق شاورما',
          desc: 'شاورما دجاج أو لحم متبل مع أرز وسلطة',
          price: '١٢.٩٩ $'
        },
        'Falafel Wrap': {
          title: 'ساندويتش فلافل',
          desc: 'فلافل مقرمشة مع صوص طحينة وخضار',
          price: '٧.٩٩ $'
        },
        'Kibbeh': {
          title: 'كبة',
          desc: 'لحم مفروم مع برغل وبهارات',
          price: '٨.٩٩ $'
        },
        'Hummus Plate': {
          title: 'طبق حمص',
          desc: 'حمص كريمي مع زيت زيتون وخبز طازج',
          price: '٦.٥٠ $'
        },
        // Cold Drinks
        'Fresh Lemonade': {
          title: 'ليموناضة طازجة',
          desc: 'ليمون طازج معصور مع أوراق نعناع',
          price: '٣.٩٩ $'
        },
        'Fruit Smoothie': {
          title: 'سموذي فواكه',
          desc: 'مزيج من الفواكه الموسمية مع زبادي',
          price: '٥.٥٠ $'
        },
        'Iced Coffee': {
          title: 'قهوة مثلجة',
          desc: 'قهوة باردة مع كريمة وثلج',
          price: '٤.٥٠ $'
        },
        'Fresh Orange Juice': {
          title: 'عصير برتقال طازج',
          desc: 'برتقال طازج معصور',
          price: '٤.٥٠ $'
        },
        // Hot Drinks
        'Espresso': {
          title: 'إسبريسو',
          desc: 'شوت واحد من الإسبريسو الغني',
          price: '٢.٩٩ $'
        },
        'Cappuccino': {
          title: 'كابتشينو',
          desc: 'إسبريسو مع حليب مبخر ورغوة',
          price: '٤.٥٠ $'
        },
        'Green Tea': {
          title: 'شاي أخضر',
          desc: 'أوراق شاي أخضر فاخرة مع عسل',
          price: '٣.٥٠ $'
        },
        'Hot Chocolate': {
          title: 'شوكولاتة ساخنة',
          desc: 'شوكولاتة غنية مع حليب مبخر وكريمة مخفوقة',
          price: '٤.٩٩ $'
        },
        // Breakfast
        'Egg & Cheese': {
          title: 'بيض وجبنة',
          desc: 'بيض مقلي مع جبنة أمريكية على خبز محمص',
          price: '٥.٩٩ $'
        },
        'Bacon & Egg': {
          title: 'لحم مقدد وبيض',
          desc: 'لحم مقدد مقرمش مع بيض مقلي وجبنة',
          price: '٦.٩٩ $'
        },
        'Avocado Toast': {
          title: 'توست أفوكادو',
          desc: 'أفوكادو مهروس مع بيض مسلوق على خبز محمص',
          price: '٨.٥٠ $'
        },
        'Veggie Wrap': {
          title: 'راب خضار',
          desc: 'بيض مخفوق مع فلفل وبصل وسبانخ',
          price: '٧.٥٠ $'
        },
        // Pizza
        'Margherita': {
          title: 'مارجريتا',
          desc: 'طماطم طازجة وموزاريلا وريحان',
          price: '١٢.٩٩ $'
        },
        'Pepperoni': {
          title: 'بيبروني',
          desc: 'بيبروني كلاسيكي مع جبنة موزاريلا',
          price: '١٤.٩٩ $'
        },
        'Vegetarian': {
          title: 'خضار',
          desc: 'فلفل، فطر، بصل، وزيتون',
          price: '١٣.٩٩ $'
        },
        'BBQ Chicken': {
          title: 'دجاج باربكيو',
          desc: 'دجاج مشوي مع صوص باربكيو وبصل أحمر',
          price: '١٥.٩٩ $'
        }
      }
    }
  };
  
  // Set the initial language
  let currentLang = 'en';
  let savedLang = localStorage.getItem('language');
  
  if (savedLang === 'ar') {
    currentLang = 'ar';
    document.body.classList.add('ar');
    updateLanguageToggleText('AR');
  } else {
    updateLanguageToggleText('EN');
  }
  
  // Toggle language when button is clicked
  langToggle.addEventListener('click', function() {
    // Toggle language
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Add transitioning effect
    document.body.classList.add('language-changing');
    
    // Toggle Arabic class for RTL
    if (currentLang === 'ar') {
      document.body.classList.add('ar');
      updateLanguageToggleText('AR');
    } else {
      document.body.classList.remove('ar');
      updateLanguageToggleText('EN');
    }
    
    // Save preference to localStorage
    localStorage.setItem('language', currentLang);
    
    // Update content
    updateContent(currentLang);
    
    // Remove transitioning class after animation completes
    setTimeout(() => {
      document.body.classList.remove('language-changing');
    }, 500);
  });
  
  // Update language toggle button text
  function updateLanguageToggleText(text) {
    langToggle.querySelector('span').textContent = text;
  }
  
  // Update page content based on selected language
  function updateContent(lang) {
    const content = translations[lang];
    
    // Update navbar
    document.querySelector('.navbar-brand').textContent = content.navbar.brand;
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#crepes') link.textContent = content.navbar.crepes;
      if (href === '#syrian') link.textContent = content.navbar.syrian;
      if (href === '#cold-drinks') link.textContent = content.navbar.coldDrinks;
      if (href === '#hot-drinks') link.textContent = content.navbar.hotDrinks;
      if (href === '#breakfast') link.textContent = content.navbar.breakfast;
      if (href === '#pizza') link.textContent = content.navbar.pizza;
    });
    
    // Update hero section
    document.querySelector('.restaurant-name').textContent = content.hero.name;
    document.querySelector('.restaurant-slogan').textContent = content.hero.slogan;
    document.querySelector('.restaurant-desc').textContent = content.hero.desc;
    
    // Update section titles
    document.querySelectorAll('.section-title').forEach(title => {
      const section = title.parentElement.parentElement.parentElement.id;
      if (section === 'crepes') title.textContent = content.sections.crepes;
      if (section === 'syrian') title.textContent = content.sections.syrian;
      if (section === 'cold-drinks') title.textContent = content.sections.coldDrinks;
      if (section === 'hot-drinks') title.textContent = content.sections.hotDrinks;
      if (section === 'breakfast') title.textContent = content.sections.breakfast;
      if (section === 'pizza') title.textContent = content.sections.pizza;
    });
    
    // Update menu items
    document.querySelectorAll('.menu-item-title').forEach(item => {
      const originalTitle = getOriginalTitle(item);
      if (content.menuItems[originalTitle]) {
        item.textContent = content.menuItems[originalTitle].title;
        
        // Also update description and price
        const descEl = item.nextElementSibling;
        const priceEl = descEl.nextElementSibling;
        
        if (descEl && descEl.classList.contains('menu-item-desc')) {
          descEl.textContent = content.menuItems[originalTitle].desc;
        }
        
        if (priceEl && priceEl.classList.contains('menu-item-price')) {
          priceEl.textContent = content.menuItems[originalTitle].price;
        }
      }
    });
    
    // Helper function to get original title (English) from data attribute or text
    function getOriginalTitle(element) {
      if (element.dataset.originalTitle) {
        return element.dataset.originalTitle;
      } else {
        // Store original title if first time
        const title = element.textContent;
        element.dataset.originalTitle = title;
        return title;
      }
    }
  }
  
  // Run initial content update if needed
  if (currentLang === 'ar') {
    updateContent('ar');
  }
});