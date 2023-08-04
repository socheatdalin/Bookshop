var Cart = {
        async all() {
                const res = await fetch("http://localhost:3001/cart/all", {
                  method: "GET",
                  credentials: "include",
                  headers: {
                    "Content-type": "application/json",
                    Origin: "http://localhost:3000",
                  },
                });
            
                const result = await res.json();
                if (!result?.length) return [];
            
                return result;
              },
        async create({ book, price , quantity, total }) {
                  const res = await fetch("http://localhost:3001/item/create", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify({  book, price , quantity, total}),
                  });
              
                  const result = await res.json();
                  return result;
                },     
}
export default Cart