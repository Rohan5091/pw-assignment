function generateOtp() {
    let otp=Math.floor(Math.random()*10000)
    return otp;
  }
 console.log(`OUTPUT : Here is your otp ${generateOtp()}`);

