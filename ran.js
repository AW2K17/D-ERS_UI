()=>{
                    
    const ran={

         firstName:fn,
         lastName:ln,
         email: eml,
         password: pwd,
         bmi:bm,
         weight:weight,
         height: height,
         age:age,
         

        }
        
            
              axios.get('http://192.168.0.102:3010/api-gateway/current-user/user',{withCredentials : true}).then(response=>{console.log(response.data)}).catch(error=>{console.log(error)})
                
            
            
            
            
            
        
        console.log(ran);
        axios.post('http://192.168.0.102:3010/api-gateway/sign-up/user',ran,{withCredentials : true}).then(response=>{console.log(response.data);navigation.navigate('Dashboard')}).catch(error => {
            console.log(error);
            
})}