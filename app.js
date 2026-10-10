/**
 * UTT PASS - Sàn Đồ Dùng & Handmade Sinh Viên UTT
 * JavaScript Application Logic
 */

// ================= INITIAL PRODUCT DATASET (FROM WORD DOC) =================
const INITIAL_PRODUCTS = [
  // --- NHÓM 1: ĐỒNG PHỤC UTT ---
  {
    id: "dp-01",
    title: "Áo khoác gió đồng phục UTT mùa đông (2 lớp lót ấm)",
    category: "dong-phuc",
    categoryName: "Đồng phục UTT",
    condition: "A",
    conditionLabel: "Hạng A - Mới 98%",
    price: 135000,
    originalPrice: 240000,
    size: "L",
    image: "assets/image1.jpeg",
    pickupSpot: "Sảnh Nhà A - 54 Triều Khúc",
    seller: {
      name: "Hoàng Anh Tuấn (K73 - CNTT UTT)",
      phone: "012345678",
      zalo: "012345678"
    },
    pros: [
      "Giá rẻ hơn mua mới tại trường hơn 100.000đ",
      "Vải gió chống nước nhẹ, lớp nỉ lót bên trong còn rất ấm và sạch",
      "Logo trường UTT thêu ngực sắc nét, khóa kéo trơn tru"
    ],
    cons: [
      "Chỉ có 1 chiếc size L duy nhất (phù hợp bạn 60kg - 72kg)",
      "Đã giặt qua 2 lần nhưng giữ form như mới"
    ],
    description: "Áo mình mua đầu năm ngoái nhưng ít mặc vì chuyển sang cơ sở khác. Form áo rất chuẩn, phù hợp bạn nào năm nhất cần mua áo khoác mùa đông để tiết kiệm tiền."
  },
  {
    id: "dp-02",
    title: "Áo polo đồng phục thể chất UTT (Cổ bẻ phối sọc xanh)",
    category: "dong-phuc",
    categoryName: "Đồng phục UTT",
    condition: "A",
    conditionLabel: "Hạng A - Mới 95%",
    price: 65000,
    originalPrice: 130000,
    size: "M",
    image: "assets/image2.jpeg",
    pickupSpot: "Cổng số 1 - 54 Triều Khúc",
    seller: {
      name: "Lê Thu Trang (K74 - Kinh tế Vận tải)",
      phone: "012345678",
      zalo: "012345678"
    },
    pros: [
      "Tiết kiệm 50% chi phí mua áo mới",
      "Chất vải cotton pha cá sấu co giãn, thấm hút mồ hôi tốt khi học thể dục",
      "Đúng quy chuẩn mẫu áo trường UTT đang áp dụng"
    ],
    cons: [
      "Size M vừa cho bạn từ 48kg - 58kg"
    ],
    description: "Áo thể dục polo mình học xong tín chỉ thể chất kỳ trước nên pass lại cho các bạn tân sinh viên khóa mới. Áo giữ gìn cẩn thận không có vết bẩn nào."
  },
  {
    id: "dp-03",
    title: "Quần thể dục thể chất UTT viền trắng co giãn",
    category: "dong-phuc",
    categoryName: "Đồng phục UTT",
    condition: "B",
    conditionLabel: "Hạng B - Tốt 88%",
    price: 50000,
    originalPrice: 95000,
    size: "L",
    image: "assets/image2.jpeg",
    pickupSpot: "Ký túc xá sinh viên UTT",
    seller: {
      name: "Nguyễn Văn Đức (K73 - Công trình)",
      phone: "012345678",
      zalo: "012345678"
    },
    pros: [
      "Giá siêu rẻ chỉ 50.000đ (bằng 1 bát phở)",
      "Cạp chun co giãn tốt, có túi khóa tiện để điện thoại khi chạy bộ"
    ],
    cons: [
      "Màu xanh hơi bạc nhẹ ở phần đầu gối nhưng vải không sờn rách"
    ],
    description: "Quần thể dục học xong 3 học phần thể chất, pass rẻ cho bạn nào cần đồ chống cháy để vào sân tập."
  },
  {
    id: "dp-04",
    title: "Combo Áo khoác mùa đông + Áo polo thể chất UTT",
    category: "dong-phuc",
    categoryName: "Đồng phục UTT",
    condition: "A",
    conditionLabel: "Hạng A - Mới 99%",
    price: 170000,
    originalPrice: 370000,
    size: "XL",
    image: "assets/image1.jpeg",
    pickupSpot: "Sảnh Nhà A - 54 Triều Khúc",
    seller: {
      name: "Phạm Hải Đăng (K74 - Cầu Đường)",
      phone: "012345678",
      zalo: "012345678"
    },
    pros: [
      "Tiết kiệm ngay 200.000đ khi lấy trọn bộ cả mùa đông và mùa hè",
      "Đồ gần như chưa mặc vì mình mua nhầm size XL bị rộng",
      "Đầy đủ tem mác nguyên vẹn"
    ],
    cons: [
      "Dành riêng cho các bạn form người cao to (70kg - 82kg)"
    ],
    description: "Mình mua nhầm size XL bị rộng nên cất tủ suốt kỳ vừa rồi. Bán lại cả set gồm 1 áo khoác gió ấm và 1 áo polo cổ bẻ giá cực hữu nghị cho sinh viên trường mình."
  },

  // --- NHÓM 2: GIÁO TRÌNH & TÀI LIỆU HỌC TẬP UTT ---
  {
    id: "gt-01",
    title: "Giáo trình Triết học Mác - Lênin (Chuẩn chương trình mới)",
    category: "giao-trinh",
    categoryName: "Giáo trình & Sách",
    condition: "A",
    conditionLabel: "Hạng A - Mới 98%",
    price: 22000,
    originalPrice: 45000,
    size: "Freesize",
    image: "assets/image3.jpeg",
    pickupSpot: "Sảnh Nhà B - 54 Triều Khúc",
    seller: {
      name: "Trần Mai Anh (K74 - Quản trị KD)",
      phone: "012345678",
      zalo: "012345678"
    },
    pros: [
      "Tiết kiệm 50% so với mua tại nhà sách ngoài cổng trường",
      "Đúng phiên bản mã môn học Triết đại cương kỳ 1",
      "Sách không quăn mép, không bị rách hay mất trang"
    ],
    cons: [
      "Có ghi tên chủ cũ ở góc trang đầu tiên (đã dán nhãn che)"
    ],
    description: "Sách giáo trình Triết học Mác - Lênin học kỳ vừa qua mình đạt điểm A. Tặng kèm file tóm tắt 10 câu hỏi thi vấn đáp/tự luận hay vào cho bạn nào mua sớm."
  },
  {
    id: "gt-02",
    title: "Giáo trình Kinh tế chính trị Mác - Lênin (Có note đề thi)",
    category: "giao-trinh",
    categoryName: "Giáo trình & Sách",
    condition: "B",
    conditionLabel: "Hạng B - Tốt 90%",
    price: 18000,
    originalPrice: 40000,
    size: "Freesize",
    image: "assets/image3.jpeg",
    pickupSpot: "Cổng số 1 - 54 Triều Khúc",
    seller: {
      name: "Vũ Quốc Bảo (K73 - Logistics UTT)",
      phone: "012345678",
      zalo: "012345678"
    },
    pros: [
      "Giá chỉ 18.000đ cực rẻ",
      "Đặc biệt: Có highlight sẵn các nội dung trọng tâm thi cuối kỳ của thầy cô bộ môn",
      "Phiên bản chuẩn đang giảng dạy theo tín chỉ"
    ],
    cons: [
      "Có vết bút dạ quang màu vàng ở các chương 2, 3 và 5"
    ],
    description: "Giáo trình Kinh tế chính trị có ghi chú kỹ lưỡng giúp bạn qua môn dễ dàng. Ai lười chép bài mua cuốn này về đọc là chuẩn bài."
  },
  {
    id: "gt-03",
    title: "Sách bài tập & Đề cương Xác suất - Thống kê toán UTT",
    category: "giao-trinh",
    categoryName: "Giáo trình & Sách",
    condition: "A",
    conditionLabel: "Hạng A - Mới 95%",
    price: 25000,
    originalPrice: 55000,
    size: "Freesize",
    image: "assets/image3.jpeg",
    pickupSpot: "Thư viện UTT Nhà A",
    seller: {
      name: "Đỗ Minh Khang (K74 - CNTT UTT)",
      phone: "012345678",
      zalo: "012345678"
    },
    pros: [
      "Tổng hợp đầy đủ dạng bài tập thi giữa kỳ và đề thi trắc nghiệm các năm",
      "Kèm theo đáp án giải chi tiết từng bước"
    ],
    cons: [
      "Gáy sách dán băng dính trong để bảo vệ cho khỏi bung trang"
    ],
    description: "Cứu cánh môn Xác suất thống kê - môn học ác mộng của dân kỹ thuật UTT. Sách có giải thích phương pháp bấm máy tính Casio rất tiện."
  },
  {
    id: "gt-04",
    title: "Giáo trình Nguyên lý Kế toán & Bài tập thực hành",
    category: "giao-trinh",
    categoryName: "Giáo trình & Sách",
    condition: "B",
    conditionLabel: "Hạng B - Tốt 88%",
    price: 20000,
    originalPrice: 48000,
    size: "Freesize",
    image: "assets/image3.jpeg",
    pickupSpot: "Sảnh Nhà A - 54 Triều Khúc",
    seller: {
      name: "Ngô Thị Lan (K73 - Kế toán UTT)",
      phone: "012345678",
      zalo: "012345678"
    },
    pros: [
      "Đúng môn cơ sở ngành khối kinh tế, logistics và kế toán UTT",
      "Bìa sách còn bóng đẹp, các bảng định khoản rõ ràng"
    ],
    cons: [
      "Có ghi bút chì ở phần bài tập (tẩy đi là sạch)"
    ],
    description: "Giáo trình Nguyên lý Kế toán dành cho các bạn sinh viên Khoa Kinh tế vận tải. Tặng kèm bảng hệ thống tài khoản kế toán mới nhất."
  },
  {
    id: "gt-05",
    title: "Combo 5 cuốn Lý luận chính trị đại cương UTT (Trọn bộ)",
    category: "giao-trinh",
    categoryName: "Giáo trình & Sách",
    condition: "A",
    conditionLabel: "Hạng A - Mới 96%",
    price: 79000,
    originalPrice: 195000,
    size: "Freesize",
    image: "assets/image3.jpeg",
    pickupSpot: "Ký túc xá sinh viên UTT",
    seller: {
      name: "Bùi Tuấn Kiệt (K73 - Ô tô UTT)",
      phone: "012345678",
      zalo: "012345678"
    },
    pros: [
      "Trọn bộ 5 môn: Triết học, Kinh tế chính trị, CNXHKH, Tư tưởng HCM, Lịch sử Đảng",
      "Tiết kiệm hơn 110.000đ so với mua lẻ từng cuốn",
      "Học đủ trọn vẹn cả 2 năm đầu đại cương"
    ],
    cons: [
      "Bộ sách bán cả set, không xé lẻ"
    ],
    description: "Bộ 5 cuốn sách đại cương chính trị mình đã hoàn thành xong toàn bộ tín chỉ. Pass nhanh trọn gói cho bạn tân sinh viên nào muốn chuẩn bị sẵn giáo trình cho cả năm học."
  },

  // --- NHÓM 3: KHĂN LEN HANDMADE SINH VIÊN ---
  {
    id: "kl-01",
    title: "Khăn len đan tay thủ công màu kem sữa (Tự đan 100%)",
    category: "khan-len",
    categoryName: "Khăn len Handmade",
    condition: "Handmade",
    conditionLabel: "Thủ công Mới 100%",
    price: 110000,
    originalPrice: 160000,
    size: "Freesize",
    image: "assets/image4.jpeg",
    pickupSpot: "Sảnh Nhà A - 54 Triều Khúc",
    seller: {
      name: "CLB Nữ sinh Handmade UTT",
      phone: "012345678",
      zalo: "012345678"
    },
    pros: [
      "Len đũa cuộn cotton mềm mịn, cam kết không gây ráp hay ngứa cổ",
      "Tự đan tỉ mỉ mũi chữ V đều đẹp, độ dài 1m8 quấn 2 vòng thoải mái",
      "Nhận đan phối màu theo sở thích và thêu chữ cái tên theo yêu cầu"
    ],
    cons: [
      "Thời gian đan đặt hàng trước từ 1 - 2 ngày nếu hết sẵn mẫu"
    ],
    description: "Khăn len đan tay thủ công ấm áp do các bạn nữ sinh viên UTT tự tay đan để gây quỹ hoạt động. Màu kem sữa cực kỳ dễ phối cùng áo khoác đồng phục UTT."
  },
  {
    id: "kl-02",
    title: "Khăn len vặn thừng ấm áp phong cách Vintage",
    category: "khan-len",
    categoryName: "Khăn len Handmade",
    condition: "Handmade",
    conditionLabel: "Thủ công Mới 100%",
    price: 125000,
    originalPrice: 180000,
    size: "Freesize",
    image: "assets/image4.jpeg",
    pickupSpot: "Cổng số 1 - 54 Triều Khúc",
    seller: {
      name: "Nguyễn Phương Ly (K74 - CNTT)",
      phone: "012345678",
      zalo: "012345678"
    },
    pros: [
      "Họa tiết vặn thừng dày dặn cản gió mùa đông siêu tốt",
      "Sợi len dệt bền chắc, giặt máy túi giặt không lo bai xù"
    ],
    cons: [
      "Chỉ còn sẵn màu be xám và màu nâu socola"
    ],
    description: "Khăn mình tự đan tay từng mũi cẩn thận, bao ấm và bao xinh cho mùa đông Hà Nội. Bạn nào lấy tặng người yêu có hộp quà đính kèm nhé."
  },
  {
    id: "kl-03",
    title: "Set Khăn len đôi tình nhân sinh viên (Kèm hộp quà & thiệp)",
    category: "khan-len",
    categoryName: "Khăn len Handmade",
    condition: "Handmade",
    conditionLabel: "Thủ công Mới 100%",
    price: 145000,
    originalPrice: 220000,
    size: "Freesize",
    image: "assets/image4.jpeg",
    pickupSpot: "Sảnh Nhà B - 54 Triều Khúc",
    seller: {
      name: "CLB Nữ sinh Handmade UTT",
      phone: "012345678",
      zalo: "012345678"
    },
    pros: [
      "Gồm 2 chiếc khăn len đôi tone-sur-tone ý nghĩa",
      "Kèm hộp giấy vintage thắt nơ và thiệp viết lời nhắn thủ công miễn phí",
      "Thêu tên hoặc ngày kỷ niệm miễn phí"
    ],
    cons: [
      "Cần đặt trước 2 ngày để kịp thêu tên đôi"
    ],
    description: "Món quà mùa đông ý nghĩa và ấm áp nhất dành cho các cặp đôi sinh viên UTT. Sản phẩm thủ công 100% bảo đảm sự độc đáo và chân thành."
  },

  // --- NHÓM 4: HOA HANDMADE & QUÀ TẶNG SINH VIÊN ---
  {
    id: "hm-01",
    title: "Bó hoa kẽm nhung thủ công màu pastel ngọt ngào",
    category: "hoa-handmade",
    categoryName: "Hoa quà tặng Handmade",
    condition: "Handmade",
    conditionLabel: "Thủ công Mới 100%",
    price: 85000,
    originalPrice: 130000,
    size: "Freesize",
    image: "assets/image5.jpeg",
    pickupSpot: "Sảnh Nhà A - 54 Triều Khúc",
    seller: {
      name: "Nhóm SV Khởi Nghiệp UTT",
      phone: "012345678",
      zalo: "012345678"
    },
    pros: [
      "Hoa kẽm nhung bền vĩnh cửu, giữ được kỷ niệm lâu dài không lo tàn héo",
      "Phối màu pastel Hàn Quốc trẻ trung, bọc giấy kiếng xịn sò",
      "Kèm thiệp chúc mừng thiết kế riêng miễn phí"
    ],
    cons: [
      "Hàng thủ công nên các bó có thể có nét chấm phá độc bản riêng"
    ],
    description: "Bó hoa tulip và hoa hồng kẽm nhung cực xinh xắn, là lựa chọn số 1 của sinh viên UTT dành tặng sinh nhật, kỷ yếu, dịp 20/10, 8/3 hoặc chụp ảnh nhận bằng tốt nghiệp."
  },
  {
    id: "hm-02",
    title: "Bó hoa hướng dương len mini chúc mừng tốt nghiệp UTT",
    category: "hoa-handmade",
    categoryName: "Hoa quà tặng Handmade",
    condition: "Handmade",
    conditionLabel: "Thủ công Mới 100%",
    price: 45000,
    originalPrice: 75000,
    size: "Freesize",
    image: "assets/image5.jpeg",
    pickupSpot: "Cổng số 1 - 54 Triều Khúc",
    seller: {
      name: "Vũ Thảo Vy (K74 - Kinh tế Vận tải)",
      phone: "012345678",
      zalo: "012345678"
    },
    pros: [
      "Giá hạt dẻ chỉ 45.000đ phù hợp túi tiền sinh viên",
      "Bông hướng dương biểu trưng cho năng lượng tích cực và thành công",
      "Kèm cử nhân mini mũ tốt nghiệp gắn trên hoa"
    ],
    cons: [
      "Bó hoa dạng mini cầm tay tiện chụp ảnh kỷ niệm"
    ],
    description: "Hoa hướng dương móc len bền đẹp, phụ kiện lý tưởng để các bạn đi chúc mừng anh chị khóa trên tốt nghiệp hoặc tặng thầy cô bạn bè."
  }
];

