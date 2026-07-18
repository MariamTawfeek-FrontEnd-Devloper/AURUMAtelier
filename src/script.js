let cart = [];
document.addEventListener("DOMContentLoaded", function () {

    // Best Seller
    const productContainer = document.getElementById('bestSellerContainer');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = "group bg-white rounded-3xl overflow-hidden border border-[#EFE7DA] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        card.innerHTML = `
                <!-- Image -->
                <div class="relative overflow-hidden">
                    <!-- Badge -->
                    <span
                        class="absolute left-4 top-4 bg-[#B8860B] text-white text-xs uppercase tracking-widest px-3 py-1 rounded-full z-20">
                        New
                    </span>
                    <!-- Wishlist -->
                    <button
                        class="absolute right-4 top-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center z-20 hover:bg-[#B8860B] hover:text-white duration-300">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                    <!-- Product Image -->
                    <img src="${product.image}"
                        class="rounded-t-3xl w-full h-72 object-cover transition duration-700 group-hover:scale-110">
                </div>
                <!-- Content -->
                <div class="p-6">
                    <div class="flex items-center justify-between">
                        <div class="flex text-[#D4AF37] text-sm">
                           ${product.rating}
                        </div>
                        <span class="text-xs text-gray-400">
                            ${product.storeAmount}
                        </span>
                    </div>
                    <h3 class="font-semibold font-serif text-xl tracking-wide text-[#3A2C2C] mt-4">
                        ${product.name}
                    </h3>
                    <p class="uppercase tracking-[2px] text-sm text-gray-400 mt-2">
                       ${product.brand}
                    </p>
                    <p class="text-[#C89B3C] text-3xl font-bold mt-5">
                      ${product.price}
                    </p>
                    <button
                        class="add-btn transition-all font-medium mt-6 w-full py-3 rounded-full bg-[#C89B3C] text-white uppercase tracking-widest hover:bg-[#8E6A09] duration-300">
                        Add To Cart
                    </button>
                </div>
  `;

        const btn = card.querySelector('.add-btn');
        btn.addEventListener('click', () => {
            addToCart(product.id);
        });
        productContainer.appendChild(card);
    });


    //  Reviews
    const testimonialsContainer = document.getElementById('reviewsContainer');
    testimonials.forEach(testimonial => {
        const testimonialCard = ` 
        <div
                    class="bg-white p-8 rounded-2xl border border-[#D4AF37]/30 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition hover:shadow-xl">
                    <div class="text-[#D4AF37] mb-4 text-sm">
                    ${testimonial.rating}
                    </div>

                    <p class="text-gray-600 italic mb-6 leading-relaxed">
                         ${testimonial.description}
                    </p>


                    <div class="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#4A3728] font-bold border border-[#D4AF37]/20">
                            ${testimonial.firstLetter}
                        </div>
                        <div>
                            <h4 class="font-bold text-[#4A3728] text-sm">Sarah Masaon</h4>
                            <p class="text-[#D4AF37] text-[10px] uppercase tracking-widest"> ${testimonial.type}</p>
                        </div>
                    </div>
                </div>
        `;
        testimonialsContainer.innerHTML += testimonialCard;
    });


    // NavBar
    const NavContainer = document.getElementById('navbar-container');
    menuLinks.forEach(NavbarLink => {
        const menuLink = `
        <li>
                <a href="${NavbarLink.url}"
                    class="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#B8860B] after:duration-300 hover:after:w-full">
                    ${NavbarLink.name}
                </a>
            </li>

        `;
        NavContainer.innerHTML += menuLink;
    });

    // Add To Cart

    function addToCart(productId) {
        const selectedProduct = products.find(item => item.id === productId);
        cart.push(selectedProduct);
        updateCartUI();
        console.log("تمت الإضافة:", selectedProduct.name);
    }

    function updateCartUI() {
        const cartCountElement = document.getElementById('cartCount');
        if (cart.length > 0) {
            cartCountElement.classList.remove('hidden');
            cartCountElement.innerText = cart.length;
        } else {
            cartCountElement.classList.add('hidden');
        }
    }

});