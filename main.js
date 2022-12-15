var app = new Vue(
    {
        el: '#app',
        data: {
            array: [],
        },
        mounted(){
            axios.get("./api/index.php").then((res =>{
                console.log(res);
                this.array = res.data;
            }))
        }
        
    }
);