// ================= APP STATE MANAGEMENT =================
let productsData = [];
let cartState = [];
let wishlistState = [];

let activeFilters = {
  category: "all",
  condition: [],
  price: "all",
  size: null,
  searchQuery: "",
  sortBy: "featured"
};

// ================= INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
  // Load products from LocalStorage or initialize with defaults
  loadSavedProducts();
  loadCartState();
  loadWishlistState();

  // Setup Search Input Event Listeners
  setupSearchEvents();

  // Initial Render
  applyFiltersAndRender();
  updateCategoryCounts();
});

// Load products
function loadSavedProducts() {
  const localSaved = localStorage.getItem("utt_pass_products_v2");
  if (localSaved) {
    try {
      productsData = JSON.parse(localSaved);
    } catch (e) {
      productsData = [...INITIAL_PRODUCTS];
    }
  } else {
    productsData = [...INITIAL_PRODUCTS];
    saveProductsToLocal();
  }
}

function saveProductsToLocal() {
  localStorage.setItem("utt_pass_products_v2", JSON.stringify(productsData));
}

// Load Cart
function loadCartState() {
  const savedCart = localStorage.getItem("utt_pass_cart");
  if (savedCart) {
    try {
      cartState = JSON.parse(savedCart);
    } catch (e) {
      cartState = [];
    }
  }
  updateCartCounters();
}

