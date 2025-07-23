// Carousel functionality
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.indicator');
  
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));
  
  slides[index].classList.add('active');
  indicators[index].classList.add('active');
}

function nextSlide() {
  const slides = document.querySelectorAll('.carousel-slide');
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  const slides = document.querySelectorAll('.carousel-slide');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Auto-play carousel
let carouselInterval;

function startCarousel() {
  carouselInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function pauseCarousel() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
}

function resumeCarousel() {
  startCarousel();
}

// Data produk
const products = [
  {
    id: 1,
    name: "CUSTOM ACRYLIC UV PRINT STAND Anime, Cartoon, Etc.",
    category: "acrylic",
    price: 5.50,
    image:
      "/img/my-11134207-7rasj-mb24xqbidrjec8.png",
    description:
      "Papan tanda nama syarikat dengan acrylic berkualiti tinggi, sesuai untuk pejabat dan premis perniagaan.",
  },
  {
    id: 2,
    name: "Display Stand Produk",
    category: "display",
    price: 89.0,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description:
      "Stand display produk yang elegan untuk mempamerkan barangan di kedai atau pameran.",
  },
  {
    id: 3,
    name: "Hiasan Dinding Acrylic",
    category: "decoration",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    description:
      "Hiasan dinding acrylic custom dengan reka bentuk yang menarik untuk rumah atau pejabat.",
  },
  {
    id: 4,
    name: "Papan Tanda Restoran",
    category: "sign",
    price: 200.0,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    description:
      "Papan tanda restoran dengan acrylic yang tahan lasak dan mudah dibersihkan.",
  },
  {
    id: 5,
    name: "Display Counter",
    category: "display",
    price: 180.0,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    description:
      "Display counter acrylic untuk mempamerkan produk di kaunter atau meja pameran.",
  },
  {
    id: 6,
    name: "Lampu Hiasan Acrylic",
    category: "decoration",
    price: 95.0,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
    description:
      "Lampu hiasan acrylic dengan reka bentuk moden untuk menambah kecantikan ruangan.",
  },
  {
    id: 7,
    name: "Papan Tanda Jalan",
    category: "sign",
    price: 250.0,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description:
      "Papan tanda jalan dengan acrylic yang tahan cuaca dan mudah dilihat dari jauh.",
  },
  {
    id: 8,
    name: "Display Rack",
    category: "display",
    price: 160.0,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    description:
      "Display rack acrylic untuk menyusun dan mempamerkan produk dengan kemas.",
  },
];

// Generate customer code
function generateCustomerCode() {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `CUST${timestamp}${random}`;
}

// Display products
function displayProducts(productsToShow = products) {
  const productsGrid = document.getElementById("products-grid");
  productsGrid.innerHTML = "";

  productsToShow.forEach((product) => {
    // Tentukan jika produk adalah acrylic stand
    const isAcrylicStand =
      (product.category && product.category.toLowerCase() === "acrylic") ||
      (product.name && product.name.toLowerCase().includes("stand"));

    const badgeMin5 = isAcrylicStand
      ? `<span class="inline-block bg-red-400 text-white text-xs font-bold px-3 py-2 rounded-full absolute top-2 left-2 shadow badge-min5">Min 5 pcs</span>`
      : "";

    const productCard = document.createElement("div");
    productCard.className =
      "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 product-card card-shadow";
    productCard.innerHTML = `
            <div class="relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover image-hover">
                <div class="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-sm font-semibold badge badge-primary">
                    RM ${product.price.toFixed(2)}
                </div>
                ${badgeMin5}
            </div>
            <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                <button onclick="openProductModal(${product.id})" 
                        class="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-colors font-semibold btn-primary">
                    Pilih Produk
                </button>
            </div>
        `;
    productsGrid.appendChild(productCard);
  });
}

// Search functionality
function searchProducts() {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
}

// Category filter
function filterByCategory(category) {
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);
  displayProducts(filteredProducts);
}

// Open product image in new tab
function openProductImage(productId) {
  const product = products.find((p) => p.id === productId);
  window.open(product.image, "_blank");
  showNotification("Gambar produk telah dibuka dalam tab baru!", "info");
}

// Download product image
function downloadProductImage(productId) {
  const product = products.find((p) => p.id === productId);

  // Create a temporary link element
  const link = document.createElement("a");
  link.href = product.image;
  link.download = `${product.name.replace(/\s+/g, "_")}.jpg`;
  link.target = "_blank";

  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showNotification("Gambar produk sedang dimuat turun...", "info");
}

