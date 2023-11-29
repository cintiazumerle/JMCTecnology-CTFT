function login(username, password) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         if (username === ' joaogianoni@gmail.com' && password === '12345') {
           resolve('Logged in successfully');
         } else {
           reject('Login ou senha inválidos');
         }
       }, 2000);
    });
   }
   
   async function attemptLogin() {
    try {
       const response = await login(' joaogianoni@gmail.com', '12345');
       console.log(response);
    } catch (error) {
       console.log(error);
    }
   }
   
   attemptLogin();