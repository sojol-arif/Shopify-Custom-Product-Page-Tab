<script> 
       var allElementCustomTabProd =  document.querySelectorAll('.product-tab-custom .single-item-product-custom-tab');
      allElementCustomTabProd.forEach(elem =>{
        elem.querySelector('.custom-product-tab-title').addEventListener('click', function showTab(){
          elem.classList.toggle('active');
        })
      })
    </script>
