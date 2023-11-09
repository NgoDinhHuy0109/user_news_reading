// <!-- Start JS cho hieu ung so xuong thanh men nu user -->
  
        let subMenu=document.getElementById("subMenu");
        function toggleMenu()
        {
            subMenu.classList.toggle("open_menu");
        }
        // Thêm sự kiện click cho toàn bộ tài liệu (document)
    document.addEventListener("click", function(event) {
        if (!subMenu.contains(event.target) && event.target !== document.querySelector(".user_pic")) 
        {
            // Kiểm tra nếu người dùng click ra ngoài menu hoặc không phải là phần tử ".user_pic"
            subMenu.classList.remove("open_menu"); // Đóng menu
        } });
 
// <!-- END JS cho hieu ung so xuong thanh men nu user -->

// <!-- start phan popup -->

    document.getElementById("pop_up").addEventListener("click", function(){
        document.querySelector(".popup").style.display= "flex";
        document.body.style.overflow = 'hidden'; // Vô hiệu hóa cuộn trang
    
    })

    document.querySelector(".close").addEventListener("click", function(){
        document.querySelector(".popup").style.display="none"
    })
// <!-- end phan pop up -->
// <!-- start phan them anh vao bai dang  -->

document.querySelector('.select-image').addEventListener('click', function () {
    document.querySelector('#file').click();
})
document.querySelector('#file').addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = document.querySelector('.img-area').querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			document.querySelector('.img-area').appendChild(img);
			document.querySelector('.img-area').classList.add('active');
			document.querySelector('.img-area').dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})

// <!-- end phan them anh vao bai dang  -->