function saveCartState() {
  localStorage.setItem("utt_pass_cart", JSON.stringify(cartState));
  updateCartCounters();
}

// Load Wishlist
function loadWishlistState() {
  const savedWishlist = localStorage.getItem("utt_pass_wishlist");
  if (savedWishlist) {
    try {
      wishlistState = JSON.parse(savedWishlist);
    } catch (e) {
      wishlistState = [];
    }
  }
  updateWishlistCounters();
}

function saveWishlistState() {
  localStorage.setItem("utt_pass_wishlist", JSON.stringify(wishlistState));
  updateWishlistCounters();
}

// ================= SEARCH & AUTOCOMPLETE EVENTS =================
function setupSearchEvents() {
  const searchInput = document.getElementById("globalSearchInput");
  const clearBtn = document.getElementById("btnClearSearch");
  const submitBtn = document.getElementById("btnSearchSubmit");
  const suggestionsBox = document.getElementById("searchSuggestions");
  const catSelect = document.getElementById("headerCategorySelect");

  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.trim();
    activeFilters.searchQuery = val;
    clearBtn.style.display = val ? "block" : "none";
    applyFiltersAndRender();
  });

  searchInput.addEventListener("focus", () => {
    if (suggestionsBox) suggestionsBox.classList.add("active");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("#searchOmnibox")) {
      if (suggestionsBox) suggestionsBox.classList.remove("active");
    }
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    activeFilters.searchQuery = "";
    clearBtn.style.display = "none";
    applyFiltersAndRender();
    searchInput.focus();
  });

  submitBtn.addEventListener("click", () => {
    applyFiltersAndRender();
    scrollToSection("catalogSection");
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      applyFiltersAndRender();
      if (suggestionsBox) suggestionsBox.classList.remove("active");
      scrollToSection("catalogSection");
    }
  });

  catSelect.addEventListener("change", (e) => {
    filterByCategory(e.target.value);
  });
}

