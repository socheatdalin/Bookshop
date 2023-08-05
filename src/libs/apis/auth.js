var auth = {
       
        
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