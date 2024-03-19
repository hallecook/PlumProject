document.addEventListener('DOMContentLoaded', (event) => {
    const dropBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.getElementById('dropdownContent');
  
    dropBtn.onclick = function() {
      dropdownContent.classList.toggle('show');
    }
  
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.classList.contains('show')) {
          dropdownContent.classList.remove('show');
        }
      }
    }
  });

<a href="studenprofile.html" onclick="window.open('student.html', '_self');">
https://form.jotform.com/240777006747159 


</a>
  