function quickSearch(keyword) {
  const searchInput = document.getElementById("globalSearchInput");
  const clearBtn = document.getElementById("btnClearSearch");
  const suggestionsBox = document.getElementById("searchSuggestions");
  if (searchInput) {
    searchInput.value = keyword;
    activeFilters.searchQuery = keyword;
    if (clearBtn) clearBtn.style.display = "block";
    if (suggestionsBox) suggestionsBox.classList.remove("active");
    applyFiltersAndRender();
    scrollToSection("catalogSection");
  }
}

// ================= FILTERING & SORTING LOGIC =================
function handleFilterChange() {
  // Category radio in sidebar
  const catRadio = document.querySelector('input[name="filterCat"]:checked');
  if (catRadio) {
    activeFilters.category = catRadio.value;
    syncCategoryNavButtons(catRadio.value);
  }

  // Conditions checkboxes
  const condCheckboxes = document.querySelectorAll('.cond-filter:checked');
  activeFilters.condition = Array.from(condCheckboxes).map(cb => cb.value);

  // Price radio
  const priceRadio = document.querySelector('input[name="filterPrice"]:checked');
  if (priceRadio) {
    activeFilters.price = priceRadio.value;
  }

  applyFiltersAndRender();
}

function filterByCategory(categoryKey, btnEl = null) {
  activeFilters.category = categoryKey;

  // Sync sidebar radio
  const sidebarRadio = document.querySelector(`input[name="filterCat"][value="${categoryKey}"]`);
  if (sidebarRadio) sidebarRadio.checked = true;

  // Sync header select
  const headerSelect = document.getElementById("headerCategorySelect");
  if (headerSelect) headerSelect.value = categoryKey;

  // Sync nav buttons
  syncCategoryNavButtons(categoryKey);

  applyFiltersAndRender();
  scrollToSection("catalogSection");
}

function filterByCondition(condKey, btnEl = null) {
  // Toggle condition
  const sidebarCheckbox = document.querySelector(`.cond-filter[value="${condKey}"]`);
  if (sidebarCheckbox) {
    sidebarCheckbox.checked = !sidebarCheckbox.checked;
  }
  handleFilterChange();
  scrollToSection("catalogSection");
}

function syncCategoryNavButtons(catKey) {
  const navBtns = document.querySelectorAll("#navCategoryMenu .nav-item");
  navBtns.forEach(btn => {
    if (btn.dataset.category === catKey) {
      btn.classList.add("active");
    } else if (btn.dataset.category) {
      btn.classList.remove("active");
    }
  });
}

function toggleSizeFilter(sizeVal, btnEl) {
  if (activeFilters.size === sizeVal) {
    activeFilters.size = null;
    btnEl.classList.remove("active");
  } else {
    document.querySelectorAll(".btn-size-chip").forEach(b => b.classList.remove("active"));
    activeFilters.size = sizeVal;
    btnEl.classList.add("active");
  }
  applyFiltersAndRender();
}

function handleSortChange() {
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    activeFilters.sortBy = sortSelect.value;
    applyFiltersAndRender();
  }
}

