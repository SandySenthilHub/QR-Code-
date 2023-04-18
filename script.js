const imgBox = document.getElementById('imgbox')
const qrImage = document.getElementById('qrimage')
const textBox = document.getElementById('textbox')

    generate = ()=>{
        if(textBox.value.length > 0){
        qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textBox.value;
        imgBox.classList.add("show-img");
        }
        else{
            alert("Enter some text or URL");
      
        }
 
    }