document.addEventListener("DOMContentLoaded", function () {
  console.log("ready!");


  // © Code by T.RICKS, https://www.timothyricks.com/
  // Copyright 2021, T.RICKS, All rights reserved.
  // You have the license to use this code in your projects but not to redistribute it to others
  gsap.registerPlugin(ScrollTrigger);
  let horizontalItem = $(".horizontal-item");
  let horizontalSection = $(".horizontal-section");
  let moveDistance;

  function calculateScroll() {
    let itemsInView = 1;
    let scrollSpeed = 1.2;
    let moveAmount, minHeight;

    if (window.matchMedia("(max-width: 479px)").matches) {
      // Mobile Portrait
      itemsInView = 1;
      scrollSpeed = 1.2;
      moveAmount = horizontalItem.length - itemsInView + .4;
      minHeight = scrollSpeed * horizontalItem.outerWidth() * horizontalItem.length;
      moveDistance = horizontalItem.outerWidth() * moveAmount;
    } else if (window.matchMedia("(max-width: 767px)").matches) {
      // Mobile Landscape
      itemsInView = 1;
      scrollSpeed = 1.2;
      moveAmount = horizontalItem.length - itemsInView + .3;
      minHeight = scrollSpeed * horizontalItem.outerWidth() * horizontalItem.length;
      moveDistance = horizontalItem.outerWidth() * moveAmount;
    } else if (window.matchMedia("(max-width: 991px)").matches) {
      // Tablet
      itemsInView = 1;
      scrollSpeed = 1.2;
      moveAmount = horizontalItem.length - itemsInView + .3;
      minHeight = scrollSpeed * horizontalItem.outerWidth() * horizontalItem.length;
      moveDistance = horizontalItem.outerWidth() * moveAmount;
    } else {
      // Desktop
      itemsInView = 1;
      scrollSpeed = 1.2;
      moveAmount = horizontalItem.length - itemsInView + .2;
      minHeight = scrollSpeed * horizontalItem.outerWidth() * horizontalItem.length;
      moveDistance = horizontalItem.outerWidth() * moveAmount;
    }

    if (moveAmount <= 0) {
      moveAmount = 0;
      minHeight = 0;
      moveDistance = 0;
    } else {
      horizontalSection.css("height", "200vh");
    }

    horizontalSection.css("min-height", minHeight + "px");
  }

  calculateScroll();
  window.onresize = function () {
    calculateScroll();
  };

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontal-trigger",
      start: "top top",
      end: "bottom top",
      invalidateOnRefresh: true,
      scrub: 1
    }
  });

  tl.to(".horizontal-section .list", {
    x: () => -moveDistance,
    duration: 1
  });



  // regular card slider
  const swiperCardElement = document.querySelector(
    ".card_slider_layout.swiper"
  );

  if (swiperCardElement) {
    // Add CSS transition to the wrapper
    const swiperCardWrapper = swiperCardElement.querySelector(
      ".card_slider_layout .swiper-wrapper"
    );
    swiperCardWrapper.style.transition = "all 0.3s ease";

    const swiperCards = new Swiper(".card_slider_layout", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 400,
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".btn-slider-next",
        prevEl: ".btn-slider-prev",
      },
      breakpoints: {
        639: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 56,
        },
      },
    });
  }

  // News component slider
  const swiperNewsElement = document.querySelector(
    ".news_slider_layout.swiper"
  );

  if (swiperNewsElement) {
    // Add CSS transition to the wrapper
    const swiperNewsWrapper = swiperNewsElement.querySelector(
      ".news_slider_layout .swiper-wrapper"
    );
    swiperNewsWrapper.style.transition = "all 0.3s ease";

    const swiperNews = new Swiper(".news_slider_layout", {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      speed: 400,
      autoplay: false,
      navigation: {
        nextEl: ".news_nav_wrap .btn-slider-next",
        prevEl: ".news_nav_wrap .btn-slider-prev",
      },
      breakpoints: {
        479: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      },
    });
  }

  // Employee Benefits card slider
  const swiperEmployeeBenefitElement = document.querySelector(
    ".benefit_slider_layout.swiper"
  );

  const swiperEmployeeBenefitThumbsElement = document.querySelector(
    ".benefit_thumbslider_layout.swiper"
  );

  if (swiperEmployeeBenefitElement) {
    // Add CSS transition to the wrapper
    const swiperEmployeeBenefitWrapper =
      swiperEmployeeBenefitElement.querySelector(
        ".benefit_slider_layout .swiper-wrapper"
      );
    swiperEmployeeBenefitWrapper.style.transition = "all 0.3s ease";

    const swiperEmployeeBenefitThumbsWrapper =
      swiperEmployeeBenefitThumbsElement.querySelector(
        ".benefit_thumbslider_layout .swiper-wrapper"
      );
    swiperEmployeeBenefitThumbsWrapper.style.transition = "all 0.3s ease";

    const swiperBenefitsThumbs = new Swiper(".benefit_thumbslider_layout", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: "auto",
      freeMode: true,
      watchSlidesProgress: true,
    });

    const swiperBenefits = new Swiper(".benefit_slider_layout", {
      loop: true,
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 400,
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
      },
      autoHeight: false,
      pauseOnMouseEnter: true,
      thumbs: {
        swiper: swiperBenefitsThumbs,
        autoScrollOffset: 1,
        multipleActiveThumbs: false, // Only one active thumb
      },

      breakpoints: {
        479: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      },
    });
  }



  // vertical tabs, when clicked, show the video identified in the data-src attribute
  // Get all accordion tops and video targets
  const accordionTops = document.querySelectorAll(
    ".vertical_tab_accordion_top"
  );
  const videoTargets = document.querySelectorAll(".vertical_tab_video_target");

  // Function to fade out element
  function fadeOut(element, duration = 300) {
    return new Promise((resolve) => {
      element.style.transition = `opacity ${duration}ms`;
      element.style.opacity = "0";
      setTimeout(resolve, duration);
    });
  }

  // Function to fade in element
  function fadeIn(element, duration = 300) {
    return new Promise((resolve) => {
      element.style.display = "block";
      element.style.transition = `opacity ${duration}ms`;
      element.style.opacity = "1";
      setTimeout(resolve, duration);
    });
  }

  // Function to switch videos
  async function switchVideo(targetId) {
    // Find currently visible video
    const currentVideo = Array.from(videoTargets).find(
      (v) => v.style.opacity === "1" || !v.style.opacity
    );

    // Find target video
    const targetVideo = document.getElementById(targetId);

    if (!targetVideo) return;

    // If there's a current video and it's different from target
    if (currentVideo && currentVideo !== targetVideo) {
      await fadeOut(currentVideo);
      currentVideo.style.display = "none";
    }

    // Fade in the target video
    await fadeIn(targetVideo);
  }

  // Add click handlers to all accordion tops
  accordionTops.forEach((accordionTop) => {
    accordionTop.addEventListener("click", function () {
      const targetId = this.getAttribute("data-src");
      if (targetId) {
        switchVideo(targetId);
      }
    });
  });

  // Tooltip Interaction Logic
  $(".graphic_tool-tip").each(function () {
    const tooltip = $(this);
    const content = tooltip.find(".graphic-tool-tip_content");

    // Initialize state
    gsap.set(content, { opacity: 0, display: "none", y: 10 });

    let hoverTl = gsap.timeline({ paused: true });
    hoverTl
      .to(content, { display: "block", duration: 0 })
      .to(content, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });

    tooltip.on("mouseenter", function () {
      hoverTl.play();
    });

    tooltip.on("mouseleave", function () {
      hoverTl.reverse();
    });
  });
}); // end DOMContentLoaded

var Webflow = Webflow || [];
Webflow.push(function () {
  // Find all containers with wf-accordion="open-first" attribute
  const accordionContainers = document.querySelectorAll(
    '[wf-accordion="open-first"]'
  );

  accordionContainers.forEach(function (container) {
    // Get the first accordion toggle within this container
    const firstAccordionToggle = container.querySelector(
      ".vertical_tab_accordion_top"
    );

    if (firstAccordionToggle) {
      // Dispatch the same events as the reference code to properly trigger Webflow's dropdown
      firstAccordionToggle.dispatchEvent(new Event("mousedown"));
      firstAccordionToggle.dispatchEvent(new Event("mouseup"));
      $(firstAccordionToggle).trigger("tap");
    }
  });
});
