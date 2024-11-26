const testimonials = [
    {
      name: "Cherise G",
      photoUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
    },
    {
      name: "Rosetta Q",
      photoUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
    },
    {
      name: "Constantine V",
      photoUrl:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    },
  ];
  
  const slider = document.getElementById("slider");
  
  // Function to create and append slides
  function createSlides() {
    testimonials.forEach((testimonial) => {
      const slide = document.createElement("div");
      slide.classList.add("slide");
  
      slide.innerHTML = `
        <div class="image-wrapper">
          <img src="${testimonial.photoUrl}" alt="${testimonial.name}" class="testimonial-image">
        </div>
        <div class="testimonial-text">
          <p>"${testimonial.text}"</p>
          <span>- ${testimonial.name}</span>
        </div>
      `;
  
      slider.appendChild(slide);
    });
  }
  
  // Function to handle slide transitions
  let currentSlide = 0;
  
  function showSlide(index) {
    const totalSlides = testimonials.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    showSlide(currentSlide);
  }
  
  // Initialize slider
  createSlides();
  showSlide(currentSlide);
  
  // Auto-change slides every 5 seconds
  setInterval(nextSlide, 5000);
  