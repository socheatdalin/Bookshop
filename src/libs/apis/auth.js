var auth = {
        // async getMe(){
        //         try{
        //                 const res = await fetch('https://dalin-bookshop-api.onrender.com/auth/me',{
        //                         method: 'GET',
        //                         credentials: "include",
        //                         header:{
        //                                 "Content-type": "application/json",
        //                         }
        //                 });
        //                 const result = await res.json();
        //                 return result;  
        //         }
        //          catch(err){
        //                 console.log(err)
        //          }        
               
        // },
        async logout(){
                const res = await fetch('https://dalin-bookshop-api.onrender.com/auth/logout',{
                        method: "POST",
                        credentials: "include",
                        headers:{
                                "Content-type": "application/json",
                        }
                });
                const result = await res.json();
                if(result?.success == false) return false
                return result;
        }
}

export default auth