function resetAllFilters() {
  activeFilters = {
    category: "all",
    condition: [],
    price: "all",
    size: null,
    searchQuery: "",
    sortBy: "featured"
  };

  // Reset inputs in UI
  const allCatRadio = document.querySelector('input[name="filterCat"][value="all"]');
  if (allCatRadio) allCatRadio.checked = true;

  const allPriceRadio = document.querySelector('input[name="filterPrice"][value="all"]');
  if (allPriceRadio) allPriceRadio.checked = true;

  document.querySelectorAll('.cond-filter').forEach(cb => cb.checked = false);
  document.querySelectorAll('.btn-size-chip').forEach(b => b.classList.remove("active"));

  const searchInput = document.getElementById("globalSearchInput");
  if (searchInput) searchInput.value = "";
  const clearBtn = document.getElementById("btnClearSearch");
  if (clearBtn) clearBtn.style.display = "none";

  const headerSelect = document.getElementById("headerCategorySelect");
  if (headerSelect) headerSelect.value = "all";

  syncCategoryNavButtons("all");

  applyFiltersAndRender();
}

// Core filter execution
function applyFiltersAndRender() {
  let filtered = [...productsData];

  // 1. Category Filter
  if (activeFilters.category !== "all") {
    filtered = filtered.filter(p => p.category === activeFilters.category);
  }

  // 2. Condition Filter
  if (activeFilters.condition.length > 0) {
    filtered = filtered.filter(p => activeFilters.condition.includes(p.condition));
  }

  // 3. Price Filter
  if (activeFilters.price === "under-30k") {
    filtered = filtered.filter(p => p.price < 30000);
  } else if (activeFilters.price === "30k-70k") {
    filtered = filtered.filter(p => p.price >= 30000 && p.price <= 70000);
  } else if (activeFilters.price === "70k-120k") {
    filtered = filtered.filter(p => p.price > 70000 && p.price <= 120000);
  } else if (activeFilters.price === "above-120k") {
    filtered = filtered.filter(p => p.price > 120000);
  }

  // 4. Size Filter
  if (activeFilters.size) {
    filtered = filtered.filter(p => p.size === activeFilters.size || p.size === "Freesize");
  }

  // 5. Search Query
  if (activeFilters.searchQuery) {
    const q = activeFilters.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      (p.seller && p.seller.name.toLowerCase().includes(q))
    );
  }

  // 6. Sorting
  if (activeFilters.sortBy === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (activeFilters.sortBy === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (activeFilters.sortBy === "condition-best") {
    const condOrder = { "A": 1, "Handmade": 2, "B": 3, "C": 4 };
    filtered.sort((a, b) => (condOrder[a.condition] || 5) - (condOrder[b.condition] || 5));
  } else if (activeFilters.sortBy === "name-asc") {
    filtered.sort((a, b) => a.title.localeCompare(b.title, 'vi'));
  }

  renderProductsGrid(filtered);
  updateActiveFilterTag(filtered.length);
}

function updateCategoryCounts() {
  const countAll = productsData.length;
  const countDP = productsData.filter(p => p.category === "dong-phuc").length;
  const countGT = productsData.filter(p => p.category === "giao-trinh").length;
  const countKL = productsData.filter(p => p.category === "khan-len").length;
  const countHoa = productsData.filter(p => p.category === "hoa-handmade").length;

  const elAll = document.getElementById("countAllCat");
  const elDP = document.getElementById("countDongPhuc");
  const elGT = document.getElementById("countGiaoTrinh");
  const elKL = document.getElementById("countKhanLen");
  const elHoa = document.getElementById("countHoa");

  if (elAll) elAll.textContent = countAll;
  if (elDP) elDP.textContent = countDP;
  if (elGT) elGT.textContent = countGT;
  if (elKL) elKL.textContent = countKL;
  if (elHoa) elHoa.textContent = countHoa;
}

function updateActiveFilterTag(count) {
  const resultsCountEl = document.getElementById("resultsCount");
  if (resultsCountEl) resultsCountEl.textContent = count;

  const tagWrapper = document.getElementById("activeFilterTag");
  const tagLabel = document.getElementById("activeFilterLabel");
  if (!tagWrapper || !tagLabel) return;

  let activeLabels = [];
  if (activeFilters.category !== "all") {
    const catMap = {
      "dong-phuc": "Đồng phục UTT",
      "giao-trinh": "Giáo trình UTT",
      "khan-len": "Khăn len Handmade",
      "hoa-handmade": "Hoa & Quà tặng"
    };
    activeLabels.push(catMap[activeFilters.category] || activeFilters.category);
  }
  if (activeFilters.searchQuery) {
    activeLabels.push(`"${activeFilters.searchQuery}"`);
  }
  if (activeFilters.size) {
    activeLabels.push(`Size ${activeFilters.size}`);
  }

  if (activeLabels.length > 0) {
    tagLabel.textContent = activeLabels.join(" • ");
    tagWrapper.style.display = "inline-flex";
  } else {
    tagWrapper.style.display = "none";
  }
}

function clearSpecificFilter() {
  resetAllFilters();
}

// ================= RENDER PRODUCT CARDS =================
function renderProductsGrid(products) {
  const gridContainer = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyState");
  if (!gridContainer) return;

  if (products.length === 0) {
    gridContainer.style.display = "none";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  gridContainer.style.display = "grid";
  if (emptyState) emptyState.style.display = "none";

  gridContainer.innerHTML = products.map(product => {
    const isWishlisted = wishlistState.some(w => w.id === product.id);
    const discountPercent = product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

    let gradeClass = "grade-b";
    if (product.condition === "A") gradeClass = "grade-a";
    else if (product.condition === "C") gradeClass = "grade-c";
    else if (product.condition === "Handmade") gradeClass = "grade-handmade";

    return `
      <div class="product-card" id="card-${product.id}">
        <div class="card-media-wrapper">
          <img src="${product.image}" alt="${product.title}" class="card-media-img" loading="lazy">
          
          <div class="card-badge-container">
            <span class="badge-condition-pill ${gradeClass}">
              ${product.condition === 'Handmade' ? 'Thủ công 100%' : 'Hạng ' + product.condition}
            </span>
            ${discountPercent ? `<span class="badge-discount-tag">-${discountPercent}%</span>` : ''}
          </div>

          <button type="button" class="btn-wishlist-toggle ${isWishlisted ? 'active' : ''}" 
            onclick="toggleWishlist('${product.id}')" title="Lưu yêu thích">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>

        <div class="card-content-body">
          <div class="card-category-tag">${product.categoryName}</div>
          <h3 class="card-product-title" title="${product.title}">${product.title}</h3>

          <div class="card-meta-row">
            ${product.size !== 'Freesize' ? `<span class="meta-size">Size: ${product.size}</span>` : ''}
            <span class="meta-spot" title="${product.pickupSpot}">
              <i class="fa-solid fa-location-dot"></i> ${product.pickupSpot}
            </span>
          </div>

          <div class="card-price-matrix">
            <span class="price-current">${formatVND(product.price)}</span>
            ${product.originalPrice ? `<span class="price-original">${formatVND(product.originalPrice)}</span>` : ''}
          </div>

          <div class="card-seller-row">
            <i class="fa-solid fa-user-check"></i>
            <span>${product.seller ? product.seller.name : 'Sinh viên UTT'}</span>
          </div>

          <div class="card-actions-row">
            <button type="button" class="btn-card-detail" onclick="openProductDetail('${product.id}')">
              <i class="fa-solid fa-eye"></i> Chi tiết
            </button>
            <button type="button" class="btn-card-add" onclick="addToCart('${product.id}')">
              <i class="fa-solid fa-cart-plus"></i> Chọn mua
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Format VND currency
function formatVND(amount) {
  if (!amount && amount !== 0) return "0đ";
  return amount.toLocaleString("vi-VN") + "đ";
}

// ================= MODAL: QUICK VIEW PRODUCT DETAIL =================
function openProductDetail(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("productDetailModal");
  const content = document.getElementById("quickViewContent");
  if (!modal || !content) return;

  const discountPercent = product.originalPrice && product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  let gradeClass = "grade-b";
  if (product.condition === "A") gradeClass = "grade-a";
  else if (product.condition === "C") gradeClass = "grade-c";
  else if (product.condition === "Handmade") gradeClass = "grade-handmade";

  content.innerHTML = `
    <div class="quickview-gallery-col">
      <div class="quickview-main-img-box">
        <img src="${product.image}" alt="${product.title}" class="quickview-main-img" id="qvMainImg">
      </div>
      <div class="quickview-seller-box">
        <div class="seller-avatar"><i class="fa-solid fa-user-graduate"></i></div>
        <div class="seller-details">
          <div class="seller-name">${product.seller ? product.seller.name : 'Sinh viên UTT'}</div>
          <div class="seller-loc"><i class="fa-solid fa-location-dot"></i> Điểm hẹn: ${product.pickupSpot}</div>
        </div>
        ${product.seller && product.seller.phone ? `
          <a href="https://zalo.me/${product.seller.phone}" target="_blank" class="seller-phone-btn" title="Chat Zalo ngay">
            <i class="fa-solid fa-comment-dots"></i> Zalo
          </a>
        ` : ''}
      </div>
    </div>

    <div class="quickview-info-col">
      <div class="card-category-tag">${product.categoryName}</div>
      <h2 class="quickview-title">${product.title}</h2>
      
      <div style="margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
        <span class="badge-condition-pill ${gradeClass}">${product.conditionLabel || 'Hạng ' + product.condition}</span>
        ${product.size !== 'Freesize' ? `<span class="meta-size">Size: ${product.size}</span>` : ''}
      </div>

      <div class="quickview-price-box">
        <span class="qv-price-current">${formatVND(product.price)}</span>
        ${product.originalPrice ? `<span class="qv-price-original">Giá mới: ${formatVND(product.originalPrice)}</span>` : ''}
        ${discountPercent ? `<span class="qv-saving-tag">Tiết kiệm ${discountPercent}%</span>` : ''}
      </div>

      <p style="font-size: 13px; color: #475569; line-height: 1.6; margin-bottom: 16px;">
        ${product.description}
      </p>

      <!-- Pros & Cons from Research Doc -->
      <div class="quickview-pros-cons">
        <div class="pros-box">
          <strong><i class="fa-solid fa-circle-check"></i> Điểm nổi bật:</strong>
          <ul style="padding-left: 18px; margin-top: 4px; color: #334155;">
            ${(product.pros || ["Giá thành tiết kiệm cho sinh viên", "Nhận hàng trực tiếp tại trường"]).map(pro => `<li>${pro}</li>`).join("")}
          </ul>
        </div>
        <div class="cons-box" style="margin-top: 8px;">
          <strong><i class="fa-solid fa-circle-info"></i> Lưu ý khi nhận đồ:</strong>
          <ul style="padding-left: 18px; margin-top: 4px; color: #475569;">
            ${(product.cons || ["Kiểm tra kỹ size và mẫu tại sảnh trường trước khi thanh toán"]).map(con => `<li>${con}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="quickview-action-buttons">
        <button type="button" class="btn btn-primary" style="flex: 1;" onclick="addToCart('${product.id}'); closeProductDetailModal();">
          <i class="fa-solid fa-basket-shopping"></i> Thêm Vào Giỏ Hàng
        </button>
        ${product.seller && product.seller.phone ? `
          <a href="tel:${product.seller.phone}" class="btn btn-secondary" style="color: var(--color-primary); border-color: var(--color-primary);">
            <i class="fa-solid fa-phone"></i> Gọi Điện
          </a>
        ` : ''}
      </div>
    </div>
  `;

  modal.style.display = "flex";
}

function closeProductDetailModal() {
  const modal = document.getElementById("productDetailModal");
  if (modal) modal.style.display = "none";
}

// ================= CART DRAWER & OPERATIONS =================
function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cartState.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartState.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      size: product.size,
      pickupSpot: product.pickupSpot,
      quantity: 1
    });
  }

  saveCartState();
  showToast(`Đã thêm "${product.title}" vào giỏ hàng!`, "success");
  openCartDrawer();
}

function updateCartItemQty(productId, delta) {
  const item = cartState.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCartState();
  renderCartDrawerContent();
}

function removeFromCart(productId) {
  cartState = cartState.filter(i => i.id !== productId);
  saveCartState();
  renderCartDrawerContent();
  showToast("Đã xóa sản phẩm khỏi giỏ hàng", "info");
}

function openCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  const drawer = document.getElementById("cartDrawer");
  if (overlay && drawer) {
    overlay.style.display = "block";
    drawer.classList.add("open");
    renderCartDrawerContent();
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  const drawer = document.getElementById("cartDrawer");
  if (overlay && drawer) {
    overlay.style.display = "none";
    drawer.classList.remove("open");
  }
}

function renderCartDrawerContent() {
  const emptyView = document.getElementById("emptyCartView");
  const itemsList = document.getElementById("cartItemsList");
  const checkoutSection = document.getElementById("checkoutSection");
  const footer = document.getElementById("cartDrawerFooter");

  const badgeHeader = document.getElementById("drawerCartBadge");
  if (badgeHeader) badgeHeader.textContent = cartState.reduce((sum, i) => sum + i.quantity, 0);

  if (cartState.length === 0) {
    if (emptyView) emptyView.style.display = "block";
    if (itemsList) itemsList.style.display = "none";
    if (checkoutSection) checkoutSection.style.display = "none";
    if (footer) footer.style.display = "none";
    return;
  }

  if (emptyView) emptyView.style.display = "none";
  if (itemsList) itemsList.style.display = "flex";
  if (checkoutSection) checkoutSection.style.display = "block";
  if (footer) footer.style.display = "block";

  itemsList.innerHTML = cartState.map(item => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-meta">
          ${item.size !== 'Freesize' ? `Size: ${item.size} • ` : ''}Hẹn tại: ${item.pickupSpot}
        </div>
        <div class="cart-item-price">${formatVND(item.price)}</div>
      </div>
      <div class="cart-item-qty">
        <button type="button" class="btn-qty" onclick="updateCartItemQty('${item.id}', -1)">-</button>
        <span style="font-size: 12px; font-weight: 700; min-width: 16px; text-align: center;">${item.quantity}</span>
        <button type="button" class="btn-qty" onclick="updateCartItemQty('${item.id}', 1)">+</button>
      </div>
      <button type="button" class="btn-item-delete" onclick="removeFromCart('${item.id}')" title="Xóa">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join("");

  const subtotal = cartState.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const subtotalEl = document.getElementById("drawerSubtotal");
  const totalEl = document.getElementById("drawerTotal");

  if (subtotalEl) subtotalEl.textContent = formatVND(subtotal);
  if (totalEl) totalEl.textContent = formatVND(subtotal);
}

function updateCartCounters() {
  const totalItems = cartState.reduce((sum, i) => sum + i.quantity, 0);
  const cartBadge = document.getElementById("cartCount");
  if (cartBadge) {
    cartBadge.textContent = totalItems;
    cartBadge.classList.toggle("pulse-badge", totalItems > 0);
  }
}

// Submit Checkout Order
function submitStudentOrder() {
  const nameInput = document.getElementById("orderBuyerName");
  const phoneInput = document.getElementById("orderBuyerPhone");
  const studentIdInput = document.getElementById("orderStudentId");
  const spotSelect = document.getElementById("orderPickupSpot");

  if (!nameInput || !nameInput.value.trim()) {
    showToast("Vui lòng nhập họ và tên của bạn!", "warning");
    if (nameInput) nameInput.focus();
    return;
  }

  if (!phoneInput || !phoneInput.value.trim()) {
    showToast("Vui lòng nhập số điện thoại hoặc Zalo liên hệ!", "warning");
    if (phoneInput) phoneInput.focus();
    return;
  }

  const orderId = "UTT-" + Math.floor(100000 + Math.random() * 900000);
  const studentName = nameInput.value.trim();
  const studentPhone = phoneInput.value.trim();
  const spot = spotSelect ? spotSelect.value : "Sảnh Nhà A";

  // Reset Cart
  cartState = [];
  saveCartState();
  closeCartDrawer();

  // Show detailed congratulatory alert
  alert(
    `🎉 ĐẶT HẸN THÀNH CÔNG!\n\n` +
    `• Mã đơn hàng: ${orderId}\n` +
    `• Người nhận: ${studentName} (${studentPhone})\n` +
    `• Điểm hẹn giao nhận: ${spot}\n` +
    `• Phí giao nhận: 0đ (Miễn phí nội khu UTT)\n\n` +
    `Bạn sinh viên bán đồ sẽ chủ động liên hệ qua Zalo/SĐT để hẹn giờ gặp bạn tại ${spot}. Bạn được quyền thử áo/kiểm tra sách trực tiếp rồi mới trả tiền nhé!`
  );

  showToast(`Đặt đơn ${orderId} thành công! Người bán sẽ liên hệ bạn ngay.`, "success");
}

// ================= WISHLIST OPERATIONS =================
function toggleWishlist(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const idx = wishlistState.findIndex(w => w.id === productId);
  if (idx >= 0) {
    wishlistState.splice(idx, 1);
    showToast(`Đã bỏ lưu "${product.title}"`, "info");
  } else {
    wishlistState.push(product);
    showToast(`Đã lưu "${product.title}" vào mục yêu thích!`, "success");
  }

  saveWishlistState();
  applyFiltersAndRender();
}

function updateWishlistCounters() {
  const wishlistCountEl = document.getElementById("wishlistCount");
  if (wishlistCountEl) wishlistCountEl.textContent = wishlistState.length;
}

function toggleWishlistDrawer() {
  const overlay = document.getElementById("wishlistDrawerOverlay");
  const drawer = document.getElementById("wishlistDrawer");
  if (!overlay || !drawer) return;

  const isOpen = drawer.classList.contains("open");
  if (isOpen) {
    overlay.style.display = "none";
    drawer.classList.remove("open");
  } else {
    overlay.style.display = "block";
    drawer.classList.add("open");
    renderWishlistDrawerContent();
  }
}

function renderWishlistDrawerContent() {
  const emptyView = document.getElementById("emptyWishlistView");
  const itemsList = document.getElementById("wishlistItemsList");
  if (!emptyView || !itemsList) return;

  if (wishlistState.length === 0) {
    emptyView.style.display = "block";
    itemsList.style.display = "none";
    return;
  }

  emptyView.style.display = "none";
  itemsList.style.display = "flex";

  itemsList.innerHTML = wishlistState.map(item => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-price">${formatVND(item.price)}</div>
      </div>
      <button type="button" class="btn-card-add" style="padding: 6px 10px; font-size: 11px;" onclick="addToCart('${item.id}'); toggleWishlistDrawer();">
        <i class="fa-solid fa-cart-plus"></i> Mua
      </button>
      <button type="button" class="btn-item-delete" onclick="toggleWishlist('${item.id}'); renderWishlistDrawerContent();">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `).join("");
}

// ================= MODAL: POST LISTING (ĐĂNG TIN THANH LÝ) =================
function openPostListingModal() {
  const modal = document.getElementById("postListingModal");
  if (modal) modal.style.display = "flex";
}

function closePostListingModal() {
  const modal = document.getElementById("postListingModal");
  if (modal) modal.style.display = "none";
}

function handlePostCategoryChange() {
  const cat = document.getElementById("postCategory").value;
  const sizeWrapper = document.getElementById("fieldSizeWrapper");
  if (sizeWrapper) {
    sizeWrapper.style.display = (cat === "dong-phuc") ? "block" : "none";
  }
}

function handlePostListing(event) {
  event.preventDefault();

  const title = document.getElementById("postTitle").value.trim();
  const category = document.getElementById("postCategory").value;
  const condition = document.getElementById("postCondition").value;
  const price = parseInt(document.getElementById("postPrice").value, 10);
  const originalPrice = document.getElementById("postOriginalPrice").value
    ? parseInt(document.getElementById("postOriginalPrice").value, 10)
    : Math.round(price * 1.6);
  const size = document.getElementById("postSize").value || "Freesize";
  const campus = document.getElementById("postCampus").value;
  const description = document.getElementById("postDescription").value.trim() || "Sản phẩm do sinh viên UTT đăng bán.";
  const sellerName = document.getElementById("postSellerName").value.trim();
  const sellerPhone = document.getElementById("postPhone").value.trim();

  // Pick suitable photo based on category
  let image = "assets/image1.jpeg";
  let catName = "Đồng phục UTT";
  if (category === "dong-phuc") {
    image = size === "M" ? "assets/image2.jpeg" : "assets/image1.jpeg";
    catName = "Đồng phục UTT";
  } else if (category === "giao-trinh") {
    image = "assets/image3.jpeg";
    catName = "Giáo trình & Sách";
  } else if (category === "khan-len") {
    image = "assets/image4.jpeg";
    catName = "Khăn len Handmade";
  } else if (category === "hoa-handmade") {
    image = "assets/image5.jpeg";
    catName = "Hoa quà tặng Handmade";
  }

  const newProduct = {
    id: "user-" + Date.now(),
    title: title,
    category: category,
    categoryName: catName,
    condition: condition,
    conditionLabel: condition === "Handmade" ? "Thủ công Mới 100%" : "Hạng " + condition,
    price: price,
    originalPrice: originalPrice,
    size: category === "dong-phuc" ? size : "Freesize",
    image: image,
    pickupSpot: campus,
    seller: {
      name: sellerName,
      phone: sellerPhone,
      zalo: sellerPhone
    },
    pros: [
      "Ảnh thật 100% từ sinh viên trường",
      "Tiết kiệm chi phí, hỗ trợ xem đồ trực tiếp tại UTT"
    ],
    cons: [
      "Số lượng thanh lý có hạn (1 sản phẩm duy nhất)"
    ],
    description: description
  };

  productsData.unshift(newProduct);
  saveProductsToLocal();
  updateCategoryCounts();
  applyFiltersAndRender();

  closePostListingModal();
  document.getElementById("postListingForm").reset();

  showToast(`Đăng tin "${title}" thành công lên UTT Pass!`, "success");
  scrollToSection("catalogSection");
}

// ================= MODAL: POLICY & CONTACT =================
function openPolicyModal() {
  const modal = document.getElementById("policyModal");
  if (modal) modal.style.display = "flex";
}

function closePolicyModal() {
  const modal = document.getElementById("policyModal");
  if (modal) modal.style.display = "none";
}

function switchCampusModal() {
  const current = document.getElementById("activeCampusDisplay");
  const options = [
    "CS 54 Triều Khúc (Hà Nội)",
    "Ký túc xá sinh viên UTT Triều Khúc",
    "Cơ sở Vĩnh Phúc (UTT)"
  ];
  const choice = prompt("Chọn cơ sở nhận đồ UTT của bạn:\n1. CS 54 Triều Khúc (Hà Nội)\n2. Ký túc xá sinh viên UTT Triều Khúc\n3. Cơ sở Vĩnh Phúc (UTT)", "1");

  if (choice === "1") current.textContent = options[0];
  else if (choice === "2") current.textContent = options[1];
  else if (choice === "3") current.textContent = options[2];

  showToast(`Đã chuyển điểm nhận đồ sang: ${current.textContent}`, "info");
}

function openContactSupport() {
  alert("📞 ĐƯỜNG DÂY HỖ TRỢ SINH VIÊN UTT:\n\n• Hotline/Zalo: 012345678\n• Văn phòng hỗ trợ: Sảnh Nhà A, 54 Triều Khúc, Thanh Xuân, Hà Nội\n• Hỗ trợ giải quyết khiếu nại chất lượng đồ cũ, đổi trả trong vòng 24h.");
}

function toggleMobileMenu() {
  const navMenu = document.getElementById("navCategoryMenu");
  if (navMenu) {
    navMenu.scrollIntoView({ behavior: "smooth" });
  }
}

// ================= UTILITIES & HELPERS =================
function scrollToSection(sectionId) {
  const sec = document.getElementById(sectionId);
  if (sec) {
    const yOffset = -70;
    const y = sec.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  else if (type === "warning") icon = "fa-triangle-exclamation";

  toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "toastSlideIn 0.3s ease reverse";
    setTimeout(() => toast.remove(), 280);
  }, 3200);
}
