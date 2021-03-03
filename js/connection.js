 function ConnectionCheck(){
        const con=navigator.onLine;
        if(con===true){
            return 0;
        }else{
            document.body.innerHTML="OOPS! YOU ARE OFFLINE";
            document.body.style.fontSize="8rem";
            document.body.style.textAlign="center";
            document.body.style.backgroundColor="lightseagreen";
            document.body.style.textShadow="0px 1px 5px black";
        }
    }