// Open product modal
function openProductModal(productId) {
  const product = products.find((p) => p.id === productId);
  const modal = document.getElementById("product-modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
      <div class="text-center modal-content">
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-lg mb-4 image-hover cursor-pointer" onclick="openProductImage(${product.id})" title="Klik untuk lihat gambar penuh">
          <h4 class="text-lg font-semibold mb-2">${product.name}</h4>
          <p class="text-gray-600 mb-4 text-sm">${product.description}</p>
          
          <div class="space-y-3">
              <div class="form-group">
                  <label class="block text-sm font-medium text-gray-700 mb-1 form-label">Kuantiti:</label>
                  <input type="number" id="quantity" min="1" value="1" 
                         class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent form-input custom-input">
              </div>
              
              <div class="form-group">
                  <label class="block text-sm font-medium text-gray-700 mb-1 form-label">Saiz (cm):</label>
                  <div class="grid grid-cols-2 gap-2">
                      <input type="number" id="width" placeholder="Lebar" 
                             class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent form-input custom-input">
                      <input type="number" id="height" placeholder="Tinggi" 
                             class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent form-input custom-input">
                  </div>
              </div>
              
              <div class="form-group">
                  <label class="block text-sm font-medium text-gray-700 mb-1 form-label">Warna:</label>
                  <select id="color" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent form-input custom-input">
                      <option value="transparent">Telus</option>
                      <option value="white">Putih</option>
                      <option value="black">Hitam</option>
                      <option value="blue">Biru</option>
                      <option value="red">Merah</option>
                      <option value="green">Hijau</option>
                  </select>
              </div>
              
              <div class="form-group">
                  <label class="block text-sm font-medium text-gray-700 mb-1 form-label">Nota Tambahan:</label>
                  <textarea id="notes" placeholder="Sebutkan keperluan khas atau reka bentuk..." 
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent form-input custom-input" rows="2"></textarea>
              </div>
              
              <div class="form-group">
                  <label class="flex items-center">
                      <input type="checkbox" id="include-image" checked class="mr-2">
                      <span class="text-sm text-gray-700">Sertakan gambar produk dalam mesej</span>
                  </label>
              </div>
          </div>
          
          <div class="mt-6 space-y-2">
              <button onclick="sendToWhatsApp(${product.id})" 
                      class="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors font-semibold btn-success">
                  <i class="fab fa-whatsapp mr-2"></i>Hantar ke WhatsApp
              </button>
              <button onclick="sendToWhatsAppWithImage(${product.id})" 
                      class="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors font-semibold text-sm">
                  <i class="fab fa-whatsapp mr-2"></i>Hantar Mesej (Hantar Gambar Manual)
              </button>
          </div>
          
          <div class="grid grid-cols-4 gap-2 mt-4">
              <button onclick="copyProductInfo(${product.id})" 
                      class="bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold text-sm">
                  <i class="fas fa-copy mr-1"></i>Salin
              </button>
              <button onclick="openProductImage(${product.id})" 
                      class="bg-orange-500 text-white py-2 px-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-sm">
                  <i class="fas fa-external-link-alt mr-1"></i>Lihat
              </button>
              <button onclick="downloadProductImage(${product.id})" 
                      class="bg-purple-500 text-white py-2 px-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold text-sm">
                  <i class="fas fa-download mr-1"></i>Muat Turun
              </button>
              <button onclick="sendImageToWhatsApp(${product.id})" 
                      class="bg-pink-500 text-white py-2 px-3 rounded-lg hover:bg-pink-600 transition-colors font-semibold text-sm">
                  <i class="fab fa-whatsapp mr-1"></i>Hantar Gambar
              </button>
          </div>
      </div>
  `;

  modal.classList.remove("hidden");
}

// Send image to WhatsApp
function sendImageToWhatsApp(productId) {
  const product = products.find((p) => p.id === productId);

  // Show instructions first
  showNotification("Sila ikut langkah berikut untuk hantar gambar:", "info");

  setTimeout(() => {
    showNotification("1. Muat turun gambar produk terlebih dahulu", "info");
  }, 1000);

  setTimeout(() => {
    showNotification(
      "2. Buka WhatsApp dan hantar gambar secara manual",
      "info"
    );
  }, 2000);

  // Open WhatsApp
  setTimeout(() => {
    const whatsappImageUrl = `https://wa.me/60183249321?text=${encodeURIComponent(
      "Gambar produk: " + product.name
    )}`;
    window.open(whatsappImageUrl, "_blank");
  }, 3000);
}

// Send to WhatsApp with image
function sendToWhatsAppWithImage(productId) {
  const product = products.find((p) => p.id === productId);
  const quantity = document.getElementById("quantity").value;
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  const color = document.getElementById("color").value;
  const notes = document.getElementById("notes").value;
  const customerCode = generateCustomerCode();

  const message = `*PESANAN CUSTOM ACRYLIC*

*Produk:* ${product.name}
*Kod Pelanggan:* ${customerCode}
*Kuantiti:* ${quantity}
*Saiz:* ${width}cm x ${height}cm
*Warna:* ${color}
*Nota:* ${notes || "Tiada nota tambahan"}

*Harga Rujukan:* RM ${product.price.toFixed(2)}

Sila hubungi kami untuk pengesahan dan pembayaran.

