(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        // -------------------------------------------------------------
        // responsive menu start
        // -------------------------------------------------------------
       if ($.fn.slicknav) {
         $('.mainmenu-area ul, .home2-mainmenu ul').slicknav({
            prependTo:".responsive_menu",
            label:""
            })
       }
        
        // -------------------------------------------------------------
        // hero area owl carousel active area
        // -------------------------------------------------------------
        if ($.fn.owlCarousel) {  
            $('.hero-slide').owlCarousel({
                loop: true,
                items: 1,
                autoplay: true,
                dots:true,
                nav: true,
                autoplayTimeout:3000,
                navText: ['1', '2'],
            });
        }   
              // -------------------------------------------------------------
        // hero area owl carousel active area
        // -------------------------------------------------------------
        if ($.fn.owlCarousel) {  
          $('.hero-slide2').owlCarousel({
              loop: true,
              items: 1,
              autoplay: true,
              dots:true,
              nav: true,
              autoplayTimeout:3000,
              navText: ['<i class="zmdi zmdi-long-arrow-left"></i>', '<i class="zmdi zmdi-long-arrow-right"></i>'],
            });
      }   
                
        // -------------------------------------------------------------
        // featured area owl carousel active area
        // -------------------------------------------------------------
        if ($.fn.owlCarousel) {  
            $('.featured-slide').owlCarousel({
                loop: true,
                items: 2,
                autoplay: true,
                margin:30,
                dots:true,
                nav: true,
                rtl:true,
                autoplayTimeout:3000,
                navText: ['<i class="zmdi zmdi-long-arrow-left"></i>', '<i class="zmdi zmdi-long-arrow-right"></i>'],
                responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  320: {
                    items: 1
                  },
                  640: {
                    items: 2
                  },
                  960: {
                    items: 2
                  },
                  1200: {
                    items: 1
                  }
                }
            });
        }      
                        
        // -------------------------------------------------------------
        // featured area owl carousel active area
        // -------------------------------------------------------------
        if ($.fn.owlCarousel) {  
            $('.recent-properties-slide').owlCarousel({
                loop: true,
                items: 3,
                autoplay: false,
                margin:30,
                dots:true,
                navigation:true,
    //             pagination : true,
    // paginationNumbers: false,
                nav: true,
                rtl:true,
                autoplayTimeout:3000,
                navText: ['<i class="fas fa-circle"></i>', '<i class="fas fa-circle"></i>' , '<i class="fas fa-circle"></i>'],
                responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  320: {
                    items: 1
                  },
                  640: {
                    items: 3
                  },
                  960: {
                    items: 3
                  },
                  1200: {
                    items: 3
                  }
                }
            });
        }      
           
        if ($.fn.owlCarousel) {  
          $('.recent-properties-slide2').owlCarousel({
              loop: true,
              items: 3,
              autoplay: false,
              margin:30,
              dots:true,
              navigation:true,
              nav: false,
              rtl:true,
              autoplayTimeout:3000,
              // navText: ['<i class="fas fa-circle"></i>', '<i class="fas fa-circle"></i>' , '<i class="fas fa-circle"></i>'],
              responsive: {
                0: {
                  items: 1
                },
                280: {
                  items: 1
                },
                320: {
                  items: 1
                },
                640: {
                  items: 3
                },
                960: {
                  items: 3
                },
                1200: {
                  items: 2
                }
              }
          });
      }   
      if ($.fn.owlCarousel) {  
        $('.recent-properties-slide3').owlCarousel({
            loop: true,
            items: 3,
            autoplay: false,
            margin:30,
            dots:true,
            navigation:true,
            nav: false,
            rtl:true,
            autoplayTimeout:3000,
            // navText: ['<i class="fas fa-circle"></i>', '<i class="fas fa-circle"></i>' , '<i class="fas fa-circle"></i>'],
            responsive: {
              0: {
                items: 1
              },
              280: {
                items: 1
              },
              320: {
                items: 1
              },
              640: {
                items: 3
              },
              960: {
                items: 3
              },
              1200: {
                items: 1
              }
            }
        });
    } 
        // -------------------------------------------------------------
        // logo slide owl carousel active area
        // -------------------------------------------------------------
        if ($.fn.owlCarousel) {  
            $('.logo-slide').owlCarousel({
                loop: true,
                items: 6,
                autoplay: false,
                margin:30,
                dots:false,
                nav: false,
                autoplayTimeout:3000,
                responsive: {
                  0: {
                    items: 2
                  },
                  280: {
                    items: 2
                  },
                  320: {
                    items: 2
                  },
                  640: {
                    items: 4
                  },
                  960: {
                    items: 6
                  },
                  1200: {
                    items: 6
                  }
                }
            });
        }  

        // -------------------------------------------------------------
        // logo slide owl carousel active area
        // -------------------------------------------------------------
        if ($.fn.owlCarousel) {  
            $('.home2-featured-slide').owlCarousel({
                loop: true,
                items: 1,
                autoplay: false,
                margin:30,
                dots:true,
                nav: false,
                autoplayTimeout:3000,
            });
        }      

          
  
        // -------------------------------------------------------------
        // Search Trigger 
        // -------------------------------------------------------------
        $("span.search").on('click', function() {
            $('.header-right').toggleClass('cta-search');
        });

        // -------------------------------------------------------------
        // Magnific popup 
        // -------------------------------------------------------------
        if ($.fn.magnificPopup) {
        $('.play-btn').magnificPopup({
            type: 'video'

            });
        }
    
        // -------------------------------------------------------------
        // lightbox active
        // -------------------------------------------------------------
        if ($.fn.magnificPopup) {
            $('play-btn').magnificPopup({
                type: 'video',
                mainClass: 'mfp-iframe',
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out'
                },
                gallery: {
                    enabled: true,
                }
            });
        }


        // -------------------------------------------------------------
        // nice select active
        // -------------------------------------------------------------
        if ($.fn.niceSelect) {
            $('span.hero-nice-select, .home2-single-search.cta, .properties-top-select, .properties-top-select-right, .single-propert-select').niceSelect();
        }

        // -------------------------------------------------------------
        // home 2 counter active
        // -------------------------------------------------------------
        if ($.fn.countTo) {
            $('.home2-counter-area').on('inview', function (event, visible, visiblePartX, visiblePartY) {
                if (visible) {
                    $(this).find('.active_count').each(function () {
                        var $this = $(this);
                        $({
                            Counter: 0
                        }).animate({
                            Counter: $this.text()
                        }, {
                            duration: 5000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    });
                    $(this).off('inview');
                }
            });
        }

        // -------------------------------------------------------------
        //  home2 testimonial slider top
        // -------------------------------------------------------------
        if ($.fn.slick) {
            $('.home2-testimonial-slide').slick({
                // centerMode: true,
                centerPadding: '60px',
                autoplay:true,
                cssEase: 'linear',
                speed:400,
                slidesToShow: 1,
                prevArrow:false,
                nextArrow:false,
                asNavFor:'.home2-testimonial-slide-bottom',
            });
        }

        // -------------------------------------------------------------
        //  single properties top slide
        // -------------------------------------------------------------
        if ($.fn.slick) {
            $('.single-properties-v1-slide').slick({
                // centerMode: true,
                centerPadding: '60px',
                autoplay:true,
                cssEase: 'linear',
                speed:400,
                slidesToShow: 1,
                prevArrow:false,
                nextArrow:false,
                asNavFor:'.single-properties-v1-slide-bottom',
            });
        }
        
        // -------------------------------------------------------------
        //  single properties slide bottom
        // -------------------------------------------------------------
        if ($.fn.slick) {
            $('.single-properties-v1-slide-bottom').slick({
                // centerMode: true,
                centerPadding: '60px',
                autoplay:true,
                cssEase: 'linear',
                speed:400,
                asNavFor:'.single-properties-v1-slide',
                slidesToShow: 5,
                prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-chevron-left"></i></div>',
                nextArrow: '<div class="slick--next"><i class="zmdi zmdi-chevron-right"></i></div>',
                responsive: [
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    }
                  ]
            });
        }   

        // -------------------------------------------------------------
        //  single properties v2 top slide
        // -------------------------------------------------------------
        if ($.fn.slick) {
            $('.single-properties-v2-slide').slick({
                // centerMode: true,
                centerPadding: '60px',
                autoplay:true,
                cssEase: 'linear',
                speed:400,
                slidesToShow: 1,
                prevArrow:false,
                nextArrow:false,
                asNavFor:'.single-properties-v2-slide-bottom',
            });
        }
        
        // -------------------------------------------------------------
        //  single properties v2 slide bottom
        // -------------------------------------------------------------
        if ($.fn.slick) {
            $('.single-properties-v2-slide-bottom').slick({
                // centerMode: true,
                centerPadding: '60px',
                autoplay:true,
                cssEase: 'linear',
                speed:400,
                asNavFor:'.single-properties-v2-slide',
                slidesToShow: 6,
                vertical: true,
                verticalSwiping: true,
                rtl:true,
                prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-chevron-up"></i></div>',
                nextArrow: '<div class="slick--next"><i class="zmdi zmdi-chevron-down"></i></div>',
                responsive: [
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 3,
                        vertical: true,
                        verticalSwiping: true,
                        slidesToScroll: 3
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 2,
                        vertical: true,
                        verticalSwiping: true,
                        slidesToScroll: 3
                      }
                    }
                  ]
            });
        }        
        // -------------------------------------------------------------
        //  home2 testimonial slider bottom
        // -------------------------------------------------------------
        if ($.fn.slick) {
            $('.home2-testimonial-slide-bottom').slick({
                // centerMode: true,
                centerPadding: '60px',
                autoplay:true,
                cssEase: 'linear',
                speed:400,
                asNavFor:'.home2-testimonial-slide',
                slidesToShow: 2,
                prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-long-arrow-left"></i></div>',
                nextArrow: '<div class="slick--next"><i class="zmdi zmdi-long-arrow-right"></i></div>',
                responsive: [
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
            });
        }
        

        // -------------------------------------------------------------
        //  home3 properties slider top
        // -------------------------------------------------------------
        if ($.fn.slick) {
            $('.home3-properties-slide').slick({
                autoplay:false,
                cssEase: 'linear',
                speed:2000,
                slidesToShow: 2,
                // rtl:true,
                prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-long-arrow-left"></i></div>',
                nextArrow: '<div class="slick--next"><i class="zmdi zmdi-long-arrow-right"></i></div>',
                asNavFor:'.home3-properties-slide-bottom',
                  responsive: [
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2
                      }
                    }
                  ]
            });
        }
        
        // -------------------------------------------------------------
        //  home3 properties slider bottom
        // -------------------------------------------------------------
        if ($.fn.slick) {
            $('.home3-properties-slide-bottom').slick({
                autoplay:false,
                cssEase: 'linear',
                speed:2000,
                asNavFor:'.home3-properties-slide',
                slidesToShow: 2,
                prevArrow:false,
                nextArrow:false,
                responsive: [
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
            });
        }
                
        // -------------------------------------------------------------
        // home 3 featured area owl carousel active area
        // -------------------------------------------------------------
        if ($.fn.owlCarousel) {  
            $('.home3-featured-slide, .home3-latest-news-slide').owlCarousel({
                loop: true,
                items: 3,
                autoplay: false,
                margin:30,
                dots:true,
                nav: true,
                rtl:true,
                autoplayTimeout:3000,
                navText: ['<i class="zmdi zmdi-long-arrow-left"></i>', '<i class="zmdi zmdi-long-arrow-right"></i>'],
                responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  320: {
                    items: 1
                  },
                  640: {
                    items: 2
                  },
                  768: {
                    items: 2
                  },
                  960: {
                    items: 3
                  },
                  1200: {
                    items: 1
                  }
                }
            });
        }      
             
        // -------------------------------------------------------------
        // home 3 agent area owl carousel active area
        // -------------------------------------------------------------
        if ($.fn.owlCarousel) {  
            $('.home3-agent-slide').owlCarousel({
                loop: true,
                items: 4,
                autoplay: false,
                margin:30,
                dots:true,
                nav: true,
                autoplayTimeout:3000,
                navText: ['<i class="zmdi zmdi-long-arrow-left"></i>', '<i class="zmdi zmdi-long-arrow-right"></i>'],
                responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  320: {
                    items: 1
                  },
                  640: {
                    items: 3
                  },
                  960: {
                    items: 3
                  },
                  1200: {
                    items: 4
                  }
                }
            });
        }      
             
            
        // -------------------------------------------------------------
        // home 3 testimonial area owl carousel active area
        // -------------------------------------------------------------
        if ($.fn.owlCarousel) {  
            $('.home3-testimonial-slide').owlCarousel({
                loop: true,
                items: 2,
                autoplay: false,
                margin:30,
                dots:true,
                nav: true,
                autoplayTimeout:3000,
                navText: ['<i class="zmdi zmdi-long-arrow-left"></i>', '<i class="zmdi zmdi-long-arrow-right"></i>'],
                responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  320: {
                    items: 1
                  },
                  640: {
                    items: 2
                  },
                  960: {
                    items: 2
                  },
                  1200: {
                    items: 2
                  }
                }
            });
        }      
             

                                
        // -------------------------------------------------------------
        // home3 logo slide owl carousel active area
        // -------------------------------------------------------------
        if ($.fn.owlCarousel) {  
            $('.logo-slides').owlCarousel({
                loop: true,
                items: 6,
                autoplay: false,
                margin:30,
                dots:false,
                nav: true,
                autoplayTimeout:3000,
                navText: ['<i class="zmdi zmdi-long-arrow-left"></i>', '<i class="zmdi zmdi-long-arrow-right"></i>'],
                responsive: {
                  0: {
                    items: 2
                  },
                  280: {
                    items: 2
                  },
                  320: {
                    items: 2
                  },
                  640: {
                    items: 4
                  },
                  960: {
                    items: 6
                  },
                  1200: {
                    items: 6
                  }
                }
            });
        }  

        var isMulti = ($('.owl-carousel .item').length > 1) ? true : false;
        // -------------------------------------------------------------
        // masonry active 
        // -------------------------------------------------------------
        if ($.fn.masonry) {
        $('.blog-masonry-active, .properties-masonry-active').masonry({
          loop: isMulti,
          items: 1,
          nav: isMulti,
          dots: isMulti,
                // options...
                itemSelector: '.featured-single-slide.blog-masonry, .home2-single-properties.ctasas',
                columnWidth: '.featured-single-slide.blog-masonry, .home2-single-properties.ctasas',
            });
        }

        // -------------------------------------------------------------
        // masonry active 
        // -------------------------------------------------------------
        if ($.fn.masonry) {
        $('.properties-masonry-active.cta').masonry({
          loop: isMulti,
          items: 1,
          nav: isMulti,
          dots: isMulti,
         
                // options...
                gutter: 30,
                itemSelector: '.home2-single-properties.ctas12.ctasas',
                columnWidth: '.home2-single-properties.ctas12.ctasas'
            });
        }

      });

  
    /*====  Window Load Function =====*/
    jQuery(window).load(function(){

        /*====  preloader js Start =====*/
        $(".home-preloder").fadeOut(3000);
        /*====  animation js Start =====*/
        new WOW().init(); 

        
    });



    //range
    'use strict';

    /* 
    * список дата атрибутов
    * data-width: задает шиину range в px
    * data-type: тип: duble - двойной, single - одинарный
    * data-units: отображение единиц измерения
    * data-value: применяется к max и к min, 
    * задает максимаьное и минимальное значение диапазона соотетственно
    */
    
    // получаем элементы min, max, fill и самого блока range
    const min = document.querySelector('.min-range-item');
    const max = document.querySelector('.max-range-item');
    const rangeBlock = document.querySelector('.range');
    let fill = document.querySelector('.range-fill');
    const infoBox = document.querySelector('.info');
    
    // блоки для вывода текущих параметров сортировки по цене (min - max)
    let minInfo = document.querySelector('.min-price');
    let maxInfo = document.querySelector('.max-price');
    
    // получаем настройки из data аттрибутов
    const dataWidth = +rangeBlock.dataset.width;
    const dataType = rangeBlock.dataset.type;
    const dataUnits = rangeBlock.dataset.units;
    const dataMinVal = +min.dataset.value;
    const dataMaxVal = +max.dataset.value;
    
    // получаем начальную точку блока range
    const startX = rangeBlock.getBoundingClientRect().x;
    
    // если 2 ползука берём их ширину для расчетов, чтоб не наезжали друг на друга
    let shiftMax = max.clientWidth;
    let shiftMin = min.clientWidth;
    
    // проверяем настрйки типа, если одинарный - убираем минимальный ползунок
    if (dataType === 'single') {
      min.style.display = 'none';
      document.querySelector('.min-box').style.display = 'none';
      shiftMin = 0;
    }
    if (dataType === 'duble') {
      min.style.display = 'block';
      document.querySelector('.min-box').style.display = 'block';
    }
    
    // параметры ползунков
    let minValue = startX;
    let maxValue = startX + dataWidth - shiftMax;
    
    // задаем стили их дата атрибутов
    rangeBlock.style.width = dataWidth + 'px';
    infoBox.style.width = dataWidth + 'px';
    minInfo.insertAdjacentHTML('beforebegin', dataUnits);
    minInfo.insertAdjacentHTML('afterbegin', dataMinVal);
    maxInfo.insertAdjacentHTML('beforebegin', dataUnits);
    maxInfo.insertAdjacentHTML('afterbegin', dataMaxVal);
    
    // задаем инлайново стили, чтобы потом былм данные
    min.style.left = 0 + 'px';
    max.style.left = dataWidth - shiftMax + 'px';
    
    /**
     * запускаем функцию при нажатии кнопки мыши
     * @param event {Event} событие
     */
    const check = (event) => {
    
        // чтобы не терять таргет - отслеживаем тот ползунок, на котором было событие mousedown
        let targetMain = event.target;
    
        // корректные значения допустимые для перемещения ползунка, используются дальше
        let currentMaxValue, currentMinValue;
    
        /**
         * отслеживаем перемещение мыши и вычисляем координаты ползунка)
         * @param event {Event} событие
         */
        const move = (event) => {
    
            // у touch события массив эвентов, сводим к одной переменой этим условием
            let e;
            (event.type === 'touchmove') ? e = event.touches[0] : e = event;
            
            // если таргет максимальное значение
            if (targetMain === max) {
                currentMaxValue = maxValue;
                currentMinValue = parseInt(min.style.left) + shiftMin + startX;
            }
    
            // если таргет минимальное значение
            if (targetMain === min) {
                currentMinValue = minValue;
                currentMaxValue = parseInt(max.style.left) - shiftMax + startX;
            }
    
            // меняем положение активного ползунка от края и до другого ползунка
            if (e.clientX - (shiftMin / 2) > currentMinValue && e.clientX - (shiftMax / 2) < currentMaxValue) {
                targetMain.style.left = e.clientX - startX - (shiftMax / 2) + 'px';
            } else if (e.clientX < currentMinValue && targetMain === min) {
                targetMain.style.left = 0 + 'px';
            } else if (e.clientX > currentMaxValue && targetMain === max) {
                targetMain.style.left = dataWidth - shiftMax + 'px';
            } else if (e.clientX < currentMinValue && targetMain === max && shiftMin === 0) {
              targetMain.style.left = 0 + 'px';
              }
    
            // изменяем зарисовку между ползунками
            fill.style.left = min.style.left;
            fill.style.width = parseInt(max.style.left) - parseInt(min.style.left) + shiftMax + 'px';
    
            // выводим информацию о выбранном диапазоне цен
            let targetPrice;
            (targetMain === max) ? targetPrice = maxInfo : targetPrice = minInfo;
            targetPrice.textContent = parseInt(targetMain.style.left) * (dataMaxVal - dataMinVal ) / (dataWidth - shiftMax) + dataMinVal + '';
        }
    
        // вешаем слушатель на движение мыши по всему документу
        document.addEventListener('mousemove', move);
        document.addEventListener('touchmove', move);
    
        /**
         * если отпустили кнопку - удаляем слушатели на перемещение мыши
         */
        let mouseUpFn = () => {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('touchmove', move);
        }
    
        // ждем отпускания лкм чтобы убить слушатель движения мыши
        document.addEventListener('mouseup', mouseUpFn);
        document.addEventListener('touchend', mouseUpFn);
    }
    
    rangeBlock.addEventListener('mousedown', check);
    rangeBlock.addEventListener('touchstart', check);
    



    
}(jQuery));	