let passWord = document.getElementById('password');
genPassWord=()=>{
      let charactersAlphabetsNumbers ='0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=:;<>./?ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let passWordLength = 12;
      let passWord ='';
      for(let i=0;i<=passWordLength;i++){
            let randomText = Math.floor(Math.random()*charactersAlphabetsNumbers.length);
            passWord+= charactersAlphabetsNumbers.substring(randomText,randomText+1);
      } 
      document.getElementById('password').value = passWord;
}
copyPassWord =()=>{
      let copiedText = document.getElementById('password');
      copiedText.select();
      copiedText.setSelectionRange(0,999);
      document.execCommand('copy');
      
}