*Nota:* Sila hantar gambar produk secara manual dalam chat ini.`;

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/60183249321?text=${encodeURIComponent(
    message
  )}`;

  // Open WhatsApp with message
  window.open(whatsappUrl, "_blank");

  // Show instructions for adding image
  setTimeout(() => {
    showNotification(
      "Sila hantar gambar produk secara manual dalam chat WhatsApp",
      "info"
    );
  }, 1000);

  // Close modal
  document.getElementById("product-modal").classList.add("hidden");
}

// Send to WhatsApp
function sendToWhatsApp(productId) {
  const product = products.find((p) => p.id === productId);
  const quantity = document.getElementById("quantity").value;
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  const color = document.getElementById("color").value;
  const notes = document.getElementById("notes").value;
  const includeImage = document.getElementById("include-image").checked;
  const customerCode = generateCustomerCode();

  let message = `*PESANAN CUSTOM ACRYLIC*

*Produk:* ${product.name}
*Kod Pelanggan:* ${customerCode}
*Kuantiti:* ${quantity}
*Saiz:* ${width}cm x ${height}cm
*Warna:* ${color}
*Nota:* ${notes || "Tiada nota tambahan"}

*Harga Rujukan:* RM ${product.price.toFixed(2)}

Sila hubungi kami untuk pengesahan dan pembayaran.`;

  // Add image URL if checkbox is checked
  if (includeImage) {
    message += `\n\n*Gambar Produk:* ${product.image}

*Cara Tambah Gambar:*
1. Klik link gambar di atas untuk buka gambar
2. Simpan gambar ke telefon (long press > Save image)
3. Hantar gambar dalam chat WhatsApp ini`;
  }

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/60183249321?text=${encodeURIComponent(
    message
  )}`;

  // Open WhatsApp with message
  window.open(whatsappUrl, "_blank");

  // Show success message
  if (includeImage) {
    showNotification(
      "Mesej dengan gambar telah dihantar ke WhatsApp!",
      "success"
    );
    setTimeout(() => {
      showNotification(
        "Sila ikut arahan dalam mesej untuk tambah gambar",
        "info"
      );
    }, 2000);
  } else {
    showNotification("Mesej telah dihantar ke WhatsApp!", "success");
  }

  // Close modal
  document.getElementById("product-modal").classList.add("hidden");
}

// Copy product info to clipboard
function copyProductInfo(productId) {
  const product = products.find((p) => p.id === productId);
  const quantity = document.getElementById("quantity").value;
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  const color = document.getElementById("color").value;
  const notes = document.getElementById("notes").value;
  const customerCode = generateCustomerCode();

  const productInfo = `PESANAN CUSTOM ACRYLIC

Produk: ${product.name}
Kod Pelanggan: ${customerCode}
Kuantiti: ${quantity}
Saiz: ${width}cm x ${height}cm
Warna: ${color}
Nota: ${notes || "Tiada nota tambahan"}
Harga Rujukan: RM ${product.price.toFixed(2)}

Gambar Produk: ${product.image}`;

  // Copy to clipboard
  navigator.clipboard
    .writeText(productInfo)
    .then(() => {
      showNotification(
        "Maklumat produk telah disalin ke clipboard!",
        "success"
      );
    })
    .catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = productInfo;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showNotification(
        "Maklumat produk telah disalin ke clipboard!",
        "success"
      );
    });
}

// Show notification
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification ${
    type === "success" ? "bg-green-500" : "bg-blue-500"
  }`;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Initialize carousel
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const indicators = document.querySelectorAll('.indicator');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
  });
  
  // Start auto-play carousel
  startCarousel();
  
  // Auto-play only - no pause on hover
  // const carouselContainer = document.querySelector('.carousel-container');
  // if (carouselContainer) {
  //   carouselContainer.addEventListener('mouseenter', pauseCarousel);
  //   carouselContainer.addEventListener('mouseleave', resumeCarousel);
  // }
  
  // Display initial products
  displayProducts();

  // Search functionality
  document
    .getElementById("search-input")
    .addEventListener("input", searchProducts);

  // Category filter
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      document.querySelectorAll(".category-btn").forEach((b) => {
        b.classList.remove("active", "bg-primary", "text-white");
        b.classList.add("bg-gray-200", "text-gray-700");
      });

      // Add active class to clicked button
      this.classList.remove("bg-gray-200", "text-gray-700");
      this.classList.add("active", "bg-primary", "text-white");

      // Filter products
      const category = this.getAttribute("data-category");
      filterByCategory(category);
    });
  });

  // Close modal
  document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("product-modal").classList.add("hidden");
  });

  // Close modal when clicking outside
  document
    .getElementById("product-modal")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.add("hidden");
      }
    });

  // Mobile menu toggle
  document
    .getElementById("mobile-menu-btn")
    .addEventListener("click", function () {
      // Add mobile menu functionality here if needed
      console.log("Mobile menu clicked");
    });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Add some CSS for better mobile experience
const style = document.createElement("style");
style.textContent = `
    @media (max-width: 768px) {
        .container {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
    
    .category-btn.active {
        background-color: #3B82F6 !important;
        color: white !important;
    }
`;
document.head.appendChild(style);
