document.getElementById("btn").addEventListener("click", function(){
    let txt = document.getElementById("input-text").ariaValueMax;
   checkPalindrome(txt); 
});

function checkPalindrome(txt){
    let txt_new = txt.replace(/[^a-za-z0-9]/g, '').toLowerCase();
    let len = txt_new.length;
    let halfLen = Math.floor( len/2 );
    let result = document.getElementById("result");
    let i;

    for(i = 0 ; i < halfLen; i++){
        if(txt_new[i] !== txt_new[len-1-i]){
            result.textContent = "Nope! Not a palindrome";
            return;
        }
        result.textContent = "Yes! It's a palindrome"
    }
}