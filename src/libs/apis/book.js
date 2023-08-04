var book ={
        async all(){
            try{
                    const res = await fetch('https://dalin-bookshop-api.onrender.com/book/all', {
                                method: 'GET',
                        });
                        const result = await res.json();
                        return result;
            }
            catch(err){
                console.log(err);
            }
               
                            
               
        },
        async getgenre(categoryId){
                if(categoryId == ""){
                        const res = await fetch('https://dalin-bookshop-api.onrender.com/book/all', {
                            method: 'GET',
                            headers: {
                                'content-type': 'application/json',
                               
                            }
                        })
                        const result = res.json();
                        return result
                    }else{
                        const res = await fetch(`https://dalin-bookshop-api.onrender.com/book/all/${categoryId}`, {
                            method: 'GET',
                            headers: {
                                'content-type': 'application/json',
                                
                            }
                        })
                        const result = res.json();
                        return result
                    }
        }
}

export default book