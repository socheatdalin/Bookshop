var book ={
        async all(){
               
                                const res = await fetch('http://localhost:3001/book/all',{
                                method: 'GET',
                                // Origin:"http://localhost:3000" ,
                        });
                        const result = await res.json();
                        return result;
               
        },
        async getgenre(categoryId){
                if(categoryId == ""){
                        const res = await fetch('http://localhost:3001/book/all',{
                            method: 'GET',
                            headers: {
                                'content-type': 'application/json',
                                // origin: 'http://localhost:3000'
                            }
                        })
                        const result = res.json();
                        return result
                    }else{
                        const res = await fetch(`http://localhost:3001/book/all/${categoryId}`,{
                            method: 'GET',
                            headers: {
                                'content-type': 'application/json',
                                // origin: 'http://localhost:3000'
                            }
                        })
                        const result = res.json();
                        return result
                    }
        }
}

export default book